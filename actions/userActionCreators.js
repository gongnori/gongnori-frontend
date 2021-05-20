import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_SERVER } from "@env";
import { viewMessageLoading, hideMessageLoading} from "../actions/loadingActionCreators";

const setCurrentTeam = (payload) => ({
  type: "SET_CURRENT_TEAM",
  payload,
});

const setCurrentLocation = (payload) => ({
  type: "SET_CURRENT_LOCATION",
  payload,
});

const setCurrentSports = (payload) => ({
  type: "SET_CURRENT_SPORTS",
  payload,
});

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

    await AsyncStorage.setItem("token", token);

    dispatch({ type: "AUTH_LOGIN_SUCCESS", payload: { name, email, locations, teams, sports } });
  } catch (err) {
    dispatch({ type: "AUTH_LOGIN_FAIL" });
  }
};

const getMyMessage = () => async (dispatch) => {
  try {
    const token = await AsyncStorage.getItem("token");
     
    dispatch(viewMessageLoading());

    const res = await fetch(`${API_SERVER}/message/my`, {
      method: "GET",
      headers: {
        "Authorization": token,
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();
    const { message, data, error } = result;

    if (error) { throw new Error() }

    dispatch({ type: "LOAD_MY_MESSAGE_SUCCESS", payload: data });
    dispatch(hideMessageLoading());
  } catch (err) {
    dispatch({ type: "LOAD_MY_MESSAGE_FAIL" });
  }
};

const saveMyLocation = (locations) => async (dispatch) => {
  try {
    const token = await AsyncStorage.getItem("token");

    const res = await fetch(`${API_SERVER}/user/location`, {
      method: "POST",
      headers: {
        "Authorization": token,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ locations }),
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

    const _teams = await fetch(`${API_SERVER}/team/my`, {
      method: "GET",
      headers: { "Authorization": token },
    });

    const _messages = await fetch(`${API_SERVER}/message/my`, {
      method: "GET",
      headers: { "Authorization": token },
    });

    const myTeam = await _teams.json();
    const teams = myTeam.data;

    const myMessage = await _messages.json();
    const messages = myMessage.data;

    if (myTeam.error) { throw new Error() }
    if (myMessage.error) { throw new Error() }

    dispatch({
      type: "UPDATE_MY_DATA_SUCCESS",
      payload: { teams, messages },
    });
  } catch (err) {
    dispatch({ type: "UPDATE_MY_DATA_FAIL" });
  }
};

export {
  authLogin,
  saveMyLocation,
  getMyMessage,
  updateMyData,
  setCurrentTeam,
  setCurrentLocation,
  setCurrentSports,
};
