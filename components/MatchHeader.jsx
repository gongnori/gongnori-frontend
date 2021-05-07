import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function MatchScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.location}>
        <Text>보정동</Text>
      </View>
      <View style={styles.date}>
        <Text>달력</Text>
      </View>
      <View style={styles.sports}>
        <Text>축구</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    height: "10%",
    backgroundColor: "#886551",
  },
  location: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  date: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  sports: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
