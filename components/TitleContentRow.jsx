import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as font from "../constants/fonts";

export default function TitleContentRow({ title, content }) {
  return (
    <View style={styles.container}>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={styles.title}
      >
        {title}
      </Text>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={styles.content}
      >
        {content}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 300,
  },
  title: {
    flex: 1,
    height: "100%",
    textAlign: "left",
    textAlignVertical: "center",
    fontSize: 14,
    fontFamily: font.DO_HYEON_400_REGULAR,
  },
  content: {
    flex: 3,
    height: "100%",
    textAlign: "left",
    textAlignVertical: "center",
    fontSize: 12,
    fontFamily: font.NANUM_GOTHIC_CODING_400_REGULAR,
  },
});
