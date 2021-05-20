import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, View, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { StatusBar } from "expo-status-bar";
import PropTypes from "prop-types";

import _ from "lodash";
import socketio from "socket.io-client";
import { API_SERVER } from "@env";

import ChatItem from "../components/ChatItem";
import CustomButton from "../components/CustomButton";
import RegisterResultModal from "../components/RegisterResultModal";

import useHeaderRight from "../hooks/useHeaderRight";

import * as colors from "../constants/colors";
import * as sizes from "../constants/sizes";

const socket = socketio(API_SERVER);

export default function ChatScreen({ navigation, route }) {
  const scrollRef = useRef(null);

  const [isModal, setIsModal] = useState(false);
  const userName = useSelector((state) => state.userReducer.name);
  const [content, setContent] = useState("");
  const [conversations, setConverSations] = useState([]);

  const { message } = route.params;

  const handleChangeText = (value) => setContent(value);

  const handlePressSendBtn = _.throttle(() => {
    socket.emit("send-message", { name: userName, content });
    setContent("");
  }, 100);

  const handleModal = _.throttle(() => setIsModal(!isModal), 100);

  useEffect(() => {
    socket.emit("join-chat-room", message.id);
    socket.on("send-message", (data) => setConverSations(data));
    socket.on("load-message", (data) => setConverSations(data));

    return () => {
      socket.emit("leave-chat-room", message.id, conversations);
      socket.off("send-message");
      socket.off("load-message");
    };
  }, []);

  useEffect(() => {
    scrollRef.current.scrollToEnd({ animated: false });
  }, [conversations]);

  useHeaderRight(navigation, "수락하기", "PATCH", "match", message);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="light-content" />
      <RegisterResultModal
        visible={isModal}
        setIsModal={handleModal}
        message={message}
      />
      <CustomButton
        title={"경기결과 입력"}
        style={styles.resultBtn}
        onPress={handleModal}
      />
      <ScrollView
        ref={scrollRef}
        style={styles.chatting}
      >
        {conversations.map((conversation) => {
          return <ChatItem key={conversation["_id"]} chat={conversation} />;
        })}
      </ScrollView>
      <View style={styles.textInputBar}>
        <TextInput
          value={content}
          style={styles.textInput}
          autoCompleteType="off"
          onChangeText={handleChangeText}
        />
        <CustomButton
          title={"보내기"}
          style={styles.sendBtn}
          onPress={handlePressSendBtn}
        />
      </View>
    </SafeAreaView>
  );
}

ChatScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.SECONDARY_GRAY,
  },
  resultBtn: {
    alignSelf: "center",
    width: 0.5 * sizes.DEVICE_WIDTH,
    height: 0.05 * sizes.DEVICE_HEIGHT,
    borderRadius: 10,
    backgroundColor: colors.PRIMARY_BLUE,
    color: colors.SECONDARY_WHITE,
  },
  chatting: {
    flex: 1,
    width: sizes.DEVICE_WIDTH,
  },
  textInputBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: sizes.DEVICE_WIDTH,
    height: 0.07 * sizes.DEVICE_HEIGHT,
    backgroundColor: colors.SECONDARY_BLUE,
  },
  textInput: {
    width: 0.75 * sizes.DEVICE_WIDTH,
    height: 0.05 * sizes.DEVICE_HEIGHT,
    margin: 10,
    borderRadius: 10,
    backgroundColor: colors.SECONDARY_WHITE,
  },
  sendBtn: {
    width: 0.15 * sizes.DEVICE_WIDTH,
    height: 0.05 * sizes.DEVICE_HEIGHT,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: colors.PRIMARY_BLUE,
    color: colors.SECONDARY_WHITE,
  },
  content: {
    width: 0.15 * sizes.DEVICE_WIDTH,
    height: 0.05 * sizes.DEVICE_HEIGHT,
    margin: 10,
    alignSelf: "flex-end",
    backgroundColor: colors.SECONDARY_BLUE,
  },
  modalButton: {
    flex: 1,
    alignItems: "center",
    bottom: 0.8 * sizes.DEVICE_HEIGHT,
    right: 0.4 * sizes.DEVICE_WIDTH,
    backgroundColor: colors.SECONDARY_GRAY,
  },
});
