const initialState = {
  locations: [],
  sports: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INITIALIZE_APP_SUCCESS":
      return action.payload;
    case "INITIALIZE_APP_FAIL":
      return { playgrounds: [] };
    default:
      return state;
  }
};

export default appReducer;
