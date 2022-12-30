import React, { useState, useEffect } from 'react';
import { Map, Marker, GoogleApiWrapper, Polygon } from 'google-maps-react';
import { Context } from '../AppContext/AppContext';
import boat from './boat.png'

const Compass = (props) => {
  const {getLatLong, latitude, longitude} = React.useContext(Context)

  const [liveLat, setLiveLat] = React.useState()
  const [liveLong, setLiveLong] = React.useState()
  useEffect(() => {
    getLatLong()
  }, []);
  setInterval(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLiveLat(position.coords.latitude);
      setLiveLong(position.coords.longitude);
    });
  }, 1000)

  const triangleCoords = [
    {lat: latitude, lng: longitude},
    {lat: liveLat, lng: liveLong}
  ];

  return (
    <div className="bg-white rounded-lg shadow-lgw-screen h-screen">
      {latitude ? (
        <Map
          google={props.google}
          zoom={15}
          initialCenter={{
            lat: latitude,
            lng: longitude,
            
          }}
          >
            <Polygon
              paths={triangleCoords}
              strokeColor="#0000FF"
              strokeOpacity={0.8}
              strokeWeight={2}
              fillColor="#0000FF"
              fillOpacity={0.35} />
          <Marker
            position={{
              lat: latitude,
              lng: longitude,
            }}
          />
          <Marker
            position={{
              lat: liveLat,
              lng: liveLong,
            }}
            icon={{
              url: 'src/components/Compass/boat.png',
              scaledSize: new google.maps.Size(64,64)
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