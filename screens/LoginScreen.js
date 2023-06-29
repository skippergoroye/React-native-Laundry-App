import {
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();


// Check if there is a Logged in User or Not if there's user nagivate to homescreen if no user show login screen
// Promises
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if(user) {
      navigation.navigate("Home")
    } 
  });
  return unsubscribe
},[onAuthStateChanged])

// tryCatch
// useEffect(() => {
//     const checkIfUserExist = async () => {
//       try {
//         const unsubscribe = onAuthStateChanged((auth), (user) => {
//           if(user){
//             navigation.navigate("Home")
//           } else {
//             navigation.navigate("Login")
//           }
//         })
//       } catch (error) {
//          console.log(error)
//       }

//     }
//     checkIfUserExist()
// },[])

  const Login = async() => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      // const user = userCredential.user;
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        padding: 10,
      }}
    >
      <KeyboardAvoidingView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
          }}
        >
          <Text style={{ fontSize: 20, color: "#662d91", fontWeight: "bold" }}>
            Sign In
          </Text>

          <Text style={{ fontSize: 18, marginTop: 8, fontWeight: "600" }}>
            Sign In to your account
          </Text>
        </View>

        <View style={{ marginTop: 50 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              color="black"
            />
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholderTextColor="black"
              style={{
                fontSize: password ? 18 : 18,
                borderBottomWidth: 1,
                borderBottomColor: "gray",
                width: 300,
                marginVertical: 10,
                marginLeft: 10,
              }}
            />
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="key-outline" size={24} color="black" />
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholderTextColor="black"
              style={{
                fontSize: password ? 18 : 18,
                borderBottomWidth: 1,
                borderBottomColor: "gray",
                width: 300,
                marginVertical: 20,
                marginLeft: 10,
              }}
            />
          </View>

          <Pressable
            style={{
              width: 200,
              backgroundColor: "#318CE7",
              padding: 15,
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 50,
              borderRadius: 7,
            }}
          >
            <Text
            onPress={Login}
            style={{ color: "white", fontSize: 18, textAlign: "center" }}>
              Login{" "}
            </Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("Register")}
            style={{ marginTop: 20 }}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: 500,
                fontSize: 17,
                color: "gray",
              }}
            >
              Don't have an account? Sign Up
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
