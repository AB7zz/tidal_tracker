import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Index from './components/Index/Index'
import Home from './components/Index/Home'
import Page2 from './components/Page2/Page2'
import Page3 from './components/Page3/Page3'
import Page4 from './components/Page4/Page4'
import BottomNav from './components/BottomNav/BottomNav'
import Weather from './components/WeatherDetails/Weather'
import Login from './components/Login/Login'
import Chat from './components/Chat/Chat'
import Profile from './components/Profile/Profile'
import { Context } from './components/AppContext/AppContext'
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
        <Route path='/page2' element={<Page2/>} />
        <Route path='/page3' element={<Page3/>} />
        <Route path='/page4' element={<Page4/>} />
        <Route path='/weatherDetails' element={<Weather/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/chat' element={<Chat/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
      <BottomNav/>
    </BrowserRouter>
  )
}

export default App
