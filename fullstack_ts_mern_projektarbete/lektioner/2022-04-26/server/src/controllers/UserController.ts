import Logger from '../utils/Logger'
import StatusCode from '../utils/StatusCode'
import { Request, Response } from 'express'

const createUser = (req: Request, res: Response) => {
	try {
	
	} catch (error) {
		Logger.error(error)
		res.status(StatusCode.BAD_REQUEST).send({
			error: 'Error xxx user'
		})
	}
}

const getAllUsers = (req: Request, res: Response) => {
	try {
	
	} catch (error) {
		Logger.error(error)
		res.status(StatusCode.BAD_REQUEST).send({
			error: 'Error xxx user'
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
