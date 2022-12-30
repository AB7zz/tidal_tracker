import React, { useState, useEffect } from 'react';

function EachProduct({ name, price, owner, imageUrl }) {
  return (
    
    <div className="flex productbox">
    <div className="mr-4 px-3">
      <h2 className="text-xl">{name}</h2>
      <p>Price: {price}</p>
      <p>Owner: {owner}</p>
      <button className="bg-red">Rent Product</button>
    </div>
    <div className='ml-15'>
    <img src={imageUrl} className="w-20 h-20"/>
    </div>
  </div>
  
  );
}
export default EachProduct