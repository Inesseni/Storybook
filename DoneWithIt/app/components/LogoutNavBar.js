import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BasicButton from "./BasicButton";

function BurgerMenu(props) {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.widgetBox}>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <MaterialCommunityIcons
          name={"logout"}
          size={25}
          color={colors.red}
          style={styles.Icon}
        />
      </TouchableWithoutFeedback>

      <Modal transparent visible={modalVisible} animationType={"fade"}>
        <View style={styles.modalContainer}>
          <Text style={styles.LogoutText}>
            Are you sure you want to log out?
          </Text>
          <BasicButton
            text={"Logout"}
            textcolor={colors.red}
            onPresss={() => {
              setModalVisible(false);
              navigation.navigate("Login");
            }}
          />
          <BasicButton
            text={"Close"}
            onPresss={() => {
              setModalVisible(false);
            }}
          />
        </View>
      </Modal>
    </View>
  );
}

export default BurgerMenu;

const styles = StyleSheet.create({
  widgetBox: {
    paddingTop: 40,
    paddingRight: 10,
    height: 50,

    backgroundColor: colors.white,
    elevation: 10,
    flexDirection: "row",
    flex: 1,
    maxHeight: 80,
    alignItems: "center",
    justifyContent: "flex-end",
    zIndex: 10,
  },
  Icon: {
    marginBottom: 5,
    marginRight: 10,
  },
  modalContainer: {
    backgroundColor: colors.white,
    borderRadius: 10,
    width: 250,
    alignSelf: "center",
    alignItems: "center",
    overflow: "hidden",
    marginTop: 200,
    elevation: 5,
  },
  LogoutText: {
    padding: 20,
  },
});
