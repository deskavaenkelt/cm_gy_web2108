import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()
const dbCollection = process.env.MONGODB_COLLECTION     // TODO: 'user'

const UserSchema = new mongoose.Schema({
    username: String,
    password: String
}, {
    timestamps: true
})

const UserModel = new mongoose.model(dbCollection, UserSchema)

export default UserModel
