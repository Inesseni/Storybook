import React from "react";
import { View } from "react-native";

function SpaceInBetween({ gap, color = "transparent" }) {
  return (
    <View>
      <View style={{ height: gap, backgroundColor: color }}></View>
    </View>
  );
}

export default SpaceInBetween;
