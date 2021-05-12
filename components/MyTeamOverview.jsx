import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import * as size from "../constants/sizes";
import * as font from "../constants/fonts";

export default function MyTeamOverview({ myTeam }) {
  const { name, location, repute, members } = myTeam;
  const { city, district } = location;
  const { ability, manner } = repute;

  const memberNum = members.length;

  return (
    <View style={styles.overview}>
      <View style={styles.emblemContainer}>
        <Image
          style={styles.emblem}
          source={require("../assets/realmadrid_emblem.png")}
        />
      </View>
      <View style={styles.descripitonContainer}>
        <View style={styles.description}>
          <Text style={styles.title}>{"팀이름"}</Text>
          <Text style={styles.content}>{name}</Text>
        </View>
        <View style={styles.description}>
          <Text style={styles.title}>지역</Text>
          <Text style={styles.content}>{`${city} ${district}`}</Text>
        </View>
        <View style={styles.description}>
          <Text style={styles.title}>전적</Text>
          <Text style={styles.content}>10승5패</Text>
        </View>
        <View style={styles.description}>
          <Text style={styles.title}>매너</Text>
          <Text style={styles.content}>{manner}</Text>
        </View>
        <View style={styles.description}>
          <Text style={styles.title}>팀원</Text>
          <Text style={styles.content}>{`${memberNum} 명`}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overview: {
    height: size.MY_TEAM_OVERVIEW_HEIGHT,
    width: size.MY_TEAM_OVERVIEW_WIDTH,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  emblemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  emblem: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },
  descripitonContainer: {
    flex: 3,
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    height: "100%",
    paddingLeft: 10,
  },
  description: {
    flexDirection: "row",
  },
  title: {
    flex: 1,
    flexDirection: "row",
    textAlign: "left",
    textAlignVertical: "center",
    fontSize: size.MY_TEAM_OVERVIEW_TITLE_FONT_SIZE,
    fontFamily: font.BLACK_HANS_SANS_400_REGULAR,
  },
  content: {
    flex: 3,
    flexDirection: "row",
    textAlign: "left",
    textAlignVertical: "center",
    fontSize: font.MY_TEAM_OVERVIEW_CONTENT_FONT_SIZE,
    fontFamily: font.DO_HYEON_400_REGULAR,
  },
});
