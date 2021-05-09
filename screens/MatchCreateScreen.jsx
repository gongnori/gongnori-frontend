import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function MatchCreateScreen() {
  return (
    <View style={styles.container}>
      <Text>Stack</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#FAF2E0",
  },
});
