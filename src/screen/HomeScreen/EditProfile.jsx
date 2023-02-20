import { StyleSheet, Text, View,Pressable } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { editUserData } from '../../Features/AuthSlice'
import { useEffect } from 'react'

export const EditProfile = ({route}) => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [password, setUserPassword] = useState("")
  const [userId, setUserId] = useState("")
  const { userData } = useSelector((state)=>state.auth)

  useEffect(()=>{
    setUserId(userData?.others._id)
  },[])

  const handleEdit = () => {
    const data = {
      username: userName,
      email: userEmail,
    password: password
    }
    dispatch(editUserData(userId, data))
  }

  return (
    <SafeAreaView>
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
          <Pressable onPress={handleEdit} style={{backgroundColor:'orange', borderRadius:5, alignItems:'center', justifyContent:'center', padding:12,}}>
           <Text style={{fontSize:18}}>SIGN UP</Text>
          </Pressable>
       </View>
       </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({})