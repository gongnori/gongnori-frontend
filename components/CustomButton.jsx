import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import * as color from "../constants/colors";
import * as font from "../constants/fonts";
import * as size from "../constants/sizes";

export default function CustomButton({
  title = "Button",
  onPress,
  buttonStyle = {},
  textStyle = {},
}) {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        ...buttonStyle,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          ...styles.text,
          ...textStyle,
        }}
      >
        { title }
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: color.PRIMARY_BLUE,
  },
  text: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: size.TERTIARY_FONT_SIZE,
    fontFamily: font.NOTO_SANS_KR_500_MEDIUM,
    color: color.SECONDARY_WHITE,
    includeFontPadding: false,
  }
});

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
};
