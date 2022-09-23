import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";

function AppButton({ title, color = "primary", onPress }) {
  return (
    <TouchableOpacity
      style={[styles.Button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.ButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}
export default AppButton;

const styles = StyleSheet.create({
  Button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "white",
    width: "90%",
    height: 45,
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
