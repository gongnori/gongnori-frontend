import { combineReducers } from "redux";
import authReducer from "./authReducer";
import matchReducer from "./matchReducer";

const reducer = combineReducers(
  {
    authReducer,
    matchReducer,
  },
);

export default reducer;
