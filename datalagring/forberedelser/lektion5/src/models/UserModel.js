import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()
const dbCollection = process.env.MONGODB_COLLECTION_USER // user collection

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    name: String,
    lastname: String,
    age: Number
}, {
    timestamps: true
})

const UserModel = new mongoose.model(dbCollection, UserSchema)

export default UserModel
