import React from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, View } from "react-native";
import MainMenu from "./app/screens/MainMenu";
import WelcomeScreen from "./app/screens/WelcomeScreen";

import Card from "./app/components/Card";
import BookReadingScreen from "./app/screens/BookReadingScreen";

export default function App() {
  return <MainMenu />;
}

/*
<WelcomeScreen />;

<BookReadingScreen
  storyTitle={"Story title"}
  storyText={"Thius is a nabdfjksahf basic test with no special characters"}
  storyCover={
    "https://i.pinimg.com/564x/43/5e/0a/435e0a6ea7c12a7dd38834da6915150c.jpg"
/>
*/
