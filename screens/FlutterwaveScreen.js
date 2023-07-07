import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import React, { useCallback, useEffect } from "react";
import { PayWithFlutterwave } from "flutterwave-react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";






 
  



const FlutterwaveScreen = () => {
    const cart = useSelector((state) => state.cart.cartItems)
    const total = cart.map((item) => item.quantity * item.price).reduce((curr, prev) => curr + prev, 0)
    const navigation = useNavigation();

    // What to do when the transaction is complete
    const handleOnRedirect = async (data) => {
      try {
        console.log(data);
        // navigation.navigate("Order");
        if (data.status === "completed") {
        navigation.navigate("Order");
        }
      } catch (error) {
        console.log(error)
      }
    };



    const generateTransactionRef = (length) => {
      var result = '';
      var characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return `flw_tx_ref_${result}`;
    };
      

    
    

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems:"center", marginTop: 50 }}>
       <PayWithFlutterwave
          onRedirect={handleOnRedirect}
          options={{
            tx_ref: generateTransactionRef(10),
            authorization: "FLWPUBK_TEST-e5eafb56c1b149527ceace05e247bd46-X",
            customer: {
                email: "skippergoroye@gmail.com",
            },
            amount: total + 5.99,
            currency: "NGN",
            payment_options: "card",
          }}
		/>
    </SafeAreaView>
  )
}

export default FlutterwaveScreen

const styles = StyleSheet.create({})