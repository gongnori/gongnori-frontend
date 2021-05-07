import React from "react";
import { StyleSheet, View, Image } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import CLIENT_ID from "../config/auth";
import CustomButton from "../components/CustomButton";


export default function LoginScreen() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: CLIENT_ID.expo,
    webClientId: CLIENT_ID.web,
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/soccerBall.jpeg")} />
      <CustomButton title="Google로 시작하기" />
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
