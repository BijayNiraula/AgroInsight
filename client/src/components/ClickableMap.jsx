import React, { useState } from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ClickableMap = () => {
  const [latLng, setLatLng] = useState({ lat: null, lng: null });

  // This component handles map click and updates the lat/lng state
  function LocationMarker() {
    useMapEvents({
      click(e) {
        setLatLng({
          lat: e.latlng.lat,
          lng: e.latlng.lng,
        });
      
      },
    });

    return null; // This component does not render anything visually
  }

  return (
    <div>
      <MapContainer
        center={[27.7172, 85.324]} // Kathmandu lat/lng as center
        zoom={13}
        style={{ height: "254px", width: "295px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker />
      </MapContainer>
    </div>
  );
};

export default ClickableMap;
