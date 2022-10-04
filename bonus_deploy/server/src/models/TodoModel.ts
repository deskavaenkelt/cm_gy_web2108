import { Schema, model } from 'mongoose'
import { CreateTodo } from '../utils/interface/Todos'

const dbCollection = process.env.MONGODB_COLLECTION

const todoSchema = new Schema<CreateTodo>({
	title: {
		type: String,
		required: true
	},
	completed: {
		type: Boolean,
		required: true
	},
	assignedTo: {
		type: String,
		required: true
	}
}, {
	timestamps: true
})

const TodoModel = model<CreateTodo>(dbCollection, todoSchema)

export default TodoModel
