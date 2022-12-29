import React from 'react'
import TopNav from '../TopNavbar/TopNav'
import wallpaper from './wallpaper.png'
import { TextField } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Login = () => {
    const [otp, setOTP] = React.useState(false)
  return (
    <>
        <TopNav/>
        <img style={{height: '450px'}} src={wallpaper} alt="" />
        <div style={{marginLeft: '130px'}}>
            {otp ? 
                <TextField id="standard-basic" label="OTP" variant="standard" value="" /> : 
                <TextField id="standard-basic" label="Phone" variant="standard" />
            }
            <NavigateNextIcon onClick={() => {setOTP(true)}} className='mt-5 ml-4 bg-blue-500 rounded text-white' />
        </div>
    </>
  )
}

export default Login