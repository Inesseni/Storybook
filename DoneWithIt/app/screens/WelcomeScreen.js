import React from "react";
import {
  Button,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  Alert,
} from "react-native";

function WelcomeScreen(props) {
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
      <Pressable style={styles.Button}>
        <Text style={styles.ButtonText}>Login</Text>
      </Pressable>

      <Pressable style={styles.Button}>
        <Text style={styles.ButtonText}>Register</Text>
      </Pressable>

      <Pressable
        style={styles.Button}
        onPress={() =>
          Alert.alert(
            "Skip Login",
            "Are you sure you want to skip the login? The progress and favourite books will not get saved.",
            [{ text: "Yes", onPress: () => console.log("Yes") }, { text: "No" }]
          )
        }
      >
        <Text style={styles.ButtonText}>Skip</Text>
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
  Button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "white",
    width: "90%",
    height: 50,
    marginBottom: 10,
  },
  ButtonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
});

export default WelcomeScreen;
