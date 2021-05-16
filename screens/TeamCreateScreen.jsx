import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback, Image, Keyboard, TouchableWithoutFeedbackBase } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import produce from "immer";
import _ from "lodash";
import DropDown from "../components/DropDown";
import CustomeTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import DismissKeyboard from "../components/DismissKeyborad";
import useHeaderRight from  "../hooks/useHeaderRight";
import usePickImage from "../hooks/usePickImage";
import { updateMyData } from "../actions/userActionCreators"
import * as color from  "../constants/colors";
import * as font from "../constants/fonts";
import * as size from "../constants/sizes";

export default function MatchCreateScreen({ navigation }) {
  const [team, setTeam] = useState({
    name: "",
    location: "",
    sports: "",
  });

  const locations = useSelector((state) => {
    return state.userReducer.locations;
  }, (prev, next) => _.cloneDeep(prev) === _.cloneDeep(next));

  const locationOptions = locations.map((location) => {
    return `${location.city} ${location.district}`;
  });

  const sports = useSelector((state) => {
    return state.appReducer.sports;
  }, (prev, next) => _.cloneDeep(prev) === _.cloneDeep(next));

  const sportsOptions = sports.map((item) => item.koreanName);

  const dispatch = useDispatch();

  const handleSelectSports = (index, value) => {
    setTeam(produce(team, (draft) => {
      draft.sports = sports[index];
    }));
  };

  const handleSelectLocation = (index, value) => {
    setTeam(produce(team, (draft) => {
      draft.location = locations[index];
    }));
  };

  const handleChangeName = (value) => {
    setTeam(produce(team, (draft) => {
      draft.name = value;
    }));
  };

  const [image, imageS3, pickImage] = usePickImage("https://minho-bucket.s3.ap-northeast-2.amazonaws.com/realmadrid_emblem.png",);

  useHeaderRight(navigation, "만들기", "POST", "team", { ...team, imageS3 });

  return (
    <DismissKeyboard>
      <View
        style={styles.container}
      >
        <CustomeTextInput
          title={"팀이름"}
          value={team.name}
          placeholder={"팀이름을 입력하세요."}
          onChangeText={handleChangeName}
        />
        <View style={styles.titleDropdown}>
          <Text style={styles.title}>종목</Text>
          <DropDown
            value={"종목을 선택하세요."}
            options={sportsOptions}
            width={200}
            height={30}
            fontSize={size.QUATERNARY_FONT_SIZE}
            backgroundColor={color.SECONDARY_WHITE}
            onSelect={handleSelectSports}
          />
        </View>
        <View style={styles.titleDropdown}>
          <Text style={styles.title}>지역</Text>
          <DropDown
            value={"동네를 선택하세요."}
            options={locationOptions}
            width={200}
            height={30}
            fontSize={size.QUATERNARY_FONT_SIZE}
            backgroundColor={color.SECONDARY_WHITE}
            onSelect={handleSelectLocation}
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
            height={30}
            fontSize={size.TERTIARY_FONT_SIZE}
            onPress={pickImage}
          />
        </View>
      </View>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: size.DEVICE_HEIGHT,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: color.PRIMARY_GRAY,
  },
  titleDropdown: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: 200,
    marginBottom: 10,
  },
  title: {
    height: 30,
    width: 50,
    marginBottom: 10,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: size.TERTIARY_FONT_SIZE,
    fontFamily: font.PRIMARY_FONT,
  },
  emblem: {
    justifyContent: "flex-start",
    alignItems: "center",
    height: 300,
    marginTop: 10,
    width: "100%",
  },
  imageBox: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    height: 150,
    width: 150,
  },
  image: {
    height: "70%",
    width: "70%",
    resizeMode: "contain",
  },
});
