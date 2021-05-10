const initialState = {
  playgrounds: [],
};

const playgroundReducer = (state = initialState, action) => {
  const playgrounds = action.payload;

  switch (action.type) {
    case "LOAD_PLAYGROUNDS_SUCCESS":
      return { playgrounds };
    case "LOAD_PLAYGROUNDS_FAIL":
      return { playgrounds: [] };
    default:
      return state;
  }
};

export default playgroundReducer;
