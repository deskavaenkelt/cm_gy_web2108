import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()
const dbCollection = process.env.MONGODB_COLLECTION

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String
}, {
    timestamps: true
})

const UserModel = new mongoose.model(dbCollection, UserSchema)

export default UserModel
