import React, { useEffect } from "react";
import { View, Text } from "react-native";

export default function HomeScreen() {
  useEffect(() => {
    console.log("Home");
  }, [])

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
