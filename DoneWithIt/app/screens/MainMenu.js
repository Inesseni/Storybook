import React from "react";
import {
  FlatList,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  View,
} from "react-native";
import Card from "../components/Card";
import UserWidget from "../components/UserWidget";
import colors from "../config/colors";
import SpaceInBetween from "../components/SpaceInBetween";

const stories = [
  {
    id: 1,
    title: "The little prince",
    description:
      "The adventures of the little prince and his friends, escaping the castle and playing in the forbidden forest.",
    image: require("../assets/Story1.jpg"),
    bookmarked: true,
  },
  {
    id: 2,
    title: "Maria and the brave knights",
    description:
      "Nobody can enter the castle, only if your name is Buddy and you have four paws and a wet nose.",
    image: require("../assets/Story2.jpg"),
    bookmarked: false,
  },
  {
    id: 3,
    title: "Treasure island",
    description:
      "Go on a crazy pirate adventure with Joanne and Fitus, the orange cat.",
    image: require("../assets/Story3.jpg"),
    bookmarked: false,
  },
  {
    id: 4,
    title: "Story 4",
    description: "D4",
    image: require("../assets/Story4.jpg"),
    bookmarked: false,
  },
];

function MainMenu(props) {
  return (
    <View>
      <SpaceInBetween gap={60} color={colors.white} />

      <UserWidget
        userName={"Ines"}
        userStats={5}
        userPicture={require("../assets/userPic.jpg")}
      />
      <FlatList
        style={styles.listContainer}
        data={stories}
        keyExtractor={(stories) => stories.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
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

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: colors.background,
  },
});

export default MainMenu;
