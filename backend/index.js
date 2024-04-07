import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import ClothesModel from "./Models/Clothes.js";

const app = express();
app.use(express.json());

app.use(cors({origin: "http://localhost:3000", credentials: true}));
// app.use(cors());

//mongodb connection

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Conected");
  })
  .catch((err) => {
    console.log(`${err} did not connect`);
  });

app.get("/test" , (req , res) => {
    res.send("this is test..");
});

app.post("/clothes" , (req , res) => {
  
  const {name , brand , photos , price, rating, description , Quantity} = req.body;
  // console.log(req.body);

  const ClothesDoc = ClothesModel.create({
    name , brand , photos , price, rating , description, Quantity,
  });

  res.json("Success");
});


// app.post("/roush",(req,res)=>{
//   console.log(req.body);
//   res.send("Success");
// })

// app.get("/clothes/:id", (req,res)=>{
//   console.log(req.params.id);
//   res.send("SUCCESS");
// })

app.get("/clothes/:id", async (req, res) => {
  try {
    const product = await ClothesModel.findById(req.params.id);
    res.json(product);
  } 
  catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.put("/clothes/:id" , async (req , res) => {
  try {
    const quantity = req.body.quantity;
    // console.log(req.params.id);
    console.log(quantity);
    // console.log("invoked...")
    const updatedClothes = await ClothesModel.findByIdAndUpdate(req.params.id, { Quantity: quantity }, { new: true });
    res.json(updatedClothes);
  } 
  catch(err) {
    console.log("error" , err);
    res.status(500).send(err);
  }
});

app.post("/search",async (req,res)=>{
  try{
    const search_data = req.body.name;
    const modified = await ClothesModel.find({ $or: [{ name: search_data }, { brand: search_data }] });

    // console.log(modified);
    res.json(modified);
  }
  catch(err){
    res.send(err);
  }
});


app.get("/clothes" , async (req , res) => {
  res.json(await ClothesModel.find())
});


app.listen(5000 , () => {
    console.log(`Server is running on....${5000}`);
});
