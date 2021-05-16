import produce from "immer";

const initialState = {
  name: "",
  email: "",
  locations: [],
  teams: [],
  messages: [],
  currentLocation: null,
  currentTeam: null,
  currentSports: null,
  currentMessage: null,
  isLogin: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_LOGIN_SUCCESS":
      return produce(state, (draft) => {
        draft.isLogin = true;
        draft.name = action.payload.name;
        draft.email = action.payload.email;
        draft.locations = action.payload.locations;
        draft.teams = action.payload.teams;
        draft.messages = action.payload.messages;
        draft.currentLocation = action.payload.currentLocation; // locations[0]
        draft.currentTeam = action.payload.currentTeam;
        draft.currentMessage = action.payload.currentMessage;
        draft.currentSports = action.payload.currentSports;
      });
    case "AUTH_LOGIN_FAIL":
      return produce(state, (draft) => {
        draft.isLogin = false;
      });
    case "SAVE_MY_LOCATION_SUCCESS":
      return produce(state, (draft) => {
        draft.locations = action.payload;
      });
    case "SAVE_MY_LOCATION_FAIL":
      return produce(state, (draft) => {
        draft.locations = [];
      });
    case "UPDATE_MY_DATA_SUCCESS":
      return produce(state, (draft) => {
        draft.teams = action.payload.teams;
        draft.messages = action.payload.messages;
      });
    case "UPDATE_MY_DATA_FAIL":
      return state;
    default:
      return state;
  }
};

export default userReducer;
