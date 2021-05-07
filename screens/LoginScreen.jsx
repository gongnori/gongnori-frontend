import React from "react";
import { StyleSheet, View } from "react-native";
import CustomButton from "../components/CustomButton";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <CustomButton title="Google로 시작하기" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FAF2E0",
  },
});
