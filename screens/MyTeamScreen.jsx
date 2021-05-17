import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, Modal } from "react-native";
import { useSelector } from "react-redux";
import _ from "lodash";

import MyTeamHeader from "../components/MyTeamHeader";
import TeamOverview from "../components/TeamOverview";
import TeamMember from "../components/TeamMember";
import TeamMatch from "../components/TeamMatch";
import SideButton from "../components/SideButton";
import CustomButton from "../components/CustomButton";
import ModalButton from "../components/ModalButton";
import SearchUserModal from "../components/SearchUserModal";

import * as color from "../constants/colors";

export default function MyTeamScreen({ navigation }) {
  useEffect(() => {
    console.log("MyTeam");
  }, []);

  const currentTeam = useSelector((state) => {
    return state.userReducer.currentTeam;
  }, (prev, next) => _.cloneDeep(prev) === _.cloneDeep(next));

  const [isModal, setIsModal] = useState(false)
  const handleModal = () => setIsModal(!isModal);
  console.log(isModal)

  return (
    <View style={styles.container}>
      <MyTeamHeader />
      <View style={styles.body}>
        {currentTeam && (
          <>
            <TeamOverview team={currentTeam} />
            <TeamMember team={currentTeam} />
            <TeamMatch team={currentTeam} />
          </>
        )}
      </View>
      <SideButton
        navigation={navigation}
        route="TeamCreate"
      />
      <ModalButton setIsModal={handleModal} />
      <SearchUserModal
        visible={isModal}
        setIsModal={handleModal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: color.PRIMARY_GRAY,
  },
  body: {
    flex: 1,
    alignItems: "center",
    backgroundColor: color.PRIMARY_GRAY,
  },
});
