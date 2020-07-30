import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

import yelp from "../api/yelp";

const RestaurantsDetails = ({ navigation }) => {
  const [restaurant, setRestaurant] = useState(null);

  const getRestaurant = async (id) => {
    const response = await yelp.get(`/${id}`);
    setRestaurant(response.data);
  };

  useEffect(() => {
    getRestaurant(navigation.getParam("id"));
  }, []);

  if (!restaurant) {
    return null;
  }
  return (
    <View>
      <Text> {restaurant.name}</Text>
      <FlatList
        data={restaurant.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          console.log(item);
          return <Image style={styles.imageStyle} source={{ uri: item }} />;
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 250,
    height: 200,
    marginBottom: 5,
  },
});

export default RestaurantsDetails;
