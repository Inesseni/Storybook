import React, { useState } from "react";
import { FlatList, TextInput, StyleSheet, View, Text } from "react-native";
import Card from "../components/Card";
import UserWidget from "../components/UserWidget";
import colors from "../config/colors";
import SpaceInBetween from "../components/SpaceInBetween";
import NavbarBottom from "../components/NavbarBottom";
import FilterOptions from "../components/FilterOptions";

const stories = [
  {
    id: 1,
    title: "The little prince",
    author: "Mac Mustermac",
    description:
      "The adventures of the little prince and his friends, escaping the castle and playing in the forbidden forest.",
    image: require("../assets/Story1.jpg"),
    rating: 5,
    bookmarked: true,
  },
  {
    id: 2,
    title: "Maria and the brave knights",
    author: "Keanu Reeves",
    description:
      "Nobody can enter the castle, only if your name is Buddy and you have four paws and a wet nose.",
    image: require("../assets/Story2.jpg"),
    rating: 3,
    bookmarked: true,
  },
  {
    id: 3,
    title: "Treasure island",
    author: "J.K. Howling",
    description:
      "Go on a crazy pirate adventure with Joanne and Fitus, the orange cat.",
    image: require("../assets/Story3.jpg"),
    rating: 4,
    bookmarked: false,
  },
];

function DiscoverScreen(props) {
  const [firstName, setFirstName] = useState("");
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {/** 
      <UserWidget
        userName={"Ines"}
        userStats={5}
        userPicture={require("../assets/userPic.jpg")}
      />*/}
      <View style={{ height: 100, width: "100%" }}>
        <FilterOptions />
      </View>
      <FlatList
        data={stories}
        keyExtractor={(stories) => stories.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            author={item.author}
            description={item.description}
            image={item.image}
            onPress={() => console.log("story selected", item)}
            margin={15}
            bookmarked={item.bookmarked}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default DiscoverScreen;
