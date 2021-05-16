import produce from "immer";

const initialState = {
  initializeError: false,
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_INITIALIZE_ERROR":
      return produce(state, ((draft) => {
        draft.initializeError = true;
      }));
    default:
      return state;
  }
};

export default errorReducer;
