import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/HomeScreen";
import MatchScreen from "../screens/MatchScreen";
import RankScreen from "../screens/RankScreen";
import MessageScreen from "../screens/MessageScreen";
import SettingScreen from "../screens/SettingScreen";
import { Dimensions } from "react-native";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
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
              case "Message":
                iconName = "chatbox-ellipses";
                break;
              case "Setting":
                iconName = "settings";
                break;
              default:
                iconName = "alert-circle";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#886551",
          inactiveTintColor: "#BEBEBE",
          style: {
            backgroundColor: "#FFFFFF",
            height: 60,
          },
          labelStyle: {
            fontSize: 12,
            marginBottom: 5,
          },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Match" component={MatchScreen} />
        <Tab.Screen name="Rank" component={RankScreen} />
        <Tab.Screen name="Message" component={MessageScreen} />
        <Tab.Screen name="Setting" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
