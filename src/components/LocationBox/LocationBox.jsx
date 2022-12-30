import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Context } from '../AppContext/AppContext';
function LocationBox({children}) {
  const {getLatLong, latitude, longitude} = React.useContext(Context)
  React.useEffect(() => {
    getLatLong()
  }, [])
  const location = useLocation();

  

  return (
    <div className='mapBox'>
    <div className="relative rounded-md shadow-sm">
    
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-5xl font-bold leading-9 text-white">
          Your location
        </h3>   
        <div className="mt-2">
          {latitude && longitude ? (
            <p className="text-base font-bold leading-8 text-white">
              Latitude: {latitude}, Longitude: {longitude}
            </p>
          ) : (
            <p className="text-base leading-8 text-white">
              Loading location...
            </p>
          )}
        </div>
      </div>
      <div className="px-4 py-3 sm:px-6 sm:py-4 sm:flex sm:justify-end">
        <Link
          to='/currLoc'
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-800"
        >
          Start Journey
        </Link>
      </div>
    </div>
    </div>
  );
}

export default LocationBox;