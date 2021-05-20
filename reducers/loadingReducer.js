import produce from "immer";

const initialState = {
  isInputInvalid: false,
  isMatchLoading: false,
  isRankLoading: false,
  isHeaderRightLoading: false,
  isCompletionShown: false,
};

const loadingReducer = (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case "VIEW_INPUT_ALERT":
      return produce(state, ((draft) => {
        draft.isInputInvalid = true;
      }));
    case "HIDE_INPUT_ALERT":
      return produce(state, ((draft) => {
        draft.isInputInvalid = false;
      }));
    case "VIEW_MATCH_LOADING":
      return produce(state, ((draft) => {
        draft.isMatchLoading = true;
      }));
    case "HIDE_MATCH_LOADING":
      return produce(state, ((draft) => {
        draft.isMatchLoading = false;
      }));
    case "VIEW_RANK_LOADING":
      return produce(state, ((draft) => {
        draft.isRankLoading = true;
      }));
    case "HIDE_RANK_LOADING":
      return produce(state, ((draft) => {
        draft.isRankLoading = false;
      }));
    case "VIEW_HEADER_RIGHT_LOADING":
      return produce(state, ((draft) => {
        draft.isHeaderRightLoading = true;
      }));
    case "HIDE_HEADER_RIGHT_LOADING":
      return produce(state, ((draft) => {
        draft.isHeaderRightLoading = false;
      }));
    case "VIEW_COMPLETION":
      return produce(state, ((draft) => {
        draft.isCompletionShown = true;
      }));
    case "HIDE_COMPLETION":
      return produce(state, ((draft) => {
        draft.isCompletionShown = false;
      }));
    default:
      return state;
  }
};

export default loadingReducer;
