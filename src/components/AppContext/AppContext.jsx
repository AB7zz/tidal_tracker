import React from 'react'
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

export const Context = React.createContext()

const AppContext = ({children}) => {
    const [db, setDB] = React.useState()
    const [db2, setDB2] = React.useState()
    const [login, setLogin] = React.useState(false)
    const [latitude, setLatitude] = React.useState(null);
    const [longitude, setLongitude] = React.useState(null);
    
    const userName = 'Abhinav CV'

    const getLatLong = () => {
        navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        });
    }
    const initFirebase = () => {
        const firebaseConfig = {
            apiKey: "AIzaSyD4SGEce6_RRwDI4VnmFpN8tVjVEk_St-I",
            authDomain: "bytecode-631f7.firebaseapp.com",
            projectId: "bytecode-631f7",
            storageBucket: "bytecode-631f7.appspot.com",
            messagingSenderId: "489306905006",
            appId: "1:489306905006:web:7a0b6176b24c31c4b4d03f",
            measurementId: "G-J1XQ2RHRL1"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        // const auth = getAuth();
        // auth.languageCode = 'it';
        // window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
        //     'size': 'invisible',
        //     'callback': (response) => {
        //       // reCAPTCHA solved, allow signInWithPhoneNumber.
        //       onSignInSubmit();
        //     }
        // }, auth);

        setDB(getDatabase(app))
        setDB2(getFirestore(app))
    }


  return (
    <Context.Provider value={{
        initFirebase,
        db,
        userName,
        latitude,
        longitude,
        getLatLong,
        db2,
        setLogin
    }}
    >
        {children}
    </Context.Provider>
  )
}

export default AppContext