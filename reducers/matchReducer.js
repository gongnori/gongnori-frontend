const initialState = {
  matches: [],
};

const matchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_MATCH_SUCCESS":
      return { ...state, matches: action.payload };
    case "LOAD_MATCH_FAIL":
      return { ...state, matches: [] };
    default:
      return state;
  }
};

export default matchReducer;
