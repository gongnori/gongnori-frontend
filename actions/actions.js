const authLogin = (accessToken) => async (dispatch) => {
  const response = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
    method: "GET",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const userinfo = await response.json();

  dispatch({
    type: "AUTH_LOGIN",
    payload: userinfo,
  });
}

export { authLogin };
