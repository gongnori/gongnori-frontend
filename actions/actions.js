import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_SERVER } from "@env";

const authLogin = (userInfo) => async (dispatch) => {
  try {
    const res = await fetch(`${API_SERVER}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userInfo }),
    });

    const result = await res.json();
    const { message, data, error } = result;

    if (error) { throw new Error() }

    const token = data;
    await AsyncStorage.setItem("token", token);

    dispatch({ type: "AUTH_LOGIN_SUCCESS", payload: userInfo });
  } catch (err) {
    console.error(err.message);
    dispatch({ type: "AUTH_LOGIN_FAIL" });
  }
};

export { authLogin };
