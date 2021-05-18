import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import _ from "lodash";

import PlaceMap from "../components/PlaceMap";
import TeamOverview from "../components/TeamOverview";
import TitleContentRow from "../components/TitleContentRow";
import SpinnerLoading from "../components/SpinnerLoading";

import useHeaderRight from "../hooks/useHeaderRight";
import getDateFromIso from "../utils/getDateFromIso";

import * as colors from "../constants/colors";
import * as sizes from "../constants/sizes";

export default function MatchJoinScreen({ navigation, route }) {
  const isHeaderRightLoading = useSelector((state) => {
    return state.loadingReducer.isHeaderRightLoading;
  });

  const currentTeam = useSelector((state) => {
    return state.userReducer.currentTeam;
  }, (prev, next) => _.cloneDeep(prev) === _.cloneDeep(next));

  const { playtime, type, playground, host } = route.params.match;
  const [startyear, startMonth, startDate, startHour] = getDateFromIso(playtime.start);
  const [endYear, endMonth, endDate, endHour] = getDateFromIso(playtime.end);
  const { city, district, town, detail, latitude, longitude } = playground;

  useHeaderRight(
    navigation,
    "신청하기",
    "POST",
    "message",
    {
      matchId: route.params.match.id,
      teamId: currentTeam.id,
    },
  );

  return (
    <View style={styles.container}>
      <SpinnerLoading
        visible={isHeaderRightLoading}
        content={"Message Sending"}
      />
      <TeamOverview team={host} />
      <View style={styles.textContainer}>
        <TitleContentRow title={"경기방식"} content={type} />
        <TitleContentRow title={"날짜"} content={`${startMonth}월 ${startDate}일`} />
        <TitleContentRow title={"시간"} content={`${startHour}:00 - ${endHour}:00`} />
        <TitleContentRow title={"경기장"} content={playground.name} />
        <TitleContentRow title={"주소"} content={`${city} ${district} ${town} ${detail}`} />
      </View>
      <PlaceMap
        origin={{ latitude, longitude }}
        width={0.8 * sizes.DEVICE_WIDTH}
        height={0.8 * sizes.DEVICE_WIDTH}
      />
    </View>
  );
}

MatchJoinScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: colors.PRIMARY_GRAY,
  },
  textContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    width: 0.8 * sizes.DEVICE_WIDTH,
    height: 0.2 * sizes.DEVICE_HEIGHT,
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    borderRadius: 10,
    backgroundColor: colors.SECONDARY_WHITE,
    elevation: 5,
    shadowColor: colors.PRIMARY_SHADOW,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      height: -1,
      width: 0,
    },
  },
});
