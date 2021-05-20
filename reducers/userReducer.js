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
        // draft.messages = action.payload.messages;
        draft.currentLocation = action.payload.locations[0];
        draft.currentTeam = action.payload.teams[0];
        // draft.currentMessage = action.payload.messages[0];
        draft.currentSports = action.payload.sports[0];
      });
    case "AUTH_LOGIN_FAIL":
      return produce(state, (draft) => {
        draft.isLogin = false;
      });
    case "SAVE_MY_LOCATION_SUCCESS":
      return produce(state, (draft) => {
        draft.locations = action.payload;
        draft.currentLocation = action.payload[0];
      });
    case "SAVE_MY_LOCATION_FAIL":
      return produce(state, (draft) => {
        draft.locations = [];
      });
    case "LOAD_MY_MESSAGE_SUCCESS":
      return produce(state, (draft) => {
        draft.messages = action.payload;
      });
    case "LOAD_MY_MESSAGE_FAIL":
      return produce(state, (draft) => {
        draft.messages = [];
      });
    case "UPDATE_MY_DATA_SUCCESS":
      return produce(state, (draft) => {
        const { teams, messages } = action.payload;

        draft.teams = teams;
        draft.messages = messages;

        if (!draft.currentTeam) {
          draft.currentTeam = teams[0];
        }
      });
    case "UPDATE_MY_DATA_FAIL":
      return state;
    case "SET_CURRENT_TEAM":
      return produce(state, (draft) => {
        draft.currentTeam = action.payload;
      });
    case "SET_CURRENT_LOCATION":
      return produce(state, (draft) => {
        draft.currentLocation = action.payload;
      });
    case "SET_CURRENT_SPORTS":
      return produce(state, (draft) => {
        draft.currentSports = action.payload;
      });
    default:
      return state;
  }
};

export default userReducer;
