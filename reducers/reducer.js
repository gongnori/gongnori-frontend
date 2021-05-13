import { combineReducers } from "redux";
import appReducer from "./appReducer";
import authReducer from "./authReducer";
import matchReducer from "./matchReducer";
import playgroundReducer from "./playgroundReducer";
import teamReducer from "./teamReducer";

const reducer = combineReducers(
  {
    appReducer,
    authReducer,
    matchReducer,
    playgroundReducer,
    teamReducer,
  },
);

export default reducer;
