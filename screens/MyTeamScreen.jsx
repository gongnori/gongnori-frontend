import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import _ from "lodash";

import ModalButton from "../components/ModalButton";
import MyTeamHeader from "../components/MyTeamHeader";
import SearchUserModal from "../components/SearchUserModal";
import SideButton from "../components/SideButton";
import TeamMatch from "../components/TeamMatch";
import TeamMember from "../components/TeamMember";
import TeamOverview from "../components/TeamOverview";

import * as color from "../constants/colors";

export default function MyTeamScreen({ navigation }) {
  const [isModal, setIsModal] = useState(false);

  const currentTeam = useSelector((state) => {
    return state.userReducer.currentTeam;
  }, (prev, next) => _.cloneDeep(prev) === _.cloneDeep(next));

  const handleModal = () => setIsModal(!isModal);

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
        path="TeamCreate"
      />
      <ModalButton setIsModal={handleModal} />
      <SearchUserModal
        visible={isModal}
        setIsModal={handleModal}
      />
    </View>
  );
}

MyTeamScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

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
