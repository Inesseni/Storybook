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
import colors from "../config/colors";

const stories = [
  {
    id: 1,
    title: "Story 1",
    description: "D1",
    image: require("../assets/icon.png"),
  },
  {
    id: 2,
    title: "Story 2",
    description: "D2",
    image: require("../assets/icon.png"),
  },
  {
    id: 3,
    title: "Story 3",
    description: "D3",
    image: require("../assets/icon.png"),
  },
  {
    id: 4,
    title: "Story 4",
    description: "D4",
    image: require("../assets/icon.png"),
  },
];

function MainMenu(props) {
  return (
    <View>
      <View style={styles.saveView} />
      <Text style={styles.greeting}>Hi User!</Text>
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
  greeting: {
    fontSize: 30,
    padding: 20,
    paddingLeft: 30,
  },
  saveView: {
    height: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default MainMenu;
