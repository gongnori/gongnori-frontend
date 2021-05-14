
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import produce from "immer";
import _ from "lodash"
const useMatchState = () => {
  const sports = useSelector((state) => {
    return state.appReducer.sports;
  }, (prev, next) => _.cloneDeep(prev) === _.cloneDeep(next));

  const teams = useSelector((state) => {
    return state.userReducer.teams;
  }, (prev, next) => _.cloneDeep(prev) === _.cloneDeep(next));

  const [matchSports , setMathSports] = useState(sports);

  const [match, setMatch] = useState({});

  const handleSelectType = (index, value) => {
    setMatch(produce(match, (draft) => {
      draft.type = value;
    }));
  };

  const handleSelectMonth = (index, value) => {
    setMatch(produce(match, (draft) => {
      draft.month = value;
    }));
  };

  const handleSelectDate = (index, value) => {
    setMatch(produce(match, (draft) => {
      draft.date = value;
    }));
  };

  const handleSelectMeridiem = (index, value) => {
    setMatch(produce(match, (draft) => {
      draft.meridiem = value;
    }));
  };

  const handleSelectStart = (index, value) => {
    setMatch(produce(match, (draft) => {
      draft.start = value.replace(":00", "");
    }));
  };

  const handleSelectEnd = (index, value) => {
    setMatch(produce(match, (draft) => {
      draft.end = value.replace(":00", "");
    }));
  };

  const handleSelectSports = (index) => {
    setMatch(produce(match, (draft) => {
      draft.sports = sports[index];
    }));
  };

  const handleSelectTeam = (index) => {
    setMatch(produce(match, (draft) => {
      draft.teams = [teams[index]];
    }));
  };

  const handlePressPlayground = (value) => {
    setMatch(produce(match, (draft) => {
      draft.playground = value;
    }));
  };

  return [
    match,
    handleSelectType,
    handleSelectMonth,
    handleSelectDate,
    handleSelectMeridiem,
    handleSelectStart,
    handleSelectEnd,
    handleSelectSports,
    handleSelectTeam,
    handlePressPlayground
  ];
};

export default useMatchState;