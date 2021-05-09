import produce from "immer";
import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import MatchHeader from "../components/MatchHeader";
import MatchItem from "../components/MatchItem";
import SideButton from "../components/SideButton";

export default function MatchListScreen({ navigation }) {
  const matches = useSelector((state) => {
    return state.matchReducer.matches;
  }, (prev, next) => {
    return produce(prev, (draft) => draft) === produce(next, (draft) => draft);
  });

  return (
    <View style={styles.container}>
      <MatchHeader />
      <View style={styles.body}>
        <FlatList
          style={{ width: "80%" }}
          contentContainerStyle={{ justifyContent: "flex-end", alignItems: "center" }}
          keyExtractor={(item) => item._id}
          data={matches}
          renderItem={({ item }) => <MatchItem item={item} />}
        />
      </View>
      <SideButton
        navigation={navigation}
        route="MatchCreate"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#FAF2E0",
  },
  body: {
    flex: 1,
    alignItems: "center",
  },
});
