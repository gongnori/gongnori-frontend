import React from "react";
import { StyleSheet } from "react-native";
import ModalDropdown from "react-native-modal-dropdown";
import * as device from "../constants/device";

const TEXT_VERTICAL_MARGIN = 5;

export default function DropDown({ value, options, width, height, fontSize }) {
  const total = options.length;

  return (
    <ModalDropdown
      defaultValue={value}
      options={[...options]}
      style={{
        ...styles.button,
        width,
        height,
      }}
      textStyle={{
        ...styles.buttonText,
        width,
        height,
        fontSize,
      }}
      dropdownStyle={{
        width: 2 * width,
        height: (total) * (4 * TEXT_VERTICAL_MARGIN + fontSize),
      }}
      dropdownTextStyle={{
        ...styles.dropdownText,
        height: 2 * TEXT_VERTICAL_MARGIN + fontSize,
        fontSize,
      }}
      adjustFrame={(style) => {
        if (device.OS === "Android") {
          style.top -= 20;
        }
        if (device.OS === "iOS") {
          style.top += 10;
        }

        style.height += 0;

        return style;
      }}
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
  },
  dropdownText: {
    color: "black",
    textAlign: "center",
    textAlignVertical: "center",
    marginBottom: TEXT_VERTICAL_MARGIN,
    marginTop: TEXT_VERTICAL_MARGIN,
    paddingTop: 0,
    paddingBottom: 0,
  },
});
