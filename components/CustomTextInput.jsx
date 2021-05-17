import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import * as colors from "../constants/colors";
import * as fonts from "../constants/fonts";
import * as sizes from "../constants/sizes";

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
    flexDirection: "row",
    height: 60,
    width: 200,
  },
  title: {
    height: "50%",
    fontSize: sizes.TERTIARY_FONT_SIZE,
    fontFamily: fonts.PRIMARY_FONT,
    textAlign: "center",
    textAlignVertical: "center",
    includeFontPadding: false,
  },
  textInput: {
    height: "50%",
    borderRadius: 5,
    backgroundColor: colors.SECONDARY_WHITE,
    fontSize: sizes.QUATERNARY_FONT_SIZE,
    fontFamily: fonts.SECONDARY_FONT,
    textAlign: "center",
    textAlignVertical: "center",
    includeFontPadding: false,
  },
});
