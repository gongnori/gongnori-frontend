import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import * as color from "../constants/colors";
import * as font from "../constants/fonts";
import * as size from "../constants/sizes";

export default function CustomTextInput({
  title,
  value,
  placeholder,
  onChangeText,
}) {
  return (
    <View style={styles.textInputContainer}>
      <Text style={styles.title}>{title}</Text>
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
  textInputContainer: {
    height: 60,
    width: 200,
  },
  title: {
    height: "50%",
    fontSize: size.TERTIARY_FONT_SIZE,
    fontFamily: font.PRIMARY_FONT,
    textAlign: "center",
    textAlignVertical: "center",
    includeFontPadding: false,
  },
  textInput: {
    height: "50%",
    borderRadius: 5,
    backgroundColor: color.SECONDARY_WHITE,
    fontSize: size.QUATERNARY_FONT_SIZE,
    fontFamily: font.SECONDARY_FONT,
    textAlign: "center",
    textAlignVertical: "center",
    includeFontPadding: false,
  },
});
