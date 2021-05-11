import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import * as color from "../constants/colors";
import * as device from "../constants/device";

export default function MatchItem({ item }) {
  console.log(item)
  const id = item._id;
  const createdAt = item.created_at;
  const matchType = item.match_type;
  const playground = item.playground;
  const playtime = item.playtime;
  const teams = item.teams;

  const startTime = new Date(playtime.start).getHours();
  const endTime = new Date(playtime.end).getHours();

  return (
    <View style={styles.container}>
      <View style={styles.emblemContainer}>
        <Image
          style={styles.emblem}
          source={require("../assets/realmadrid_emblem.png")}
        />
      </View>
      <View style={styles.matchInfoContainer}>
        <Text>{playground}</Text>
        <Text>용인시 기흥구 보정동</Text>
        <Text>5월 21일</Text>
        <Text>{`${startTime}:00 - ${endTime}:00`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 0.15 * device.HEIGHT,
    marginBottom: 0.02 * device.HEIGHT,
    borderBottomWidth: 1,
    borderBottomColor: color.PRIMARY_BLUE,
  },
  emblemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  emblem: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },
  matchInfoContainer: {
    flex: 3,
    justifyContent: "space-around",
    alignItems: "flex-start",
    height: "100%",
    paddingLeft: 10,
  },
});
