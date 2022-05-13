import StatusCode from '../configuration/StatusCode'
import { CreateUser, ReadUser } from '../models/Users'

// Här finns databas-relaterat
let currentId: number = 14

function incrementCurrentIdByOne() {
	currentId += 1
}

const inMemoryDatabase: ReadUser[] = [
	{
		id: 10,
		name: 'Adam',
		age: 12,
		gender: 'Male'
	},
	{
		id: 11,
		name: 'Bengtina',
		age: 24,
		gender: 'Other'
	},
	{
		id: 12,
		name: 'Cecilia',
		age: 36,
		gender: 'Female'
	},
	{
		id: 13,
		name: 'David',
		age: 48,
		gender: 'Male'
	},
]

function getUserIndex(id: number): number {
	for (let i = 0; i < inMemoryDatabase.length; i++) {
		if (inMemoryDatabase[i].id === id) {
			return i
		}
	}
	return -1
}

interface Messages {
	status: number,
	text: string
}

function messageUserNotFound(id: number) {
	let message: Messages
	message = {
		status: StatusCode.NOT_FOUND,
		text: `User not found with id = ${ id }`
	}
	return message
}

interface MessagesJsonFormat {
	status: number,
	text: ReadUser
}

function messageSuccessWithJson(json: ReadUser) {
	let message: MessagesJsonFormat
	message = {
		status: StatusCode.OK,
		text: json
	}
	return message
}

function getUserByIdFromDb(id: number) {
	const index = getUserIndex(id)

	if (index === -1) {
		return messageUserNotFound(id)
	} else {
		return messageSuccessWithJson(inMemoryDatabase[index])
	}
}

// CRUD
function getAllUsers(req: any, res: { json: (arg0: ReadUser[]) => any }) {
	return res.json(inMemoryDatabase)
}

function getUserById(req: any, res: any) {
	const id = Number(req.params.id)
	const response = getUserByIdFromDb(id)
	res.status(response.status).send(response.text)
}

export {
	getAllUsers,
	getUserById
}
