import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

export default function CustomButton({ title }) {
  return (
    <TouchableOpacity style={styles.button}>
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
    backgroundColor: "#886551",
  },
  title: {
    fontSize: 20,
  },
});

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
};
