import { Pressable, StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons'
import { TextInput } from 'react-native-paper'
import { signUpData } from '../Features/AuthSlice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'




const width = Dimensions.get('window').width;
const height =Dimensions.get('window').height;

export const Signup = ({navigation}) => {

const dispatch = useDispatch();
const [userName, setUserName] = useState('');
const [userEmail, setUserEmail] = useState('');
const [userPassword, setUserPassword] = useState('');


const handleSignUp = () => {
  const data = {
    username : userName,
    email : userEmail,
    password : userPassword,
  }
  console.log(data)
  dispatch(signUpData(data))
}

  return (
    <SafeAreaView>
        <View style={{padding:20, backgroundColor:'#26272a', width:width,height:height}}>
      <View style={{flexDirection:'row',}}>
        <AntDesign onPress={() => navigation.navigate('Login')} name="arrowleft" size={26} color="orange" />
        <Text style={{fontSize:22, fontWeight:'600', color:'white', paddingLeft:15}}>Register</Text>
      </View>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center',  paddingTop:40}}>
        <Text style={{backgroundColor:'orange', width:30, height:25, textAlign:'center', borderRadius:5, padding:2, fontSize:16, fontWeight:'bold'}}>M</Text>
        <Text style={{color:'white', fontSize:20, fontWeight:'bold', paddingLeft:5,}}>Muvi</Text>
      </View>
      <View style={{paddingTop:30}}>
        <Text style={{color:'white', textAlign:'center', fontSize:18}}>Sign up to discover all our movies and enjoy {'\n'} our features.</Text>
      </View>
      <View>
       
        <TextInput 
        label='User Name'
        keyboardType='default'
        activeUnderlineColor='orange'
        onChangeText={(text) => setUserName(text)}
        textColor='white'
        style={{backgroundColor:'#26272a'}}
        />
       
        <TextInput 
        baseColor ='white'
        label='Email Address'
        keyboardType='email-address'
        onChangeText={(text) => setUserEmail(text)}
        textColor='white'
        activeUnderlineColor='orange'
        style={{backgroundColor:'#26272a'}}
        />
         <TextInput 
        baseColor ='white'
        label='Password'
        keyboardType='default'
        activeUnderlineColor='orange'
        onChangeText={(password) => setUserPassword(password)}
        textColor='white'
        secureTextEntry={true}
        style={{backgroundColor:'#26272a'}}
        />
      </View>
      <View style={{flexDirection:'column'}}>
        <View style={{paddingTop:22}}>
           <Pressable onPress={handleSignUp} style={{backgroundColor:'orange', borderRadius:5, alignItems:'center', justifyContent:'center', padding:12,}}>
            <Text style={{fontSize:18}}>SIGN UP</Text>
           </Pressable>
        </View>
        <View style={{paddingTop:0, alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
          <Text style={{color:'white', paddingTop:40,}}>By signing up I accept</Text>
          <Pressable style={{color:'orange',paddingTop:40}}>
            <Text style={{color:'orange',paddingLeft:3}}>terms of use</Text> 
            </Pressable>
          <Text style={{color:'white', paddingTop:40, paddingLeft:3}}>and</Text>
          <Pressable style={{color:'orange',paddingTop:40}}>
            <Text style={{color:'orange', paddingLeft:3}}>privacy policy</Text> 
            </Pressable>
        </View>
        <Text style={{color:'white', paddingTop:20, textAlign:'center', fontSize:12}}>or simply login with</Text>
        <View style={{paddingTop:22}} >
        <Pressable style={{backgroundColor:'black', borderRadius:5, alignItems:'center', justifyContent:'center', padding:12,flexDirection:'row'}}>
        <AntDesign name="apple1" size={22} color="white" />
            <Text style={{fontSize:18, paddingLeft:7, fontWeight:'400', color:'white',}}>Sign up With Apple</Text>
         </Pressable>
        </View>
        <View style={{paddingTop:22}} >
        <Pressable style={{backgroundColor:'white', borderRadius:5, alignItems:'center', justifyContent:'center', padding:12,flexDirection:'row'}}>
        <AntDesign name="google" size={24} color="black" />
            <Text style={{fontSize:18, paddingLeft:7, fontWeight:'400', color:'black',}}>Sign up With Google</Text>
         </Pressable>
        </View>
        <View style={{paddingTop:40, alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
          <Text style={{color:'white', paddingTop:40,}}>Already have an account?</Text>
          <Pressable onPress={() => navigation.navigate('Login')}style={{color:'orange',paddingTop:40}}>
            <Text style={{color:'orange', paddingLeft:4}}>Sign In</Text> 
            </Pressable>
        </View>
      </View>
    </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({})
