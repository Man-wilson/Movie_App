import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login, } from '../screen/Login';
import { Signup } from '../screen/Signup';
import { HeroScreen } from '../screen/Hero';
import { MainNavigationScreen } from './MainNavigation';
import { Detail } from '../screen/CardSearch/Detail';
import { Features } from '../screen';

const Stack = createNativeStackNavigator();

const { Navigator, Screen} = Stack

export const AppNavigation = () => {
  return (
      <Navigator screenOptions={{
      headerShown: false,
    }}>
        <Screen name='Hero' component={HeroScreen}/>
        <Screen name='Login' component={Login}/>
        <Screen name='Signup' component={Signup}/>
        <Screen name='MainNavigates' component={MainNavigationScreen}/>
        < Screen name='Detail' component={Detail}/>
        {/* < Screen name='Features' component={Features}/> */}

    </Navigator>
    
  )
}


const styles = StyleSheet.create({})