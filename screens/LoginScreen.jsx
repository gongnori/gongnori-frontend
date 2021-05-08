import React, { useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import { useDispatch } from "react-redux";
import * as Google from "expo-auth-session/providers/google";
import CLIENT_ID from "../config/auth";
import CustomButton from "../components/CustomButton";
import { authLogin } from "../actions/actions"

export default function LoginScreen() {
  const dispatch = useDispatch();

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: CLIENT_ID.expo,
    webClientId: CLIENT_ID.web,
    scopes: ["profile", "email"],
  });

  useEffect(() => {
    if (response?.type === "success") {
      dispatch(authLogin(response.authentication.accessToken));
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/soccerBall.jpeg")} />
      <CustomButton title="Google로 시작하기" onPress={() => console.log("!!")} />
      <CustomButton
        title="Login"
        onPress={() => {
          promptAsync();
        }}
      />
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
