import React from "react";
import { Provider } from "react-redux";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { DoHyeon_400Regular } from "@expo-google-fonts/do-hyeon";
import { BlackHanSans_400Regular } from "@expo-google-fonts/black-han-sans";
 import { NanumGothicCoding_400Regular, NanumGothicCoding_700Bold } from "@expo-google-fonts/nanum-gothic-coding";

import store from "./store/store";
import AppNavigtion from "./navigators/AppNavigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    DoHyeon_400Regular,
    BlackHanSans_400Regular,
    NanumGothicCoding_400Regular,
    NanumGothicCoding_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <AppNavigtion />
    </Provider>
  );
}
