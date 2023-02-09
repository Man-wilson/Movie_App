import { View, Text, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './counterStatus'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export const CountScreen = () => {

    const count = useSelector((state) => state.Dim.value)
    const dispatch = useDispatch()

  return (
    <SafeAreaView>
    <View>
      <Text>count is {count} </Text>
       <Button title='increment' onPress={() => dispatch(increment())} />
       <Button title='decrement' onPress={() => dispatch(decrement())} />
    </View>
    </SafeAreaView>
  )
}