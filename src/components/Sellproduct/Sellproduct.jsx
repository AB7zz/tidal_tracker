import React, { useState, useEffect } from 'react';

function Sellproduct() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [product, setProduct] = useState('');
  const [rentalPeriod, setRentalPeriod] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // submit the form data to the server or perform some other action
  };

  return (
    <div>
    <h2 className='px-10 py-3'>Post my product</h2>
    <form onSubmit={handleSubmit} className="p-4">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <br />
      <label htmlFor="product">Product:</label>
      <select
        id="product"
        value={product}
        onChange={(event) => setProduct(event.target.value)}
      >
        <option value="">Select a product</option>
        <option value="product1">Fibre Boat</option>
        <option value="product2">Net</option>
        <option value="product3">Fishing Rod</option>
      </select>
      <br />
      <label htmlFor="rentalPeriod">Rental Period:</label>
      <input
        type="number"
        id="rentalPeriod"
        value={rentalPeriod}
        onChange={(event) => setRentalPeriod(event.target.value)}
      />
      <br />
      <br />
      <button type="submit" className='px-4 py-2 font-bold text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline' >Rent Product</button>
    </form>
    </div>
  );
}
export default Sellproduct