import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Slider from "@react-native-community/slider";

function FontSizeSlider(props) {
  const [sliderValue, setSliderValue] = useState(18);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 15,
          flex: 1,
        }}
      >
        Aa
      </Text>
      <Slider
        style={{ flex: 13, minHeight: 40 }}
        minimumValue={15}
        maximumValue={30}
        onValueChange={(value) => setSliderValue(value)}
        value={sliderValue}
      />
      <Text style={{ fontSize: 30, flex: 2, textAlign: "right" }}>Aa</Text>
    </View>
  );
}

export default FontSizeSlider;
