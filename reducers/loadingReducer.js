import produce from "immer";

const initialState = {
  isMatchScreenLoading: false,
};

const loadingReducer = (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case "VIEW_MATCH_SCREEN_LOADING":
      return produce(state, ((draft) => {
        draft.isMatchScreenLoading = true;
      }));
    case "HIDE_MATCH_SCREEN_LOADING":
      return produce(state, ((draft) => {
        draft.isMatchScreenLoading = false;
      }));
    default:
      return state;
  }
};

export default loadingReducer;
