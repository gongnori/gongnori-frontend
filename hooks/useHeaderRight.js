import React, { useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { API_SERVER } from "@env";
import { updateMyData } from "../actions/userActionCreators";
import fetchServer from "../utils/fetchServer";
import { viewMatchScreenLoading, hideMatchScreenLoading } from "../actions/loadingActionCreators";


const useHeaderRight = (navigation, title, method, path, data) => {
  const dispatch = useDispatch();
  const handlePressHeaderRight = async () => {
    console.log(viewMatchScreenLoading())
    dispatch(viewMatchScreenLoading());
    const res = await fetchServer(
      method,
      `${API_SERVER}/${path}`,
      data,
    );

    dispatch(hideMatchScreenLoading());


    dispatch(updateMyData());
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: 50,
              width: 50,
              right: 20,
            }}
            onPress={handlePressHeaderRight}
          >
            <Text style={{ fontSize: 16 }}>
              {title}
            </Text>
          </TouchableOpacity>
        );
      },
    });
  });
};

export default useHeaderRight;
