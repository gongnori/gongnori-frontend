import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import * as device from "../constants/device";

const DEVICE_WIDTH = device.WIDTH;
const DEVICE_HEIGHT = device.HEIGHT;

export default function SideButton({ setIsModal }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => setIsModal()}
    >
      <Icon name="search" size={50} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 0.13 * DEVICE_HEIGHT,
    right: 0.1 * DEVICE_WIDTH,
  },
});
