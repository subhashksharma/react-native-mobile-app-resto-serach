import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { withNavigation } from "react-navigation";

import Restaurant from "./restaurant";

const RestaurantsList = ({ title, resultResList, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={resultResList}
        keyExtractor={resultResList.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("RestaurantDetails", { id: item.id });
              }}
            >
              <Restaurant restaurantDetails={item}></Restaurant>
            </TouchableOpacity>
          );
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  container: {
    marginBottom: 10,
  },
});

export default withNavigation(RestaurantsList);
