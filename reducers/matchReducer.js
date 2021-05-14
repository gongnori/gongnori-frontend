const initialState = {
  matches: [],
};

const matchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_MATCH_SUCCESS":
      console.log("Success")
      // console.log(action)
      return { ...state, matches: action.payload };
    case "LOAD_MATCH_FAIL":
      console.log("Fail")
      // console.log(action)
      return { ...state, matches: [] };
    default:
      return state;
  }
};

export default matchReducer;
