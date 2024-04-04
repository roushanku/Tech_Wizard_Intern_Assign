import {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function IndexPage() {
    // const [places , setPlaces] = useState([]);
    const[clothes , setClothes] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:5000/clothes').then(response => {
        setClothes(response.data);
      })
    } , []);

    return (
      <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols4">
        {clothes.length > 0 && clothes.map(place => (
          <Link to={'/clothes/' + clothes._id}>
            <div className="bg-gray-500">
              this is for photos
              <br/>
              will be fix this soon stay updated....
              {/* {place.photos?.[0] && (
                <img src="http://localhost:4000/uploads/" + place/>
              )}  */}
              <img src="https://pix8.agoda.net/hotelImages/47148746/0/ccdf7c3bf969c4af4395dcf20f726ecc.jpg?ce=0&s=1024x768"></img>
              
            </div>
            <h3 className="font-bold">{clothes.name}</h3>
            <h2 className="text-sm truncate">{clothes.brand}</h2>
            <div className="mt-1">
              <span className="font-bold">Price : ${clothes.price}</span> per night
            </div>
          </Link>
        ))} 
    </div>
    )
}