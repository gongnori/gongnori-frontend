import React from "react";
import { StyleSheet, View, Text } from "react-native";
import GameListHeader from "../components/GameListHeader";

export default function GameListScreen() {
  return (
    <View style={styles.container}>
      <GameListHeader />
      <View>
        <Text>body</Text>
      </View>
      <View>
        <Text>tab</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "stretch",
    backgroundColor: "#FAF2E0",
  },
});
