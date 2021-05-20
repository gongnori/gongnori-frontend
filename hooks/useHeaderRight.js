import React, { useCallback, useEffect } from "react";
import { Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import _ from "lodash";

import { updateMyData } from "../actions/userActionCreators";
import {
  viewInputAlert,
  hideHeaderRightLoading,
  viewHeaderRightLoading,
  viewCompletion,
} from "../actions/loadingActionCreators";

import fetchServer from "../utils/fetchServer";
import * as params from "../constants/params";

const useHeaderRight = (navigation, title, method, path, data) => {
  const dispatch = useDispatch();
  const handlePressHeaderRight = _.throttle(async () => {
    if (data) {
      for (const input in data) {
        if (data[input] === null) {
          dispatch(viewInputAlert());

          return;
        }
      }
    }

    dispatch(viewHeaderRightLoading());

    const res = await fetchServer(
      method,
      path,
      data,
    );

    dispatch(updateMyData());
    dispatch(hideHeaderRightLoading());
    dispatch(viewCompletion());
  }, params.THROTTLE_TIME);

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
