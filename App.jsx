import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import GameListScreen from  "./screens/GameListScreen";

const isAuth = true;

export default function App() {
  return (
    <View style={styles.container}>
      {
        isAuth ? <GameListScreen /> : <LoginScreen />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "blue",
  },
});
