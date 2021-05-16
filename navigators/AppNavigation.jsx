import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";
import LoginScreen from "../screens/LoginScreen";
import LocationScreen from "../screens/LocationScreen";
import { setInitialize } from "../actions/appActionCreators";

export default function AppNavigation() {
  const isLogin = useSelector((state) => state.userReducer.isLogin);
  const hasLocation = useSelector((state) => {
    return !!state.userReducer.locations.length
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setInitialize());
  });

  return (
    <NavigationContainer>
      {
        isLogin
          ? (
            <>
              {!hasLocation ? <LocationScreen /> : <StackNavigator />}
            </>
          )
          : <LoginScreen />
      }
    </NavigationContainer>
  );
}
