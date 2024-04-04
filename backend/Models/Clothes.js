import mongoose from "mongoose"

// const placeSchema = new mongoose.Schema({
//     owner : {type:mongoose.Schema.Types.ObjectId , ref:'User'},
//     title : String,
//     address : String,
//     photos : [String],
//     description : String,
//     perks : [String],
//     extraInfo : String,
//     checkIn : Number,
//     checkOut : Number,
//     maxGuests : Number,
//     price : Number,
// });

// const PlaceModel = mongoose.model('Place' , placeSchema);

// export default PlaceModel;

const ClothesSchema = new mongoose.Schema({
    name : String,
    brand : String,
    photos : String,
    price : Number,
    rating : String,
    description : String,
});

const ClothesModel = mongoose.model('Clothes' , ClothesSchema);
export default ClothesModel;


