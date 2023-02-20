import { ImageBackground, StyleSheet, Text, View, Dimensions, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').width;
const image = {uri:'https://www.xtrafondos.com/en/descargar.php?id=3853&vertical=1'}

export const HeroScreen = ({navigation}) => {
  return (
    // <SafeAreaView>
    <>
      <StatusBar transparent style='light' />
        <ImageBackground source={image} resizeMode='cover' style={{justifyContent:'center', height:'100%', borderRadius:10}} imageStyle={{
            opacity: 0.8, backgroundColor:'#302e2c'
        }}>
            <View style={{padding:20, justifyContent:'center', marginTop:60}}>
              <View style={{paddingTop:150, marginTop:100}}>
              <Text style={{color:'white', fontSize:30, fontWeight:'800'}}>Enjoy your favorite movie {'\n'} everywhre </Text>
                <Text style={{color:'white', fontSize:15, paddingTop: 12, fontWeight:'300'}}>Browse through our collection and {'\n'}discover hundreds of movies and series that {'\n'}you'll love!</Text>
              </View>
                <View style={{paddingTop:200}}>
                  <Pressable onPress={() => navigation.navigate('Login')} style={{backgroundColor:'orange', borderRadius:5, alignItems:'center', justifyContent:'center', padding:12,}}>
                    <Text style={{fontSize:18}}>Get Started</Text>
                  </Pressable>
                </View>
            </View>
        </ImageBackground>
    {/* // </SafeAreaView> */}
    </>
  )
}


const styles = StyleSheet.create({})