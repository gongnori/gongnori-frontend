import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import produce from "immer";
import CustomButton from "../components/CustomButton";
import DropDown from "../components/DropDown";
import { saveMyLocation } from "../actions/actions";
import * as color from "../constants/colors";
import * as font from "../constants/fonts";
import * as size from "../constants/sizes";

export default function LocationScreen() {
  useEffect(() => {
    console.log("Home");
  }, [])

  const [myLocations, setMyLocations] = useState([]);

  const locations = useSelector((state) => {
    return state.appReducer.locations;
  }, (prev, next) => {
    return produce(prev, (draft) => draft) === produce(next, (draft) => draft);
  });

  const email = useSelector((state) => state.userReducer.email);

  const dispatch = useDispatch();

  const locationOptions = locations.map((location) => {
    const { city, district } = location;

    return `${city} ${district}`;
  });

  const handleSelectLocation = (index) => {
    const isAlreadySelected = !!myLocations.find((location) => {
      return location["_id"] === locations[index]["_id"];
    });

    if (isAlreadySelected) { return }

    setMyLocations([...myLocations, locations[index]].slice(0, 2));
  };

  const handlePressButton = () => {
    dispatch(saveMyLocation(email, myLocations));
  };

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
          backgroundColor={color.SECONDARY_WHITE}
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
          backgroundColor={color.SECONDARY_WHITE}
          onSelect={handleSelectLocation}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title={"등록하기"}
          width={200}
          height={40}
          backgroundColor={color.PRIMARY_BLUE}
          fontSize={size.SECONDARY_FONT_SIZE}
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
    backgroundColor: color.PRIMARY_GRAY,
  },
  title: {
    width: 200,
    height: 100,
    marginTop: 100,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: size.PRIMARY_FONT_SIZE,
    fontFamily: font.SECONDARY_FONT,
  },
  dropDownContainer: {
    justifyContent: "center",
    height: 50,
  },
  buttonContainer: {
    justifyContent: "center",
    height: 100,
  }
});
