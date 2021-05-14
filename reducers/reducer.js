import { combineReducers } from "redux";
import appReducer from "./appReducer";
import userReducer from "./userReducer";
import matchReducer from "./matchReducer";
import playgroundReducer from "./playgroundReducer";
import teamReducer from "./teamReducer";

const reducer = combineReducers(
  {
    appReducer,
    userReducer,
    matchReducer,
    playgroundReducer,
    teamReducer,
  },
);

export default reducer;
