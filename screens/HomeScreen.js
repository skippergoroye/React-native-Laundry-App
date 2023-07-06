import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import * as Location from "expo-location";
import Carousel from "../components/Carousel";
import Services from "../components/Services";
import DressItem from "../components/DressItem";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/productSlice";
import { useNavigation } from "@react-navigation/native";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { TouchableOpacity } from "react-native";


const HomeScreen = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  const product = useSelector((state) => state.product.productItems);
  const total = cart.map((item) => item.quantity * item.price).reduce((curr, prev) => curr + prev, 0)
  const [items, setItems] = useState([])
  const dispatch = useDispatch();
  const navigation = useNavigation()

  // console.log(cart)
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    "We are loading your loaction"
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
        "Location servies not enabled",
        "Please enable the location services",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]
      );
    } else {
      setLocationServicesEnabled(enabled);
    }
  };

  const getCurrentLocation = async () => {
    // let checkStatus = await Location.requestForegroundPermissionsAsync()
    // console.log(checkStatus)

    // Desstructuring properties
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Location servies not enabled",
        "Please enable the location services",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]
      );
    }

    // const coordinate  = await Location.getCurrentPositionAsync()
    // console.log(coordinate)

    // Destructuring
    const { coords } = await Location.getCurrentPositionAsync();
    // console.log(coords)

    if (coords) {
      const { latitude, longitude } = coords;

      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      // console.log(response)

      for (let item of response) {
        let address = `${item.subregion} ${item.region} ${item.postalCode}`;
        setDisplayCurrentAddress(address);
      }
    }
  };

  

  useEffect(() => {
    if(product.length > 0) return
    getAllDocument()
    // getDocument()
  }, [])

  




  // Get all documents in a collection 
  async function getAllDocument () {
    try {
      const collectionRef = collection(db, "data")
      const querySnapshot = await getDocs(collectionRef)
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
        // console.log(items)
        // console.log(doc.id, " => ", doc.data());
      })
      items?.map((service) => dispatch(getProducts(service)))
    } catch (error) {
      console.log(error)
    }
  }


  // get a document
  // async function getDocument () {
  //   try {
  //     const docRef = doc(db, "data", "BM1n1XdfMLquJrImxzuO");
  //     const docSnap = await getDoc(docRef);
  //     if (docSnap.exists()) {
  //       console.log(docSnap.data());
  //     } else {
  //       console.log("No such document!");
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }


  // Get all documents in a collection 
  // async function getAllDocument () {
  //   try {
  //     const querySnapshot = await getDocs(collection(db, "users"));
  //     querySnapshot.forEach((doc) => {
  //       console.log(`${doc.id} => ${doc.data()}`);
  //     });
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  
 


  // mapping over data
  // useEffect(() => {
  //   if (product.length > 0) return;

  //   const fetchProducts = () => {
  //     services.map((service) => dispatch(getProducts(service)));
  //   };
  //   fetchProducts();
  // }, []);

  // // console.log(product)

  // const services = [
  //   {
  //     id: "0",
  //     image: "https://cdn-icons-png.flaticon.com/128/4643/4643574.png",
  //     name: "shirt",
  //     quantity: 0,
  //     price: 10,
  //   },
  //   {
  //     id: "11",
  //     image: "https://cdn-icons-png.flaticon.com/128/892/892458.png",
  //     name: "T-shirt",
  //     quantity: 0,
  //     price: 5,
  //   },
  //   {
  //     id: "12",
  //     image: "https://cdn-icons-png.flaticon.com/128/9609/9609161.png",
  //     name: "dresses",
  //     quantity: 0,
  //     price: 25,
  //   },
  //   {
  //     id: "13",
  //     image: "https://cdn-icons-png.flaticon.com/128/599/599388.png",
  //     name: "jeans",
  //     quantity: 0,
  //     price: 40,
  //   },
  //   {
  //     id: "14",
  //     image: "https://cdn-icons-png.flaticon.com/128/9431/9431166.png",
  //     name: "Sweater",
  //     quantity: 0,
  //     price: 5,
  //   },
  //   {
  //     id: "15",
  //     image: "https://cdn-icons-png.flaticon.com/128/3345/3345397.png",
  //     name: "shorts",
  //     quantity: 0,
  //     price: 30,
  //   },
  //   {
  //     id: "16",
  //     image: "https://cdn-icons-png.flaticon.com/128/293/293241.png",
  //     name: "Sleeveless",
  //     quantity: 0,
  //     price: 50,
  //   },
  // ];




  return (
    <>
      <ScrollView
        style={{ backgroundColor: "#F0F0F0", flex: 1, marginTop: 20 }}
      >
        {/* Location  */}
        <View
          style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
        >
          <MaterialIcons name="location-on" size={24} color="#fd5c63" />
          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Home</Text>
            <Text>{displayCurrentAddress}</Text>
          </View>

          <Pressable onPress={() => navigation.navigate("Profile")} style={{ marginLeft: "auto", marginRight: 7 }}>
            <Image
              style={{ width: 40, height: 40, borderRadius: 20 }}
              source={{
                uri: "https://lh3.googleusercontent.com/ogw/AOLn63H3K_ZxkcZAhdmNNfSYzuU_VhAK7b9ZJhhnLHjq=s64-c-mo",
              }}
            />
          </Pressable>
        </View>

        {/* Search Bar  */}
        <View
          style={{
            padding: 10,
            margin: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderWidth: 0.8,
            borderColor: "#C0C0C0",
            borderRadius: 7,
          }}
        >
          <TextInput placeholder="Search for items or more" />
          <Feather name="search" size={24} color="#fd5c63" />
        </View>

        {/* image carousel  */}
        <Carousel />

        {/* Services components  */}
        <Services />

        {/* trender all products  */}
        {product.map((item, index) => (
          <DressItem item={item} key={index} />
        ))}
      </ScrollView>

      {total === 0 ? (
        null
      ) : (
        <Pressable
          style={{
            backgroundColor: "#01A299",
            padding: 10,
            marginBottom: 40,
            margin: 15,
            borderRadius: 7,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}
      >
        <View>
          <Text style={{fontSize: 17, fontWeight: "600", color:"white"}}>{cart.length} items | ${total}</Text>
          <Text style={{fontSize: 13, fontWeight: "400", color:"white", marginVertical: 6}}>Extra charges might apply</Text>
        </View>

        <Pressable style={{ backgroundColor: "#fce303", padding: 10, borderRadius: 15 }} onPress={() => navigation.navigate("PickUp")}>
          <Text style={{fontSize: 17, fontWeight: 600, color: "black"}}>Proceed to pickup</Text>
        </Pressable>
      </Pressable>
      )} 
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
