import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import colors from "../config/colors";
import UserIcon from "./UserIcon";

function UserWidget({ userName, userStats, userPicture }) {
  return (
    <View style={styles.widgetBox}>
      <UserIcon userPicture={require("../assets/userPic.jpg")} size={70} />
      <View style={styles.userInfo}>
        <Text style={styles.name}>{userName}</Text>
        <Text>{userStats} Books finished</Text>
      </View>
    </View>
  );
}

export default UserWidget;

const styles = StyleSheet.create({
  widgetBox: {
    paddingTop: 40,
    paddingRight: 10,
    height: 150,

    backgroundColor: colors.white,
    elevation: 10,
    flexDirection: "row",
    flex: 1,
    maxHeight: 100,
    alignItems: "center",
    justifyContent: "flex-start",
    zIndex: 10,
  },
  userInfo: {
    padding: 10,
    marginLeft: 20,
    width: "100%",

    flexDirection: "column",
    justifyContent: "space-around",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
