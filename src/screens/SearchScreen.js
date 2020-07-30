import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import SearchBar from "../components/SearchBar";
import RestaurantsList from "../components/restaurantList";

import useRestaurants from "../hoooks/useRestaurants";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, restaurants, errorMessage] = useRestaurants();

  const resultbyPrice = (price) => {
    return restaurants.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => {
          setTerm(newTerm);
        }}
        onTermSubmitted={() => {
          console.log(`term ${term} was submitted`);
          searchApi(term);
        }}
      ></SearchBar>
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <RestaurantsList
          resultResList={resultbyPrice("$$")}
          title="Costly"
        ></RestaurantsList>
        <RestaurantsList
          resultResList={resultbyPrice("$$")}
          title="Medium"
        ></RestaurantsList>

        <RestaurantsList
          resultResList={resultbyPrice("$")}
          title="Cheaper"
        ></RestaurantsList>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
