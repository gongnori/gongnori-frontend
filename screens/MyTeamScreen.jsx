import produce from "immer";
import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { useSelector } from "react-redux";
import MyTeamHeader from "../components/MyTeamHeader";
import MyTeamOverview from "../components/MyTeamOverview";
import MyTeamMember from "../components/MyTeamMember";
import * as color from  "../constants/colors";

export default function MatchListScreen({ navigation }) {
  // const matches = useSelector((state) => {
  //   return state.matchReducer.matches;
  // }, (prev, next) => {
  //   return produce(prev, (draft) => draft) === produce(next, (draft) => draft);
  // });

  return (
    <View style={styles.container}>
      <MyTeamHeader />
      <View style={styles.body}>
        <MyTeamOverview />
        <MyTeamMember />
      </View>
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
