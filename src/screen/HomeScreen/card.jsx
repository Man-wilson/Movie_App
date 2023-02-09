import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';
const height = Dimensions.get('window').height;
const image = { uri:'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg'}

export const Card = () => {
  const [popular,setPopular] = React.useState([]);

  useEffect(()=>{
   getpopular()
  },[])
  const getpopular = () =>{
    axios({
      method:'get',
      url:'https://api.themoviedb.org/3/movie/now_playing?api_key=d9cf23cf23f14a29b69eccb99afeaeff&language=en-US&page=3'
    }).then((data)=>{
      //  console.log(data.data.results);
       setPopular(data.data.results)
    }).catch((error)=>{
      console.log(error)
    })
  }
  return(
    // <SafeAreaView>
      <View style={{paddingHorizontal:10, paddingVertical:20, backgroundColor:'#202123',height:height, flexDirection:'column'}}>
        <Text style={{color:'white',padding:20, fontWeight:'bold', fontSize: 15 }}>Popular Movies</Text>
        <ScrollView horizontal>
          <View style={{ flexDirection:'row'}}>
          { popular.map((item)=>{
              return(

              <View  key={item.id} style={{flexDirection:'column'}}>
                <Image 
                source={{
                  uri:`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
                }}
                 resizeMode='cover'
                  imageStyle={{
                  borderRadius:10
                 }}
                 style={{
                  width:100,
                  height:140,
                  marginHorizontal:9,
                  borderRadius:10
                 }}
                 >
                 </Image>
                 <View style={{}}>
                <Text numberOfLines={2} style={{flexDirection:'column',marginTop:10, color:'white',fontSize:15,fontWeight:'bold',marginHorizontal:10, width:100}}>{item.title.substring(0, 10)}</Text>
                 <Text  style={{color:'white', marginHorizontal:10}}>{item.release_date}</Text>
                 </View>

                 </View>
                
              )
          })}
          </View>
        </ScrollView>
      </View>
    // </SafeAreaView>
  )
}


const styles = StyleSheet.create({})