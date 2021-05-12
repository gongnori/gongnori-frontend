import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { useSelector } from "react-redux";
import produce from "immer";

import MyTeamHeader from "../components/MyTeamHeader";
import TeamOverview from "../components/TeamOverview";
import TeamMember from "../components/TeamMember";
import TeamMatch from "../components/TeamMatch";
import SideButton from "../components/SideButton";

import * as color from "../constants/colors";

export default function MyTeamScreen({ navigation }) {
  const myTeam = useSelector((state) => {
    return state.teamReducer.myTeam;
  }, (prev, next) => {
    return produce(prev, (draft) => draft) === produce(next, (draft) => draft);
  });

  return (
    <View style={styles.container}>
      <MyTeamHeader />
      <View style={styles.body}>
        {myTeam && (
          <>
            <TeamOverview team={myTeam} />
            <TeamMember team={myTeam} />
            <TeamMatch team={myTeam} />
          </>
        )}
      </View>
      <SideButton
        navigation={navigation}
        route="TeamCreate"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: color.PRIMARY_GRAY,
  },
  body: {
    flex: 1,
    alignItems: "center",
    backgroundColor: color.PRIMARY_GRAY,
  },
});
