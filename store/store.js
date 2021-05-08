import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger"
import reducer from "../reducers/reducer"

const middleware = [thunk, createLogger()];

// if (process.env.NODE_ENV === 'development') {
//     middleware.push(createLogger())
// }

export default store = createStore(reducer, applyMiddleware(...middleware));
