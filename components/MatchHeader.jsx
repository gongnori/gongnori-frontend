import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import DropDown from "./DropDown";
import DateController from "./DateController";
import useDateController from "../hooks/useDateController";
import { setCurrentSports, setCurrentLocation } from "../actions/userActionCreators";
import { getMatch } from "../actions/appActionCreators";
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

  // const [location, setLocation] = useState(myLocations[0]);
  // const [sports, setSports] = useState("football");
  const [year, month, date, handlePressButton] = useDateController();

  const dispatch = useDispatch();
// console.log(currentSports)
// console.log(currentSports);
  const locationOptions = myLocations.map((location) => location.district);
  const sportsOptions = sports.map((item) => item.koreanName);

  const handleSelectLocation = (index) => {
    dispatch(setCurrentLocation(myLocations[index]));
  }
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
          value={locationOptions[0]}
          options={locationOptions}
          width={size.MATCH_HEADER_DROPDOWN_WIDTH}
          height={size.MATCH_HEADER_DROPDOWN_HEIGHT}
          fontSize={16}
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
          value="football"
          options={sportsOptions}
          width={size.MATCH_HEADER_DROPDOWN_WIDTH}
          height={size.MATCH_HEADER_DROPDOWN_HEIGHT}
          fontSize={16}
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
    height: size.MATCH_HEADER_HEIGHT,
    backgroundColor: color.PRIMARY_BLUE,
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
});
