import React, { useState } from 'react';
import { Marker, Popup, TileLayer } from 'react-leaflet';
import * as ReactLeaflet from 'react-leaflet';


function MapContainer() {
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [distance, setDistance] = useState(null);

  const handleGetStart = () => {
    // get the start location and set it using the setStart function
  };

  const handleGetEnd = () => {
    // get the end location and set it using the setEnd function
  };

  const handleCalculate = () => {
    // calculate the distance between the start and end locations and set it using the setDistance function
  };

  return (
    <div>
      <button onClick={handleGetStart}>Get Start Location</button>
      <button onClick={handleGetEnd}>Get End Location</button>
      <button onClick={handleCalculate}>Calculate Distance</button>
      <ReactLeaflet.Map>
        {start && (
          <Marker position={start}>
            <Popup>Start Point</Popup>
          </Marker>
        )}
        {end && (
          <Marker position={end}>
            <Popup>End Point</Popup>
          </Marker>
        )}
        {distance && <div>Distance: {distance}</div>}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </ReactLeaflet.Map>
    </div>
  );
}
export default MapContainer