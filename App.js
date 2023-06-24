import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { store } from './app/store'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container} >
        <HomeScreen />
        <StatusBar style="auto" />
     </View> 
    </Provider>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30
  }
});
