import React from 'react'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";


export const Context = React.createContext()

const AppContext = ({children}) => {
    const [db, setDB] = React.useState()
    const userName = 'Abhinav CV'
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
    }


  return (
    <Context.Provider value={{
        initFirebase,
        db,
        userName
    }}
    >
        {children}
    </Context.Provider>
  )
}

export default AppContext