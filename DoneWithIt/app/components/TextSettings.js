import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import colors from "../config/colors";
import Slider from "@react-native-community/slider";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SpaceInBetween from "./SpaceInBetween";
import FontPicker from "./FontPicker";
import FontSizeSlider from "./FontSizeSlider";

const fonts = [
  { label: "Arial", value: 1 },
  { label: "Verdana", value: 2 },
  { label: "Sans Serif", value: 3 },
];

function TextSettings(props) {
  const [sliderValue, setSliderValue] = useState(18);
  const [font, setFont] = useState();

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

      <FontSizeSlider />
      <FontPicker defaultFont={"Arial"} style={{ width: 500 }} />

      <View style={styles.previewTextBox}>
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
  previewTextBox: {
    borderWidth: 0,
    borderColor: "grey",
    backgroundColor: colors.grey,
    borderRadius: 10,
    padding: 10,
    minHeight: 140,
    marginTop: 10,
  },
});
