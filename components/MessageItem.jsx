import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as color from "../constants/colors";
// import * as device from "../constants/device";
import getDateFromIso from "../utils/getDateFromIso";
import * as size from  "../constants/sizes";
import * as font from "../constants/fonts";

export default function MessageItem({ item, navigation }) {
  // const { id, type, playground, host, playtime } = item
  // const { province, city, district } = playground;
  // const { start, end } = playtime;
  // const { name, emblem } = host;

  // const startTime = new Date(start).getHours();
  // const endTime = new Date(end).getHours();

  const handlePressMessage = () => {
    navigation.navigate("Chat", { message: item });
  };

  const { guest, host, playground, playtime, sports, type } = item

  const [startYear, startMonth, startDate, startHour] = getDateFromIso(playtime.start);
  const [endYear, endMonth, endDate, endHour] = getDateFromIso(playtime.end);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.container}
      onPress={handlePressMessage}
    >
      {/* <View style={styles.team}> */}
        <Text style={styles.sports}>{`${sports} ${type}`}</Text>
        <Text style={styles.team}>{`${host.team} vs ${guest.team}`}</Text>
        <Text style={styles.plyaground}>{`${playground.city} ${playground.district}`}</Text>
        <Text style={styles.playgroundName}>{playground.name}</Text>
        <Text style={styles.playtime}>{`${startMonth}월 ${startDate}일 ${startHour}:00 ~ ${endHour}:00` }</Text>
      {/* </View> */}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    alignItems: "flex-start",
    width: 0.8 * size.DEVICE_WIDTH,
    height: 0.2 * size.DEVICE_HEIGHT,
    margin: 15,
    paddingLeft: 15,
    borderRadius: 10,
    backgroundColor: color.PRIMARY_YELLOW,
    elevation: 5,
    shadowColor: "rgb(50, 50, 50)",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      height: -1,
      width: 0,
    },
  },
  sports: {
    fontSize: size.TERTIARY_FONT_SIZE,
    fontFamily: font.NOTO_SANS_KR_500_MEDIUM,
    includeFontPadding: false,
  },
  team: {
    fontSize: size.QUATERNARY_FONT_SIZE,
    fontFamily: font.NOTO_SANS_KR_500_MEDIUM,
    includeFontPadding: false,
  },
  playgroundName: {
    fontSize: size.QUATERNARY_FONT_SIZE,
    fontFamily: font.NOTO_SANS_KR_300_LIGHT,
    includeFontPadding: false,
  },
  plyaground: {
    fontSize: size.QUATERNARY_FONT_SIZE,
    fontFamily: font.NOTO_SANS_KR_400_REGULAR,
    includeFontPadding: false,
  },
  playtime: {
    fontSize: size.QUATERNARY_FONT_SIZE,
    fontFamily: font.NOTO_SANS_KR_300_LIGHT,
    includeFontPadding: false,
  },
});
