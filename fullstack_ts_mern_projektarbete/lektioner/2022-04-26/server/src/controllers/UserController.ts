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
		UserModel.find({}, '', (error: ErrorCallback, users: Array<ReadUser>) => {
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
	
	} catch (error) {
		Logger.error(error)
		res.status(StatusCode.BAD_REQUEST).send({
			error: 'Error xxx user'
		})
	}
}

const getUserById = (req: Request, res: Response) => {
	try {
	
	} catch (error) {
		Logger.error(error)
		res.status(StatusCode.BAD_REQUEST).send({
			error: 'Error xxx user'
		})
	}
}

const getUserByNameAndGender = (req: Request, res: Response) => {
	try {
	
	} catch (error) {
		Logger.error(error)
		res.status(StatusCode.BAD_REQUEST).send({
			error: 'Error xxx user'
		})
	}
}

const updateUserById = (req: Request, res: Response) => {
	try {
	
	} catch (error) {
		Logger.error(error)
		res.status(StatusCode.BAD_REQUEST).send({
			error: 'Error xxx user'
		})
	}
}

const deleteUserById = (req: Request, res: Response) => {
	try {
		
	} catch (error) {
		Logger.error(error)
		res.status(StatusCode.BAD_REQUEST).send({
			error: 'Error xxx user'
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
