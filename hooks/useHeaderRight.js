import React, { useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { API_SERVER } from "@env";
import fetchServer from "../utils/fetchServer";

const useHeaderRight = (navigation, path, payload) => {
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
              const data = await fetchServer(
                "POST",
                `${API_SERVER}/${path}`,
                payload,
              );
              // navigation.navigate("TabNavigator");
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
