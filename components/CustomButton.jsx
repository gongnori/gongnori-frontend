import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import * as color from "../constants/colors";
import * as font from "../constants/fonts";

export default function CustomButton({
  title = "Button",
  width = 100,
  height = 30,
  backgroundColor = "#000000",
  color = "#ffffff",
  fontSize = 16,
  onPress
}) {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        width,
        height,
        backgroundColor,
      }}
      onPress={onPress}
    >
      <Text style={{ color, fontSize }}>{ title }</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    fontFamily: font.NOTO_SANS_KR_400_REGULAR,
  },
});

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
};
