import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";
import LoginScreen from "../screens/LoginScreen";

export default function AppNavigation() {
  const isLogin = useSelector((state) => state.authReducer.isLogin);
  return (
    <NavigationContainer>
      {isLogin
        ? (
          <>
            <StackNavigator />
          </>
        )
        : <LoginScreen />
      }
    </NavigationContainer>
  );
}
