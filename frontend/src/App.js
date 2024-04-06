import axios from "axios";
import React from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Logo";
import ClothesPage from "./page/ClothesPage.js";
import ClothesFormPage from "./page/ClothesFormPage.js";
import PaymentPage from "./page/PaymentPage.js";

export const CartContext = React.createContext();

axios.defaults.withCredentials = true;
function App() {
  const [buyProduct, setBuyProduct] = useState(null);
  return (
    <BrowserRouter>
      <CartContext.Provider
        value={[buyProduct, setBuyProduct]}
      >
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/clothes" element={<ClothesPage />} />
          <Route path="/addNewCloth" element={<ClothesFormPage />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
