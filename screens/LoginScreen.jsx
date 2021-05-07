import React from "react";
import { StyleSheet, View, Image } from "react-native";
import CustomButton from "../components/CustomButton";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/soccerBall.jpeg")} />
      <CustomButton title="Google로 시작하기" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FAF2E0",
  },
  image: {
    height: "50%",
    width: "50%",
    resizeMode: "cover",
  },
});
