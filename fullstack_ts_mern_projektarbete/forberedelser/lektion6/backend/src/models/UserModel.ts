import { Schema, model } from 'mongoose'
import { User } from '../utils/interface/User'

const dbCollection = process.env.MONGODB_COLLECTION

const schema = new Schema<User>({
		username: {type: String, required: true},
		password: {type: String, required: true},
	},
	{timestamps: true}
)

const UserModel = model<User>(dbCollection, schema)

export default UserModel
