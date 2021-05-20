import React, { useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import _ from "lodash";

import NormalHeader from "../components/NormalHeader";
import MessageItem from "../components/MessageItem";

import { updateMyData } from "../actions/userActionCreators";

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

MessageScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

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
