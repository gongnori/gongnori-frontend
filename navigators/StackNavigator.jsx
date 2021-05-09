import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import MatchCreateScreen from "../screens/MatchCreateScreen";

const Stack = createStackNavigator();

export default function MatchNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="MatchCreate" component={MatchCreateScreen} />
    </Stack.Navigator>
  );
}
