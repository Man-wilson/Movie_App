import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login, } from '../screen/Login';
import { Signup } from '../screen/Signup';
import { HeroScreen } from '../screen/Hero';
import { MainNavigationScreen } from './MainNavigation';
import { Detail } from '../screen/CardSearch/Detail';
import { Features } from '../screen';
import { useSelector, useDispatch } from 'react-redux';
import { getItemAsync } from 'expo-secure-store';
import { storeToken, login as storeLoginData, signUp as storeSignUpData } from '../Features/AuthSlice'
import { useEffect } from 'react';
import { EditProfile} from '../screen/HomeScreen/EditProfile'







const Stack = createNativeStackNavigator();

const { Navigator, Screen} = Stack

export const AppNavigation = () => {

  const dispatch = useDispatch();
  const login = useSelector((state) => state.auth.isLoggedIn);
  // console.log(login, 'login state from redux')
  const signUp = useSelector((state) => state.auth.isLoggedIn)
  // console.log(signUp, 'this signUp state is from redux')


  useEffect(() => {
    getItemAsync("userToken").then((res) => {
      console.log(res, 'data from storage')
      if(res != null)dispatch(storeToken(res)); 
    });
    getItemAsync('userInformation').then((res) => {
      console.log(res)
      if(res != null)  dispatch(storeLoginData(JSON.parse(res)))
    });


  }, [])

  // useEffect(() => {
  //   getItemAsync('userSignUpInfo').then((res) => {
  //     console.log(res)
  //     dispatch(storeSignUpData(res))
  //   })
  // }, [])

 console.log(login)

  return (
      <Navigator screenOptions={{
      headerShown: false,
    }}>
      {login == true ? (
        <>
        <Screen name='MainNavigates' component={MainNavigationScreen}/>
        <Screen name='edit' component={EditProfile}/>
        < Screen name='Detail' component={Detail}/>
        </>
        ) : (
          <>
        <Screen name='Hero' component={HeroScreen}/>
        <Screen name='Login' component={Login}/>
        <Screen name='Signup' component={Signup}/>
          </>
      )}
        
        {/* < Screen name='Features' component={Features}/> */}

    </Navigator>
    
  )
}


const styles = StyleSheet.create({})