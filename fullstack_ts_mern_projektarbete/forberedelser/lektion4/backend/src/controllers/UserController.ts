import StatusCode from '../configurations/StatusCode'
import UserModel from '../models/UserModel'
import { User } from '../utils/interface/User'
import Logger from '../utils/Logger'
import { Request, Response } from 'express'

const createUser = async (req: Request, res: Response) => {
	Logger.http(req.body)
	const {username, password}: User = req.body
	const user = new UserModel({
		username,
		password,
	})
	Logger.debug(user)
	try {
		const response = await user.save()
		Logger.debug(response)
		res.status(StatusCode.CREATED).send(response)
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR)
			.send({message: error.message})
	}
}

const getAllUsers = async (req: Request, res: Response) => {
	try {
		const response = await UserModel.find()
		Logger.debug(response)
		res.status(StatusCode.OK).send(response)
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR)
			.send({message: error.message})
	}
}

const getUserWithId = async (req: Request, res: Response) => {
	try {
		const {userId} = req.params
		Logger.http(`userId: ${ userId }`)
		const response = await UserModel.findById(userId)
		Logger.debug(response)
		res.status(StatusCode.OK).send(response)
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR)
			.send({
				message: `Error occurred while trying to retrieve user with ID: ${ req.params.userId }`,
				error: error.message
			})
	}
}

interface SearchForUser {
	username: string
}

const getUserWithQuery = async (req: Request, res: Response) => {
	try {
		const {username} = req.query
		Logger.http(`username: ${ username }`)
		const query: SearchForUser = {username: String(username)}
		const response = await UserModel.find(query)
		Logger.debug(response)
		response.length !== 0
			? res.status(StatusCode.OK).send(response)
			: res.status(StatusCode.NOT_FOUND).send({
				message: `Couldn't find user with username: ${ username }`
			})
		
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR)
			.send({
				message: `Error occurred while trying to retrieve user with ID: ${ req.params.userId }`,
				error: error.message
			})
	}
}

const updateUser = async (req: Request, res: Response) => {
	try {
		const {userId} = req.params
		Logger.http(`userId: ${ userId }`)
		const {username, password} = req.body
		Logger.http(`req.body: ${ req.body }`)
		if (!req.body) {
			res.status(StatusCode.BAD_REQUEST)
				.send({message: `Cant update with empty body`})
		}
		const response = await UserModel.findByIdAndUpdate(userId, {
			username,
			password
		}, {new: true})
		Logger.debug(response)
		res.status(StatusCode.OK).send(response)
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR)
			.send({
				message: `Error occurred while trying to update user with ID: ${ req.params.userId }`,
				error: error.message
			})
	}
}

const deleteUser = async (req: Request, res: Response) => {
	try {
		const {userId} = req.params
		const response = await UserModel.findByIdAndDelete(userId)
		res.status(StatusCode.OK).send({
			message: `Successfully deleted user with username: ${ response.username } and ID: ${ userId }`
		})
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR)
			.send({
				message: `Error occurred while trying to delete user with ID: ${ req.params.userId }`,
				error: error.message
			})
	}
}

export default {
	createUser,
	getAllUsers,
	getUserWithId,
	getUserWithQuery,
	updateUser,
	deleteUser
}
