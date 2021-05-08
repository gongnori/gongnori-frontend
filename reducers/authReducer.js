const initialState = {
  name: "",
  isLogin: false,
};

const authReducer = (state = initialState,  action) => {
  const userInfo = action.payload;

  switch (action.type) {
    case "AUTH_LOGIN":
      return {
        ...state,
        name: userInfo.name,
        email: userInfo.email,
        isLogin: true,
      };
    default:
      return state;
  }
};

export default authReducer;
