import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";

export default function SideButton({ setIsModal, icon, style }) {
  const { bottom, right } = style;

  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        bottom,
        right,
      }}
      onPress={() => setIsModal()}
    >
      <Icon name={icon} size={50} />
    </TouchableOpacity>
  );
}

SideButton.propTypes = {
  setIsModal: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
  },
});
