import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";

function UserIcon({ userPicture, size }) {
  return (
    <View style={{ flex: 1, minWidth: size }}>
      <Image
        style={[
          styles.userPic,
          { borderRadius: size / 2, width: size, height: size },
        ]}
        source={userPicture}
      ></Image>
    </View>
  );
}

export default UserIcon;

const styles = StyleSheet.create({
  userPic: {
    margin: 5,
    marginLeft: 10,
    borderColor: colors.white,
    borderWidth: 5,
    overflow: "hidden",
  },
});
