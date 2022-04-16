import { ReadUser } from '../utils/interface/Users'
import Logger from '../utils/Logger'
import UserModel from '../models/UserModel'
import StatusCode from '../utils/StatusCode'
import { Request, Response } from 'express'

// Make function asynchronus
const createUser = async (request: Request, response: Response) => {
	Logger.info('createUser()')
	Logger.http(request.body)
	const {name, age, gender} = request.body
	if (name && age && gender) {
		const newObject = {
			name: name,
			age: Number(age),
			gender: gender
		}
		Logger.debug(newObject)
		try {
			const user = new UserModel(newObject)
			const dbResponse = await user.save()
			Logger.debug(dbResponse)
			response.status(StatusCode.CREATED).send(dbResponse)
		} catch (error) {
			Logger.error(error)
			response.status(StatusCode.BAD_REQUEST).send({
				error: 'Error creating user'
			})
		}
	} else {
		Logger.error('name, age or gender failed')
		response.status(StatusCode.NO_CONTENT).send('No body')
	}
}

const getAllUsers = (_request: Request, response: Response) => {
	try {
		// Callback solves error handling, users = response
		UserModel.find({}, (error: ErrorCallback, users: Array<ReadUser>) => {
			if (error) {
				Logger.error(error)
				response.status(StatusCode.BAD_REQUEST).send({
					error: 'Error getting users'
				})
			} else {
				Logger.info(users)
				response.status(StatusCode.OK).send(users)
			}
		})
	} catch (error) {
		Logger.error(error)
		response.status(StatusCode.BAD_REQUEST).send({
			error: 'Error getting users'
		})
	}
}

const getUserNames = (_request: Request, response: Response) => {
	try {
		UserModel.find({}, 'name', (error: ErrorCallback, users: Array<ReadUser>) => {
			if (error) {
				Logger.error(error)
				response.status(StatusCode.BAD_REQUEST).send({
					error: 'Error getting users'
				})
			} else {
				Logger.info(users)
				response.status(StatusCode.OK).send(users)
			}
		})
	} catch (error) {
		Logger.error(error)
		response.status(StatusCode.BAD_REQUEST).send({
			error: 'Error getting users'
		})
	}
}

const getUserByName = (request: Request, response: Response) => {
	try {
		UserModel.find({name: request.params.name}, (error: ErrorCallback, user: ReadUser) => {
			if (error) {
				Logger.error(error)
				response.status(StatusCode.BAD_REQUEST).send({
					error: 'Error getting user'
				})
			} else {
				Logger.info(user)
				response.status(StatusCode.OK).send(user ? user : {
					message: `User with name '${ request.params.name }' not found`
				})
			}
		})
	} catch (error) {
		Logger.error(error)
		response.status(StatusCode.BAD_REQUEST).send({
			error: 'Error getting user'
		})
	}
}

const getUserById = (request: Request, response: Response) => {
	try {
		UserModel.findById(request.params.id, (error: ErrorCallback, user: ReadUser) => {
			if (error) {
				Logger.error(error)
				response.status(StatusCode.BAD_REQUEST).send({
					error: 'Error getting user'
				})
			} else {
				Logger.info(user)
				response.status(StatusCode.OK).send(user ? user : {
					message: `User with id '${ request.params.id }' not found`
				})
			}
		})
	} catch (error) {
		Logger.error(error)
		response.status(StatusCode.BAD_REQUEST).send({
			error: 'Error getting user'
		})
	}
}

// Update user parameters
const updateUserById = (request: Request, response: Response) => {
	try {
		const updatedUser = {
			name: request.body.name,
			age: request.body.age,
			gender: request.body.gender
		}
		Logger.debug(request.params.id)
		Logger.debug(updatedUser)
		UserModel.findByIdAndUpdate(request.params.id, updatedUser, {new: true}, (error, user) => {
			if (error) {
				Logger.error(error)
				response.status(StatusCode.BAD_REQUEST).send({
					error: 'Error updating user with id ' + request.params.id
				})
			} else {
				Logger.info(user)
				response.status(StatusCode.OK).send(user ? user : {
					message: `User with id '${ request.params.id }' not found`
				})
			}
		})
	} catch (error) {
		Logger.error(error)
		response.status(StatusCode.BAD_REQUEST).send({
			error: 'Error updating user'
		})
	}
}

// write update function for user model
const deleteUserById = (request: Request, response: Response) => {
	try {
		UserModel.findByIdAndRemove(request.params.id, (error: ErrorCallback, user: ReadUser) => {
			if (error) {
				Logger.error(error)
				response.status(StatusCode.BAD_REQUEST).send({
					error: 'Error deleting user'
				})
			} else {
				Logger.info(user)
				response.status(StatusCode.OK).send(
					user
						? {
							message: `User with id '${ request.params.id }' was deleted from database!`
						}
						: {
							message: `User with id '${ request.params.id }' not found`
						})
			}
		})
	} catch (error) {
		Logger.error(error)
		response.status(StatusCode.BAD_REQUEST).send({
			error: 'Error deleting user'
		})
	}
}
export default {
	createUser,
	getAllUsers,
	getUserNames,
	getUserByName,
	getUserById,
	updateUserById,
	deleteUserById
}
