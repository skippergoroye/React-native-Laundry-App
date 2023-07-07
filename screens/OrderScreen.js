import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Lottie from "lottie-react-native";
import { TouchableOpacity } from "react-native";

const OrderScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ marginTop: 30 }}>
      <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={{ position: "absolute", left: 20, top: 20, padding: 2, backgroundColor: "#eba834", borderRadius: 20 }}
      >
        <Feather name='arrow-left' size={30} color='#000000' />
			</TouchableOpacity>
      </View>
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
