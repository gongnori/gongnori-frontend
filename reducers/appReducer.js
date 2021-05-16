import produce from "immer";

const initialState = {
  locations: [],
  sports: [],
  mathes: [],
  playgrounds: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INITIALIZE_APP_SUCCESS":
      return action.payload;
    case "INITIALIZE_APP_FAIL":
      return state;
    case "LOAD_MATCH_SUCCESS":
      return { ...state, matches: action.payload };
    case "LOAD_MATCH_FAIL":
      return { ...state, matches: [] };
    case "LOAD_PLAYGROUNDS_SUCCESS":
      return { playgrounds };
    case "LOAD_PLAYGROUNDS_FAIL":
      return { playgrounds: [] };
    case "LOAD_MY_TEAM_SUCCESS":
      return { ...state, myTeam: action.payload };
    case "LOAD_MY_TEAM_FAIL":
      return { ...state, myTeam: null };
    default:
      return state;
  }
};

export default appReducer;
