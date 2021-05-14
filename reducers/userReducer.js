import produce from "immer";

const initialState = {
  name: "",
  email: "",
  locations: [],
  teams: [],
  messages: [],
  isLogin: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_LOGIN_SUCCESS":
      return {
        name: action.payload.name,
        email: action.payload.email,
        locations: action.payload.locations,
        teams: action.payload.teams,
        isLogin: true,
      };
    case "AUTH_LOGIN_FAIL":
      return produce(state, (draft) => {
        draft.isLogin = false;
      });
    case "SAVE_MY_LOCATION_SUCCESS":
      return {
        ...state,
        locations: action.payload,
      };
    case "SAVE_MY_LOCATION_FAIL":
      return {
        ...state,
        locations: [],
      };
    case "UPDATE_MY_TEAMS":
      return produce(state, (draft) => {
        console.log(action)
        draft.teams.push(action.payload)
      });
    default:
      return state;
  }
};

export default userReducer;
