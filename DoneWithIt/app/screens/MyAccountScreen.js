import React from "react";
import { View } from "react-native";
import IconButton from "../components/IconButton";
import UserWidget from "../components/UserWidget";
import SpaceInBetween from "../components/SpaceInBetween";
import colors from "../config/colors";

function MyAccountScreen(props) {
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <SpaceInBetween gap={60} color={colors.white} />
      <UserWidget
        userName={"Ines"}
        userStats={5}
        userPicture={require("../assets/userPic.jpg")}
      />
      <SpaceInBetween gap={40} />
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
      <SpaceInBetween gap={10} />
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
