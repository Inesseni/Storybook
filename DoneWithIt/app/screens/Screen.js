import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";

function Screen({ children }) {
  return <SafeAreaView styles={styles.saveScreen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  saveScreen: {
    //paddingTop: Constants.statusBarHeight,
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "green",
  },
});
export default Screen;
