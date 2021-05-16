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

    const { token, locations, teams, sports } = data;
    console.log(data)
    await AsyncStorage.setItem("token", token);

    dispatch({ type: "AUTH_LOGIN_SUCCESS", payload: { name, email, locations, teams, sports } });
  } catch (err) {
    console.error(err.message);
    dispatch({ type: "AUTH_LOGIN_FAIL" });
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
    dispatch({ type: "UPDATE_MY_DATA_FAIL" });
  }
};

const updateMyData = () => async (dispatch) => {
  try {
    const token = await AsyncStorage.getItem("token");
    const teamRes = await fetch(`${API_SERVER}/team/my`, {
      method: "GET",
      headers: { "Authorization": token },
    });

    const messageRes = await fetch(`${API_SERVER}/message/my`, {
      method: "GET",
      headers: { "Authorization": token },
    });

    const myTeam = await teamRes.json();
    const teams = myTeam.data;

    const myMessage = await messageRes.json();
    const messages = myMessage.data;

    if (myTeam.error) { throw new Error() }
    if (myMessage.error) { throw new Error() }

    dispatch({
      type: "UPDATE_MY_DATA_SUCCESS",
      payload: { teams, messages },
    });
  } catch (err) {
    dispatch({ type: "SAVE_MY_LOCATION_FAIL" });
  }
};

export {
  authLogin,
  saveMyLocation,
  updateMyData,
};
