import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import * as colors from "../constants/colors";
import * as fonts from "../constants/fonts";
import * as sizes from "../constants/sizes";

const DATE_CONTROLLER_WIDTH = 150;
const DATE_CONTROLLER_HEIGHT = 50;

export default function DateController({ year, month, date, onPressButton }) {
  return (
    <View style={styles.container}>
      <Icon
        name="arrow-back-circle-outline"
        size={sizes.PRIMARY_FONT_SIZE}
        color={colors.SECONDARY_WHITE}
        onPress={() => onPressButton("back")}
      />
      <View style={styles.date}>
        <Text style={styles.text}>{`${month}월 `}</Text>
        <Text style={styles.text}>{`${date}일`}</Text>
      </View>
      <Icon
        name="arrow-forward-circle-outline"
        size={sizes.PRIMARY_FONT_SIZE}
        color={colors.SECONDARY_WHITE}
        onPress={() => onPressButton("forward")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: DATE_CONTROLLER_WIDTH,
    height: DATE_CONTROLLER_HEIGHT,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  date: {
    width: 0.5 * DATE_CONTROLLER_WIDTH,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  text: {
    textAlign: "left",
    textAlignVertical: "center",
    color: colors.SECONDARY_WHITE,
    fontSize: sizes.SECONDARY_FONT_SIZE,
    fontFamily: fonts.NOTO_SANS_KR_400_REGULAR,
    includeFontPadding: false,
  },
});
