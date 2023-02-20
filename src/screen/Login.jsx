import { Pressable, StyleSheet, Text, View,Dimensions,ActivityIndicator } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons'
import { TextInput } from 'react-native-paper'
import { loginUser } from '../Features/AuthSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'





const width = Dimensions.get('window').width;
const height =Dimensions.get('window').height;

export const Login = ({navigation}) => {

const {isLoading,error} = useSelector((state)=>state.auth)  
const dispatch = useDispatch();
const [userName, setUserName] = useState('');
const [password, setPassword] = useState('');


const handleLogin = () => {
  const data = {
    username : userName,
    password : password
  };
  //  console.log(data);
   dispatch(loginUser(data))
}


  return (
    <>
    <StatusBar backgroundColor='#26272a' style='light' />
    <SafeAreaView>
        <View style={{padding:20, backgroundColor:'#26272a', width:width,height:height}}>
      <View style={{flexDirection:'row',}}>
        {/* <AntDesign name="arrowleft" size={26} color="orange" /> */}
        <Text style={{fontSize:22, fontWeight:'600', color:'white', paddingLeft:15}}>Login</Text>
      </View>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center',  paddingTop:40}}>
        <Text style={{backgroundColor:'orange', width:30, height:25, textAlign:'center', borderRadius:5, padding:2, fontSize:16, fontWeight:'bold'}}>M</Text>
        <Text style={{color:'white', fontSize:20, fontWeight:'bold', paddingLeft:5,}}>Muvi</Text>
      </View>
      <View style={{paddingTop:30}}>
        <Text style={{color:'white', textAlign:'center', fontSize:18}}>Please Login to enjoy more benefits and we {'\n'} won't let you go.</Text>
      </View>
      <View>
       <View></View>
        <TextInput textColor='white'
        label='User Name'
        keyboardType='default'
        activeUnderlineColor='orange'
        onChangeText={(text) => setUserName(text)}
        style={{backgroundColor:'#26272a',color:'white'}}
        />
       
        <TextInput 
        baseColor ='white'
        label='Password'
        keyboardType='default'
        activeUnderlineColor='orange'
        secureTextEntry={true}
        onChangeText= {(password) => setPassword(password)}
        textColor='white'
        style={{backgroundColor:'#26272a'}}
        />
      </View>
      <View style={{flexDirection:'column'}}>
        <Pressable style={{paddingTop:15}}> 
          <Text style={{color:'orange', textAlign:'right'}}> Forgot Password ?</Text>

        </Pressable>
        <View style={{paddingTop:22}}>
           <Pressable onPress={handleLogin} style={{backgroundColor:'orange', borderRadius:5, alignItems:'center', justifyContent:'center', padding:12,}}>
            <Text style={{fontSize:18}}>Get Started</Text>
           </Pressable>
           {isLoading == true ? (<ActivityIndicator color={"gold"} size={"small"}/>): null}
           {error !== "" ?(
            <Text style={{color:'red'}}>
              {error}
            </Text>
           ) : null}
        </View>
        <Text style={{color:'white', paddingTop:12, textAlign:'center', fontSize:12}}>or simply login with</Text>
        <View style={{paddingTop:22}} >
        <Pressable style={{backgroundColor:'black', borderRadius:5, alignItems:'center', justifyContent:'center', padding:12,flexDirection:'row'}}>
        <AntDesign name="apple1" size={22} color="white" />
            <Text style={{fontSize:18, paddingLeft:7, fontWeight:'400', color:'white',}}>Login With Apple</Text>
         </Pressable>
        </View>
        <View style={{paddingTop:22}} >
        <Pressable style={{backgroundColor:'white', borderRadius:5, alignItems:'center', justifyContent:'center', padding:12,flexDirection:'row'}}>
        <AntDesign name="google" size={24} color="black" />
            <Text style={{fontSize:18, paddingLeft:7, fontWeight:'400', color:'black',}}>Login With Google</Text>
         </Pressable>
        </View>
        <View style={{paddingTop:40, alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
          <Text style={{color:'white', paddingTop:40,}}>Don't have an account?</Text>
          <Pressable onPress={() => navigation.navigate('Signup')} style={{color:'orange',paddingTop:40}}>
            <Text style={{color:'orange'}}>Sign Up</Text> 
            </Pressable>
        </View>
      </View>
    </View>
    </SafeAreaView>
    </>
  )
}


const styles = StyleSheet.create({})
