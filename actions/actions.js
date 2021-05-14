import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_SERVER } from "@env";

const authLogin = (userInfo) => async (dispatch) => {
  try {
    const { name, email } = userInfo;

    const res = await fetch(`${API_SERVER}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });

    const result = await res.json();
    const { message, data, error } = result;

    if (error) { throw new Error() }

    const { token, locations, teams } = data;
    await AsyncStorage.setItem("token", token);

    dispatch({ type: "AUTH_LOGIN_SUCCESS", payload: { name, email, locations, teams } });
  } catch (err) {
    console.error(err.message);
    dispatch({ type: "AUTH_LOGIN_FAIL" });
  }
};

const getMatch = (location, sports, year, month, date) => async (dispatch) => {
  try {
    const token = await AsyncStorage.getItem("token");
    const { province, city, district } = location;
    const res = await fetch(`${API_SERVER}/match?province=${province}&city=${city}&district=${district}&sports=${sports}&year=${year}&month=${month}&date=${date}`, {
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

const getMyTeam = (team) => async (dispatch) => {
  try {
    const token = await AsyncStorage.getItem("token");
    const res = await fetch(`${API_SERVER}/team/my-team/${team._id}`, {
      method: "GET",
      headers: { "Authorization": token },
    });

    const result = await res.json();
    const { message, data, error } = result;

    if (error) { throw new Error() }

    const myTeam = data;

    dispatch({
      type: "LOAD_MY_TEAM_SUCCESS",
      payload: myTeam,
    });
  } catch (err) {
    dispatch({ type: "LOAD_MY_TEAM_FAIL" });
  }
};

const saveMyLocation = (email, locations) => async (dispatch) => {
  try {
    const token = await AsyncStorage.getItem("token");
    const res = await fetch(`${API_SERVER}/auth/location`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, locations }),
    });

    const result = await res.json();
    const { message, data, error } = result;

    if (error) { throw new Error() }

    dispatch({
      type: "SAVE_MY_LOCATION_SUCCESS",
      payload: locations,
    });
  } catch (err) {
    dispatch({ type: "SAVE_MY_LOCATION_FAIL" });
  }
};

const setInitialize = () => async (dispatch) => {
  try {
    const res = await fetch(`${API_SERVER}/application`, {
      method: "GET",
    });

    const result = await res.json();
    const { message, data, error } = result;

    if (error) { throw new Error() }

    const initialState = data;

    dispatch({
      type: "INITIALIZE_APP_SUCCESS",
      payload: initialState,
    });
  } catch (err) {
    dispatch({ type: "INITIALIZE_APP_FAIL" });
  }
};

export { authLogin, getMatch, getPlayground, getMyTeam, setInitialize, saveMyLocation };
