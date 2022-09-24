import React from "react";
import { View } from "react-native";
import IconButton from "../components/IconButton";
import UserWidget from "../components/UserWidget";
import SpaceInBetween from "../components/SpaceInBetween";
import colors from "../config/colors";
import { LinearGradient } from "expo-linear-gradient";

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
        Icon={"format-list-bulleted"}
        BG_Color={colors.primary}
        I_color={colors.white}
        I_size={20}
        onPress={() => console.log("My Library")}
      />
      <IconButton
        text={"Settings"}
        Icon={"email"}
        BG_Color={colors.yellow}
        I_color={colors.white}
        I_size={20}
        onPress={() => console.log("Settings")}
      />
      <SpaceInBetween gap={10} />
      <IconButton
        text={"Log Out"}
        Icon={"logout"}
        BG_Color={colors.red}
        I_color={colors.white}
        I_size={20}
        onPress={() => console.log("Log out")}
      />
    </View>
  );
}

export default MyAccountScreen;
