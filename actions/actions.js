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

const getMatch = (year, month, date) => async (dispatch) => {
  try {
    const token = await AsyncStorage.getItem("token");
    // ?locationyear=2021&month=5&date&12
    const res = await fetch(`${API_SERVER}/match?year=${year}&month=${month}&date=${date}`, {
      method: "GET",
      headers: { "Authorization": token },
    });

    const result = await res.json();
    const { message, data, error } = result;

    if (error) { throw new Error() }

    const matches = data;

    dispatch({
      type: "LOAD_MATCH_SUCCESS",
      payload: matches,
    });
  } catch (err) {
    dispatch({ type: "LOAD_MATCH_FAIL" });
  }
};

const getPlayground = (province, city, district) => async (dispatch) => {
  try {
    const token = await AsyncStorage.getItem("token");

    const res = await fetch(`${API_SERVER}/playground?province=${province}&city=${city}&district=${district}`, {
      method: "GET",
      headers: { "Authorization": token },
    });

    const result = await res.json();
    const { message, data, error } = result;

    if (error) { throw new Error() }

    const playgrounds = data;

    dispatch({
      type: "LOAD_PLAYGROUNDS_SUCCESS",
      payload: playgrounds,
    });
  } catch (err) {
    dispatch({ type: "LOAD_PLAYGROUNDS_FAIL" });
  }
};

export { authLogin, getMatch, getPlayground };
