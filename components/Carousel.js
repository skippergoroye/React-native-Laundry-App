import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
    const images = [
        "https://media.istockphoto.com/id/1247884083/vector/laundry-service-room-vector-illustration-washing-and-drying-machines-with-cleansers-on-shelf.jpg?s=612x612&w=0&k=20&c=myaNEKlqX7R--bzWGDoMI7PhdxG_zdQTKYEBlymJQGk=",
        "https://media.istockphoto.com/id/1267110903/photo/family-doing-laundry.jpg?s=612x612&w=0&k=20&c=moqJDsyhGgbLqNgW3H0J6gdtXsNInl_pg75RJBWpJPI=",
        "https://media.istockphoto.com/id/82567372/photo/one-coloured-one-white-pile-of-washing.jpg?s=612x612&w=0&k=20&c=5AyI92AJq3T2UtXc2uB3QbsdPmPn6VcuL3jKvtdGido=",
        "https://media.istockphoto.com/id/459292777/photo/laundry-service.jpg?s=612x612&w=0&k=20&c=V-fCS_ZhDA8_sqySt4-twQhovKdDrB9b71WBE_M6k1Q=",
    ]
        

  return (
    <View>
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
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({})