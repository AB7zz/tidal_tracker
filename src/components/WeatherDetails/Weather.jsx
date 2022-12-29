import React from 'react'
import TopNav from '../TopNavbar/TopNav'
import { Card, Typography, CardContent } from '@mui/material'
import { Link } from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import OpacityIcon from '@mui/icons-material/Opacity';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
const Weather = () => {
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
              Ernakulam, Kerala
              <hr className='mt-5' />
            </Typography>
            <Typography className='grid grid-cols-2 gap-5'>
              <div>
                <h1 className='mt-3 font-bold'><DeviceThermostatIcon/> Temperature</h1>
                <span>29-36 C</span>
                <h1 className='mt-3 font-bold'><ThunderstormIcon/> Rainfall</h1>
                <span>NIL</span>
                <h1 className='mt-3 font-bold'><OpacityIcon/> Humidity</h1>
                <span>81%</span>  
                <h1 className='mt-3 font-bold'>Partly cloudy sky</h1>
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
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default Weather