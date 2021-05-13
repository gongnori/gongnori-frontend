import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";
import LoginScreen from "../screens/LoginScreen";
import { setInitialize } from "../actions/actions";

export default function AppNavigation() {
  const isLogin = useSelector((state) => state.authReducer.isLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setInitialize());
  });

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
