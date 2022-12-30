import React from 'react'
import TopNav from '../TopNavbar/TopNav'
import wallpaper from './wallpaper.png'
import { TextField } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Context } from '../AppContext/AppContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [otp, setOTP] = React.useState(false)
  const {setLogin} = React.useContext(Context)
  const navigate = useNavigate()
  const loggedIn = () => {
    setLogin(true)
    navigate('/home')
    localStorage.setItem('login', 1)
  }
  const sendOTP = () => {
    setOTP(true)
  }
  return (
    <>
        <TopNav/>
        <img style={{height: '450px'}} src={wallpaper} alt="" />
        <div style={{marginLeft: '130px'}}>
            {otp ? 
            <>
                <TextField id="outlined-number" label="OTP" type="number" variant="standard"/>
                <NavigateNextIcon type='submit' onClick={loggedIn} className='mt-5 ml-4 bg-blue-500 rounded text-white' />
            </>
            : 
            <>
                <TextField id="standard-basic" label="Phone" variant="standard" />
                <NavigateNextIcon type='submit' onClick={sendOTP} className='mt-5 ml-4 bg-blue-500 rounded text-white' />
            </>
            }
        </div>
    </>
  )
}

export default Login