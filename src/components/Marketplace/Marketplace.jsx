import React from 'react'
import EachProduct from '../EachProduct/EachProduct';
      
const Marketplace = () => {
  return (
    <div>
        <h2 className='text-4xl font-bold'>Marketplace</h2>
        <EachProduct name="Fibre Boat" price={50} owner="Harshed" imageUrl="https://5.imimg.com/data5/JM/IP/MY-7547396/fishing-fiber-big-boat-500x500.jpg" />
        <EachProduct name="Net" price={75} owner="Sameer" imageUrl="https://5.imimg.com/data5/JM/IP/MY-7547396/fishing-fiber-big-boat-500x500.jpg" />  
    </div>
  )
}

export default Marketplace