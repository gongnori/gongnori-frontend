import React from "react";
import { StyleSheet } from "react-native";
import ModalDropdown from "react-native-modal-dropdown";
import * as device from "../constants/device";
import * as font from "../constants/fonts";

const TEXT_VERTICAL_MARGIN = 5;

export default function DropDown({
  value = "Drop Down",
  options = ["option1, option2, option3"],
  // width = 100,
  // height = 30,
  // fontSize = 12,
  // backgroundColor,
  style = {},
  onSelect = () => console.log("Declare Event Function")
}) {
  const total = options.length;
  const { width, height, borderRadius, backgroundColor, fontSize } = style;

  return (
    <ModalDropdown
      defaultValue={value}
      options={[...options]}
      style={{
        ...styles.button,
        width,
        height,
        borderRadius,
        backgroundColor,
      }}
      textStyle={{
        ...styles.buttonText,
        width,
        height,
        fontSize,
      }}
      dropdownStyle={{
        width: 1.0 * width,
        height: Math.min(
          5 * (2 * TEXT_VERTICAL_MARGIN + 2 * TEXT_VERTICAL_MARGIN + fontSize),
          total * (2 * TEXT_VERTICAL_MARGIN + 2 * TEXT_VERTICAL_MARGIN + fontSize)
        ),
      }}
      dropdownTextStyle={{
        ...styles.dropdownText,
        height: 2 * TEXT_VERTICAL_MARGIN + fontSize,
        fontSize,
      }}
      adjustFrame={(style) => {
        // if (device.OS === "Android") {
        //   style.top -= 20;
        // }
        // if (device.OS === "iOS") {
        //   style.top += 10;
        // }

        style.height += 0;

        return style;
      }}
      onSelect={onSelect}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    textAlignVertical: "center",
    fontFamily: font.NOTO_SANS_KR_400_REGULAR,
    includeFontPadding: false,
  },
  dropdownText: {
    color: "black",
    textAlign: "center",
    textAlignVertical: "center",
    marginBottom: TEXT_VERTICAL_MARGIN,
    marginTop: TEXT_VERTICAL_MARGIN,
    paddingTop: 0,
    paddingBottom: 0,
    fontFamily: font.NOTO_SANS_KR_300_LIGHT,
    includeFontPadding: false,
  },
});
