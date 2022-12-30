import React, { useState, useEffect } from 'react';
import { Context } from '../AppContext/AppContext';
import EmergencyContacts from '../EmergencyContacts/EmergencyContacts';


let bearing=0
function Compass2() {
  const {latitude, longitude, getLatLong} = React.useContext(Context)
  React.useEffect(() => {
    getLatLong()
  }, [])
  setInterval(() => {
    getLatLong()
    console.log(latitude, longitude)
  }, 1000)
  const givenCoordinate = {
    lat: latitude,
    lng: longitude
  };
  
  // State variables to store the given coordinate and current location
  
  const [currentLocation, setCurrentLocation] = React.useState(null);

  // Function to get the user's current location
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      setCurrentLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    });
  }

  // Use the useEffect hook to get the user's current location when the component mounts
  useEffect(() => {
    getCurrentLocation();
  }, []);

  // Calculate the compass direction from the given coordinate to the current location
  const direction = givenCoordinate && currentLocation
    ? getCompassDirection(givenCoordinate, currentLocation)
    : 'Loading...';

  
  function toDegrees(radians) {
    return radians * (180 / Math.PI);
  }
// Function to calculate the compass direction from one location to another
function getCompassDirection(start, end) {
  const startLat = toRadians(start.lat);
  const startLng = toRadians(start.lng);
  const endLat = toRadians(end.lat);
  const endLng = toRadians(end.lng);

  const y = Math.sin(endLng - startLng) * Math.cos(endLat);
  const x = Math.cos(startLat) * Math.sin(endLat) -
    Math.sin(startLat) * Math.cos(endLat) * Math.cos(endLng - startLng);
  bearing = Math.atan2(y, x);
  bearing = toDegrees(bearing);
  bearing = (bearing + 360) % 360;

  // Convert the bearing to a compass direction
  let direction = 'NORTH';
  if (bearing >= 337.5 || bearing < 22.5) {
    direction = 'NORTH';
  } else if (bearing >= 22.5 && bearing < 67.5) {
    direction = 'NORTH EAST';
  } else if (bearing >= 67.5 && bearing < 112.5) {
    direction = 'EAST';
  } else if (bearing >= 112.5 && bearing < 157.5) {
    direction = 'SOUTH EAST';
  } else if (bearing >= 157.5 && bearing < 202.5) {
    direction = 'SOUTH';
  } else if (bearing >= 202.5 && bearing < 247.5) {
    direction = 'SOUTH WEST';
  } else if (bearing >= 247.5 && bearing < 292.5) {
    direction = 'WEST';
  } else if (bearing >= 292.5 && bearing < 337.5) {
    direction = 'NORTH WEST';
  }
  
  return direction;
}

// Helper function to convert degrees to radians
function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}
return (
  <>
    <div className='compassDirections'>
      <p>Direction to given coordinate: {direction}</p>
      <br></br>
      <div className="compassed">
      <div className="compass-arrow" style={{ transform: `rotate(${bearing}deg)` }} />
      {/* <div className="compass-label">{direction}</div> */}
      </div>
    </div>
    <EmergencyContacts/>
  </>

);

}
export default Compass2;