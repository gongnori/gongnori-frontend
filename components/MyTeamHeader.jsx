import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import DropDown from "./DropDown";
import { setCurrenTeam } from "../actions/userActionCreators";
import * as color from "../constants/colors";
import * as size from "../constants/sizes";

export default function MyTeamHeader() {
  const myTeams = useSelector((state) => {
    return state.userReducer.teams;
  }, (prev, next) => _.cloneDeep(prev) === _.cloneDeep(next));

  const currentTeam = useSelector((state) => {
    return state.userReducer.currentTeam;
  }, (prev, next) => _.cloneDeep(prev) === _.cloneDeep(next));

  const dispatch = useDispatch();

  const teamOptions = myTeams.map((team) => team.name);

  const handleSelectTeam = (index) => {
    dispatch(setCurrenTeam(myTeams[index]));
  };

  return (
    <View style={styles.container}>
      <View style={styles.team}>
        <DropDown
          value={currentTeam.name}
          options={teamOptions}
          width={size.MY_TEAM_HEADER_DROPDOWN_WIDTH}
          height={size.MY_TEAM_HEADER_DROPDOWN_HEIGHT}
          fontSize={15}
          onSelect={handleSelectTeam}
        />
      </View>
      <View style={styles.blank} />
      <View style={styles.sports}>
        {/* <DropDown
          value="football"
          options={sportsOptions}
          width={size.MY_TEAM_HEADER_DROPDOWN_WIDTH}
          height={size.MY_TEAM_HEADER_DROPDOWN_HEIGHT}
          fontSize={15}
        /> */}
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
