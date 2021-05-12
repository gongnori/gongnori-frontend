import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { useSelector } from "react-redux";
import produce from "immer";
import MyTeamHeader from "../components/MyTeamHeader";
import MyTeamOverview from "../components/MyTeamOverview";
import MyTeamMember from "../components/MyTeamMember";
import SideButton from "../components/SideButton";
import * as color from "../constants/colors";

export default function MyTeamScreen({ navigation }) {
  const myTeam = useSelector((state) => {
    return state.teamReducer.myTeam;
  }, (prev, next) => {
    return produce(prev, (draft) => draft) === produce(next, (draft) => draft);
  });

  // if (!myTeam) {
  //   return //<View></View>
  // }

  return (
    <View style={styles.container}>
      <MyTeamHeader />
      <View style={styles.body}>
        <MyTeamOverview myTeam={myTeam} />
        <MyTeamMember myTeam={myTeam} />
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
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: color.PRIMARY_GRAY,
  },
  body: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: color.PRIMARY_GRAY,
  },
});
