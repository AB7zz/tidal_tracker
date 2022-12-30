import * as React from 'react';
import TopNav from '../TopNavbar/TopNav';
import WeatherCard from '../WeatherCard/WeatherCard';
import LocationBox from '../LocationBox/LocationBox';
import { Link } from 'react-router-dom';
import { Context } from '../AppContext/AppContext';

function Home(){
  const [details, setDetails] = React.useState([])
  let safe
  const is_safe = (data) => {
    let safety = 10
    if(data['data']['cloudcover'] > 6){
      safety -= 1
    }
    if(data['data']['lifted_index'] < -1){
      safety -= 1
    }
    if(data['data']['prec_amount'] > 4){
      safety -= 1
    }
    if(data['data']['prec_amount'] >= 7){
      return 0
    }
    if(parseInt(data['data']['rh2m'].slice(0, -1)) > 85){
      safety -= 1
    }
    if(data['data']['temp2m'] < 32){
      safety -= 1
    }

    let weather = data['data']['weather']
    if (weather.includes("tsrainday") || weather.includes("tsrainnight") || weather.includes("rainsnowday") || weather.includes("rainsnownight"))
    {
      return 0;
    }
    else if (weather.includes("tsday") || weather.includes("tsnight") || weather.includes("snowday") || weather.includes("snownight") || weather.includes("rainday") || weather.includes("rainnight"))
    {
      safety -= 3;
    }

    if (data["data"]["wind10m"]["direction"] === "E" || data["data"]["wind10m"]["direction"] === "W" && data["data"]["wind10m"]["speed"] > 15) {
      safety -= 1;
    }
    if (data["data"]["wind10m"]["direction"] === "N" || data["data"]["wind10m"]["direction"] === "S" && data["data"]["wind10m"]["speed"] > 20) {
      safety -= 1;
    }

    if(data["data"]["wind10m"]["speed"] >= 7) // Hurricane
    {
      return 0;
    }

    if (safety >= 6)
    {
      return 1;
    }

    return 0;
  }

  function set_timezone(time, data){
    let zone = ((time / 3) + 1)*3
    const jsonObject = {
      data: []
    }
    
    for(let i=0; i<64; i++){
      if((zone === data['dataseries'][i]['timepoint']) === true){
        jsonObject['data'] = data['dataseries'][i]
        break
      }
    }
    
    return jsonObject
  }

  const {latitude, longitude, getLatLong} = React.useContext(Context)
  const callAPI = () => {
    getLatLong()
    let lat = latitude
    let long = longitude
    fetch(`https://www.7timer.info/bin/api.pl?lon=${long}&lat=${lat}&product=civil&output=json`)
    .then(response => response.json())
    .then(data => {
      let required_data = set_timezone(0, data)
      let windSpeed, precDetail
      if(required_data.data['wind10m']['speed'] == 1){
        windSpeed = '0.3m/s'
      }
      if(required_data.data['wind10m']['speed'] == 2){
        windSpeed = '2.7m/s'
      }
      if(required_data.data['wind10m']['speed'] == 3){
        windSpeed = '5.0m/s'
      }
      if(required_data.data['wind10m']['speed'] == 4){
        windSpeed = '9.5m/s'
      }
      if(required_data.data['wind10m']['speed'] == 5){
        windSpeed = '15.5m/s'
      }
      if(required_data.data['wind10m']['speed'] == 6){
        windSpeed = '21.5m/s'
      }
      if(required_data.data['wind10m']['speed'] == 7){
        windSpeed = '27.5m/s'
      }
      if(required_data.data['wind10m']['speed'] == 8){
        windSpeed = '35.6m/s'
      }

      if(required_data.data['prec_amount'] == 0){
        precDetail = 'None'
      }
      if(required_data.data['prec_amount'] == 1){
        precDetail = '0.1mm/hr'
      }
      if(required_data.data['prec_amount'] == 2){
        precDetail = '0.5mm/hr'
      }
      if(required_data.data['prec_amount'] == 3){
        precDetail = '2.5mm/hr'
      }
      if(required_data.data['prec_amount'] == 4){
        precDetail = '6.5mm/hr'
      }
      if(required_data.data['prec_amount'] == 5){
        precDetail = '13.5mm/hr'
      }
      if(required_data.data['prec_amount'] == 6){
        precDetail = '24.5mm/hr'
      }
      if(required_data.data['prec_amount'] == 7){
        precDetail = '40.6mm/hr'
      }
      if(required_data.data['prec_amount'] == 8){
        precDetail = '62.6mm/hr'
      }
      if(required_data.data['prec_amount'] == 9){
        precDetail = '80.6mm/hr'
      }

      const res = is_safe(required_data)
      if(res){
        safe = 'Safe to go'
      }else{
        safe = 'Not safe to go'
      }
      
      setDetails({
        temp: required_data.data['temp2m'],
        desc: required_data.data['weather'],
        wind: windSpeed,
        prec: precDetail,
        hum: required_data.data['rh2m'],
        safe: safe
      })

    

    })
    .catch(error => {
      console.log('Error: ' + error)
    })
  }

  React.useEffect(() => {
    callAPI()
    safe = "NIL"
  }, [])
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = dd + '/' + mm + '/' + yyyy;

  return (
    <>
      <TopNav/>
      <div className="Weatherbox">
        <Link to='/weatherDetails'>
          {safe === "NIL" && console.log(safe)}
          {details && safe!=="NIL" && <WeatherCard temperature={details.temp} description={details.desc} icon="03d" location="Vadanapally, Thrissur" date={today} wind={details.wind} precipitation={details.prec} humidity={details.hum} predicted={details.safe}/>}
        </Link>
      </div>
      <LocationBox></LocationBox>
    </>
  );
}
export default Home