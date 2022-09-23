import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

function BookReadingScreen({ storyTitle, storyText, storyCover }) {
  return (
    <View>
      <View style={styles.bookCover}>
        <Image
          style={styles.image}
          source={{
            height: "100%",
            width: "100%",
            uri: { storyCover },
          }}
        />
        <Text style={styles.storyTitle}>{storyTitle}</Text>
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
    fontSize: 35,
    fontWeight: "bold",
  },
  storyText: {
    fontSize: 25,
    padding: 20,
    paddingTop: 0,
  },
});
