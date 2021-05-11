/**
 * @function
 * @description it fetches server with request spec and return response
 * @params {String} method
 * @params {String} url
 * @return {Any} reqBody
 */

import AsyncStorage from "@react-native-async-storage/async-storage";

const fetchServer = async (method, url, reqBody) => {
  const token = await AsyncStorage.getItem("token");
  console.log(JSON.stringify(reqBody),)
  let req;

  if (method === "GET") {
    req = {
      method,
      headers: { "Authorization": token },
    };
  } else {
    req = {
      method,
      headers: { "Authorization": token, "Content-Type": "application/json" },
      body: JSON.stringify(reqBody),
    };
  }

  const res = await fetch(url, req);

  const result = await res.json();
  const { message, data, error } = result;

  if (error) { throw new Error() }

  return data;
};

export default fetchServer;
