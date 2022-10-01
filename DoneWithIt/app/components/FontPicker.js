import React, { useState } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Text,
  Button,
  StyleSheet,
  Modal,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import FontPickerItem from "./FontPickerItem";

const fonts = [
  { label: "Arial", value: 1 },
  { label: "Verdana", value: 2 },
  { label: "Sans Serif italic font", value: 3 },
];

function FontPicker() {
  const [modalVisible, setModalVisible] = useState(false);
  const [font, setFont] = useState(fonts[1].label);

  return (
    <View>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.fontDropdown}>
          <Text>{font}</Text>
          <MaterialCommunityIcons
            name={"arrow-down-drop-circle"}
            size={20}
            color={"grey"}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal transparent visible={modalVisible} animationType={"slide"}>
        <View style={styles.modalContainer}>
          <FlatList
            data={fonts}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <FontPickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  setFont(item.label);
                }}
              />
            )}
          />
          <Button title="Close" onPress={() => setModalVisible(false)}></Button>
        </View>
      </Modal>
    </View>
  );
}

export default FontPicker;

const styles = StyleSheet.create({
  fontDropdown: {
    borderWidth: 1,
    borderColor: colors.lightgrey,
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
  },
  modalContainer: {
    borderWidth: 1,
    borderColor: colors.lightgrey,
    backgroundColor: colors.white,
    borderRadius: 20,
    marginHorizontal: 37,
    marginVertical: 200,
    overflow: "hidden",
  },
});
