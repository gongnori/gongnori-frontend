import AsyncStorage from "@react-native-async-storage/async-storage";

const authLogin = (userInfo) => async (dispatch) => {
  const res = await fetch("http://192.168.0.6:8000/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userInfo }),
  });

  const authResult = await res.json();
  const token = authResult.data;

  await AsyncStorage.setItem("token", token, () => console.log("token save"));
};

export { authLogin };
