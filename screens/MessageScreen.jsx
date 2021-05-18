import produce from "immer";
import React, { useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { API_SERVER } from "@env";
import _ from "lodash"
import NormalHeader from "../components/NormalHeader";
import MessageItem from "../components/MessageItem";
import SideButton from "../components/SideButton";
import { updateMyData } from "../actions/userActionCreators";
import fetchServer from "../utils/fetchServer";
import * as color from "../constants/colors";
import * as size from  "../constants/sizes"

export default function MessageScreen({ navigation }) {
  const messages = useSelector((state) => {
    return state.userReducer.messages;
  }, (prev, next) => _.cloneDeep(prev) === _.cloneDeep(next));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateMyData());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <NormalHeader />
      <View style={styles.body}>
        <FlatList
          style={{ width: "100%" }}
          contentContainerStyle={{ justifyContent: "flex-end", alignItems: "center" }}
          keyExtractor={(item) => item.id}
          data={messages}
          renderItem={({ item }) => <MessageItem item={item} navigation={navigation} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  body: {
    flex: 1,
    alignItems: "center",
  },
});
