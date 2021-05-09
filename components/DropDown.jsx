import React from "react";
import { StyleSheet } from "react-native";
import ModalDropdown from "react-native-modal-dropdown";
import * as device from "../constants/device";

export default function DropDown({ value }) {
  return (
    <ModalDropdown
      defaultValue={value}
      options={["option 1", "option 2"]}
      style={styles.button}
      textStyle={styles.buttonText}
      dropdownStyle={styles.dropdown}
      dropdownTextStyle={styles.dropdownText}
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
    width: "80%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  buttonText: {
    fontSize: 15,
    color: "black",
    textAlign: "center",
    textAlignVertical: "center",
  },
  dropdown: {
    width: 100,
    height: 100,
  },
  dropdownText: {
    fontSize: 15,
    color: "black",
    textAlign: "center",
    textAlignVertical: "center",
  },
});
