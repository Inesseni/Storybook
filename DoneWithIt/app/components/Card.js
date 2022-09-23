import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function Card({ title, description, image, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.secondary,
    overflow: "hidden",
    margin: 20,
    marginBottom: 7,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 150,
  },
  detailsContainer: {
    padding: 10,
  },
  title: {
    marginBottom: 7,
    fontWeight: "bold",
    fontSize: 20,
  },
  subtitle: {
    color: colors.black,
  },
});
