import React from 'react'
import TopNav from '../TopNavbar/TopNav'
import wallpaper from './wallpaper.png'
import { TextField } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Context } from '../AppContext/AppContext';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
// import * as firebaseui from 'firebaseui'
// import { getAuth, signInWithPhoneNumber } from "firebase/auth";

const Login = () => {
  // const appVerifier = window.recaptchaVerifier;
  const [otp, ifOTP] = React.useState(false)
  const [code, setOTP] = React.useState(false)
  const [phone, setPhone] = React.useState()
  const {setLogin} = React.useContext(Context)
  const navigate = useNavigate()
  // signInWithPhoneNumber(auth, phone, appVerifier)
  //   .then((confirmationResult) => {
  //     window.confirmationResult = confirmationResult;
  //     confirmationResult.confirm(code).then((result) => {
  //         const user = result.user;
  //       }).catch((error) => {
  //         console.log(error)
  //       });
  //     var credential = firebase.auth.PhoneAuthProvider.credential(confirmationResult.verificationId, code);
  //     firebase.auth().signInWithCredential(credential);
  //   }).catch((error) => {
  //     console.log(error)
  //   });
  const loggedIn = () => {
    setLogin(true)
    navigate('/home')
    localStorage.setItem('login', 1)
  }
  const sendOTP = () => {
    ifOTP(true)
  }
  return (
    <>
        <TopNav/>
        <img style={{height: '450px'}} src={wallpaper} alt="" />
        <div style={{marginLeft: '130px'}}>
            {otp ? 
            <>
                <TextField onChange={e => {setOTP(e.target.value)}} id="outlined-number" label="OTP" type="number" variant="standard"/>
                <NavigateNextIcon type='submit' onClick={loggedIn} className='mt-5 ml-4 bg-blue-500 rounded text-white' />
            </>
            : 
            <>
                <TextField onChange={e => {setPhone(e.target.value)}} id="standard-basic" label="Phone" variant="standard" />
                <NavigateNextIcon type='submit' onClick={sendOTP} className='mt-5 ml-4 bg-blue-500 rounded text-white' />
            </>
            }

        </div>
    </>
  )
}

export default Login