import produce from "immer";

const initialState = {
  isLoadingScreen: false,
};

const loadingReducer = (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case "VIEW_LOADING_SCREEN":
      return produce(state, ((draft) => {
        draft.isLoadingScreen = true;
      }));
    case "HIDE_LOADING_SCREEN":
      return produce(state, ((draft) => {
        draft.isLoadingScreen = false;
      }));
    case "VIEW_HEADER_RIGHT_LOADING":
      return produce(state, ((draft) => {
        draft.isHeaderRightLoading = true;
      }));
    case "HIDE_HEADER_RIGHT_LOADING":
      return produce(state, ((draft) => {
        draft.isHeaderRightLoading = false;
      }));
    default:
      return state;
  }
};

export default loadingReducer;
