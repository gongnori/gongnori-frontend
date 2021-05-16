import { combineReducers } from "redux";
import appReducer from "./appReducer";
import errorReducer from "./errorReducer";
import userReducer from "./userReducer";

const reducer = combineReducers(
  {
    appReducer,
    errorReducer,
    userReducer,
  },
);

export default reducer;
