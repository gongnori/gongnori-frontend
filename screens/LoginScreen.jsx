import React, { useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import { useDispatch } from "react-redux";
import CustomButton from "../components/CustomButton";
import { authLogin } from "../actions/userActionCreators";
import useAuthGoogle from "../hooks/useAuthGoogle";
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
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/soccerBall.jpeg")} />
      <CustomButton
        title="Google로 시작하기"
        onPress={signInGoogle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: color.PRIMARY_GRAY,
  },
  image: {
    height: "50%",
    width: "50%",
    resizeMode: "cover",
  },
});
