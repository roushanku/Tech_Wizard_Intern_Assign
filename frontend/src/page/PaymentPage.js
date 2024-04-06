import { useState } from "react";
import axios from "axios";
import { CartContext } from "../App";
import { useContext } from "react";
const PaymentPage = () => {
  const [buyProduct, setBuyProduct] = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const id = buyProduct._id;

  const handlePay = async () => {
    try {
      // const total = product.price * quantity;
      // console.log(product.price);
      // console.log(typeof(product.price));
      // alert(`You need to pay: ${total}`);
      const res = await axios.put(`http://localhost:5000/clothes/${id}`, {
        quantity: Math.max(buyProduct.Quantity - quantity, 0),
      });
      console.log(res);

      // Open the modal
      setIsModalOpen(true);
    } catch (err) {
      console.log("error in payment", err);
    }
  };

  {
    isModalOpen && (
      <div
        className="fixed z-10 inset-0 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            ​
          </span>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-title"
                  >
                    Order Placed
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your order has been placed successfully.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>This is the apyment Page</h1>
      <input
        type="number"
        value={quantity}
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
        min="1"
        max={buyProduct.Quantity}
        className="mb-4"
      />

      <button
        onClick={handlePay}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Pay {parseInt(buyProduct.price) * quantity}
      </button>
    </div>
  );
};

export default PaymentPage;
