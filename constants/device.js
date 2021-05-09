import * as Device from "expo-device";
import { Dimensions } from "react-native";

const OS = Device.osName;
const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

export {
  OS,
  WIDTH,
  HEIGHT,
};
