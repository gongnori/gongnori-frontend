import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import MatchScreen from "../screens/MatchScreen";
import RankScreen from "../screens/RankScreen";
import MyTeamScreen from "../screens/MyTeamScreen";
import MessageScreen from "../screens/MessageScreen";
import SettingScreen from "../screens/SettingScreen";

import * as colors from "../constants/colors";
import * as fonts from "../constants/fonts";
import * as sizes from "../constants/sizes";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case "Match":
              iconName = "football";
              break;
            case "Rank":
              iconName = "trophy";
              break;
            case "MyTeam":
              iconName = "people";
              break;
            case "Message":
              iconName = "chatbox-ellipses";
              break;
            case "Setting":
              iconName = "settings";
              break;
            default:
              iconName = "alert-circle";
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        unmountOnBlur: true,
      })}
      tabBarOptions={{
        activeTintColor: colors.SECONDARY_BLUE,
        inactiveTintColor: colors.PRIMARY_GRAY,
        style: {
          backgroundColor: colors.SECONDARY_WHITE,
          height: 0.08 * sizes.DEVICE_HEIGHT,
        },
        labelStyle: {
          padding: 0,
          marginTop: -5,
          marginBottom: 5,
          textAlign: "left",
          textAlignVertical: "center",
          fontSize: sizes.QUINARY_FONT_SIZE,
          fontFamily: fonts.NOTO_SANS_KR_300_LIGHT,
          includeFontPadding: false,
        },
      }}
    >
      <Tab.Screen name="Match" component={MatchScreen} />
      <Tab.Screen name="Rank" component={RankScreen} />
      <Tab.Screen name="MyTeam" component={MyTeamScreen} />
      <Tab.Screen name="Message" component={MessageScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
}
