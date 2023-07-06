import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Lottie from "lottie-react-native";

const OrderScreen = () => {
  return (
    <SafeAreaView style={{ marginTop: 30 }}>
      <Lottie
        source={require("../assets/thumbs.json")}
        style={{
          height: 360,
          width: 300,
          alignSelf: "center",
          marginTop: 40,
          justifyContent: "center",
        }}
        autoPlay
        loop={false}
        speed={0.7}
      />

      <Text
        style={{
          marginTop: 40,
          fontSize: 19,
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        Your order has been Placed
      </Text>


      <Lottie 
        source={require("../assets/sparkle.json")}  
        style={{
          height: 300,
          width: 300,
          top: 100,
          position: "absolute",
          alignSelf: "center",
        }} 
        autoPlay 
        loop={false}
        speed={0.7} 
      />
    </SafeAreaView>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({});
