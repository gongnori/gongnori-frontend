import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as color from "../constants/colors";
import * as device from "../constants/device";
import * as font from "../constants/fonts";

export default function MatchItem({ item, navigation }) {
  const id = item._id;
  const createdAt = item.created_at;
  const matchType = item.match_type;
  const playground = item.playground;

  const { name } = item.teams[0];
  const { province, city, district } = item.teams[0].location;
  const { start, end } = item.playtime

  const startTime = new Date(start).getHours();
  const endTime = new Date(end).getHours();

  const handlePressMatch = () => {
    navigation.navigate("MatchJoin", { match: item });
  }

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.container}
      onPress={handlePressMatch}
    >
      <View style={styles.emblemContainer}>
        <Image
          style={styles.emblem}
          source={require("../assets/realmadrid_emblem.png")}
        />
        <Text style={styles.teamName}>{name}</Text>
      </View>
      <View style={styles.matchInfoContainer}>
        <Text style={styles.playgroundName}>{playground.name}</Text>
        <Text style={styles.location}>{`${province} ${city} ${district}`}</Text>
        <Text style={styles.playtime}>{`${startTime}:00 - ${endTime}:00`}</Text>
        <Text style={styles.matchType}>{`${matchType}`}</Text>
      </View>
    </TouchableOpacity>
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
    borderRadius: 10,
    // borderRightWidth: 1,
    // borderRightColor: "gray",
    borderBottomWidth: 1,
    borderBottomColor: color.PRIMARY_BLUE,
    backgroundColor: color.SECONDARY_WHITE,
  },
  emblemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  emblem: {
    flex: 8,
    width: "60%",
    height: "60%",
    resizeMode: "contain",
  },
  teamName: {
    flex: 2,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 18,
    fontFamily: font.DO_HYEON_400_REGULAR,
  },
  matchInfoContainer: {
    flex: 3,
    justifyContent: "space-around",
    alignItems: "flex-start",
    height: "100%",
    paddingLeft: 10,
  },
  playgroundName: {
    fontSize: 16,
    fontFamily: font.DO_HYEON_400_REGULAR,
  },
  location: {
    fontSize: 12,
    fontFamily: font.NANUM_GOTHIC_CODING_400_REGULAR,
  },
  playtime: {
    fontSize: 14,
    fontFamily: font.DO_HYEON_400_REGULAR,
  },
  matchType: {
    fontSize: 14,
    fontFamily: font.NANUM_GOTHIC_CODING_400_REGULAR,
  },
});
