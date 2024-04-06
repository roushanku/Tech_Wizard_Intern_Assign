import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ClothFormPage = () => {
  const Navigator = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    brand: '',
    photos: '',
    rating: '',
    description: '',
    price: '',
    Quantity : ''
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post("http://localhost:5000/clothes",product);
      console.log(response.data);
      Navigator("/");
    }
    catch(err){
      console.log("ERROR:",err);
    }
    console.log(product);
  };

  return (
    <>
    <div className='text-center m-10'>
      <h1 className='text-3xl'>New Product</h1>
    </div>
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white shadow rounded">
      <input type="text" name="name" placeholder="Name" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded my-2" />
      <input type="text" name="brand" placeholder="Brand" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded my-2" />
      <input type="text" name="photos" placeholder="Photos" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded my-2" />
      <input type="text" name="rating" placeholder="Rating" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded my-2" />
      <textarea name="description" placeholder="Description" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded my-2"></textarea>
      <input type="text" name="price" placeholder="Price" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded my-2" />
      <input type="text" name="Quantity" placeholder="Quantity" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded my-2" />
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded my-2">Save</button>
    </form>
    </>
  );
};

export default ClothFormPage;
