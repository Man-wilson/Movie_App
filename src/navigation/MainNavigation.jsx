import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, Features, Films,} from '../screen/';
import { Origin } from '../screen/Origin';
import { Feather, AntDesign } from '@expo/vector-icons';
import HomePage from '../screen/HomeScreen/HomePage';
import { Search } from '../screen/HomeScreen/Search';
import { Work } from '../screen/HomeScreen/workSearch';

const Tab = createBottomTabNavigator();

const {Navigator, Screen} = Tab



export const MainNavigationScreen = () => {
  return (
    <View style={{flex:1}}>
      
      <Navigator
        initialRouteName='Home'
        screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#202123',
        }
    }} 
    >

      {/* <Screen name='Head' component={Header} /> */}
        <Screen options={{
          tabBarLabel: ()=> null,
          tabBarIcon: ({color, size}) => {
            return <Feather name="home" size={24} color="orange" />
          }
        }} name='HomeTab' component={HomePage} />

        <Screen options={{
          tabBarLabel: () => null,
          tabBarIcon: ({color, size}) => {
            return <Feather name="search" size={24} color="orange" />
          }
        }} name='Search' component={Work} />

        <Screen options={{
          tabBarLabel: () => null,
          tabBarIcon: () => {
            return <Feather name="folder" size={24} color="orange" />
          }
        }} name='Film' component={Films} />

        <Screen options={{
          tabBarLabel: () => null,
          tabBarIcon: () => {
            return <AntDesign name="appstore-o" size={24} color="orange" />
          }
        }} name='Origin' component={Origin} />
        



    </Navigator>
    
    </View>
  )
}
 



const styles = StyleSheet.create({})