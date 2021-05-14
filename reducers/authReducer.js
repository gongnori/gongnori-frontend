const initialState = {
  name: "",
  email: "",
  locations: [],
  teams: [],
  isLogin: false,
};

const authReducer = (state = initialState, action) => {
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
      return {
        ...state,
        isLogin: false,
      };
    case "SAVE_MY_LOCATION_SUCCESS":
      return {
        ...state,
        locations: action.payload.locations,
      };
    case "SAVE_MY_LOCATION_FAIL":
      return {
        ...state,
        locations: [],
      };
    default:
      return state;
  }
};

export default authReducer;
