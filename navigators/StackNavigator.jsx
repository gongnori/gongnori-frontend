import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import MatchCreateScreen from "../screens/MatchCreateScreen";
import MatchJoinScreen from "../screens/MatchJoinScreen";
import TeamCreateScreen from "../screens/TeamCreateScreen";
import ChatScreen from "../screens/ChatScreen";
import * as color from "../constants/colors";

const Stack = createStackNavigator();

const HEADER_HEIGHT = 80;
const HEADER_FONT_SIZE = 30;
const MATCH_CREATE_TITLE = "경기 만들기";
const MATCH_JOIN_TITLE = "경기 신청하기";
const TEAM_CREATE_TITLE = "팀 만들기";
const CHAT_TITLE = "채팅";

const headerOption = {
  headerStyle: {
    backgroundColor: color.SECONDARY_BLUE,
    height: HEADER_HEIGHT,
  },
  headerTintColor: color.PRIMARY_WHITE,
  hearderTintStyle: {
    fontSize: HEADER_FONT_SIZE,
  },
  headerTitleAlign: "center",
}

export default function MatchNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MatchJoin"
        component={MatchJoinScreen}
        options={{ ...headerOption, title: MATCH_JOIN_TITLE }}
      />
      <Stack.Screen
        name="MatchCreate"
        component={MatchCreateScreen}
        options={{ ...headerOption, title: MATCH_CREATE_TITLE }}
      />
      <Stack.Screen
        name="TeamCreate"
        component={TeamCreateScreen}
        options={{ ...headerOption, title: TEAM_CREATE_TITLE }}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{ ...headerOption, title: CHAT_TITLE }}
      />
    </Stack.Navigator>
  );
}
