"use client";
import React, { useEffect } from "react";
import {
  DirectionsRenderer,
  GoogleMap,
  MarkerF,
  OverlayView,
  OverlayViewF,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useContext, useState, useCallback, memo } from "react";
import { SourceContext } from "@/app/context/SourceContext";
import { DestinationContext } from "@/app/context/DestinationContext";
// import pin from "../../../public/pin.png";
const GoogleMapSection = () => {
  const { source } = useContext(SourceContext); // Correct use of context
  const { destination } = useContext(DestinationContext);
  const [map, setMap] = useState(null);
  const [directionRoutePoints, setDirectionRoutePoints] = useState(null); // changed from [] to null since it's an object

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const [center, setCenter] = useState({
    lat: -28.4793,
    lng: 24.6727,
  });

  /**
   * This useEffect gets the source lat and lng with their center
   */
  useEffect(() => {
    if (source?.length !== 0 && map) {
      map.panTo({
        lat: source.lat,
        lng: source.lng,
      });
      setCenter({
        lat: source.lat,
        lng: source.lng,
      });
    }
    if (source?.length !== 0 && destination?.length !== 0) {
      directionRoute();
    }
  }, [source]);

  /**
   * This useEffect gets the destination lat and lng with their center
   */
  useEffect(() => {
    if (destination?.length !== 0 && map) {
      map.panTo({
        lat: destination.lat,
        lng: destination.lng,
      });
      setCenter({
        lat: destination.lat,
        lng: destination.lng,
      });
    }
    if (source?.length !== 0 && destination?.length !== 0) {
      directionRoute();
    }
  }, [destination]);

  /**
   * This Function creates a Route or Path that will Point from Source to destination
   */
  const directionRoute = () => {
    const DirectionsService = new google.maps.DirectionsService();

    DirectionsService.route(
      {
        origin: { lat: source.lat, lng: source.lng },
        destination: { lat: destination.lat, lng: destination.lng },
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setDirectionRoutePoints(result); // Fixed here, passing the full result, not just routes
        } else {
          console.error("Error");
        }
      }
    );
  };

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

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{ mapId: "b2b3fd5fe35e2a2d" }}
    >
      {source?.length !== 0 && (
        <MarkerF
          position={{ lat: source.lat, lng: source.lng }}
          icon={{
            url: "/pin.png",
            scaledSize: {
              width: 20,
              height: 20,
            },
          }}
        >
          <OverlayViewF
            position={{ lat: source.lat, lng: source.lng }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div className="bg-white p-2 font-bold inline-block">
              <p className="text-black text-[16px]">{source.label}</p>
            </div>
          </OverlayViewF>
        </MarkerF>
      )}

      {destination?.length !== 0 && (
        <MarkerF
          position={{ lat: destination.lat, lng: destination.lng }}
          icon={{
            url: "/location.png",
            scaledSize: {
              width: 20,
              height: 20,
            },
          }}
        >
          <OverlayViewF
            position={{ lat: destination.lat, lng: destination.lng }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div className="bg-white p-2 font-bold inline-block">
              <p className="text-black text-[16px]">{destination.label}</p>
            </div>
          </OverlayViewF>
        </MarkerF>
      )}

      {directionRoutePoints && (
        <DirectionsRenderer
          directions={directionRoutePoints}
          options={{ suppressMarkers: true,
            polylineOptions: {
              strokeColor: '#8766f5',
              strokeWeight: 6
            }
           }}
        /> // Passing full directions result object
      )}
    </GoogleMap>
  );
};

export default memo(GoogleMapSection);
