import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView, } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons';
import { Card } from '../CardSearch/card'
import axios from 'axios';


const height = Dimensions.get('screen').height

export const Search = () => {

  const [search, setSearch] = useState('')
  const [getSearchData, setGetSearchData] = useState([])

  console.log(search)

  useEffect(() => {
    if ( search.length !== 0) {
    getSearch();
    } 
  }, [search])


  const getSearch = () => {
    axios({
      method: 'get',
      url: `https://api.themoviedb.org/3/movie/now_playing?api_key=d9cf23cf23f14a29b69eccb99afeaeff&language=en-US&page=2`
    }).then ((newData) => {
      console.log (newData.data.result)
      setGetSearchData(newData.data.result)
    }).catch ((error) => {
      console.log(error)
    })
  }
  return (
    <SafeAreaView>
      <View style={{backgroundColor:'#202123', height:height,}}>
        <Text style={{color:'white', padding:20, fontSize:20, fontWeight:'bold'}}>Search</Text>
        <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'#414043'}}>
          <TextInput
          color='white'
          placeholder='Type title, categories, years, etc'
          placeholderTextColor={'white'}
          backgroundColor='#414043'
          onChangeText={(text) => setSearch(text)}
          style={{padding:10}} 
          />
        <Feather style={{padding:10}} name="search" size={24} color="orange" />
        </View>
        <View style={{flexDirection:'column', padding:15,}}>
          <View>
            {/* <Card /> */}
            {getSearchData&&getSearchData.map((item, key) =>{
              return (
                <View key={item.id}>
                 <Text>{item.title}</Text>
                </View>
              )
            })}
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})