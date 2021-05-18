import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import * as device from "../constants/device";

const DEVICE_WIDTH = device.WIDTH;
const DEVICE_HEIGHT = device.HEIGHT;

export default function SideButton({ navigation, path, rank }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate(path, { rank })}
    >
      <Icon name="add-circle" size={50} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 0.05 * DEVICE_HEIGHT,
    right: 0.1 * DEVICE_WIDTH,
  },
});
