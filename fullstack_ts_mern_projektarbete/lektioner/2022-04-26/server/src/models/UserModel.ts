import dotenv from 'dotenv'
import { model, Schema } from 'mongoose'
import { CreateUser } from '../utils/interface/Users'

dotenv.config()
const dbCollection = process.env.MONGODB_COLLECTION_USERS
// const dbCollection = 'user'

const UserSchema = new Schema<CreateUser>({
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
		required: true,
	}
}, {
	timestamps: true
})

const UserModel = model<CreateUser>(dbCollection, UserSchema)

export default UserModel
