import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {

  const handlePress = () => console.log("https://www.youtube.com/watch?v=0-S5a0eXPoc");

  return (
    <View style={styles.container}>
      <Text>Welcome to Storyboook!</Text>
      <Button title="click to get Link to this tutorial" onPress={handlePress}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
