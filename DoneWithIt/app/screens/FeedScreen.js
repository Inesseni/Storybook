import React from "react";
import { View, Text } from "react-native";
import FilterOptions from "../components/FilterOptions";
import colors from "../config/colors";

function FeedScreen(props) {
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <FilterOptions />
    </View>
  );
}

export default FeedScreen;
