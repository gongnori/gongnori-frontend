const initialState = {
  name: "",
  email: "",
  isLogin: false,
};

const authReducer = (state = initialState, action) => {
  const userInfo = action.payload;

  switch (action.type) {
    case "AUTH_LOGIN_SUCCESS":
      return {
        name: userInfo.name,
        email: userInfo.email,
        isLogin: true,
      };
    case "AUTH_LOGIN_FAIL":
      return {
        ...state,
        isLogin: false,
      };
    default:
      return state;
  }
};

export default authReducer;
