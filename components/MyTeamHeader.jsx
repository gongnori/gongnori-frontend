import React from "react";
import { StyleSheet, View } from "react-native";
import DropDown from "./DropDown";
import * as color from "../constants/colors";
import * as size from "../constants/sizes";

export default function MyTeamHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.team}>
        <DropDown
          value="양민FC"
          options={["양민FC", "수지FC"]}
          width={size.MY_TEAM_HEADER_DROPDOWN_WIDTH}
          height={size.MY_TEAM_HEADER_DROPDOWN_HEIGHT}
          fontSize={15}
        />
      </View>
      <View style={styles.blank} />
      <View style={styles.sports}>
        <DropDown
          value="축구"
          options={["축구", "농구", "야구"]}
          width={size.MY_TEAM_HEADER_DROPDOWN_WIDTH}
          height={size.MY_TEAM_HEADER_DROPDOWN_HEIGHT}
          fontSize={15}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    height: size.MY_TEAM_HEADER_HEIGHT,
    backgroundColor: color.PRIMARY_BLUE,
  },
  team: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  blank: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  sports: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
