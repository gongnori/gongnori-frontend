import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

import DropDown from "./DropDown";
import DateController from "./DateController";

import useDateController from "../hooks/useDateController";
import { setCurrentSports, setCurrentLocation } from "../actions/userActionCreators";
import { getMatch } from "../actions/appActionCreators";

import * as colors from "../constants/colors";
import * as sizes from "../constants/sizes";

export default function MatchHeader() {
  const myLocations = useSelector((state) => {
    return state.userReducer.locations;
  }, (prev, next) => _.cloneDeep(prev) === _.cloneDeep(next));

  const sports = useSelector((state) => {
    return state.appReducer.sports;
  }, (prev, next) => _.cloneDeep(prev) === _.cloneDeep(next));

  const currentLocation = useSelector((state) => {
    return state.userReducer.currentLocation;
  }, (prev, next) => _.cloneDeep(prev) === _.cloneDeep(next));

  const currentSports = useSelector((state) => {
    return state.userReducer.currentSports;
  }, (prev, next) => _.cloneDeep(prev) === _.cloneDeep(next));

  const [year, month, date, handlePressButton] = useDateController();

  const dispatch = useDispatch();

  const locationOptions = myLocations.map((location) => location.district);
  const sportsOptions = sports.map((item) => item.koreanName);

  const handleSelectLocation = (index) => {
    dispatch(setCurrentLocation(myLocations[index]));
  };

  const handleSelectSports = (index) => {
    dispatch(setCurrentSports(sports[index]));
  };

  useEffect(() => {
    dispatch(getMatch(currentLocation, currentSports.sports, year, month, date));
  }, [currentLocation, currentSports, year, month, date]);

  return (
    <View style={styles.container}>
      <View style={styles.location}>
        <DropDown
          defaultValue={currentLocation.district}
          options={locationOptions}
          style={styles.dropDown}
          onSelect={handleSelectLocation}
        />
      </View>
      <View style={styles.date}>
        <DateController
          year={year}
          month={month}
          date={date}
          onPressButton={handlePressButton}
        />
      </View>
      <View style={styles.sports}>
        <DropDown
          defaultValue={currentSports.koreanName}
          options={sportsOptions}
          style={styles.dropDown}
          onSelect={handleSelectSports}
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
    height: sizes.HEADER_HEIGHT,
    backgroundColor: colors.SECONDARY_BLUE,
  },
  location: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  date: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  sports: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dropDown: {
    width: 0.15 * sizes.DEVICE_WIDTH,
    height: 0.05 * sizes.DEVICE_HEIGHT,
    color: colors.SECONDARY_WHITE,
    fontSize: sizes.SECONDARY_FONT_SIZE,
  },
});
