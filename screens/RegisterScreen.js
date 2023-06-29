import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RegisterScreen = () => {
  return (
    <SafeAreaView 
      style={{
        flex: 1,
        marginTop: 20,
        backgroundColor: "white",
        alignItems: "center",
        padding: 10
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
              Register
            </Text>

            <Text style={{ fontSize: 18, marginTop: 8, fontWeight: "600" }}>
              Create a new account
            </Text>
          </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default RegisterScreen 

const styles = StyleSheet.create({})