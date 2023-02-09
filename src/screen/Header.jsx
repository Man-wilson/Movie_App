import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons';

export const HeaderTop = () => {
  return (
    <SafeAreaView>
    {/* <StatusBar style={{backgroundColor:'black', style:'blue'}} /> */}
    <View style={{flexDirection:'row',justifyContent:'space-around', paddingBottom:20}}>
         <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center',  paddingTop:40, position:'relative', left:80}}>
           <Text style={{backgroundColor:'orange', width:30, height:25, textAlign:'center', borderRadius:5, padding:2, fontSize:16, fontWeight:'bold'}}>M</Text>
           <Text style={{color:'white', fontSize:20, fontWeight:'bold', paddingLeft:5,}}>Muvi</Text>
         </View>
        <View style={{alignSelf:'flex-end',position:'relative',left:50}}>
         <Ionicons name="notifications-outline" size={24} color="white" />
        </View>
    </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({})