import React, { useEffect } from "react";
import { Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";

import CustomButton from "../components/CustomButton";
import useAuthGoogle from "../hooks/useAuthGoogle";
import { authLogin } from "../actions/userActionCreators";

import * as color from "../constants/colors";

export default function LoginScreen() {
  const dispatch = useDispatch();
  const [signInGoogle, getGoogleUserInfo] = useAuthGoogle();

  useEffect(() => {
    (async () => {
      const userInfo = await getGoogleUserInfo();

      if (!userInfo) { return }

      dispatch(authLogin(userInfo));
    })();
  }, [getGoogleUserInfo]);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={require("../assets/soccerBall.jpeg")} />
      <CustomButton
        title="Google로 시작하기"
        onPress={signInGoogle}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: color.SECONDARY_GRAY,
  },
  image: {
    height: "50%",
    width: "50%",
    resizeMode: "cover",
  },
});
