1. Expo Location

`<expo-location>` allows reading geolocation information from the device. Your app can poll for the current location or subscribe to location update events.



# Installation

npx expo install expo-location

# Location permission must be granted on the app


# Usage
If you're using the iOS or Android Emulators, ensure that Location is enabled.



- Location.hasServicesEnabledAsync()
Checks whether location services are enabled by the user.


- Location.requestForegroundPermissionsAsync()
Asks the user to grant permissions for location while the app is in the foreground.







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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default App;






