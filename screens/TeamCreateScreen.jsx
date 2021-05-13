import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import produce from "immer";
import DropDown from "../components/DropDown";
import CustomeTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import useHeaderRight from  "../hooks/useHeaderRight";
import usePickImage from "../hooks/usePickImage";
import { getPlayground } from "../actions/actions";
import * as color from  "../constants/colors";
import * as font from "../constants/fonts";

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

  useEffect(() => {
    dispatch(getPlayground("경기도", "용인시", "수지구"));
  }, []);

  const handleSelectSports = (index, value) => setTeam({ ...team, sports: value });
  const handleChangeTeamName = (value) => setTeam({ ...team, teamName: value });

  const [image, imageS3, pickImage] = usePickImage();
  useHeaderRight(navigation, "team", { ...team, imageS3 });
  console.log({ ...team, imageS3 })

  return (
    <View style={styles.container}>
      <CustomeTextInput
        title={"팀이름"}
        value={team.teamName}
        placeholder={"팀이름을 입력하세요."}
        onChangeText={handleChangeTeamName}
      />
      <View style={styles.titleDropdown}>
        <Text style={styles.title}>종목</Text>
        <DropDown
          value={"football"}
          options={["football", "bascketball", "baseball"]}
          width={150}
          height={30}
          fontSize={15}
          backgroundColor={color.SECONDARY_WHITE}
          onSelect={handleSelectSports}
        />
      </View>
      <View style={styles.titleDropdown}>
        <Text style={styles.title}>지역</Text>
        <DropDown
          value={"football"}
          options={["수지구", "기흥구", "처인구"]}
          width={150}
          height={30}
          fontSize={15}
          backgroundColor={color.SECONDARY_WHITE}
          onSelect={handleSelectSports}
        />
      </View>
      <View style={styles.emblem}>
        <Text style={styles.title}>엠블럼</Text>
        <View style={styles.imageBox}>
          <Image
            style={styles.image}
            source={{ uri: image }}
          />
        </View>
        <CustomButton
          title={"앨범에서 선택"}
          width={150}
          height={50}
          fontSize={16}
          onPress={pickImage}
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
  titleDropdown: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    height: "15%",
    // backgroundColor: color.PRIMARY_GRAY,
  },
  title: {
    width: 50,
    marginRight: 10,
    textAlignVertical: "center",
    fontSize: 16,
  },
  emblem: {
    justifyContent: "center",
    alignItems: "center",
    height: "30%",
    width: "100%",
  },
  imageBox: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  image: {
    height: "70%",
    width: "70%",
    resizeMode: "contain",
  },
});
