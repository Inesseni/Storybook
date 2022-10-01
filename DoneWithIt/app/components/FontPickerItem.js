import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../config/colors";

function FontPickerItem({ label, onPress, isSelected }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
      {isSelected && (
        <FontAwesome
          name="bookmark"
          size={50}
          color={colors.red}
          style={styles.bookmark}
        />
      )}
    </TouchableOpacity>
  );
}

export default FontPickerItem;

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
