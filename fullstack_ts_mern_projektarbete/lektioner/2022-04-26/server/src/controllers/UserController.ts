import Logger from '../utils/Logger'
import StatusCode from '../utils/StatusCode'
import { Request, Response } from 'express'
import { CreateUser, ReadUser } from '../utils/interface/Users'
import UserModel from '../models/UserModel'

const createUser = async (req: Request, res: Response) => {
	try {
		Logger.info('createUser()')
		Logger.http(req.body)
		const {name, age, gender} = req.body
		if (name && age && gender) {
			const newObject: CreateUser = {
				name: name,
				age: Number(age),
				gender: gender
			}
			Logger.http(newObject)
			
			const user = new UserModel(newObject)
			const dbResponse = await user.save()
			Logger.http(dbResponse)
			res.status(StatusCode.CREATED).send(dbResponse)
			
		} else {
			Logger.error('name, age or gender failed')
			res.status(StatusCode.BAD_REQUEST).send({
				message: 'Incorrect body'
			})
		}
	} catch (error) {
		Logger.error(error)
		res.status(StatusCode.BAD_REQUEST).send({
			error: 'Error while creating user'
		})
	}
}

const getAllUsers = (req: Request, res: Response) => {
	try {
		// UserModel.find({name: req.body.name, skoStorlek: req.body.skoStorlek} , '', (error: ErrorCallback, users: Array<ReadUser>) => {
		UserModel.find({} , '', (error: ErrorCallback, users: Array<ReadUser>) => {
			if (error) {
				Logger.error(error)
				res.status(StatusCode.BAD_REQUEST).send({
					error: 'Error getting users'
				})
			} else {
				Logger.http(users)
				res.status(StatusCode.OK).send(users)
			}
		})
	} catch (error) {
		Logger.error(error)
		res.status(StatusCode.BAD_REQUEST).send({
			error: 'Error getting user'
		})
	}
}

const getUserByName = (req: Request, res: Response) => {
	try {
		UserModel.find({name: req.params.name} , '', (error: ErrorCallback, users: Array<ReadUser>) => {
			if (error) {
				Logger.error(error)
				res.status(StatusCode.BAD_REQUEST).send({
					error: 'Error getting user'
				})
			} else {
				Logger.http(users)
				res.status(StatusCode.OK).send(users)
			}
		})
	} catch (error) {
		Logger.error(error)
		res.status(StatusCode.BAD_REQUEST).send({
			error: 'Error getting user by name'
		})
	}
}

const getUserById = (req: Request, res: Response) => {
	try {
		UserModel.findById(req.params.id, '', (error: ErrorCallback, user: ReadUser) => {
			if (error) {
				Logger.error(error)
				res.status(StatusCode.BAD_REQUEST).send({
					error: 'Error getting user'
				})
			} else {
				Logger.http(user)
				res.status(StatusCode.OK).send(user ? user : {
					message: 'User not found'
				})
			}
		})
	} catch (error) {
		Logger.error(error)
		res.status(StatusCode.BAD_REQUEST).send({
			error: 'Error getting user by Id'
		})
	}
}

const getUserByNameAndGender = (req: Request, res: Response) => {
	try {
		UserModel.find({name: req.params.name, gender: req.params.gender}, '', (error: ErrorCallback, user: ReadUser) => {
			if (error) {
				Logger.error(error)
				res.status(StatusCode.BAD_REQUEST).send({
					error: 'Error getting user'
				})
			} else {
				Logger.http(user)
				res.status(StatusCode.OK).send(user)
			}
		})
	} catch (error) {
		Logger.error(error)
		res.status(StatusCode.BAD_REQUEST).send({
			error: 'Error geting user by name and gender'
		})
	}
}

const updateUserById = (req: Request, res: Response) => {
	try {
		Logger.debug(req.params.id)
		Logger.debug(req.body)
		const updatedUser: CreateUser = {
			name: req.body.name,
			age: Number(req.body.age),
			gender: req.body.gender
		}
		Logger.debug(updatedUser)
		
		UserModel.findByIdAndUpdate(req.params.id, updatedUser, {new : true }, (error, user: ReadUser) => {
			if (error) {
				Logger.error(error)
				res.status(StatusCode.BAD_REQUEST).send({
					error: 'Error updating user'
				})
			} else {
				Logger.http(user)
				res.status(StatusCode.OK).send(user)
			}
		})
	} catch (error) {
		Logger.error(error)
		res.status(StatusCode.BAD_REQUEST).send({
			error: 'Error updating user'
		})
	}
}

// const deleteUserById = (req: Request, res: Response) => {
// 	try {
// 		UserModel.findByIdAndRemove(req.params.id, (error: ErrorCallback, user: ReadUser) => {
// 			if (error) {
// 				Logger.error(error)
// 				res.status(StatusCode.BAD_REQUEST).send({
// 					error: 'Error deleting user'
// 				})
// 			} else {
// 				Logger.http(user)
// 				res.status(StatusCode.OK).json({
// 					message: 'User deleted',
// 					details: user
// 				})
// 			}
// 		})
// 	} catch (error) {
// 		Logger.error(error)
// 		res.status(StatusCode.BAD_REQUEST).send({
// 			error: 'Error deleting user'
// 		})
// 	}
// }

const deleteUserById = (req: Request, res: Response) => {
	try {
		UserModel.findByIdAndRemove(req.params.id, (error: ErrorCallback, user: ReadUser) => {
			if (error) {
				Logger.error(error)
				res.status(StatusCode.BAD_REQUEST).send({
					error: 'Error deleting user'
				})
			} else {
				Logger.http(user)
				res.status(StatusCode.OK).json(
						user ? {
							message: `User with id '${ req.params.id }' was deleted from database!`
						}
						: {
							message: `User with id '${ req.params.id }' not found`
						})
			}
		})
	} catch (error) {
		Logger.error(error)
		res.status(StatusCode.BAD_REQUEST).send({
			error: 'Error deleting user'
		})
	}
}


export default {
	createUser,
	getAllUsers,
	getUserByName,
	getUserById,
	getUserByNameAndGender,
	updateUserById,
	deleteUserById
}
