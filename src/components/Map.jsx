import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = ({ data }) => {
  console.log(data);

  const mapStyles = {
    height: "50vh",
    width: "100%",
  };

  const defaultCenter = {
    // lat: -34.61964365076746,
    // lng: -58.39960249141709,

    lat: data.lat,
    lng: data.lng,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyB4A72mW00FamgjcTk0ovqQcdx88dISeq4">
      <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
