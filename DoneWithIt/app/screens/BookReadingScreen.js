import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import colors from "../config/colors";

function BookReadingScreen({ storyTitle, author, storyText, storyCover }) {
  return (
    <View>
      <View style={styles.bookCover}>
        <Image
          style={styles.image}
          source={{
            height: "100%",
            width: "100%",
            uri: storyCover,
          }}
        />
        <Text style={styles.storyTitle}>{storyTitle}</Text>
        <Text style={styles.storyAuthor}>{author}</Text>
      </View>
      <Text style={styles.storyText}>{storyText}</Text>
    </View>
  );
}

export default BookReadingScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 500,
  },
  bookCover: {},
  storyTitle: {
    padding: 20,
    paddingBottom: 5,
    fontSize: 30,
    lineHeight: 35,
    fontWeight: "bold",
  },
  storyText: {
    fontSize: 18,
    lineHeight: 30,
    padding: 20,
    paddingTop: 0,
  },
  storyAuthor: {
    fontSize: 15,
    color: colors.darkgrey,
    lineHeight: 30,
    padding: 20,
    paddingTop: 0,
  },
});

/*
source={{
        height: "100%",
        width: "100%",
        uri: "https://i.pinimg.com/564x/43/5e/0a/435e0a6ea7c12a7dd38834da6915150c.jpg",
      }}

      */
