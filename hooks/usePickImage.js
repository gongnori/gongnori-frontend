import React, { useCallback, useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { API_SERVER } from "@env";
import fetchServer from "../utils/fetchServer";
import * as device from "../constants/device";

const usePickImage = (defaultImage) => {
  const [image, setImage] = useState(defaultImage);
  const [imageS3, setImageS3] = useState(defaultImage);

  useEffect(() => {
    (async () => {
      if (device.OS !== "web") {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          return;
        }
      }
    })();
  }, []);

  const pickImage = useCallback(async () => {
    const pickResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    const uri = pickResult.uri; //.replace("file://", "");//ios처리하기
    const fileName = uri.split("/").pop();
    const match = /\.(\w+)$/.exec(fileName);
    const type = match ? `image/${match[1]}` : "image";

    const formData = new FormData();
    formData.append("image", {
      uri,
      name: fileName,
      type,
    });

    if (!pickResult.cancelled) {
      setImage(pickResult.uri);

      const data = await fetchServer("POST", `${API_SERVER}/team/emblem`, formData, true);
      setImageS3(data);
    }
  }, []);

  return [image, imageS3, pickImage];
};

export default usePickImage;
