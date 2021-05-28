/**
 * @function
 * @description it fetches server with request spec and return response
 * @params {String} method
 * @params {String} url
 * @return {Any} reqBody
 */

import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_SERVER } from "@env";

const fetchServer = async (method, path, reqBody, isMulter) => {
  const token = await AsyncStorage.getItem("token");
  let req;

  const url = `${API_SERVER}/${path}`;

  if (method === "GET") {
    req = {
      method,
      headers: { "Authorization": token },
    };
  } else {
    if (isMulter) {
      req = {
        method,
        headers: { "Authorization": token, "Content-Type": "multipart/form-data" },
        body: reqBody,
      };
    } else {
      req = {
        method,
        headers: { "Authorization": token, "Content-Type": "application/json" },
        body: JSON.stringify(reqBody),
      };
    }
  }

  const res = await fetch(url, req);
  const _res = await res.json();
  const { message, data, error } = _res;

  if (error) { throw new Error() }

  return _res;
};

export default fetchServer;
