import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import * as color from "../constants/colors";
import * as font from "../constants/fonts";
import * as size from "../constants/sizes";

export default function TeamMember({ team }) {
  const { members } = team;

  return (
    <View style={styles.members}>
      <Text style={styles.title}>팀원</Text>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {
          members.map((member) => {
            return (
              <View key={member._id} style={styles.member}>
                <Text style={styles.name}>{member.name}</Text>
                <View style={styles.detail}>
                  <Icon
                    name="chatbubble-ellipses-outline"
                    size={14}
                    style={styles.icon}
                  />
                  <Icon
                    name="person-remove"
                    size={14}
                    style={styles.icon}
                  />
                </View>
              </View>
            );
          })
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  members: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 15,
    width: size.MY_TEAM_MEMBER_WIDTH,
    height: size.MY_TEAM_MEMBER_HEIGHT,
  },

  title: {
    textAlign: "left",
    textAlignVertical: "center",
    marginBottom: 10,
    marginLeft: 10,
    fontSize: 16, //size.MY_TEAM_OVERVIEW_TITLE_FONT_SIZE,
    fontFamily: font.BLACK_HANS_SANS_400_REGULAR,
  },

  scroll: {
    width: "100%",
    backgroundColor: color.SECONDARY_WHITE,
    borderRadius: 10,
  },

  member: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    height: 30,
    borderBottomWidth: 0.5,
    borderBottomColor: color.PRIMARY_BLUE,
  },

  name: {
    flex: 1,
    textAlign: "left",
    textAlignVertical: "center",
    fontSize: 14,
    fontFamily: font.DO_HYEON_400_REGULAR,
  },
  detail: {
    flex: 5,
    flexDirection: "row",
  },
  icon: {
    width: 20,
  },
});
