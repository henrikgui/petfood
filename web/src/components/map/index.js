import React from "react";
import GoogleMapReact from "google-map-react";
import "./styles.css";
import Marker from "../marker";

const Map = () => {
  return (
    <div className="container-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyATT4PAT7m9rtDqeomf1tm4xV4pIRavNLk" }}
        center={{ lat: -25.4346546, lng: -49.2692089 }}
        defaultZoom={15}
      >
        <Marker lat={-25.4346546} lng={-49.2692089} />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
