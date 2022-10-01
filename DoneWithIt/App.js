import React from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, View, Text } from "react-native";
import DiscoverScreen from "./app/screens/DiscoverScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

import Card from "./app/components/Card";
import BookReadingScreen from "./app/screens/BookReadingScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import colors from "./app/config/colors";
import NavbarBottom from "./app/components/NavbarBottom";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";
import SpaceInBetween from "./app/components/SpaceInBetween";
import FeedScreen from "./app/screens/FeedScreen";

function HomeScreen() {
  return <FeedScreen />;
}

function DiscoverScreeen() {
  return <DiscoverScreen />;
}

function RecordingsScreen() {
  return <WelcomeScreen />;
}

function SettingsScreen() {
  return <MyAccountScreen />;
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "bookshelf" : "bookshelf";
                color = focused ? colors.red : colors.darkgrey;
              } else if (route.name === "Discover") {
                iconName = focused ? "magnify" : "magnify";
                color = focused ? colors.red : colors.darkgrey;
              } else if (route.name === "Recordings") {
                iconName = focused ? "microphone-plus" : "microphone-plus";
                color = focused ? colors.red : colors.darkgrey;
              } else if (route.name === "Settings") {
                iconName = focused ? "pencil" : "pencil";
                color = focused ? colors.red : colors.darkgrey;
              }

              // You can return any component that you like here!
              return (
                <>
                  <View style={[styles.iconBG]}>
                    <MaterialCommunityIcons
                      name={iconName}
                      size={25}
                      color={color}
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
            component={DiscoverScreeen}
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

const styles = StyleSheet.create({
  iconBG: {
    alignSelf: "stretch",
    height: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",

    borderLeftWidth: 1,

    borderColor: colors.grey,
  },
});

/*

QUESTIONS:
How can i set a "global" variable with the slider like TextSize ?



would be nice to 
- have a soundeffect like turning a page when tapping on a card
- have 5 star rating system / community favourites
- option to record a story
- option to add user created stories
*/

/*</View>
<WelcomeScreen />
<MainMenu />


    <BookReadingScreen
      storyTitle={"Story title"}
      storyText={"Thius is a nabdfjksahf basic test with no special characters"}
      storyCover={
        "https://i.pinimg.com/564x/43/5e/0a/435e0a6ea7c12a7dd38834da6915150c.jpg"
      }
    />

*/
