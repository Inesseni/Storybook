import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import UserIcon from "./UserIcon";
import SpaceInBetween from "./SpaceInBetween";

function FilterOptions(props) {
  return (
    <View style={styles.FilterContainer}>
      <UserIcon userPicture={require("../assets/userPic.jpg")} size={70} />
      <TextInput placeholder="Search for title..." style={styles.searchField} />
      <MaterialCommunityIcons
        name="filter"
        size={30}
        color={colors.red}
        style={{ flex: 1, margin: 10 }}
      />
    </View>
  );
}

export default FilterOptions;

const styles = StyleSheet.create({
  FilterContainer: {
    paddingTop: 40,
    paddingRight: 10,
    height: 150,
    width: "100%",
    backgroundColor: colors.white,
    elevation: 10,
    flexDirection: "row",
    flex: 1,
    maxHeight: 100,
    alignItems: "center",
    zIndex: 10,
  },
  searchField: {
    margin: 5,
    marginRight: 0,
    marginLeft: 0,
    paddingLeft: 10,
    flex: 8,
    maxHeight: 40,
    borderColor: colors.grey,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 10,
  },
});
