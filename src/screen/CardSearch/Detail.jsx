import { StyleSheet, Text, View, ImageBackground, Dimensions, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { LinearGradient} from 'expo-linear-gradient'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import axios from 'axios';
import YoutubePlayer from 'react-native-youtube-iframe';
import { ActivityIndicator } from 'react-native-paper';

export const Detail = ({route, navigation}) => {

const [detail, setDetail] = useState({})
const [movieId, setMovieId] = useState([])
const [playing, setPlaying] = useState(false);
const [playText, setPlayText] = useState("Play");
const [playIcon,setPlayIcon] = useState("play");
const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width


const getYoutubeKy = async () => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${detail.id}/videos?api_key=d9cf23cf23f14a29b69eccb99afeaeff&language=en-US`) 

    // console.log(data);
    setMovieId(data);
}


useEffect(() => {
    getYoutubeKy();
    setDetail(route.params)
}, [detail]);

  return (
    <View style={{height:height,}}>

        <StatusBar backgroundColor='transparent' style='light'/>
    <ImageBackground 
    resizeMode='cover'
    style={{height:height, width:width}} 
    source={{uri:`https://image.tmdb.org/t/p/w500/${detail.poster_path}`}}>
        <LinearGradient colors={['#00000000', '#000000']} style={{height:'100%', paddingHorizontal: 20}}>
        <Pressable style={{marginTop: 50}} onPress={() => navigation.navigate('Featured')}>
          <AntDesign name="arrowleft" size={24} color="orange" />
        </Pressable>

        <View style={{alignItems:'center', justifyContent:'center', marginTop:50,}}>
        {!movieId || !movieId.results ? (
              <View style={{color:'white'}}>
                <ActivityIndicator size="large" color="white" />
                <Text>Loading... {typeof(movieId)}</Text>
              </View>
            ) : (
              <>
                <YoutubePlayer
                  height={300}
                  width={400}
                  play={playing}
                  videoId={movieId.results[0].key}
                  resizeMode="contain"
                  onChangeState={(event) => console.log(event)}
                />
              </>
            )}
            </View>
        <View style={{}}>
            <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>
                {detail.title}
            </Text>
            <Text style={{color:'white', fontSize:13, fontWeight:'bold'}}>{ detail.release_date}</Text>
            <View style={{flexDirection:'row', marginVertical:20, justifyContent:'space-between'}}>
                <Pressable onPress={()=>{
                    if(playText=="Play"){
                        setPlayText("Pause")
                        setPlayIcon("pause")
                    }else{
                        setPlayText("Play")
                        setPlayIcon("play")
                    }
                    setPlaying(!playing);
                }} style={{backgroundColor:'orange', flexDirection:'row', width:180, height:40, alignItems:'center', justifyContent:'center', borderRadius:5, padding:5}}>
                    <Feather name={playIcon} style={{paddingRight:5}} size={20} color="black" />
                    <Text style={{fontSize:15, fontWeight:'600'}}>{playText}</Text>
                </Pressable>
                <Pressable style={{backgroundColor:'#26282d', padding:10, flexDirection:'row', width:180, height:40, alignItems:'center', justifyContent:'center', borderRadius:5, padding:5}}>
                    <Entypo name="plus" size={22} style={{paddingRight:5}} color="orange" />
                    <Text style={{fontSize:15, fontWeight:'600', color:'white'}}>My List</Text>
                </Pressable>
            </View>
            <View style={{paddingTop: 15,}}>
                <Text style={{color:'white', fontSize:18}}>{detail.overview}</Text>
            </View>
        </View>
        </LinearGradient>
    </ImageBackground>
    </View>
  )
}


const styles = StyleSheet.create({})