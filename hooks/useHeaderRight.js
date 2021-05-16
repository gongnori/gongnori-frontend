import React, { useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { API_SERVER } from "@env";
import { updateMyData } from "../actions/userActionCreators";
import fetchServer from "../utils/fetchServer";

const useHeaderRight = (navigation, path, data) => {
  const dispatch = useDispatch();

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
            onPress={async () => {
              const result = await fetchServer(
                "POST",
                `${API_SERVER}/${path}`,
                data,
              );

              dispatch(updateMyData());
            }}
          >
            <Text style={{ fontSize: 16 }}>
              완료
            </Text>
          </TouchableOpacity>
        );
      },
    });
  });
};

export default useHeaderRight;
