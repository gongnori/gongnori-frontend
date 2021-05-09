const initialState = {
  matches: [],
};

const matchReducer = (state = initialState, action) => {
  const matches = action.payload;

  switch (action.type) {
    case "LOAD_MATCH_SUCCESS":
      return { matches };
    case "LOAD_MATCH_FAIL":
      return { matches: [] };
    default:
      return state;
  }
};

export default matchReducer;
