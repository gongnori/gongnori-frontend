import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import * as color from "../constants/colors";

export default function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.title}>{ title }</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: "6%",
    borderRadius: 10,
    backgroundColor: color.PRIMARY_BLUE,
  },
  title: {
    fontSize: 20,
  },
});

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
};
