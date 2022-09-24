import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import colors from "../config/colors";

function UserWidget({ userName, userStats, userPicture }) {
  return (
    <View style={styles.widgetBox}>
      <Image style={styles.userPic} source={userPicture}></Image>
      <View style={styles.userInfo}>
        <Text style={styles.name}>{userName}</Text>
        <Text>{userStats} Books read</Text>
      </View>
    </View>
  );
}

export default UserWidget;

const styles = StyleSheet.create({
  widgetBox: {
    flexDirection: "row",
    backgroundColor: colors.white,
    padding: 15,
  },
  userPic: {
    height: 70,
    width: 70,
    borderRadius: 50,
  },
  userInfo: {
    padding: 10,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
