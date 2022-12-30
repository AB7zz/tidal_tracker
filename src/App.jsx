import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './components/Home/Home'
import Page2 from './components/Page2/Page2'
import Page3 from './components/Page3/Page3'
import Page4 from './components/Page4/Page4'
import Page5 from './components/Page5/Page5'
import Page6 from './components/Page6/Page6'
import Sellproduct from './components/Sellproduct/Sellproduct'
import BottomNav from './components/BottomNav/BottomNav'
import DirectionPage from './components/DirectionPage/DirectionPage'
import Marketplace from './components/Marketplace/Marketplace'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/page2' element={<Page2/>} />
        <Route path='/page3' element={<Page3/>} />
        <Route path='/page4' element={<Page4/>} />
        <Route path='/page5' element={<Page5/>} />
        <Route path='/page6' element={<Page6/>} />
        <Route path='/Marketplace' element={<Marketplace/>} />
        <Route path='/Sellproduct' element={<Sellproduct/>} />
        <Route path='/DirectionPage' element={<DirectionPage/>} />
      </Routes>
      <BottomNav/>
    </BrowserRouter>
  )
}

export default App
