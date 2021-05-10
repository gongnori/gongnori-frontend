import React from "react";
import { StyleSheet, View, Text } from "react-native";
import DropDown from "../components/DropDown"

export default function MatchCreateScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.type}>
        <Text>경기방식</Text>
        <DropDown
          value="5:5"
          options={["5:5", "6:6", "7:7"]}
          width={100}
          height={100}
          fontSize={15}
        />
      </View>
      <View style={styles.date}>
        <Text>경기날짜</Text>
      </View>
      <View style={styles.time}>
        <Text>경기시간</Text>
      </View>
      <View style={styles.stadium}>
        <Text>경기장소</Text>
      </View>
      <View style={styles.map}>
        <Text>경기장소</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#FAF2E0",
  },
  type: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FAF2E0",
  },
  date: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#FAF2E0",
  },
  time: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#FAF2E0",
  },
  statdium: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#FAF2E0",
  },
  map: {
    flex: 5,
    justifyContent: "flex-start",
    backgroundColor: "#FAF2E0",
  },
});
