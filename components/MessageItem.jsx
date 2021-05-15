import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as color from "../constants/colors";
// import * as device from "../constants/device";
import * as size from  "../constants/sizes";
import * as font from "../constants/fonts";

export default function MessageItem({ item, navigation }) {
  // const { id, type, playground, host, playtime } = item
  // const { province, city, district } = playground;
  // const { start, end } = playtime;
  // const { name, emblem } = host;

  // const startTime = new Date(start).getHours();
  // const endTime = new Date(end).getHours();

  const handlePressMatch = () => {
    navigation.navigate("MatchJoin", { match: item });
  };

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.container}
      onPress={handlePressMatch}
    >
      <View style={styles.team}>
        <Text style={styles.title}>신청팀</Text>
        <Text style={styles.content}>신청팀 이름</Text>
      </View>
      <View style={styles.match}>
        <Text style={styles.title}>신청경기</Text>
        <Text style={styles.content}>경기장</Text>
        <Text style={styles.content}>시간</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 0.8 * size.DEVICE_WIDTH,
    height: 0.2 * size.DEVICE_HEIGHT,
    margin: 0.01 * size.DEVICE_HEIGHT,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: color.PRIMARY_BLUE,
    backgroundColor: color.SECONDARY_WHITE,
  },
  team: {
    flex: 2,
    justifyContent: "center",
    width: "90%",
  },
  match: {
    flex: 3,
    justifyContent: "center",
    width: "90%",
  },
  title: {
    fontSize: size.QUATERNARY_FONT_SIZE,
    fontFamily: font.NOTO_SANS_KR_400_REGULAR,
    textAlign: "left",
    textAlignVertical: "center",
    includeFontPadding: false,
  },
  content: {
    fontSize: size.QUATERNARY_FONT_SIZE,
    fontFamily: font.NOTO_SANS_KR_300_LIGHT,
    includeFontPadding: false,
  }
});
