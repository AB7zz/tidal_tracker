import React, { useState, useEffect } from 'react';
import TopNav from '../TopNavbar/TopNav';
import { collection, addDoc } from "firebase/firestore"; 
import { Context } from '../AppContext/AppContext';
import { useNavigate } from 'react-router-dom';

function SellProduct() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');
  const [rentalPeriod, setRentalPeriod] = useState('');

  const {initFirebase, db2} = React.useContext(Context)
  React.useEffect(() => {
      initFirebase()
    }, [])
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    // submit the form data to the server or perform some other action
  };
  const insert = async() => {
    try {
        const docRef = await addDoc(collection(db2, "marketplace"), {
          title: product,
          price: price,
          user: name,
          image: "lol.jpg"
        });
        console.log("Document written with ID: ", docRef.id);
        navigate('/marketplace')
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
  return (
    <div>
    <TopNav/>
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
      <label htmlFor="phone">Phone:</label>
      <input
        type="text"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />
      <br />
      <label htmlFor="phone">Price:</label>
      <input
        type="text"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
      <br />
      <label htmlFor="product">Product:</label>
      <select
        id="product"
        value={product}
        onChange={(event) => setProduct(event.target.value)}
      >
        <option value="">Select a product</option>
        <option value="Fibre Boat">Fibre Boat</option>
        <option value="Net">Net</option>
        <option value="Fishing Rod">Fishing Rod</option>
      </select>
      <br />
      {/* <label htmlFor="rentalPeriod">Rental Period:</label>
      <input
        type="number"
        id="rentalPeriod"
        value={rentalPeriod}
        onChange={(event) => setRentalPeriod(event.target.value)}
      /> */}
      <br />
      <br />
      <button type="submit" onClick={insert} className='px-4 py-2 font-bold text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline' >Rent Product</button>
    </form>
    </div>
  );
}
export default SellProduct