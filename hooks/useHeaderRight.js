import React, { useEffect } from "react";
import { Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

import { updateMyData } from "../actions/userActionCreators";
import { hideHeaderRightLoading, viewHeaderRightLoading } from "../actions/loadingActionCreators";
import fetchServer from "../utils/fetchServer";

const useHeaderRight = (navigation, title, method, path, data) => {
  const dispatch = useDispatch();
  const handlePressHeaderRight = async () => {
    dispatch(viewHeaderRightLoading());

    const res = await fetchServer(
      method,
      path,
      data,
    );

    dispatch(updateMyData());
    dispatch(hideHeaderRightLoading());
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
