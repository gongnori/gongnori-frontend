import { combineReducers } from "redux";
import appReducer from "./appReducer";
import errorReducer from "./errorReducer";
import loadingReducer from "./loadingReducer";
import userReducer from "./userReducer";

const reducer = combineReducers(
  {
    appReducer,
    errorReducer,
    loadingReducer,
    userReducer,
  },
);

export default reducer;
