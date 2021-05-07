import React from "react";
import { StyleSheet, Text, View } from "react-native";

import TabNavigator from "./navigators/TabNavigator";
import LoginScreen from "./screens/LoginScreen";

const isAuth = false;

export default function App() {
  return (
    <View style={styles.container}>
      {
        isAuth ? <TabNavigator /> : <LoginScreen />
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
