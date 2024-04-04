import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  const {id} = useParams();

  const showMoreDetails = () => {
    setShowModal(true);
  };

  const hideMoreDetails = () => {
    setShowModal(false);
  };

  return (
    <div className="p-4 bg-white shadow rounded max-w-sm">
      <img src={product.photos} alt={product.name} className="w-full h-64 object-cover rounded" />
      <h2 className="text-xl font-bold mt-2">{product.name}</h2>
      <p className="text-gray-500">{product.brand}</p>
      <p className="text-lg font-bold mt-2">{product.price}</p>
      <button onClick={showMoreDetails} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Show More
      </button>

      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">​</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                {/* <h3 className="text-lg leading-6 font-medium text-gray-900">{product.name}</h3> */}
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    <strong>Rating:</strong> {product.rating}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Description:</strong> {product.description}
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button onClick={hideMoreDetails} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function Clothespage() {
  const [products, setProducts] = useState([]);

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
      {products.map(product => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>

  );
}
