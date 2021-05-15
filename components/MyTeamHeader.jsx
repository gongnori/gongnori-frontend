import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import produce from "immer";
import DropDown from "./DropDown";
import { getMyTeam } from "../actions/actions";
import * as color from "../constants/colors";
import * as size from "../constants/sizes";

export default function MyTeamHeader() {
  const myTeams = useSelector((state) => {
    return state.userReducer.teams;
  }, (prev, next) => {
    return produce(prev, (draft) => draft) === produce(next, (draft) => draft);
  });

  const [team, setTeam] = useState(myTeams[0]);
  const dispatch = useDispatch();

  const teamOptions = myTeams.map((team) => team.name);

  const handleSelectTeam = (index) => setTeam(myTeams[index]);

  useEffect(() => {
    dispatch(getMyTeam(team));
  }, [team]);

  return (
    <View style={styles.container}>
      <View style={styles.team}>
        <DropDown
          value={teamOptions[0]}
          options={teamOptions}
          width={size.MY_TEAM_HEADER_DROPDOWN_WIDTH}
          height={size.MY_TEAM_HEADER_DROPDOWN_HEIGHT}
          fontSize={15}
          onSelect={handleSelectTeam}
        />
      </View>
      <View style={styles.blank} />
      <View style={styles.sports}>
        <DropDown
          value="football"
          options={["football", "basketball", "baseball"]}
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
