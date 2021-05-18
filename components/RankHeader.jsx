import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import DropDown from "./DropDown";
import DateController from "./DateController";
import useDateController from "../hooks/useDateController";
import { setCurrentSports, setCurrentLocation } from "../actions/userActionCreators";
import { getTeam } from "../actions/appActionCreators";
import * as color from "../constants/colors";
import * as size from "../constants/sizes";

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
    dispatch(getTeam(currentLocation, currentSports.sports));
  }, [currentLocation, currentSports]);

  return (
    <View style={styles.container}>
      <View style={styles.location}>
        <DropDown
          value={currentLocation.district}
          options={locationOptions}
          style={styles.dropDown}
          onSelect={handleSelectLocation}
        />
      </View>
      <View style={styles.blank} />
      <View style={styles.sports}>
        <DropDown
          value={currentSports.koreanName}
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
    height: 0.1 * size.DEVICE_HEIGHT,
    backgroundColor: color.PRIMARY_BLUE,
  },
  location: {
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
  dropDown: {
    width: 0.15 * size.DEVICE_WIDTH,
    height: 0.05 * size.DEVICE_HEIGHT,
    fontSize: size.TERTIARY_FONT_SIZE,
  },
});
