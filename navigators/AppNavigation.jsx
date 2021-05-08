import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { StyleSheet, View } from "react-native";

import TabNavigator from "./TabNavigator";
import LoginScreen from "../screens/LoginScreen";

export default function AppNavigation() {
  const isLogin = useSelector((state) => state.authReducer.isLogin);
  return (
    <View style={styles.container}>
      {isLogin ? <TabNavigator /> : <LoginScreen />}
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
