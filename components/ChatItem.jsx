import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";
import getDateFromIso from "../utils/getDateFromIso";
import * as colors from "../constants/colors";
import * as sizes from "../constants/sizes";
import * as fonts from "../constants/fonts";

export default function ChatItem({ item }) {
  console.log(item)
  const userName = useSelector((state) => state.userReducer.name);

  const isMyMessage = userName === item.name;
  const layout = isMyMessage ? "flex-end" : "flex-start";
  const color = isMyMessage ? "FFE082" : colors.SECONDARY_WHITE;

  const [year, month, date, hour, minute] = getDateFromIso(item.date);

  return (
    <View
      style={{ alignSelf: layout }}
    >
      {!isMyMessage && <Text style={styles.name}>{`${item.name}`}</Text>}
      <View style={styles.messageDateBox}>
        {isMyMessage && <Text style={styles.date}>{`${hour}:${minute}`}</Text>}
        <Text style={{ ...styles.message, backgroundColor: color }}>
          {item.content}
        </Text>
        {!isMyMessage && <Text style={styles.date}>{`${hour}:${minute}`}</Text>}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  message: {
    maxWidth: 0.5 * sizes.DEVICE_WIDTH,
    minWidth: 0.05 * sizes.DEVICE_WIDTH,
    margin: 10,
    padding: 10,
    borderRadius: 5,
    fontFamily: fonts.NOTO_SANS_KR_400_REGULAR,
    includeFontPadding: false,
  },
  messageDateBox: {
    flexDirection: "row",
  },
  name: {
    textAlign: "left",
    textAlignVertical: "bottom",
    fontSize: sizes.QUATERNARY_FONT_SIZE,
    fontFamily: fonts.NOTO_SANS_KR_300_LIGHT,
    includeFontPadding: false,
  },
  date: {
    marginBottom: 10,
    textAlign: "center",
    textAlignVertical: "bottom",
    fontSize: sizes.QUATERNARY_FONT_SIZE,
    fontFamily: fonts.NOTO_SANS_KR_100_THIN,
    includeFontPadding: false,
  }
});

