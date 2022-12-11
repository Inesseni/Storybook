import React from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, View, Text } from "react-native";
import DiscoverScreen from "./app/screens/DiscoverScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

import BookReadingScreen from "./app/screens/BookReadingScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import colors from "./app/config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import FeedScreen from "./app/screens/FeedScreen";
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import APIKey from "./APIKey";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore/lite";

function LoginScreen() {
  return <WelcomeScreen />;
}

var myData = [];

function DiscoverScreeen() {
  console.log(myData);
  return <DiscoverScreen storiesData={myData} />;
}

const Stack = createStackNavigator();

export default function App() {
  const [storiesData, setStoriesData] = useState([]);

  useEffect(() => {
    const firebaseConfig = {
      apiKey: APIKey.APIKey,

      authDomain: "storybook-api-383ce.firebaseapp.com",

      projectId: "storybook-api-383ce",

      storageBucket: "storybook-api-383ce.appspot.com",

      messagingSenderId: "1036780497141",

      appId: "1:1036780497141:web:7932b29cc9b5ac9159bdbc",
    };

    // Initialize Firebase

    //authentifizierung with firebase here
    const app = initializeApp(firebaseConfig);
    //based on authentif. , create instance of firestore database
    const db = getFirestore(app);

    ////////// Stories laden
    async function getStories(db) {
      const storiesCol = collection(db, "stories");
      const storySnapshot = await getDocs(storiesCol);
      const storyList = storySnapshot.docs.map((doc) => doc.data());
      //console.log(storyList);
      setStoriesData(storyList);
      return storyList;
    }
    getStories(db);

    ////////// neue story hinzufügen
    async function setStory(db) {
      //statt add kan man auch set machen und eine ID vergeben, damit nicht ein neues dokument erstellt wird
      const docRef = await addDoc(collection(db, "stories"), {
        Author: "Sebastian F.",
        Name: "Firebase Success",
        Description:
          "This is a new story that got uploaded from withing the app into the cloud database!",
        Storytext:
          "One day, ines deleted some of the infos by accident, so now she has to generate more stories the easy way like this :)",
        img: "https://firebasestorage.googleapis.com/v0/b/storybook-api-383ce.appspot.com/o/storyPics%2FStory2.jpg?alt=media&token=6588a5aa-847e-4b6d-8108-08f822ab4187",
      });
      console.log(docRef);
    }
    //setStory(db);
  }, []);

  useEffect(() => {
    console.log("haööp");
    myData = storiesData;
  }, [storiesData]);

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={DiscoverScreeen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Story"
            options={{
              ...TransitionPresets.SlideFromRightIOS,
            }}
            component={(props) => {
              return (
                <BookReadingScreen
                  storyTitle={props.route.params.title}
                  author={props.route.params.author}
                  storyText={props.route.params.storyText}
                  storyCover={props.route.params.storyCover}
                />
              );
            }}
          />
        </Stack.Navigator>
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
