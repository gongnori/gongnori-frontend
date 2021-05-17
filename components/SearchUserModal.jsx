import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableWithoutFeedback, ScrollView, Modal } from "react-native";
import { API_SERVER } from "@env"
import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import _ from "lodash";
import fetchServer from "../utils/fetchServer";
import * as colors from "../constants/colors";
import * as fonts from "../constants/fonts";
import * as sizes from "../constants/sizes";
import CustomButton from "../components/CustomButton";

export default function SearchUserModal({ visible, setIsModal }) {
  const [email, setEmail] = useState("");

  const currentTeam = useSelector((state) => {
    return state.userReducer.currentTeam;
  }, (prev, next) => _.cloneDeep(prev) === _.cloneDeep(next));

  console.log(currentTeam)

  const handleChangeText = (value) => setEmail(value);
  const handlePressButton = () => {
    fetchServer(
      "PATCH",
      `${API_SERVER}/team/members`,
      { email, teamId: currentTeam.id },
    );
  }

  return (
    <Modal
      transparent={true}
      visible={visible}
    >
      <TouchableWithoutFeedback onPress={setIsModal}>
        <View style={styles.cancleRegion} />
      </TouchableWithoutFeedback>
      <View style={styles.searchBox}>
        <TextInput
          style={styles.textInput}
          placeholder={"이메일을 입력하세요."}
          autoCompleteType="off"
          onChangeText={handleChangeText}
        />
        <CustomButton
          title={"추가"}
          style={styles.button}
          onPress={handlePressButton}
        />
      </View>
      <TouchableWithoutFeedback onPress={setIsModal}>
        <View style={styles.cancleRegion} />
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  cancleRegion: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  searchBox: {
    height: 0.3 * sizes.DEVICE_HEIGHT,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: colors.PRIMARY_YELLOW,
  },
  textInput: {
    width: 0.7 * sizes.DEVICE_WIDTH,
    height: 0.05 * sizes.DEVICE_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: colors.PRIMARY_WHITE,
    fontSize: sizes.TERTIARY_FONT_SIZE,
    fontFamily: fonts.NOTO_SANS_KR_400_REGULAR,
    textAlign: "center",
    textAlignVertical: "center",
    includeFontPadding: false,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 0.2 * sizes.DEVICE_WIDTH,
    height: 0.05 * sizes.DEVICE_HEIGHT,
    borderRadius: 5,
    backgroundColor: colors.PRIMARY_BLUE,
    color: colors.SECONDARY_WHITE,
    fontSize: sizes.TERTIARY_FONT_SIZE,
  },
});
