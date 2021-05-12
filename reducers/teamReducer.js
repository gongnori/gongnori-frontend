const initialState = {
  myTeam: null,
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_MY_TEAM_SUCCESS":
      console.log("!!", action.payload);
      return { ...state, myTeam: action.payload };
    case "LOAD_MY_TEAM_FAIL":
      return { ...state, myTeam: null };
    default:
      return state;
  }
};

export default teamReducer;
