import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import produce from "immer";
import DropDown from "../components/DropDown";
import useMyLocation from "../hooks/useMyLocation";
import useHeaderRight from "../hooks/useHeaderRight";
import getDateFromMonth from "../utils/getDateFromMonth";
import { getPlayground } from "../actions/actions";
import PlaceMap from "../components/PlaceMap";
import * as color from "../constants/colors";
import * as font from "../constants/fonts";

const CURRENT_YEAR = (new Date().getFullYear()).toString();
const CURRENT_MONTH = (new Date().getMonth() + 1).toString();
const CURRENT_DATE = (new Date().getDate()).toString();

export default function MatchCreateScreen({ navigation }) {
  const locations = useSelector((state) => {
    return state.authReducer.locations;
  }, (prev, next) => {
    return produce(prev, (draft) => draft) === produce(next, (draft) => draft);
  });

  const teams = useSelector((state) => {
    return state.authReducer.teams;
  }, (prev, next) => {
    return produce(prev, (draft) => draft) === produce(next, (draft) => draft);
  });

  const playgrounds = useSelector((state) => {
    return state.playgroundReducer.playgrounds;
  }, (prev, next) => {
    return produce(prev, (draft) => draft) === produce(next, (draft) => draft);
  });

  const [location, setLocation] = useState(null);
  const [forceRefreshKey, setForceRefreshKey] = useState("");

  const dispatch = useDispatch();

  const [match, setMatch] = useState({
    type: "5:5",
    year: CURRENT_YEAR,
    month: CURRENT_MONTH,
    date: CURRENT_DATE,
    meridiem: "AM",
    start: "8",
    end: "10",
    playground: "",
  });
  const [myLocation, myGeoCode] = useMyLocation();
  const [origin, setOrigin] = useState(null);

  useEffect(() => {
    if (!location) {
      setOrigin(myLocation);
      setForceRefreshKey(100 * Math.random());
      return;
    }

    setOrigin(location.position);
    setForceRefreshKey(100 * Math.random());
  }, [location, myLocation]);

  const handleSelectType = (index, value) => setMatch({ ...match, type: value });
  const handleSelectMonth = (index, value) => setMatch({ ...match, month: value });
  const handleSelectDate = (index, value) => setMatch({ ...match, date: value });
  const handleSelectMeridiem = (index, value) => setMatch({ ...match, meridiem: value });
  const handleSelectStart = (index, value) => setMatch({ ...match, start: value });
  const handleSelectEnd = (index, value) => setMatch({ ...match, end: value });
  const handleSelectLocation = (index, value) => setLocation(locations[index]);
  const handleSelectTeam = (index, value) => setMatch({...match, team: teams[index]});

  const handlePressPlayground = (value) => setMatch({ ...match, playground: value });

  const locationOptions = locations.map((location) => `${location.city} ${location.district}`)
  const teamOptions = teams.map((team) => team.name)

  useEffect(() => {
    if (!location) { return }
    const { province, city, district } = location;
    dispatch(getPlayground(province, city, district));
  }, [location]);

  useHeaderRight(navigation, "match", match); // 입력 validation 넣기 및 입력하세요 모달 띄우기

  return (
    <View style={styles.container}>
      <View style={styles.input}>
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
            value={"5:5"}
            options={["5:5", "6:6", "7:7"]}
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
            value={CURRENT_MONTH}
            options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]}
            width={40}
            height={20}
            fontSize={15}
            backgroundColor={color.SECONDARY_WHITE}
            onSelect={handleSelectMonth}
          />
          <Text style={styles.separator}>월</Text>
          <DropDown
            value={CURRENT_DATE}
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
            value="12:00"
            options={["12:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00"]}
            width={60}
            height={20}
            fontSize={15}
            backgroundColor={color.SECONDARY_WHITE}
            onSelect={handleSelectStart}
          />
          <Text style={styles.separator}>~</Text>
          <DropDown
            value="12:00"
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
    fontFamily: font.DO_HYEON_400_REGULAR,
    textAlign: "left",
    textAlignVertical: "center",
  },
  separator: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 16,
    fontFamily: font.DO_HYEON_400_REGULAR,
    textAlign: "center",
    textAlignVertical: "center",
  },
  map: {
    width: "90%",
    height: "60%",
    justifyContent: "space-around",
  },
});
