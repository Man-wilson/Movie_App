import { StyleSheet, Text, View, Dimensions, ScrollView, Image } from 'react-native'
import React,{useEffect} from 'react'
import axios from 'axios'

const height = Dimensions.get('screen').height

export const Downloads = () => {
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
          <Text style={{color:'white',padding:20, fontWeight:'bold', fontSize: 15 }}>Downloads</Text>
          <ScrollView>
            <View style={{ flexDirection:'column'}}>
            { popular.map((item)=>{
                return(
  
                <View  key={item.id} style={{flexDirection:'row'}}>
                  <Image 
                  source={{
                    uri:`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
                  }}
                   resizeMode='cover'
                    imageStyle={{

                   }}
                   style={{
                    width:180,
                    height:120,
                    marginHorizontal:9,
                    borderRadius:10,
                    marginVertical:10

                   }}
                   >
                   </Image>
                   <View style={{ alignItems:'baseline', justifyContent:'center'}}>
                  <Text numberOfLines={2} style={{flexDirection:'column',marginTop:10, color:'white',fontSize:15,fontWeight:'bold',marginHorizontal:10}}>{item.title}</Text>
                   <Text  style={{color:'white', marginHorizontal:10}}>{item.release_date}</Text>
                   {/* <Text style={{color:'white', marginHorizontal:10, fontSize:10}}>{item.overview}</Text> */}
                   </View>
  
                   </View>
                  
                )
            })}
            </View>
          </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({})