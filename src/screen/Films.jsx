import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View,Text, SafeAreaView } from 'react-native';
import { HeaderTop } from './Header';
import { List } from './SecondTopScreens/List';
import { Downloads } from './SecondTopScreens/Downloads';
import { Ionicons } from '@expo/vector-icons';



const Tab = createMaterialTopTabNavigator();


export const Films = () => {
  return (
  <View style={{flex:1, backgroundColor:'#202123'}}>
      <SafeAreaView>
    {/* <StatusBar style={{backgroundColor:'black', style:'blue'}} /> */}
    <View style={{paddingBottom:20}}>
         <View style={{flexDirection:'row',paddingTop:40,}}>
           <Text style={{backgroundColor:'orange', width:30, height:25, textAlign:'center', borderRadius:5, padding:2, fontSize:16, fontWeight:'bold'}}>M</Text>
           <Text style={{color:'white', fontSize:20, fontWeight:'bold', paddingLeft:5,}}>Muvi</Text>
         </View>
    </View>
    </SafeAreaView>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'orange',
        tabBarInActiveTintColor:'white',
    tabBarIndicatorStyle: {backgroundColor: 'orange', width:150, height:2, borderRadius: 5, marginHorizontal:20},
    tabBarStyle: {
      backgroundColor:'#202123',
      tabBarInActiveTintColor:'white'
    }
    }}
     >
       <Tab.Screen style={{textAlign:'left'}} name='Lists' component={List} />
      <Tab.Screen name='Downloads' component={Downloads} />
    </Tab.Navigator>
  </View>
  );
}
