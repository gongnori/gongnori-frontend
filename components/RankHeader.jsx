import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

import DropDown from "./DropDown";
import { setCurrentSports, setCurrentLocation } from "../actions/userActionCreators";
import { getTeam } from "../actions/appActionCreators";

import * as colors from "../constants/colors";
import * as sizes from "../constants/sizes";

export default function RankHeader() {
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
          defaultValue={currentLocation.district}
          options={locationOptions}
          style={styles.dropDown}
          onSelect={handleSelectLocation}
        />
      </View>
      <View style={styles.blank} />
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
    width: 0.15 * sizes.DEVICE_WIDTH,
    height: 0.05 * sizes.DEVICE_HEIGHT,
    color: colors.SECONDARY_WHITE,
    fontSize: sizes.TERTIARY_FONT_SIZE,
  },
});
