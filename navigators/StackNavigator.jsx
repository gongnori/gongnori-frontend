import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import MatchCreateScreen from "../screens/MatchCreateScreen";
import * as color from "../constants/colors";

const Stack = createStackNavigator();

const HEADER_HEIGHT = 80;
const HEADER_FONT_SIZE = 30;
const MATCH_CREATE_TITLE = "경기 만들기";

export default function MatchNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MatchCreate"
        component={MatchCreateScreen}
        options={{
          title: MATCH_CREATE_TITLE,
          headerStyle: {
            backgroundColor: color.PRIMARY_BLUE,
            height: HEADER_HEIGHT,
          },
          headerTintColor: color.PRIMARY_WHITE,
          hearderTintStyle: {
            fontSize: HEADER_FONT_SIZE,
          },
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
}
