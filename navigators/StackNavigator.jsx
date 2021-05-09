import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import Icon from "react-native-vector-icons/Ionicons";
import TabNavigator from "./TabNavigator";

import MatchScreen from "../screens/MatchScreen";
import MatchCreateScreen from "../screens/MatchCreateScreen";

const Stack = createStackNavigator();

export default function MatchNavigator() {
  return (
    // <NavigationContainer>
    <Stack.Navigator>
      {/* <TabNavigator /> */}
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      {/* <Stack.Screen name="Match" component={MatchScreen} /> */}
      <Stack.Screen name="MatchCreate" component={MatchCreateScreen} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}
