import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function LocationBox() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const location = useLocation();
  const setLatLong = () => {
    const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  }
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      setCurrentLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    });
  }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  return (
    <div className='mapBox'>
    <div className="relative rounded-md shadow-sm">
    
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-2xl font-bold leading-9 text-grey-800">
          Your location
        </h3>   
        <div className="mt-2">
          {latitude && longitude ? (
            <p className="text-base leading-8 text-grey">
              Latitude: {latitude}, Longitude: {longitude}
            </p>
          ) : (
            <p className="text-base leading-8 text-grey">
              Loading location...
            </p>
          )}
        </div>
      </div>
      <div className="px-4 py-3 sm:px-6 sm:py-4 sm:flex sm:justify-end">
        <a
          href={`/Page2`} onClick={getCurrentLocation}
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-800"
        >
          Start Journey
        </a>
      </div>
    </div>
    </div>
  );
}

export default LocationBox;

