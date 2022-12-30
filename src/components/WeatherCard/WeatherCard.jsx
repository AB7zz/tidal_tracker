import React from 'react';

function WeatherCard(props) {
  const { temperature, description, icon, location, date, precipitation, humidity, wind, predicted } = props;

  return (
    <div className="weather-card">
      <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} />
      <div className='weatherDetails'>
      <div className="location">{location}</div>
      <div className="date">{date}</div>
      <div className='mdetails'>
      <br></br>
      <div className="temperature">{temperature}°C</div>
      <div className="description">{description}</div>
      <div className="precipitation">Precipitation: {precipitation}</div>
      <div className="humidity">Humidity: {humidity}</div>
      <div className="wind">Wind: {wind}</div>
      <div className="predicted">Status: {predicted}</div>
      </div>
      </div>
    </div>
  );
}

export default WeatherCard;