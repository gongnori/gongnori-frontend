import produce from "immer";

const initialState = {
  isMatchLoading: false,
  isRankLoading: false,
  isHeaderRightLoading: false,
};

const loadingReducer = (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
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
    default:
      return state;
  }
};

export default loadingReducer;
