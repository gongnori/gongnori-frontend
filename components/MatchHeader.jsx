import React from "react";
import { StyleSheet, View, Text } from "react-native";
import DropDown from "./DropDown";
import * as color from "../constants/colors";

export default function MatchScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.location}>
        <DropDown value="보정동" />
      </View>
      <View style={styles.date}>
        <Text>달력</Text>
      </View>
      <View style={styles.sports}>
        <DropDown value="축구" />
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
    backgroundColor: color.SECONDARY_BROWN,
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
