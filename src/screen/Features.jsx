import { StyleSheet, Text, View, ImageBackground, ScrollView, Dimensions, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';
import { Card } from './HomeScreen/card';

const image = { uri:'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg'}

const height = Dimensions.get('window').height

export const Features = ({navigation}) => {
  const [popular,setPopular] = React.useState([]);

  useEffect(()=>{
   getpopular()
  },[])
  const getpopular = () =>{
    axios({
      method:'get',
      url:'https://api.themoviedb.org/3/movie/now_playing?api_key=d9cf23cf23f14a29b69eccb99afeaeff&language=en-US&page=5'
    }).then((data)=>{
      //  console.log(data.data.results);
       setPopular(data.data.results)
    }).catch((error)=>{
      console.log(error)
    })
  }
  return(
    <ScrollView>
    <View style={{height:height}}>
      <View style={{paddingHorizontal:10, backgroundColor:'#202123'}}>
        <Text style={{color:'white',padding:20, fontWeight:'bold', fontSize: 15 }}>Trending this week</Text>
        <ScrollView horizontal>
          {/* <Pressable onPress={() => navigation.navigate('Detail', item)}> */}
        <View  style={{ flexDirection:'row', borderWidth:0}} >
          { popular.map((item)=>{
              return(
                <Pressable key={item.id} onPress={() => navigation.navigate('Detail', item)}>
                <ImageBackground 
                source={{
                  uri:`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
                }}
                 resizeMode='cover'
                  imageStyle={{
                  borderRadius:10
                 }}
                 style={{
                  width:345,
                  height:230,
                  marginHorizontal:9
                 }}
                 >
                  <Text style={{flexDirection:'column',justifyContent:'flex-end',marginTop:140, color:'white',fontSize:20,fontWeight:'bold',marginHorizontal:10}}>{item.title}</Text>
                  <Text  style={{color:'white', marginHorizontal:10}}>{item.release_date}</Text>
                 </ImageBackground>
                 </Pressable>
              )
          })}
          </View>
          {/* </Pressable> */}
          
        </ScrollView>
     
      </View>
      <Card />
      </View>
     </ScrollView>
  )
}


const styles = StyleSheet.create({})