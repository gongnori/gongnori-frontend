import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import store from "./store/store";

import TabNavigator from "./navigators/TabNavigator";
import LoginScreen from "./screens/LoginScreen";

const isAuth = false;

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        {isAuth ? <TabNavigator /> : <LoginScreen />}
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "blue",
  },
});
