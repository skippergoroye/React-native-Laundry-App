import { Pressable, SafeAreaView, StyleSheet, Text  } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth } from '../firebase';


const ProfileScreen = () => {
    const [user, setUser] = useState("")

    useEffect(() => {
      getUser()
    }, [])


    const getUser = async () => {
        try {
          const savedUser = await AsyncStorage.getItem("data")
          const user = JSON.parse(savedUser)
          setUser(user.email)
        //   console.log(user)
        } catch (error) {
          console.log(error)
        }
    };

    console.log(user)

    // get current user onauthstateChanged
    // const user = auth.currentUser;

   

  return (
    <SafeAreaView style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Pressable style={{marginVertical: 10}}>
        <Text>Welcome {user}</Text>
      </Pressable>

      <Pressable>
        <Text>Sign Out</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})