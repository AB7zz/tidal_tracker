import React from 'react'
import EachProduct from '../EachProduct/EachProduct';
      
const Marketplace = () => {
  return (
    <div>
        <h2 className='text-4xl font-bold ml-10'>Marketplace</h2>
        <EachProduct name="Fibre Boat" price={50} owner="Harshed" imageUrl="http://www.outdeck.com/images/BIC-Boats/With-Logo/310-02-fibre-fishing-boat-price.jpg" />
        <EachProduct name="Net" price={75} owner="Sameer" imageUrl="https://images.unsplash.com/photo-1538904029080-68e0f3167224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlzaGluZyUyMG5ldHxlbnwwfHwwfHw%3D&w=1000&q=80" /> 
        <EachProduct name="Net" price={75} owner="Sameer" imageUrl="https://images.unsplash.com/photo-1538904029080-68e0f3167224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlzaGluZyUyMG5ldHxlbnwwfHwwfHw%3D&w=1000&q=80" />   
    </div>
  )
}

export default Marketplace