import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import { FontAwesome } from "@expo/vector-icons";
import SpaceInBetween from "./SpaceInBetween";
import ReviewStars from "./ReviewStars";

function Card({
  title,
  author,
  description,
  image,
  bookmarked,
  onPress,
  margin,
  rating,
}) {
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

      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{description}</Text>
        <SpaceInBetween gap={10} />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.author}>{author}</Text>

          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            {/*
            <ReviewStars size={15} />
            <ReviewStars size={15} />
            <ReviewStars size={15} />
            <ReviewStars size={15} />
            <ReviewStars size={15} />
                    */}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Card;

const styles = StyleSheet.create({
  author: {
    color: colors.black,
    textAlign: "right",
  },
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
    padding: 20,
    paddingTop: 10,
    paddingBottom: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 5,
  },
  subtitle: {
    color: colors.darkgrey,
    fontSize: 14,
    lineHeight: 20,
    paddingBottom: 10,
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
  },
});

/*
would be nice to check which user bookmarked it and add 
multiple bookmarks in different colors to it :3

also, maybe by holding the bookmarked pressed, you can delete it?
*/
