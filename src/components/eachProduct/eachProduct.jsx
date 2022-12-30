import React, { useState, useEffect } from 'react';

function EachProduct({ name, price, owner, imageUrl }) {
  return (
    <div className="flex items-center">
    <div className="mr-4 px-3">
      <h2 className="text-xl">{name}</h2>
      <p>Price: {price}</p>
      <p>Owner: {owner}</p>
      <button className='btn-primary'>Rent Product</button>
    </div>
    <img src={imageUrl} className="w-16 h-16 px-20"/>
  </div>
  );
}
export default EachProduct