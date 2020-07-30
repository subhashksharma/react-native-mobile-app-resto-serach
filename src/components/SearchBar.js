import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmitted }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle}></Feather>
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={(newTerm) => {
          onTermChange(newTerm);
        }}
        onEndEditing={() => {
          onTermSubmitted();
        }}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: "gray",
    height: 50,
    borderRadius: 15,
    margin: 10,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
  },
});

export default SearchBar;
