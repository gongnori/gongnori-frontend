import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import MatchScreen from  "./screens/MatchScreen";

import TabNavigator from "./navigators/TabNavigator";

const isAuth = true;

export default function App() {
  return (
    <View style={styles.container}>
      {/* {
        isAuth ? <MatchScreen /> : <LoginScreen />
      } */}
      <TabNavigator />
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
