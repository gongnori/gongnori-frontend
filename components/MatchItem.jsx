import React from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import * as color from "../constants/colors";

const deviceHeight = Dimensions.get("screen").width;

export default function MatchItem({item}) {
  return (
    <View style={styles.container}>
      <View style={styles.emblemContainer}>
        <Image
          style={styles.emblem}
          source={require("../assets/realmadrid_emblem.png")}
        />
      </View>
      <View style={styles.matchInfoContainer}>
        <Text>풋살장</Text>
        <Text>{item}</Text>
        <Text>5월 21일</Text>
        <Text>10:00 - 12:00</Text>
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
    height: 0.3 * deviceHeight,
    marginBottom: 0.03 * deviceHeight,
    borderBottomWidth: 1,
    borderBottomColor: color.SECONDARY_BROWN,
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
