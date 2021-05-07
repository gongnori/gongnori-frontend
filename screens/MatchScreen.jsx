import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MatchHeader from "../components/MatchHeader";


export default function GameListScreen() {
  return (
    <View style={styles.container}>
      <MatchHeader />
      <View>
        <Text>body</Text>
      </View>
      <View style={styles.tab}>
        <Text>Match</Text>
        <Text>Rank</Text>
        <Text>Message</Text>
        <Text>Setting</Text>
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
