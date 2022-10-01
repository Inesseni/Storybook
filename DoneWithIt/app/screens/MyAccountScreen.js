import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import IconButton from "../components/IconButton";
import UserWidget from "../components/UserWidget";
import SpaceInBetween from "../components/SpaceInBetween";
import colors from "../config/colors";
import UserIcon from "../components/UserIcon";

import TextSettings from "../components/TextSettings";

function MyAccountScreen(props) {
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <UserWidget
        userName={"Ines"}
        userStats={5}
        userPicture={require("../assets/userPic.jpg")}
      />
      <SpaceInBetween gap={20} />

      <TextSettings />
      <SpaceInBetween gap={20} />
      <IconButton
        text={"Log Out"}
        Icon={"microphone-plus"}
        BG_Color={colors.red}
        onPress={() => console.log("Log out")}
      />
    </View>
  );
}

export default MyAccountScreen;

const styles = StyleSheet.create({});

/**        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={20}
        /> */
