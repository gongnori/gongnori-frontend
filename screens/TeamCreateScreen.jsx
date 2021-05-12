import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { API_SERVER } from "@env";
import produce from "immer";
import DropDown from "../components/DropDown";
import CustomeTextInput from "../components/CustomTextInput";
import useMyLocation from "../hooks/useMyLocation";
import getDateFromMonth from "../utils/getDateFromMonth";
import { getPlayground } from "../actions/actions";
import PlaceMap from "../components/PlaceMap";
import fetchServer from "../utils/fetchServer";
import * as color from  "../constants/colors"
import * as font from  "../constants/fonts"

const CURRENT_YEAR = (new Date().getFullYear()).toString();
const CURRENT_MONTH = (new Date().getMonth() + 1).toString();
const CURRENT_DATE = (new Date().getDate()).toString();

export default function MatchCreateScreen({ navigation }) {
  const playgrounds = useSelector((state) => {
    return state.playgroundReducer.playgrounds;
  }, (prev, next) => {
    return produce(prev, (draft) => draft) === produce(next, (draft) => draft);
  });

  const dispatch = useDispatch();

  const [team, setTeam] = useState({
    teamName: "",
    location: "",
    sports: "",
  });
  const [myLocation, myGeoCode] = useMyLocation();

  useEffect(() => {
    dispatch(getPlayground("경기도", "용인시", "수지구"));
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: 50,
              width: 50,
              right: 20,
            }}
            onPress={async () => {
              const data = await fetchServer(
                "POST",
                `${API_SERVER}/team`,
                team,
              );
              // navigation.navigate("TabNavigator");
            }}
          >
            <Text style={{ fontSize: 15 }}>
              완료
            </Text>
          </TouchableOpacity>
        );
      },
    });
  });

  const handleSelectSports = (index, value) => setTeam({ ...team, sports: value });
  const handleChangeTeamName = (value) => setTeam({ ...team, teamName: value });

  return (
    <View style={styles.container}>
      <CustomeTextInput
        title={"팀이름"}
        value={team.teamName}
        placeholder={"팀이름을 입력하세요."}
        onChangeText={handleChangeTeamName}
      />
      <View style={styles.sports}>
        <Text style={styles.sportsText}>종목</Text>
        <DropDown
          value={team.sports}
          options={["축구", "농구", "야구"]}
          width={60}
          height={30}
          fontSize={15}
          onSelect={handleSelectSports}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: color.PRIMARY_GRAY,
  },
  sports: {
    justifyContent: "flex-start",
    backgroundColor: color.PRIMARY_GRAY,
  },
  sportsText: {
    textAlignVertical: "center",
    fontSize: 16,
    fontFamily: font.BLACK_HANS_SANS_400_REGULAR,
  },
});
