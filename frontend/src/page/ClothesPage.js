import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ProductCard from "../ProductCard";

export default function Clothespage() {
  const [products, setProducts] = useState([]);

  function handleShowMore(id){
    console.log("This is the product ID",id);
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5000/clothes");
      setProducts(response.data);
      console.log("get prod" , response);
    }
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      <h2 className="text-center mt-10 col-span-3 text-2xl underline">List of products available</h2>
      {products.map((product,id) => (
        <div onClick={()=>{
          handleShowMore(product._id);
        }}>
        <ProductCard key={id} product={product} />
        </div>
      ))}
    </div>

  );
}
