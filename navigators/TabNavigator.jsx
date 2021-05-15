import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/HomeScreen";
import MatchScreen from "../screens/MatchScreen";
import RankScreen from "../screens/RankScreen";
import MyTeamScreen from "../screens/MyTeamScreen";
import MessageScreen from "../screens/MessageScreen";
import SettingScreen from "../screens/SettingScreen";

import * as color from "../constants/colors";
import * as font from "../constants/fonts";
import * as size from "../constants/sizes";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = "home-sharp";
              break;
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
        activeTintColor: color.PRIMARY_BLUE,
        inactiveTintColor: "#B0BEC5",
        style: {
          backgroundColor: color.PRIMARY_WHITE,
          height: size.TAB_NAVIGATOR_HEIGTH,
        },
        labelStyle: {
          fontSize: size.TAB_NAVIGATOR_LABEL_FONT_SIZE,
          marginBottom: size.TAB_NAVIGATOR_LABEL_MARGIN_BOTTOM,
          fontFamily: font.NANUM_GOTHIC_CODING_700_BOLD,
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Match" component={MatchScreen} />
      <Tab.Screen name="Rank" component={RankScreen} />
      <Tab.Screen name="MyTeam" component={MyTeamScreen} />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        // options={{ unmountOnBlur: true }}
      />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
}
