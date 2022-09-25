import React from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, View, Text } from "react-native";
import MainMenu from "./MainMenu";
import WelcomeScreen from "./WelcomeScreen";

import Card from "./app/components/Card";
import BookReadingScreen from "./app/screens/BookReadingScreen";
import MyAccountScreen from "./MyAccountScreen";
import colors from "./app/config/colors";
import NavbarBottom from "./app/components/NavbarBottom";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";
import SpaceInBetween from "./app/components/SpaceInBetween";

function HomeScreen() {
  return <MainMenu />;
}

function DiscoverScreen() {
  return <MainMenu />;
}

function RecordingsScreen() {
  return <WelcomeScreen />;
}

function SettingsScreen() {
  return <MyAccountScreen />;
}

const Tab = createBottomTabNavigator();

function InAppScreen(props) {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "bookshelf" : "bookshelf";
              } else if (route.name === "Discover") {
                iconName = focused ? "magnify" : "magnify";
              } else if (route.name === "Recordings") {
                iconName = focused ? "microphone-plus" : "microphone-plus";
              } else if (route.name === "Settings") {
                iconName = focused ? "pencil" : "pencil";
              }

              // You can return any component that you like here!
              return (
                <>
                  <View style={[styles.iconBG]}>
                    <MaterialCommunityIcons
                      name={iconName}
                      size={25}
                      color={colors.red}
                    />
                  </View>
                </>
              );
            },
            tabBarActiveTintColor: "transparent",
            tabBarInactiveTintColor: "transparent",
          })}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false, tabBarShowLabel: false }}
          />
          <Tab.Screen
            name="Discover"
            component={DiscoverScreen}
            options={{ headerShown: false, tabBarShowLabel: false }}
          />
          <Tab.Screen
            name="Recordings"
            component={RecordingsScreen}
            options={{ headerShown: false, tabBarShowLabel: false }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{ headerShown: false, tabBarShowLabel: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default InAppScreen;

const styles = StyleSheet.create({
  iconBG: {
    alignSelf: "stretch",
    height: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    //elevation: 10,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: colors.grey,
  },
});
