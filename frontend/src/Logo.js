import { Link } from "react-router-dom";
import ClothesPage from './page/ClothesPage'
import { useState } from "react";
import axios from "axios";
import QrScanner from "./page/QrScanner";

import ProductCard from "./ProductCard";

export default function Header() {
  const [search , setSearch] = useState('');
  const [products , setProducts] = useState([]);
  const [available , setAvailable] = useState(false);
  const [showScanner, setShowScanner] = useState(false);

  const handleChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const handleClick = async (ev) => {
    ev.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/search",search);
      // console.log(response.data);
      setProducts(response.data);
      if(response.data !== null) setAvailable(!available);
    }

    catch(err) {
      console.log("error in searching" , err);
    }
  };

  return (<>
    <header className="flex justify-between">
    <Link to={"/clothes"} className="flex items-center gap-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
      </svg>

      <span className="font-bold text-xl">City Fashion</span>
    </Link>


      <div className="flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300">
        <div>AnyWhere</div>
        <div className="border-l border-300 gray"></div>
        <div>AnyTime</div>

        <button className="bg-primary text-white p-1 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
    </header>
    <div className="text-2xl text-center">
        <div className="flex justify-center items-center p-4 gap-20">
          <button className="border p-2 rounded bg-pink-400" onClick={() => setShowScanner(true)}>Scan Qr Code</button>
          {showScanner && <QrScanner />}

          <button className="border p-2 rounded bg-pink-400">
            <Link to={"/addNewCloth"}>Add New Products</Link>
          </button>
      </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <input type="text" name="name" placeholder="Seach your products here..." onChange={handleChange} className="w-1/2 p-2 border border-gray-300 rounded my-2" />
          <button onClick={handleClick} className="p-2 bg-blue-500 text-white rounded my-2">Search</button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          
        {
          available 
            ? <h2 className="text-center mt-10 col-span-3 text-2xl underline">List of products available</h2>
            : <h2 className="text-center mt-10 col-span-3 text-2xl underline">No products available</h2>
        }

        {products.map((product, id) => (
          <div key={id} onClick={()=>{
            // handleShowMore(product._id);
          }}>
            <ProductCard product={product} />
          </div>
        ))}

      </div>

      </div>
    </>
  );
}
