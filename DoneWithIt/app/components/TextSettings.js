import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import colors from "../config/colors";
import Slider from "@react-native-community/slider";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SpaceInBetween from "./SpaceInBetween";

function TextSettings(props) {
  const [sliderValue, setSliderValue] = useState(18);
  return (
    <View style={[styles.settingsSection, { backgroundColor: colors.white }]}>
      <Text style={styles.settingsHeadline}>Text settings</Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 10,
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

      <View
        style={{
          borderWidth: 1,
          borderColor: "grey",
          backgroundColor: colors.white,
          borderRadius: 20,
          paddingHorizontal: 10,
          paddingLeft: 20,

          height: 35,
          marginTop: 10,
          marginBottom: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text>Arial</Text>
        <MaterialCommunityIcons
          name={"arrow-down-drop-circle"}
          size={20}
          color={"grey"}
        />
      </View>

      <View
        style={{
          borderWidth: 0,
          borderColor: "grey",
          backgroundColor: colors.grey,
          borderRadius: 10,
          padding: 10,
          minHeight: 140,
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: sliderValue }}>
          This is an example text, how it will look like.
        </Text>
      </View>
    </View>
  );
}

export default TextSettings;

const styles = StyleSheet.create({
  settingsHeadline: {
    fontSize: 20,
    marginBottom: 15,
    fontWeight: "bold",
  },
  settingsSection: {
    padding: 40,
    paddingTop: 20,
    paddingBottom: 40,
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
    marginBottom: 5,
  },
});
