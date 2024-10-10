"use client";
import React, { useEffect } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import {useContext, useState, useCallback, memo } from "react";
import { SourceContext } from "@/app/context/SourceContext";
import { DestinationContext } from "@/app/context/DestinationContext";

const GoogleMapSection = () => {
  // const { isLoaded } = useJsApiLoader({
  //   id: "google-map-script",
  //   googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  // });
  const { source } = useContext(SourceContext); // Correct use of context
  const { destination } = useContext(DestinationContext);


  const [map, setMap] = useState(null);

  const containerStyle = {
    width: "100%",
    height: "45vh",
  };
  
  const [center, setCenter] = useState({
    lat: -3.745,
    lng: -38.523,
  });

  useEffect(() =>{
    if(source?.length!=[]&&map) {
      // map.penTo({
      //   lat: destination.lat,
      //   lng: destination.lng
      // }),
      setCenter({
        lat: source.lat,
        lng: source.lng
      })
    }
  },[source])

  useEffect(() =>{
    if(destination?.length!=[]&&map) {
      // map.penTo({
      //   lat: destination.lat,
      //   lng: destination.lng
      // }),
      setCenter({
        lat: destination.lat,
        lng: destination.lng
      })
    }
  },[destination])

  const onLoad = useCallback(function callback(map) {
    // Ensure this runs only on the client
    if (typeof window !== "undefined") {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map);
    }
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return  (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{ mapId: "b2b3fd5fe35e2a2d" }}
    >
      <></>
    </GoogleMap>
  ) 
};

export default memo(GoogleMapSection);

