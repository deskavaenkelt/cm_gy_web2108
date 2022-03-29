import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()
const dbCollection = process.env.MONGODB_COLLECTION_CATS  // MyCats

// TODO: Kolla upp skillnaden mellan new Schema och bara Schema
const CatSchema = new mongoose.Schema({
    name: String,
    race: String,
    age: Number
}, {
    timestamps: true
})

const CatModel = new mongoose.model(dbCollection, CatSchema)

export default CatModel
