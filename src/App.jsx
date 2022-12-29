import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Index from './components/Home/Index'
import Page2 from './components/Page2/Page2'
import Page3 from './components/Page3/Page3'
import Page4 from './components/Page4/Page4'
import BottomNav from './components/BottomNav/BottomNav'
import Weather from './components/WeatherDetails/Weather'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/page2' element={<Page2/>} />
        <Route path='/page3' element={<Page3/>} />
        <Route path='/page4' element={<Page4/>} />
        <Route path='/weatherDetails' element={<Weather/>} />
      </Routes>
      <BottomNav/>
    </BrowserRouter>
  )
}

export default App
