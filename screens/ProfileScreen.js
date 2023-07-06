import { Pressable, SafeAreaView, StyleSheet, Text  } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth } from '../firebase';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';



const ProfileScreen = () => {
    const [user, setUser] = useState("")
    const navigation = useNavigation()

    useEffect(() => {
      getUser()
    }, [])


    const getUser = async () => {
        try {
          const savedUser = await AsyncStorage.getItem("data")
          const user = JSON.parse(savedUser)
          setUser(user.email)
          console.log(user)
        } catch (error) {
          console.log(error)
        }
    };


    // get current user onauthstateChanged
    // const user = auth.currentUser;
    // console.log(user)


    const signOutUser = async () => {
      try {
        const logout = await AsyncStorage.clear();
        navigation.replace("Login")
      } catch (error) {
        console.log(error);
      }
    }


    // const signOutUser = () => {
    //         const auth = getAuth();
    //         signOut(auth).then(() => {
    //         navigation.replace("Login")
    //         console.log("Sign-out successful.")
    //     }).catch((error) => {
    //         console.log("An error happened.")
    //     });
    // }

    




  return (
    <SafeAreaView style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Pressable style={{marginVertical: 10}}>
        <Text>Welcome {user}</Text>
      </Pressable>

      <TouchableOpacity onPress={signOutUser} style={{ backgroundColor: "#01A299", paddingLeft: 20, paddingRight: 20, height: 30, borderRadius: 150 }}>
        <Text style={{textAlign: "center", marginTop: 5 }}>Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})