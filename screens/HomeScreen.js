import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from 'expo-location';

export default function HomeScreen() {
  



  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    "we are loading your location"
  );
  const [locationServicesEnabled, setLocationServicesEnabled] = useState(false);
  

  useEffect(() => {
    checkIfLocationEnabled();
    getCurrentLocation();
  }, []);


  const checkIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert(
        "Location services not enabled", 
        "Please enable the location services", 
        [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed")},
      ],
        { cancelable: false }
      );
    } else {
      setLocationServicesEnabled(enabled)
    } 
  };


  const getCurrentLocation = async () => {
    // let checkStatus = await Location.requestForegroundPermissionsAsync()
    // console.log(checkStatus)

    // Desstructuring properties
    let { status } = await Location.requestForegroundPermissionsAsync()

    if(status !== "granted"){
      Alert.alert(
        'Permission Denied', 
        'allow the app to use notification services', 
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ], 
       {cancelable: false }
      );
    }
  }



  //   const { coordinate } = await Location.getCurrentPositionAsync()
  //   console.log(coordinate)

  //   if(coordinate) {
  //     const { latitude, longitude } = coordinate

  //     let response = await Location.reverseGeocodeAsync({
  //       latitude,
  //       longitude,
  //     })
  //     console.log(response)

  //     for(let item of response ) {
  //       let address = `${item.name} ${item.city} ${item.postalCode}`
  //       setDisplayCurrentAddress(address)
  //     }
  //   }
  // }

  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({})
