import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();
const dbCollection = process.env.MONGODB_COLLECTION;

const PersonSchema = new mongoose.Schema({
    name: String,
    born: String,
    birthPlace: String,
    mother: String,
    father: String
}, {timestamp: true});

const personModel = new mongoose.model(dbCollection, PersonSchema);

export default personModel;
