import produce from "immer";
import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import MatchHeader from "../components/MatchHeader";
import MatchItem from "../components/MatchItem";
import SideButton from "../components/SideButton";
import * as color from "../constants/colors";

export default function MatchListScreen({ navigation }) {
  const matches = useSelector((state) => {
    return state.matchReducer.matches;
  }, (prev, next) => {
    return produce(prev, (draft) => draft) === produce(next, (draft) => draft);
  });

  const sortedMatches = produce(matches, (draft) => {
    draft.sort((a, b) => {
      const milliSecA = new Date(a.playtime.start).getTime();
      const milliSecB = new Date(b.playtime.start).getTime();

      return milliSecA - milliSecB;
    });
  });

  return (
    <View style={styles.container}>
      <MatchHeader />
      <View style={styles.body}>
        <FlatList
          style={{ width: "90%" }}
          contentContainerStyle={{ justifyContent: "flex-end", alignItems: "center" }}
          keyExtractor={(item) => item._id}
          data={sortedMatches}
          renderItem={({ item }) => <MatchItem item={item} navigation={navigation} />}
        />
      </View>
      <SideButton
        navigation={navigation}
        route={"MatchCreate"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: color.PRIMARY_GRAY,
  },
  body: {
    flex: 1,
    alignItems: "center",
  },
});
