import React from 'react'
import TopNav from '../TopNavbar/TopNav'
import { Card, Typography, CardContent, TextField, MenuItem } from '@mui/material'
import { Link } from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import OpacityIcon from '@mui/icons-material/Opacity';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import { Context } from '../AppContext/AppContext';
const Weather = () => {
  const [details, setDetails] = React.useState([])
  const [hour, setHour] = React.useState()
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
    let zone = (Math.round(time / 3) + 1)*3
    const jsonObject = {
      data: []
    }
    console.log(zone)
    
    for(let i=0; i<64; i++){
      if((zone === data['dataseries'][i]['timepoint']) === true){
        jsonObject['data'] = data['dataseries'][i]
        break
      }
    }
    
    return jsonObject
  }

  const {latitude, longitude, getLatLong} = React.useContext(Context)
  let safe
  const currencies = [
    {
      value: '5',
      label: '5',
    },
    {
      value: '10',
      label: '10',
    },
    {
      value: '15',
      label: '15',
    }
  ];
  const callAPI = () => {
    getLatLong()
    let lat = latitude
    let long = longitude
    fetch(`https://www.7timer.info/bin/api.pl?lon=${long}&lat=${lat}&product=civil&output=json`)
    .then(response => response.json())
    .then(data => {
      let required_data = set_timezone(0, data)
      let windSpeed, precDetail
      console.log(required_data.data)
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

      
      setDetails({
        temp: required_data.data['temp2m'],
        desc: required_data.data['weather'],
        wind: windSpeed,
        prec: precDetail,
        hum: required_data.data['rh2m']
      })
      if(is_safe(required_data)){
        safe = 'Safe to Go'
      }else{
        safe = 'Not Safe'
      }
    })
    .catch(error => {
      console.log('Error: ' + error)
    })
  }

  React.useEffect(() => {
    callAPI()
  }, [])
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  let futureSafe = "NIL"
  let res2
  const printFuture = (hour) => {
    getLatLong()
    let lat = latitude
    let long = longitude
    fetch(`https://www.7timer.info/bin/api.pl?lon=${long}&lat=${lat}&product=civil&output=json`)
    .then(response => response.json())
    .then(data => {

      let required_data
      if(!hour){
        required_data = set_timezone(10, data)
      }
      if(hour == 10){
        required_data = set_timezone(10, data)
      }
      if(hour == 5){
        required_data = set_timezone(5, data)
      }
      if(hour == 15){
        required_data = set_timezone(15, data)
      }
      console.log(required_data)
      res2 = is_safe(required_data)

      if(res2){
        futureSafe = 'Safe to Go'
      }else{
        futureSafe = 'Not Safe'
      }
      console.log(futureSafe)
    })
  }
  today = dd + '/' + mm + '/' + yyyy;
  return (
    <>
      <TopNav/>
      <div className="p-4">
        <Card>
          <Link className='ml-5 mt-5' to='/home'>
            <ArrowBackIosIcon/>
          </Link>
          <CardContent>
            <Typography className='text-center font-bold text-xl mb-4'>
              Vadanapally, Thrissur
              <hr className='mt-5' />
            </Typography>
            <Typography className='grid grid-cols-2 gap-5'>
              <div>
                <h1 className='mt-3 font-bold'><DeviceThermostatIcon/> Temperature</h1>
                <span>{details.temp}</span>
                <h1 className='mt-3 font-bold'><ThunderstormIcon/> Rainfall</h1>
                <span>{details.prec}</span>
                <h1 className='mt-3 font-bold'><OpacityIcon/> Humidity</h1>
                <span>{details.hum}</span>  
                <h1 className='mt-3 font-bold'>{details.desc}</h1>
                <h1 className='mt-3 font-bold'>Fisherman Warning</h1>
                <span className='text-red-500'>NIL</span>
              </div>
              <div className='ml-12'>
                <h1 className='mt-3 font-bold'><WbTwilightIcon/> Sunrise</h1>
                <span>05:44</span>
                <h1 className='mt-3 font-bold'>Sunset</h1>
                <span>18:28</span>
                <h1 className='mt-3 font-bold'><DarkModeIcon/>Moonrise</h1>
                <span>05:13</span>  
                <h1 className='mt-3 font-bold'>Moonset</h1>
                <span>18:03</span>  
              </div>
            </Typography>
            <Typography className='text-center text-2xl'>
              Check if it's safe to go in the next few hours
            </Typography>
            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              defaultValue="EUR"
              helperText="Please select the hour"
              onChange={e => {setHour(e.target.value), printFuture(hour)}}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            {futureSafe != "NIL" && <Typography className='text-2xl text-center text-bold mb-20'>{futureSafe}</Typography>}
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default Weather