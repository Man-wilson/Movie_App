import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View,Text } from 'react-native';
import { HeaderTop } from '../Header';
import { Films } from '../Films';
import { Features } from '../Features';
import { Origin } from '../Origin';
import { HomeScreen } from '../Home';


const Tab = createMaterialTopTabNavigator();

function HomePage() {
  return (
  <View style={{flex:1, backgroundColor:'#26272a'}}>
    <HeaderTop />
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'orange',
        tabBarInActiveTintColor:'white',
    tabBarIndicatorStyle: {backgroundColor: 'orange', width:20, height:3, borderRadius: 5, marginHorizontal:43},
    tabBarStyle: {
      backgroundColor:'#202123',
      tabBarInActiveTintColor:'white'
    }
    }}
     >
      <Tab.Screen name="Featured" component={Features} />
      <Tab.Screen name='Series' component={HomeScreen} />
      <Tab.Screen name="Films" component={Films} />
      <Tab.Screen name="Origin" component={Origin} />

    </Tab.Navigator>
  </View>
  );
}

export default HomePage;