import React from "react";
import { Provider } from "react-redux";
import { View } from "react-native";
import store from "./store/store";
import AppNavigtion from "./navigators/AppNavigation";

export default function App() {
  return (
    // <View></View>
    <Provider store={store}>
      <AppNavigtion />
    </Provider>
  );
}
