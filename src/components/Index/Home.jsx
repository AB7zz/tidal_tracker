import * as React from 'react';
import TopNav from '../TopNavbar/TopNav';
import WeatherCard from '../WeatherCard/WeatherCard';
import LocationBox from '../LocationBox/Locationbox';
import { Link } from 'react-router-dom';

function Home(){

  return (
    <>
      <TopNav/>
      <div className="Weatherbox">
        <Link to='/weatherDetails'>
          <WeatherCard temperature={72} description="Sunny Day" icon="03d" location="Thotappally" date="29/12/2022" wind="3 km/h" precipitation="13%" humidity="60%" predicted="37-40 C Safe to Go"/>
        </Link>
      </div>
      <LocationBox></LocationBox>
    </>
  );
}
export default Home