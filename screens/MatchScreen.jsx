import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import MatchHeader from "../components/MatchHeader";
import MatchItem from "../components/MatchItem";

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

export default function GameListScreen() {
  return (
    <View style={styles.container}>
      <MatchHeader />
      <View style={styles.body}>
        <FlatList
          style={{ width: "80%" }}
          contentContainerStyle={{ justifyContent: "flex-end", alignItems: "center" }}
          keyExtractor={(item) => item.toString()}
          data={arr}
          renderItem={({item}) => <MatchItem item={item} />}
        />
      </View>
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
  dropdown_1: {
    flex: 1,
    top: 32,
    left: 8,
  },
});
