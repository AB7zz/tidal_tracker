import React, { useState, useEffect } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const Compass = (props) => {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => setCurrentLocation(position),
      (error) => console.log(error)
    );
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lgw-screen h-screen">
      {currentLocation ? (
        <Map
          google={props.google}
          zoom={1}
          center={{
            lat: (currentLocation.coords.latitude+currentLocation.coords.longitude)/2,
            lng: (currentLocation.coords.longitude+currentLocation.coords.latitude)/2,
          }}>
          <Marker
            position={{
              lat: currentLocation.coords.latitude,
              lng: currentLocation.coords.longitude,
            }}
          />
        </Map>
      ) : (
        <p>Loading current location...</p>
      )}
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAmN-pywUQGw-Lpn-uSKm0bo4YCNeGzYLU&v=weekly&channel=2&libraries=places',
})(Compass);
