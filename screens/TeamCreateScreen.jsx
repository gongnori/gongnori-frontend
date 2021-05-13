import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Touchable, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { API_SERVER } from "@env";
import produce from "immer";
import * as ImagePicker from "expo-image-picker"
import DropDown from "../components/DropDown";
import CustomeTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import useMyLocation from "../hooks/useMyLocation";
import useHeaderRight from  "../hooks/useHeaderRight";
import getDateFromMonth from "../utils/getDateFromMonth";
import { getPlayground } from "../actions/actions";
import * as color from  "../constants/colors";
import * as font from "../constants/fonts";
import * as device from "../constants/device";
import fetchServer from "../utils/fetchServer"

const CURRENT_YEAR = (new Date().getFullYear()).toString();
const CURRENT_MONTH = (new Date().getMonth() + 1).toString();
const CURRENT_DATE = (new Date().getDate()).toString();

export default function MatchCreateScreen({ navigation }) {
  const playgrounds = useSelector((state) => {
    return state.playgroundReducer.playgrounds;
  }, (prev, next) => {
    return produce(prev, (draft) => draft) === produce(next, (draft) => draft);
  });

  const [image, setImage] = useState(null);

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

  useHeaderRight(navigation, "team", team);

  const handleSelectSports = (index, value) => setTeam({ ...team, sports: value });
  const handleChangeTeamName = (value) => setTeam({ ...team, teamName: value });

  useEffect(() => {
    (async () => {
      if (device.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    const uri = result.uri//.replace("file://", "");//ios처리하기
    const fileName = uri.split("/").pop();
    const match = /\.(\w+)$/.exec(fileName);
    const type = match ? `image/${match[1]}` : "image";

    const formData = new FormData();
    formData.append("image", {
      uri,
      name: fileName,
      type,
    });

    await fetchServer("POST", `${API_SERVER}/team`, formData, true);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

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
            source={{uri: image }}
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
    fontFamily: font.BLACK_HANS_SANS_400_REGULAR,
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
