import mongoose from "mongoose"

const ClothesSchema = new mongoose.Schema({
    name : String,
    brand : String,
    photos : String,
    price : Number,
    rating : String,
    description : String,
    Quantity : String,
});

const ClothesModel = mongoose.model('Clothes' , ClothesSchema);
export default ClothesModel;


