import React, { useState } from 'react';

function DistanceCalculator() {
  // State variables to store the starting and ending point locations
  const [startLocation, setStartLocation] = useState(null);
  const [endLocation, setEndLocation] = useState(null);
  const [distance, setDistance] = useState(null);

  // Function to store the current GPS location as the starting point
  const setStart = () => {
    navigator.geolocation.getCurrentPosition(position => {
      setStartLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    });
  }

  // Function to store the current GPS location as the ending point
  const setEnd = () => {
    navigator.geolocation.getCurrentPosition(position => {
      setEndLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    });
  }

  // Function to calculate the distance between the starting and ending points
  const calculateDistance = () => {
    // Use the Haversine formula to calculate the distance
    const startLat = startLocation.lat * (Math.PI / 180);
    const startLng = startLocation.lng * (Math.PI / 180);
    const endLat = endLocation.lat * (Math.PI / 180);
    const endLng = endLocation.lng * (Math.PI / 180);
    const dLat = endLat - startLat;
    const dLng = endLng - startLng;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(startLat) * Math.cos(endLat) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distanceInMeters = 6371e3 * c;
    setDistance(distanceInMeters);
  }

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline" onClick={setStart}>Set Starting Point</button>
      <br></br>
      <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline" onClick={setEnd}>Set Ending Point</button>
      <br></br>
      <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline" onClick={calculateDistance}>Back to shore</button>
      
      {distance && <p className="text-lg font-bold mt-4">Distance: {distance} meters</p>}
    </div>
  );
}
export default DistanceCalculator