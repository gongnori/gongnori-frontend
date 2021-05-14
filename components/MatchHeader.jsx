import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import produce from "immer";
import DropDown from "./DropDown";
import DateController from "./DateController";
import useDateController from "../hooks/useDateController";
import { getMatch } from "../actions/actions";
import * as color from "../constants/colors";
import * as size from "../constants/sizes";

export default function MatchHeader() {
  const myLocations = useSelector((state) => {
    return state.userReducer.locations;
  }, (prev, next) => {
    return produce(prev, (draft) => draft) === produce(next, (draft) => draft);
  });

  const [location, setLocation] = useState(myLocations[0]);
  const [sports, setSports] = useState("football");
  const [year, month, date, handlePressButton] = useDateController();

  const dispatch = useDispatch();

  const locationOptions = myLocations.map((location) => location.district);
  const handleSelectLocation = (index) => setLocation(myLocations[index]);
  const handleSelectSports = (index, value) => setSports(value);

  useEffect(() => {
    dispatch(getMatch(location, sports, year, month, date));
  }, [sports, location, year, month, date]);

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
          options={["football", "basketball", "baseball"]}
          width={size.MATCH_HEADER_DROPDOWN_WIDTH}
          height={size.MATCH_HEADER_DROPDOWN_HEIGHT}
          fontSize={16}
          onPressButton={handleSelectSports}
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
