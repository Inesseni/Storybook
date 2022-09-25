import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function NavbarBottom(props) {
  return (
    <View style={styles.navbarContainer}>
      <TouchableOpacity style={styles.navButton}>
        <View style={[styles.iconBG, { backgroundColor: colors.white }]}>
          <MaterialCommunityIcons
            name="bookshelf"
            size={30}
            color={colors.yellow}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton}>
        <View style={[styles.iconBG, { backgroundColor: colors.white }]}>
          <MaterialCommunityIcons name="magnify" size={30} color={colors.red} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton}>
        <View style={[styles.iconBG, { backgroundColor: colors.white }]}>
          <MaterialCommunityIcons
            name="microphone-plus"
            size={30}
            color={colors.green}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default NavbarBottom;

const styles = StyleSheet.create({
  navbarContainer: {
    backgroundColor: colors.white,
    height: 70,
    width: "100%",
    flexDirection: "row",
    elevation: 10,
  },
  navButton: {
    flex: 1,
    backgroundColor: colors.softpink,
    borderColor: colors.grey,
    borderWidth: 1,
  },
  iconBG: {
    //borderRadius: 50,
    height: "100%",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});

/*
    <View
      style={{
        backgroundColor: colors.background,
        flex: 1,
        justifyContent: "flex-end",
      }}
    >
*/
