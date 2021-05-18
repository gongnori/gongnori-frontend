import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import produce from "immer";
import _ from "lodash";
import CustomButton from "../components/CustomButton";
import DropDown from "../components/DropDown";
import { saveMyLocation } from "../actions/userActionCreators";
import * as colors from "../constants/colors";
import * as fonts from "../constants/fonts";
import * as sizes from "../constants/sizes";

export default function LocationScreen() {
  const [myLocations, setMyLocations] = useState([]);

  const locations = useSelector((state) => {
    return state.appReducer.locations;
  }, (prev, next) => _.cloneDeep(prev) === _.cloneDeep(next));

  const email = useSelector((state) => state.userReducer.email);

  const dispatch = useDispatch();

  const locationOptions = locations.map((location) => {
    const { city, district } = location;

    return `${city} ${district}`;
  });

  const handleSelectLocation = (index) => {
    const isAlreadySelected = myLocations.some((location) => {
      return location.id === locations[index].id;
    });

    if (isAlreadySelected) { return }

    setMyLocations(produce(myLocations, (draft) => {
      draft.unshift(locations[index]);
      draft.splice(2);
    }));
  };

  const handlePressButton = () => dispatch(saveMyLocation(email, myLocations));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        동네를 두개를 골라주세요
      </Text>
      <View style={styles.dropDownContainer}>
        <DropDown
          value={"동네 1"}
          options={locationOptions}
          width={200}
          height={40}
          fontSize={15}
          backgroundColor={colors.SECONDARY_WHITE}
          onSelect={handleSelectLocation}
        />
      </View>
      <View style={styles.dropDownContainer}>
        <DropDown
          value={"동네 2"}
          options={locationOptions}
          width={200}
          height={40}
          fontSize={15}
          backgroundColor={colors.SECONDARY_WHITE}
          onSelect={handleSelectLocation}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title={"등록하기"}
          width={200}
          height={40}
          backgroundColor={colors.SECONDARY_BLUE}
          fontSize={sizes.SECONDARY_FONT_SIZE}
          onPress={handlePressButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.SECONDARY_GRAY,
  },
  title: {
    width: 200,
    height: 100,
    marginTop: 100,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: sizes.PRIMARY_FONT_SIZE,
    fontFamily: fonts.SECONDARY_FONT,
  },
  dropDownContainer: {
    justifyContent: "center",
    height: 50,
  },
  buttonContainer: {
    justifyContent: "center",
    height: 100,
  },
});
