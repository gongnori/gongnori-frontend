import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import StackNavigator from "./StackNavigator";
// import TabNavigator from "./TabNavigator";
// import MatchNavigator from "./StackNavigator";
import LoginScreen from "../screens/LoginScreen";


export default function AppNavigation() {
  const isLogin = useSelector((state) => state.authReducer.isLogin);
  return (
    // <View style={styles.container}>
    <NavigationContainer>
      {isLogin
        ? (
          <>
            <StackNavigator />
            {/* <MatchNavigator /> */}
          </>
        )
        : <LoginScreen />
      }
    </NavigationContainer>
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     backgroundColor: "blue",
//   },
// });
