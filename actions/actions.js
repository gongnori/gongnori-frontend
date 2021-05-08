const authLogin = (userInfo) => async (dispatch) => {
  console.log("!!!");
  console.log(userInfo);

  const response = await fetch("http://192.168.0.6:8000/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userInfo }),
  });

  // const userinfo = await response.json();

  // dispatch({
  //   type: "AUTH_LOGIN",
  //   payload: userinfo,
  // });
};

export { authLogin };
