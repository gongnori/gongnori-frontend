import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TeamOverview from "../components/TeamOverview";
import TitleContrntRow from "../components/TitleContentRow";
import PlaceMap from "../components/PlaceMap"
import useHeaderRight from  "../hooks/useHeaderRight";

import getDateFromIso from "../utils/getDateFromIso";

import * as color from "../constants/colors";

export default function MatchJoinScreen({ navigation, route }) {
  const { playtime, match_type, playground, teams } = route.params.match
  const host = teams[0];
  const [startYear, startMonth, startDate, startHour] = getDateFromIso(playtime.start);
  const [endYear, endMonth, endDate, endHour] = getDateFromIso(playtime.end);
  const { city, district, town, detail } = playground.address;

  useHeaderRight(navigation, "team", null);

  return (
    <View style={styles.container}>
      <TeamOverview team={host} />
      <View style={styles.textContainer}>
        <TitleContrntRow title={"경기방식"} content={"5:5"} />
        <TitleContrntRow title={"날짜"} content={`${startMonth}월 ${startDate}일`} />
        <TitleContrntRow title={"시간"} content={`${startHour}:00 - ${endHour}:00`} />
        <TitleContrntRow title={"경기장"} content={playground.name} />
        <TitleContrntRow title={"주소"} content={`${city} ${district} ${town} ${detail}`} />
      </View>
      <PlaceMap origin={playground.position} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: color.PRIMARY_GRAY,
  },
  textContainer: {
    justifyContent: "space-around",
    height: 100,
    alignItems: "center",
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderRadius: 10,
    backgroundColor: color.PRIMARY_WHITE,
  },
});
