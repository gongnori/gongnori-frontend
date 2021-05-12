import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import * as color from "../constants/colors";
import * as font from "../constants/fonts";
import * as size from "../constants/sizes";

export default function MyTeamMach({ myTeam }) {
  const { matches } = myTeam;
  const fixedMatches = matches.filter((match) => match.teams.length === 2);

  return (
    <View style={styles.matches}>
      <Text style={styles.title}>경기 일정</Text>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {
          matches.map((match) => { // matches -> fixedMathes로 바꿀것.
            const { playtime, teams, playground } = match;
            const { city, district } = playground.address;

            const matchMonth = new Date(playtime.start).getMonth() + 1;
            const matchDate = new Date(playtime.start).getDate();
            const startTime = new Date(playtime.start).getHours();
            const endTime = new Date(playtime.end).getHours();

            // const opponent = teams.filter((team) =>  myTeam.name !== team.name)
            return (
              <View style={styles.match}>
                <Text style={styles.primary}>{`vs ${teams[0].name}`}</Text>
                <View style={styles.cell}>
                  <Text style={styles.secondary}>{`${matchMonth}월 ${matchDate}일`}</Text>
                  <Text style={styles.tertiary}>{`${startTime}:00 - ${endTime}:00`}</Text>
                </View>
                <View style={styles.cell}>
                  <Text numberOfLines={1} ellipsizeMode="tail" style={styles.secondary}>{playground.name}</Text>
                  <Text style={styles.tertiary}>{`${city} ${district}`}</Text>
                </View>
              </View>
            );
          })
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  matches: {
    alignItems: "flex-start",
    width: size.MY_TEAM_MATCH_WIDTH,
    height: size.MY_TEAM_MATCH_HEIGHT,
    marginTop: 15,
  },
  title: {
    textAlign: "left",
    textAlignVertical: "center",
    marginBottom: 10,
    marginLeft: 10,
    fontSize: 16, //size.MY_TEAM_OVERVIEW_TITLE_FONT_SIZE,
    fontFamily: font.BLACK_HANS_SANS_400_REGULAR,
  },
  scroll: {
    width: "100%",
    backgroundColor: color.SECONDARY_WHITE,
    borderRadius: 10,
  },
  match: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    height: 40,
    borderBottomWidth: 0.5,
    borderBottomColor: color.PRIMARY_BLUE,
  },
  cell: {
    flex: 1,
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  primary: {
    flex: 1,
    height: "100%",
    textAlign: "left",
    textAlignVertical: "center",
    fontSize: 16,
    fontFamily: font.DO_HYEON_400_REGULAR,
  },
  secondary: {
    textAlign: "left",
    textAlignVertical: "center",
    fontSize: 14,
    fontFamily: font.DO_HYEON_400_REGULAR,
  },
  tertiary: {
    textAlign: "left",
    textAlignVertical: "center",
    fontSize: 12,
    fontFamily: font.NANUM_GOTHIC_CODING_400_REGULAR,
  },
});
