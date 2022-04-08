import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const dbCollection = process.env.MONGODB_COLLECTION     // user collection

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const UserModel = new mongoose.model(dbCollection, UserSchema)

export default UserModel
