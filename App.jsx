import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import AppNavigtion from "./navigators/AppNavigation";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigtion />
    </Provider>
  );
}
