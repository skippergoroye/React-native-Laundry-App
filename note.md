1. Expo Location

`<expo-location>` allows reading geolocation information from the device. Your app can poll for the current location or subscribe to location update events.



# Installation

npx expo install expo-location

# Location permission must be granted on the app


# Usage
If you're using the iOS or Android Emulators, ensure that Location is enabled.


# Step 1 Check if location is enabled
- Location.hasServicesEnabledAsync()
Checks whether location services are enabled by the user.


# Step 2 getCurrentLocation
- Location.requestForegroundPermissionsAsync()
Asks the user to grant permissions for location while the app is in the foreground.




import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location';

const HomeScreen = () => {
   const [displayCurrentAddress, setDisplayCurrentAddress] = useState("We are loading your loaction")
   const [locationServicesEnabled, setLocationServicesEnabled] = useState(false)


   useEffect(() => {
     checkIfLocationEnabled()
     getCurrentLocation()
   }, [])

   const checkIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync()

    if(!enabled){
      Alert.alert(
        'Location servies not enabled', 
        'Please enable the location services', 
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    } else {
      setLocationServicesEnabled(enabled)
    }
   }


   const getCurrentLocation = async () => {
     // let checkStatus = await Location.requestForegroundPermissionsAsync()
    // console.log(checkStatus)

    // Desstructuring properties
    let { status } = await Location.requestForegroundPermissionsAsync()

    if(status !== "granted"){
      Alert.alert(
        'Location servies not enabled', 
        'Please enable the location services', 
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }

    
    // const coordinate  = await Location.getCurrentPositionAsync()
    // console.log(coordinate)

    
    // Destructuring
    const { coords } = await Location.getCurrentPositionAsync()
    // console.log(coords)

    if(coords) {
      const { latitude, longitude } = coords

      let response = await Location.reverseGeocodeAsync({
         latitude, 
         longitude 
      });
      console.log(response)


      for(let item of response) {
        let address = `${item.name} ${item.city} ${item.postalCode}` 
        setDisplayCurrentAddress(address)
      }
    }
   }


  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})









2. Alert 

Launches an alert dialog with the specified title and message.

Optionally provide a list of buttons. Tapping any button will fire the respective onPress callback and dismiss the alert. By default, the only button will be an 'OK' button.

This is an API that works both on Android and iOS and can show static alerts. Alert that prompts the user to enter some information is available on iOS only.


# iOS
On iOS you can specify any number of buttons. Each button can optionally specify a style or be emphasized, available options are represented by the AlertButtonStyle enum and the isPreferred field on AlertButton.



# Android
On Android at most three buttons can be specified. Android has a concept of a neutral, negative and a positive button:

If you specify one button, it will be the 'positive' one (such as 'OK')
Two buttons mean 'negative', 'positive' (such as 'Cancel', 'OK')
Three buttons mean 'neutral', 'negative', 'positive' (such as 'Later', 'Cancel', 'OK')


import React from 'react';
import {View, StyleSheet, Button, Alert} from 'react-native';

const App = () => {
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);



  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  return (
    <View style={styles.container}>
      <Button title={'2-Button Alert'} onPress={createTwoButtonAlert} />
      <Button title={'3-Button Alert'} onPress={createThreeButtonAlert} />
    </View>
  );
};










3. Add Image Carousels

# installation 
- npm install react-native-image-slider-box
- npm install deprecated-react-native-prop-types

1. add below import in your code :
import { SliderBox } from "react-native-image-slider-box";



2. Use SliderBox such as these below examples

const images = [
        "https://media.istockphoto.com/id/1247884083/vector/laundry-service-room-vector-illustration-washing-and-drying-machines-with-cleansers-on-shelf.jpg?s=612x612&w=0&k=20&c=myaNEKlqX7R--bzWGDoMI7PhdxG_zdQTKYEBlymJQGk=",
        "https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=800",
  ];

<SliderBox images={images} />

<SliderBox 
    images={images} 
    autoplay
    circleLoop
    dotColor={"#13274f"}
    inactiveDotColor="#90A4AE"
    ImageComponentStyle={{
        borderRadius: 6,
        width: "94%"
    }}
/>



4. Horizontal Date Picker

# installation
- npm install @awrminkhodaei/react-native-horizontal-datepicker
- npm install moment-jalaali


# Usage

import HorizontalDatepicker from '@awrminkhodaei/react-native-horizontal-datepicker';

// ...

<HorizontalDatepicker
  mode="gregorian"
  startDate={new Date('2020-08-20')}
  endDate={new Date('2020-08-31')}
  initialSelectedDate={new Date('2020-08-22')}
  onSelectedDateChange={(date) => setSelectedDate(date)}
  selectedItemWidth={170}
  unselectedItemWidth={38}
  itemHeight={38}
  itemRadius={10}
  selectedItemTextStyle={styles.selectedItemTextStyle}
  unselectedItemTextStyle={styles.selectedItemTextStyle}
  selectedItemBackgroundColor="#222831"
  unselectedItemBackgroundColor="#ececec"
  flatListContainerStyle={styles.flatListContainerStyle}
/>;











4. AsyncStorage
AsyncStorage is a data storage system in React Native that is unencrypted, asynchronous, and allows users to persist data offline in React Native apps.


AsyncStorage is also asynchronous, meaning that its methods run concurrently with the rest of your code, and it’s persistent, meaning that the stored data will always be available globally even if you log out or restart the application.


AsyncStorage just like the localStorage in the web, persists data using key-value pairs just like localStorage. If you have used localStorage and sessionStorage before, then AsyncStorage will be familiar and easy to use.



# How AsyncStorage works
AsyncStorage accepts and stores only string data, so we must always serialize the data before storing it if it is not a string. This means that we must first convert it to string data before storing it; here, the key and the value are both strings.

To convert the object we want to save to a string, we use JSON.stringify(). In situations where we get data back from the storage, we use the JSON.parse() to convert back to object:


- Installation
npx expo install @react-native-async-storage/async-storage

- Usage
import AsyncStorage from '@react-native-async-storage/async-storage';


# Storing object data

- Using the setItem() method
The setItem method saves data to the AsyncStorage and allows a key and a value. Here, the key is a string that the data or value is assigned to:

const value = {
  name: "Chimezie",
  job: "Software Developer"
};


const storeUser = async () => {
  try {
    await AsyncStorage.setItem("user", JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};



# Reading object data

- Using the getItem() method
The getItem() method allows us to get data back from AsyncStorage by using the key the data was saved as.

For example, assuming we saved the data above using setItem, we receive the data back using the key "user":

const getUser = async () => {
    try {
      const savedUser = await AsyncStorage.getItem("user");
      const currentUser = JSON.parse(savedUser);
      console.log(currentUser);
    } catch (error) {
      console.log(error);
    }
};



# storing string data
const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('my-key', value);
  } catch (e) {
    console.log(e)
  }
};




# Reading string data
const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('my-key');
  } catch (e) {
    console.log(e)
  }
};






















