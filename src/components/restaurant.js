import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Restaurant = ({ restaurantDetails }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: restaurantDetails.image_url }}
      ></Image>
      <Text style={styles.name}> {restaurantDetails.name}</Text>
      <Text>
        {" "}
        {restaurantDetails.rating} Stars, {restaurantDetails.review_count}{" "}
        Reviews{" "}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default Restaurant;
