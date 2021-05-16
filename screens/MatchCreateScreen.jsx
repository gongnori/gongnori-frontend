import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import DropDown from "../components/DropDown";
import useMyLocation from "../hooks/useMyLocation";
import useHeaderRight from "../hooks/useHeaderRight";
import useMatchState from "../hooks/useMatchState";
import getDateFromMonth from "../utils/getDateFromMonth";
import { getPlayground } from "../actions/appActionCreators";
import PlaceMap from "../components/PlaceMap";
import * as color from "../constants/colors";
import * as font from "../constants/fonts";

export default function MatchCreateScreen({ navigation }) {
  const currentLocation = useSelector((state) => {
    return state.userReducer.currentLocation;
  }, (prev, next) => _.cloneDeep(prev) === _.cloneDeep(next));

  const locations = useSelector((state) => {
    return state.userReducer.locations;
  }, (prev, next) => _.cloneDeep(prev) === _.cloneDeep(next));

  const teams = useSelector((state) => {
    return state.userReducer.teams;
  }, (prev, next) => _.cloneDeep(prev) === _.cloneDeep(next));

  const sports = useSelector((state) => {
    return state.appReducer.sports;
  }, (prev, next) => _.cloneDeep(prev) === _.cloneDeep(next));

  const playgrounds = useSelector((state) => {
    return state.appReducer.playgrounds;
  }, (prev, next) => _.cloneDeep(prev) === _.cloneDeep(next));

  const [location, setLocation] = useState(currentLocation);
  const [forceRefreshKey, setForceRefreshKey] = useState("");

  const dispatch = useDispatch();

  const [
    match,
    handleSelectType,
    handleSelectMonth,
    handleSelectDate,
    handleSelectMeridiem,
    handleSelectStart,
    handleSelectEnd,
    handleSelectSports,
    handleSelectTeam,
    handlePressPlayground,
  ] = useMatchState(sports, teams);

  const [myLocation] = useMyLocation();
  const [origin, setOrigin] = useState(null);

  const handleSelectLocation = (index) => setLocation(locations[index]);
  const locationOptions = locations.map((location) => `${location.city} ${location.district}`)
  const teamOptions = teams.map((team) => team.name);
  const sportsOptions = sports.map((item) => item.koreanName);

  useHeaderRight(navigation, "match", match); // 입력 validation 넣기 및 입력하세요 모달 띄우기
// console.log(match)
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
      <View style={styles.input}>
        <View style={styles.titleDropdown}>
          <Text style={styles.title}>나의 팀</Text>
          <DropDown
            value={"종목"}
            options={sportsOptions}
            width={60}
            height={20}
            fontSize={15}
            backgroundColor={color.SECONDARY_WHITE}
            onSelect={handleSelectSports}
          />
        </View>
        <View style={styles.titleDropdown}>
          <Text style={styles.title}>나의 팀</Text>
          <DropDown
            value={"팀"}
            options={teamOptions}
            width={60}
            height={20}
            fontSize={15}
            backgroundColor={color.SECONDARY_WHITE}
            onSelect={handleSelectTeam}
          />
        </View>
        <View style={styles.titleDropdown}>
          <Text style={styles.title}>경기 방식</Text>
          <DropDown
            value={"경기방식"}
            options={match?.sports?.matchTypes}
            width={60}
            height={20}
            fontSize={15}
            backgroundColor={color.SECONDARY_WHITE}
            onSelect={handleSelectType}
          />
        </View>
        <View style={styles.titleDropdown}>
          <Text style={styles.title}>경기 날짜</Text>
          <DropDown
            value={"월"}
            options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]}
            width={40}
            height={20}
            fontSize={15}
            backgroundColor={color.SECONDARY_WHITE}
            onSelect={handleSelectMonth}
          />
          <Text style={styles.separator}>월</Text>
          <DropDown
            value={"일"}
            options={getDateFromMonth(match.year, match.month)}
            width={40}
            height={20}
            fontSize={15}
            backgroundColor={color.SECONDARY_WHITE}
            onSelect={handleSelectDate}
          />
          <Text style={styles.separator}>일</Text>
        </View>
        <View style={styles.titleDropdown}>
          <Text style={styles.title}>경기 시간</Text>
          <DropDown
            value="AM"
            options={["AM", "PM"]}
            width={40}
            height={20}
            fontSize={15}
            backgroundColor={color.SECONDARY_WHITE}
            onSelect={handleSelectMeridiem}
          />
          <Text style={styles.separator} />
          <DropDown
            value={"시작"}
            options={["12:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00"]}
            width={60}
            height={20}
            fontSize={15}
            backgroundColor={color.SECONDARY_WHITE}
            onSelect={handleSelectStart}
          />
          <Text style={styles.separator}>~</Text>
          <DropDown
            value={"끝"}
            options={["12:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "1:00"]}
            width={60}
            height={20}
            fontSize={15}
            backgroundColor={color.SECONDARY_WHITE}
            onSelect={handleSelectEnd}
          />
        </View>
        <View style={styles.titleDropdown}>
          <Text style={styles.title}>경기 장소</Text>
          <DropDown
            value={"지역"}
            options={locationOptions}
            width={120}
            height={20}
            fontSize={15}
            backgroundColor={color.SECONDARY_WHITE}
            onSelect={handleSelectLocation}
          />
        </View>
      </View>
      <View style={styles.map}>
        {origin && (
          <PlaceMap
            key={forceRefreshKey}
            width={"100%"}
            height={"100%"}
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
    backgroundColor: color.PRIMARY_GRAY,
  },
  input: {
    width: "90%",
    height: "30%",
    justifyContent: "space-around",
  },
  titleDropdown: {
    flexDirection: "row",
    height: "15%",
    alignItems: "center",
  },
  title: {
    width: 60,
    marginRight: 10,
    fontSize: 16,
    fontFamily: font.SECONDARY_FONT,
    textAlign: "left",
    textAlignVertical: "center",
  },
  separator: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 16,
    fontFamily: font.SECONDARY_FONT,
    textAlign: "center",
    textAlignVertical: "center",
  },
  map: {
    width: "90%",
    height: "60%",
    justifyContent: "space-around",
  },
});
