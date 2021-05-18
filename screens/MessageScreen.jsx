import produce from "immer";
import React, { useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { API_SERVER } from "@env";
import _ from "lodash"
import MatchHeader from "../components/MatchHeader";
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
    console.log("!!!")
  })
  useEffect(() => {
    dispatch(updateMyData());
  }, []);

  return (
    <View style={styles.container}>
      {/* MatchHear -> Header로 리팩토링 */}
      <MatchHeader />
      <View style={styles.body}>
        <FlatList
          style={{ width: "100%" }}
          contentContainerStyle={{ justifyContent: "flex-end", alignItems: "center" }}
          keyExtractor={(item) => item.id}
          data={messages}
          renderItem={({ item }) => <MessageItem item={item} navigation={navigation} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    // backgroundColor: color.PRIMARY_GRAY,
    // backgroundColor: "yellow"
  },
  body: {
    flex: 1,
    alignItems: "center",
  },
});
