import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import * as color from "../constants/colors";
import * as font from "../constants/fonts";

export default function CustomTextInput({ title, value, placeholder, onChangeText }) {
  return (
    <View style={styles.textInputContainer}>
      <Text style={styles.text}>{title}</Text>
      <TextInput
        value={value}
        style={styles.textInput}
        placeholder={placeholder}
        autoCompleteType="off"
        onChangeText={onChangeText}
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
  textInputContainer: {
    justifyContent: "space-evenly",
    width: 150,
    height: 60,
  },
  text: {
    flex: 1,
    textAlignVertical: "center",
    fontSize: 16,
    fontFamily: font.BLACK_HANS_SANS_400_REGULAR,
  },
  textInput: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: color.SECONDARY_WHITE,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 14,
    fontFamily: font.DO_HYEON_400_REGULAR,
  },
});
