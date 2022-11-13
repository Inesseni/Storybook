import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function BasicButton({ text, textcolor, onPresss }) {
  return (
    <TouchableOpacity style={styles.widgetBox} onPress={onPresss}>
      <View style={styles.buttonTextContainer}>
        <Text style={[styles.buttonText, { color: textcolor }]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default BasicButton;

const styles = StyleSheet.create({
  widgetBox: {
    flexDirection: "row",
    backgroundColor: colors.white,
    padding: 10,
    elevation: 5,
  },
  iconBG: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextContainer: {
    padding: 10,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  buttonText: {
    fontSize: 15,
  },
});
