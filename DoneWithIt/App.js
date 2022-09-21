import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import MainMenu from "./app/screens/MainMenu";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return <WelcomeScreen />;
}

const styles = StyleSheet.create({});

/*

      <Image
        style={{
          width: 200,
          height: 200,
          position: "absolute",
          top: landscape ? 80 : 100,

          alignSelf: "center",
        }}
        source={require("./assets/PlaceholderLogo.png")}
      />


<View className="Login_Buttons" style={{ flex: 1 }}>
        <Button title="Login" />
        <Button title="Register" />
        <Button
          title="Skip"
          onPress={() =>
            Alert.alert(
              "Skip Login",
              "Are you sure you want to skip the login? The progress and favourite books will not get saved.",
              [
                { text: "Yes", onPress: () => console.log("Yes") },
                { text: "No" },
              ]
            )
          }
        />
      </View>
      */
