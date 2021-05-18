import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import _ from "lodash";

import DropDown from "../components/DropDown";
import PlaceMap from "../components/PlaceMap";

import useMyLocation from "../hooks/useMyLocation";
import useHeaderRight from "../hooks/useHeaderRight";
import useMatchState from "../hooks/useMatchState";

import getDateFromMonth from "../utils/getDateFromMonth";

import * as colors from "../constants/colors";
import * as fonts from "../constants/fonts";
import * as sizes from "../constants/sizes";

export default function MatchCreateScreen({ navigation, route }) {
  const { rank } = route.params;

  const teams = useSelector((state) => {
    return state.userReducer.teams;
  }, (prev, next) => _.cloneDeep(prev) === _.cloneDeep(next));

  const sports = useSelector((state) => {
    return state.appReducer.sports;
  }, (prev, next) => _.cloneDeep(prev) === _.cloneDeep(next));

  const playgrounds = useSelector((state) => {
    return state.appReducer.playgrounds;
  }, (prev, next) => _.cloneDeep(prev) === _.cloneDeep(next));

  const currentSports = useSelector((state) => {
    return state.userReducer.currentSports;
  }, (prev, next) => _.cloneDeep(prev) === _.cloneDeep(next));

  const currentTeam = useSelector((state) => {
    return state.userReducer.currentTeam;
  }, (prev, next) => _.cloneDeep(prev) === _.cloneDeep(next));

  const currentLocation = useSelector((state) => {
    return state.userReducer.currentLocation;
  }, (prev, next) => _.cloneDeep(prev) === _.cloneDeep(next));

  const [location, setLocation] = useState(currentLocation);
  const [forceRefreshKey, setForceRefreshKey] = useState("");

  const [
    match,
    handleSelectType,
    handleSelectMonth,
    handleSelectDate,
    handleSelectMeridiem,
    handleSelectStart,
    handleSelectEnd,
    handlePressPlayground,
  ] = useMatchState(sports, teams);

  const [myLocation] = useMyLocation();
  const [origin, setOrigin] = useState(null);

  const sportsOptions = currentSports.matchTypes;

  const _match = {
    ...match,
    sports: { id: currentSports.id, name: currentSports.sports },
    team: { id: currentTeam.id, name: currentTeam.id },
    location: { id: currentLocation.id },
    rank,
  };

  useHeaderRight(navigation, "만들기", "POST", "match", _match); // 입력 validation 넣기 및 입력하세요 모달 띄우기

  useEffect(() => {
    if (!location) {
      setOrigin(myLocation);
      setForceRefreshKey(100 * Math.random());

      return;
    }

    const { latitude, longitude } = location;
    setOrigin({ latitude, longitude });
    setForceRefreshKey(100 * Math.random());
  }, [location, myLocation]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.titleDropdown}>
          <Text style={styles.title}>경기 방식</Text>
          <DropDown
            value={"경기방식"}
            options={sportsOptions}
            style={{...styles.dropDown, width: 100}}
            onSelect={handleSelectType}
          />
        </View>
        <View style={styles.titleDropdown}>
          <Text style={styles.title}>경기 날짜</Text>
          <DropDown
            value={match.month}
            options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]}
            style={styles.dropDown}
            onSelect={handleSelectMonth}
          />
          <Text style={styles.separator}>월</Text>
          <DropDown
            value={match.date}
            options={getDateFromMonth(match.year, match.month)}
            style={styles.dropDown}
            onSelect={handleSelectDate}
          />
          <Text style={styles.separator}>일</Text>
        </View>
        <View style={styles.titleDropdown}>
          <Text style={styles.title}>경기 시간</Text>
          <DropDown
            value={match.meridiem}
            options={["AM", "PM"]}
            style={styles.dropDown}
            onSelect={handleSelectMeridiem}
          />
          <Text style={styles.separator} />
          <DropDown
            value={match.start}
            options={["12:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00"]}
            style={styles.dropDown}
            onSelect={handleSelectStart}
          />
          <Text style={styles.separator}>~</Text>
          <DropDown
            value={match.end}
            options={["12:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "1:00"]}
            style={styles.dropDown}
            onSelect={handleSelectEnd}
          />
        </View>
      </View>
      {/* <View style={styles.map}> */}
      <View>
        {origin && (
          <PlaceMap
            key={forceRefreshKey}
            width={0.8 * sizes.DEVICE_WIDTH}
            height={0.8 * sizes.DEVICE_WIDTH}
            origin={origin}
            location={location}
            places={playgrounds}
            onPlacePress={handlePressPlayground}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: colors.SECONDARY_GRAY,
  },
  inputContainer: {
    justifyContent: "space-around",
    width: 0.8 * sizes.DEVICE_WIDTH,
    height: 0.3 * sizes.DEVICE_HEIGHT,
    borderRadius: 5,
    backgroundColor: colors.PRIMARY_YELLOW,
    elevation: 5,
    shadowColor: "rgb(50, 50, 50)",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      height: -1,
      width: 0,
    },
  },
  titleDropdown: {
    flexDirection: "row",
    alignItems: "center",
    height: 0.1 * sizes.DEVICE_HEIGHT,
  },
  title: {
    // width: 0.2 * sizes.DEVICE_WIDTH,
    height: 0.05 * sizes.DEVICE_HEIGHT,
    // marginLeft: 15,
    // marginRight: 15,
    marginHorizontal: 15,
    fontSize: sizes.TERTIARY_FONT_SIZE,
    fontFamily: fonts.NOTO_SANS_KR_400_REGULAR,
    textAlign: "left",
    textAlignVertical: "center",
    includeFontPadding: false,
  },
  separator: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: sizes.TERTIARY_FONT_SIZE,
    fontFamily: fonts.SECONDARY_FONT,
    textAlign: "center",
    textAlignVertical: "center",
    includeFontPadding: false,
  },
  // map: {
  //   justifyContent: "space-around",
  //   width: 0.9 * sizes.DEVICE_WIDTH,
  //   height: 0.5 * sizes.DEVICE_HEIGHT,
  // },
  dropDown: {
    width: 0.13 * sizes.DEVICE_WIDTH,
    height: 0.04 * sizes.DEVICE_HEIGHT,
    borderRadius: 5,
    fontSize: sizes.QUATERNARY_FONT_SIZE,
    backgroundColor: colors.SECONDARY_WHITE,
  },
});

MatchCreateScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};