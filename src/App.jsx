import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Index from './components/Index/Index'
import Home from './components/Index/Home'
import BottomNav from './components/BottomNav/BottomNav'
import Weather from './components/WeatherDetails/Weather'
import Login from './components/Login/Login'
import Chat from './components/Chat/Chat'
import Profile from './components/Profile/Profile'
import Compass from './components/Compass/Compass'
import Compass2 from './components/Compass2/Compass2'
import { Context } from './components/AppContext/AppContext'
import Marketplace from './components/Marketplace/Marketplace'
import SellProduct from './components/SellProduct/SellProduct'
import Logout from './components/Logout/Logout'
import Guidelines from './components/Guidelines/Guidelines'
import Game from './components/Game/Game'
function App() {
  const {initFirebase} = React.useContext(Context)
  React.useEffect(() => {
    initFirebase()
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/weatherDetails' element={<Weather/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/chat' element={<Chat/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/currLoc' element={<Compass/>} />
        <Route path='/compass' element={<Compass2/>} />
        <Route path='/marketplace' element={<Marketplace/>} />
        <Route path='/upload' element={<SellProduct/>} />
        <Route path='/logout' element={<Logout/>} />
        <Route path='/guidelines' element={<Guidelines/>} />
        <Route path='/game' element={<Game/>} />
      </Routes>
      <BottomNav/>
    </BrowserRouter>
  )
}

export default App
