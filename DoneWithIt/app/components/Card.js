import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import { FontAwesome } from "@expo/vector-icons";

function Card({ title, description, image, bookmarked, onPress, margin }) {
  return (
    <TouchableOpacity
      style={[styles.card, { margin: margin, marginTop: margin + 10 }]}
      onPress={onPress}
    >
      {bookmarked && (
        <FontAwesome
          name="bookmark"
          size={50}
          color={colors.red}
          style={styles.bookmark}
        />
      )}

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
  bookmark: {
    position: "absolute",
    zIndex: 2,
    top: -13,
    right: 20,
    elevation: 20,
  },
  card: {
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: colors.white,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 150,
    borderTopRightRadius: 15,
    overflow: "hidden",
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

/*
would be nice to check which user bookmarked it and add 
multiple bookmarks in different colors to it :3

also, maybe by holding the bookmarked pressed, you can delete it?
*/
