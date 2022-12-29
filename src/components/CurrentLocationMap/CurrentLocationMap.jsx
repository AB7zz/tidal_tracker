import React, { useState, useEffect } from 'react';
import { Marker, TileLayer } from 'react-leaflet';

const CurrentLocationMap = () => {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => setCurrentLocation(position),
      (error) => console.log(error)
    );
  }, []);

  return (
    <div className="w-full h-64">
      {currentLocation ? (
        <Map
          center={[currentLocation.coords.latitude, currentLocation.coords.longitude]}
          zoom={13}
          className="w-full h-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[currentLocation.coords.latitude, currentLocation.coords.longitude]} />
        </Map>
      ) : (
        <p>Loading current location...</p>
      )}
    </div>
  );
};

export default CurrentLocationMap;
