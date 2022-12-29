import React from 'react'
import Preloader from './Preloader'
import Home from './Home'

const Index = () => {
  const [preloader, setPreloader] = React.useState(true)
  React.useEffect(() => {
    setTimeout(() => {
      setPreloader(false)
    }, 3000)
  }, [])
    return(
      <>
      {preloader ? <Preloader/> : <Home/>}
      </>
    )
}
export default Index