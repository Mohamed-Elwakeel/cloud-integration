import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./Map.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Map = () => {
  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 41.3851,
    lng: 2.1734,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDzOdS6PRY7F2NHovoa4389UjMMwFbfuB0">
      <GoogleMap
        mapContainerStyle={mapStyles}
        className="img-fluid"
        zoom={7}
        center={defaultCenter}
      >
        <Marker key="marker" position={defaultCenter} draggable={true} />
      </GoogleMap>
    </LoadScript>
  );
};
