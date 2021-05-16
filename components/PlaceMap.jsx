import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from "react-native-maps";

export default function PlaceMap({
  width = 300,
  height = 300,
  origin,
  location = [],
  places = [],
  onPlacePress
}) {
  const filterdPlaces = places.filter(place => {
    return (
      place.province === location.province
      && place.city === location.city
      && place.district === location.district
    )
  })

  const markers = filterdPlaces.map((place) => {
    const { name, id } = place;
    const { latitude, longitude } = place;
    const { province, city, district, town, detail } = place;
    const { contact } = place;

    return (
      <Marker
        key={id}
        coordinate={{
          latitude,
          longitude,
        }}
        onPress={() => onPlacePress(place)}
        onCalloutPress={() => onPlacePress(place)}
      >
        <Callout tootip>
          <View>
            <Text>{name}</Text>
            <Text>{`${city} ${district} ${town} ${detail}`}</Text>
            <Text>{contact}</Text>
          </View>
        </Callout>
      </Marker>
    );
  });

  return (
    <MapView
      style={{ width, height }}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: origin.latitude,
        longitude: origin.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker
        coordinate={{
          latitude: origin.latitude,
          longitude: origin.longitude,
        }}
        pinColor={"blue"}
      />
      {markers}
    </MapView>
  );
}
