import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Api = `https://api.themoviedb.org/3/search/company?api_key=<<api_key>>&page=1`  

export const SearchResaults = () => {

    const [search, setSearch] = useState('')
  return (
      <View>
        <TextInput
          color='white'
          placeholder='Type title, categories, years, etc'
          placeholderTextColor={'white'}
          backgroundColor='#414043'
          style={{padding:10}} 
          />
      </View>
  )
}

const styles = StyleSheet.create({})