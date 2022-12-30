import React, { useState, useEffect } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Context } from '../AppContext/AppContext';

const Compass = (props) => {
  const {getLatLong, latitude, longitude} = React.useContext(Context)

  useEffect(() => {
    getLatLong()
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lgw-screen h-screen">
      {latitude ? (
        <Map
          google={props.google}
          zoom={2}
          center={{
            lat: (latitude+50)/2,
            lng: (longitude+50)/2,
          }}>
          <Marker
            position={{
              lat: latitude,
              lng: longitude,
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