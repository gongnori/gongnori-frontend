import produce from "immer";
import React, { useRef, useState, useEffect, useCallback } from "react";
import { StyleSheet, View, Text, TextInput, FlatList, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { API_SERVER } from "@env";
import socketio from "socket.io-client";
import _ from "lodash";
import CustomButton from "../components/CustomButton";
import ChatItem from "../components/ChatItem";
import useHeaderRight from "../hooks/useHeaderRight";
import * as color from "../constants/colors";
import * as size from "../constants/sizes";

const socket = socketio(API_SERVER);

export default function ChatScreen({ navigation, route }) {
  const flatListRef = useRef(null);

  const userName = useSelector((state) => state.userReducer.name);
  const [content, setContent] = useState("");
  const [conversation, setConverSation] = useState([]);
  const { message } = route.params;
  const currentTeam = useSelector((state) => {
    return state.userReducer.currentTeam;
  }, (prev, next) => _.cloneDeep(prev) === _.cloneDeep(next));

  useEffect(() => {
    socket.emit("join-chat-room", message.id);
    socket.on("send-message", (data) => setConverSation(data));
    socket.on("load-message", (data) => setConverSation(data));

    return () => {
      console.log(conversation)
      socket.emit("leave-chat-room", message.id, conversation);
      socket.off("send-message");
      socket.off("load-message");
    };
  }, []);

  useEffect(() => {
    // flatListRef.current.scrollToEnd()
  },[conversation])

  const handlePressSendBtn = _.throttle(() => {
    socket.emit("send-message", { name: userName, content });
    setContent("");
  }, 100);

  const handleChangeText = (value) => setContent(value);
  const handleContentSizeChange= (width, height) => flatListRef.current.scrollToEnd();

  useHeaderRight(navigation, "수락하기", "PATCH", "match", message);

  return (
    <View style={styles.container}>
      <FlatList //scroll view로 바꾸어야할듯,...
        ref={flatListRef}
        style={styles.chatting}
        contentContainerStyle={{ justifyContent: "flex-end" }}
        keyExtractor={(item) => item["_id"]}
        data={conversation}
        onContentSizeChange={handleContentSizeChange}
        renderItem={({ item }) => <ChatItem item={item} navigation={navigation} />}
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
    backgroundColor: color.SECONDARY_GRAY,
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
    backgroundColor: color.SECONDARY_BLUE,
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
