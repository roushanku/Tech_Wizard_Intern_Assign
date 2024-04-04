import axios from "axios";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './Logo';
import ClothesPage from "./page/ClothesPage.js"
import ClothesFormPage from "./page/ClothesFormPage.js";

axios.defaults.withCredentials = true;
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Header/>}/>
        <Route path="/clothes" element={<ClothesPage/>}/>
        <Route path="/addNewCloth" element={<ClothesFormPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
