import React from 'react'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";


export const Context = React.createContext()

const AppContext = ({children}) => {
    const [db, setDB] = React.useState()
    const [db2, setDB2] = React.useState()
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
        const analytics = getAnalytics(app);

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
        db2
    }}
    >
        {children}
    </Context.Provider>
  )
}

export default AppContext