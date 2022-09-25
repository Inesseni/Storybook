import React from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function IconButton({
  Icon,
  I_size = 20,
  BG_Color,
  I_color = colors.white,
  text,
  onPress,
}) {
  return (
    <TouchableOpacity style={styles.widgetBox} onPress={onPress}>
      <View style={[styles.iconBG, { backgroundColor: BG_Color }]}>
        <MaterialCommunityIcons name={Icon} size={I_size} color={I_color} />
      </View>
      <View style={styles.buttonTextContainer}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  widgetBox: {
    marginTop: 2,
    flexDirection: "row",
    backgroundColor: colors.white,
    padding: 10,
    elevation: 5,
  },
  icon: {},
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
