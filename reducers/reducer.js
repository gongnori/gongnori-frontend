import { combineReducers } from "redux";
import authReducer from "./authReducer";
import matchReducer from "./matchReducer";
import playgroundReducer from "./playgroundReducer";
import teamReducer from "./teamReducer";

const reducer = combineReducers(
  {
    authReducer,
    matchReducer,
    playgroundReducer,
    teamReducer,
  },
);

export default reducer;
