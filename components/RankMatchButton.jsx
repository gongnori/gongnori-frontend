import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import _ from "lodash";
import { API_SERVER } from "@env";
import fetchServer from "../utils/fetchServer";
import * as sizes from "../constants/sizes";

export default function RankMatchButton({ navigation }) {
  const currentTeam = useSelector((state) => {
    return state.userReducer.currentTeam;
  }, (prev, next) => _.cloneDeep(prev) === _.cloneDeep(next));

  const handlePressButton = () => {
    fetchServer("POST", `${API_SERVER}/match/rank-match`, currentTeam);
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => handlePressButton()}
    >
      <Icon name="search" size={50} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 0.05 * sizes.DEVICE_HEIGHT,
    right: 0.1 * sizes.DEVICE_WIDTH,
  },
});
