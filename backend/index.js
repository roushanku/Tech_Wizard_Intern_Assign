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

// zkBt2vzsGsCU7H9z
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
  
  const {name , brand , photos , price, rating, description} = req.body;
  console.log(req.body);

  const ClothesDoc = ClothesModel.create({
    name , brand , photos , price, rating , description,
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



app.get("/clothes" , async (req , res) => {
  res.json(await ClothesModel.find())
});


app.listen(5000 , () => {
    console.log(`Server is running on....${5000}`);
});
