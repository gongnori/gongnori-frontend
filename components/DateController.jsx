import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import useDateController from "../hooks/useDateController";
import { getMatch } from "../actions/actions";
import * as color from "../constants/colors";

const DATE_CONTROLLER_ICON_SIZE = 30;
const DATE_CONTROLLER_FONT_SIZE = 16;
const DATE_CONTROLLER_WIDTH = 150;
const DATE_CONTROLLER_HEIGHT = 50;

export default function DateController() {
  const dispatch = useDispatch();

  const [year, month, date, handlePressButton] = useDateController();

  useEffect(() => {
    dispatch(getMatch(year, month, date));
  }, [year, month, date]);

  return (
    <View style={styles.container}>
      <Icon
        name="arrow-back-circle-outline"
        size={DATE_CONTROLLER_ICON_SIZE}
        color={color.PRIMARY_BROWN}
        onPress={() => handlePressButton("back")}
      />
      <View style={styles.date}>
        <Text style={styles.text}>{`${month} 월`}</Text>
        <Text style={styles.text}>{`${date} 일`}</Text>
      </View>
      <Icon
        name="arrow-forward-circle-outline"
        size={DATE_CONTROLLER_ICON_SIZE}
        color={color.PRIMARY_BROWN}
        onPress={() => handlePressButton("forward")}
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
    fontSize: DATE_CONTROLLER_FONT_SIZE,
  },
});
