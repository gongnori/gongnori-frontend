import produce from "immer";
import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, View, Text, TextInput, FlatList, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { API_SERVER } from "@env";
import socketio from "socket.io-client";
import _ from "lodash";
import CustomButton from "../components/CustomButton";
import ChatItem from "../components/ChatItem";
import * as color from "../constants/colors";
import * as size from "../constants/sizes";

const socket = socketio(API_SERVER);

export default function ChatScreen({ navigation, route }) {
  const userName = useSelector((state) => state.userReducer.name);
  const [content, setContent] = useState("");
  const [conversation, setConverSation] = useState([]);
  const { message } = route.params;
  console.log(message)

  useEffect(() => {
    socket.emit("join-chat-room", message.id);
    socket.on("send-message", (data) => setConverSation(data));
    socket.on("load-message", (data) => setConverSation(data));
  }, []);

  const handlePressSendBtn = _.throttle(() => {
    socket.emit("send-message", { name: userName, content });
    setContent("")
  }, 100);

  const handleChangeText = (value) => setContent(value);


  const getItemLayout = useCallback((data, index) => ({
    length: 100,
    offset: 100 * index,
    index,
  }), []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.chatting}
        contentContainerStyle={{ justifyContent: "flex-end" }}
        keyExtractor={(item) => item["_id"]}
        data={conversation}
        getItemLayout={getItemLayout}
        initialScrollIndex={conversation.length - 1}
        renderItem={({ item }) => <ChatItem item={item} navigation={navigation} />}
        // inverted={true}
      />
      <View style={styles.textInputBar}>
        <TextInput
          value={content}
          style={styles.textInput}
          autoCompleteType="off"
          onChangeText={handleChangeText}
        />
        <CustomButton
          title={"보내기"}
          buttonStyle={styles.sendBtn}
          onPress={handlePressSendBtn}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: color.PRIMARY_GRAY,
  },
  chatting: {
    flex: 1,
  },
  textInputBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: size.DEVICE_WIDTH,
    height: 0.07 * size.DEVICE_HEIGHT,
    backgroundColor: color.PRIMARY_BLUE,
  },
  textInput: {
    width: 0.75 * size.DEVICE_WIDTH,
    height: 0.05 * size.DEVICE_HEIGHT,
    margin: 10,
    borderRadius: 10,
    backgroundColor: color.SECONDARY_WHITE,
  },
  sendBtn: {
    width: 0.15 * size.DEVICE_WIDTH,
    height: 0.05 * size.DEVICE_HEIGHT,
    marginRight: 10,
    backgroundColor: color.SECONDARY_BLUE,
  },
  content: {
    width: 0.15 * size.DEVICE_WIDTH,
    height: 0.05 * size.DEVICE_HEIGHT,
    margin: 10,
    alignSelf: "flex-end",
    backgroundColor: color.SECONDARY_BLUE,
  },
  // sendBtnText: {
  //   backgroundColor: color.SECONDARY_WHITE,
  // },
});
