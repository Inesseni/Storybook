import React from "react";
import { StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../config/colors";

function ReviewStars({ size }) {
  return <FontAwesome name="star" size={size} color={colors.yellow} />;
}

export default ReviewStars;

const styles = StyleSheet.create({
  ReviewStar: {
    marginLeft: 3,
  },
});
