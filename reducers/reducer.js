import { combineReducers } from "redux";
import authReducer from "./authReducer";
import matchReducer from "./matchReducer";
import playgroundReducer from "./playgroundReducer";

const reducer = combineReducers(
  {
    authReducer,
    matchReducer,
    playgroundReducer,
  },
);

export default reducer;
