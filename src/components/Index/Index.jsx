import React from 'react'
import Preloader from './Preloader'
import Home from './Home'
import { useNavigate } from 'react-router-dom'

const Index = () => {
  const [preloader, setPreloader] = React.useState(true)
  const navigate = useNavigate()
  React.useEffect(() => {
    setTimeout(() => {
      setPreloader(false)
    }, 4000)
  }, [])
    return(
      <>
      {preloader ? <Preloader/> : navigate('/home')}
      </>
    )
}
export default Index