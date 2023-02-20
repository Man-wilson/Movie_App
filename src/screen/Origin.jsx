import { StyleSheet, Text, View, Image, Pressable, TextInput, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Dimensions } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { LogoutUser } from '../Features/AuthSlice'
import { useDispatch } from 'react-redux'
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { getItemAsync } from 'expo-secure-store'
import { useEffect } from 'react'
import { useState } from 'react'
import { EditProfile } from './HomeScreen/EditProfile'

const height = Dimensions.get('window').height



export const Origin = ({navigation}) => {

  const [userCredentials, setUserCredentials] = useState({});

  // const getUserData = () => {
  //   getItemAsync('userInformation').then((res) => {
  //     const data = JSON.parse(res);
  //     // console.log(data.others)
  //     setUserCredentials(data.others);
  //     // console.log(userCredentials, 'data given')
  //   }).catch((error) => {
  //     console.log(error);
  //   })
  // }


  const getUserData = () => {
    getItemAsync('userInformation').then((res) => {
      const data = JSON.parse(res);
      // console.log(data.others, 'userInformation')
      if (data.others) {
        setUserCredentials(data.others);
      } else {
        setUserCredentials({ username: 'HELLO' }); // Set userCredentials to a default value
      }
      // console.log(userCredentials);
    }).catch((error) => {
      console.log(error);
    })
  }

  useEffect(() => {
    getUserData();
  }, []);
  
const dispatch = useDispatch();

  return (
   <SafeAreaView>
    <StatusBar backgroundColor='#212023' style='light'/>
    <View style={{backgroundColor:'#212023', height:height}}>
    <View style={{padding:15, paddingTop:30,}}>
      <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>More</Text>
    </View>
    <View style={{alignItems:'center', paddingVertical:40, marginTop:20, backgroundColor:'#26262a'}}>
      <Image source= {{uri:'https://cdn0.rubylane.com/_podl/item/174828/b1891/Adorable-Black-doll-Kaye-Wiggs-pic-1A-720%3A10.10-81-83a9a0.webp'}}
      resizeMode='cover'
      imageStyle={{
        borderRadius:10
      }}
      style={{
        height:100,
        width:100,
        borderRadius:10
      }}
       />
       <Text style={{color:'white', fontSize:17, fontWeight:'700', paddingVertical:8}}>{userCredentials.username}</Text>
       <Text style={{color:'white', fontSize:14}}> {userCredentials.email} </Text>
       <Pressable onPress={() => navigation.navigate('edit',userCredentials)}>
        <Text style={{color:'yellow', fontSize:15, paddingTop:5}}>Edit Profile</Text>
       </Pressable>
    </View>
    <View style={{backgroundColor:'#2c2c30', borderTopRightRadius:15, borderTopLeftRadius:15, padding:20}}>
      <View style={{flexDirection:'row', padding:10}}>
      <Feather name="inbox" size={24} color="white" />
      <Pressable>
        <Text style={{paddingHorizontal:10, fontSize:16, color:'white', fontWeight:'600'}}>Inbox</Text>
      </Pressable>
      </View>
      <View style={{flexDirection:'row',padding:10}}>
      <MaterialCommunityIcons name="account" size={24} color="white" />
      <Pressable>
        <Text style={{paddingHorizontal:10,color:'white', fontSize:16, fontWeight:'600'}}>Account Settings</Text>
      </Pressable>
      </View>
      <View style={{flexDirection:'row',padding:10}}>
      <MaterialIcons name="language" size={24} color="white" />
      <Pressable>
        <Text style={{paddingHorizontal:10,color:'white', fontSize:16, fontWeight:'600'}}>Language</Text>
      </Pressable>
      </View>
      <View style={{flexDirection:'row',padding:10}}>
      <Entypo name="help-with-circle" size={24} color="white" />
      <Pressable>
        <Text style={{paddingHorizontal:10, fontSize:16,color:'white', fontWeight:'600'}}>Help, FAQ</Text>
      </Pressable>
      </View>
      <Text style={{padding:10, color:'white',}}>Terms & Conditions</Text>
      <Text style={{paddingHorizontal:10, paddingTop:5, color:'white',}}>Privacy & Policy</Text>
      <Pressable onPress={() => dispatch(LogoutUser(''))} style={{paddingHorizontal:20, marginTop:80, alignItems:'center'}}>
      <Text style={{backgroundColor:'#2c2c30', width:360, borderWidth:1, borderColor:'white', fontWeight:'600', padding:10, color:'red', borderRadius:10, textAlign:'center'}}>Log Out</Text>
      </Pressable>
    </View>
    </View>
   </SafeAreaView>
  )
}


const styles = StyleSheet.create({})


