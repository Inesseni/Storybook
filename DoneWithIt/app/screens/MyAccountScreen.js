import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import IconButton from "../components/IconButton";
import UserWidget from "../components/UserWidget";
import SpaceInBetween from "../components/SpaceInBetween";
import colors from "../config/colors";

import TextSettings from "../components/TextSettings";

function MyAccountScreen(props) {
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <SpaceInBetween gap={60} color={colors.white} />
      <UserWidget
        userName={"Ines"}
        userStats={5}
        userPicture={require("../assets/userPic.jpg")}
      />
      <SpaceInBetween gap={20} />

      <TextSettings />

      <IconButton
        text={"My Library"}
        Icon={"bookshelf"}
        BG_Color={colors.primary}
        onPress={() => console.log("My Library")}
      />
      <IconButton
        text={"Settings"}
        Icon={"pencil"}
        BG_Color={colors.yellow}
        onPress={() => console.log("Settings")}
      />
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
