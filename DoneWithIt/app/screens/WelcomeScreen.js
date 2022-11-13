import React from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";

import AppButton from "../components/AppButton";

import { useNavigation } from "@react-navigation/native";

function WelcomeScreen(props) {
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={styles.background}
      source={{
        height: "100%",
        width: "100%",
        uri: "https://i.pinimg.com/564x/43/5e/0a/435e0a6ea7c12a7dd38834da6915150c.jpg",
      }}
    >
      <Image
        style={styles.LogoImg}
        source={require("../assets/PlaceholderLogo.png")}
      />

      <AppButton
        title="Login"
        color="secondary"
        onPress={() => navigation.navigate("Home")}
      />
      <AppButton title="Register" onPress={() => navigation.navigate("Home")} />

      <Pressable onPress={() => () => navigation.navigate("Home")}>
        <Text style={styles.skipButton}>Skip</Text>
      </Pressable>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    paddingTop: 120,
  },

  LogoImg: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },

  skipButton: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    textDecorationLine: "underline",
  },
});

export default WelcomeScreen;
