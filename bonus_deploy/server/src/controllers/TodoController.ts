import { Request, Response } from 'express'
import TodoModel from '../models/TodoModel'
import { CreateTodo } from '../utils/interface/Todos'
import Logger from '../utils/Logger'
import StatusCode from '../utils/StatusCode'

const returnUpdatedObject = {
	new: true
}

const create = (req: Request, res: Response) => {
	try {
		Logger.http(req.body)
		const {title, assignedTo}: CreateTodo = req.body
		const incompleteBody = !title || !assignedTo
		if (incompleteBody) {
			return res.status(StatusCode.BAD_REQUEST).json({
				message: 'Title and assignedTo are required'
			})
		} else {
			const todo = new TodoModel({
				title,
				completed: false,
				assignedTo
			})
			todo.save(() => {
				res.status(StatusCode.CREATED).json(todo)
			})
		}
	} catch (error) {
		Logger.error(error)
		res.status(StatusCode.INTERNAL_SERVER_ERROR).json({error})
	}
}

const findAllTodos = (req: Request, res: Response) => {
	try {
		Logger.http(req.body)
		TodoModel.find((error, todos) => {
			if (error) {
				Logger.error(error)
				res.status(StatusCode.BAD_REQUEST).send({
					error: 'Error getting users'
				})
			} else {
				Logger.debug(todos)
				res.status(StatusCode.OK).json(todos)
			}
		})
	} catch (error) {
		Logger.error(error)
		res.status(StatusCode.INTERNAL_SERVER_ERROR).json({error})
	}
}

const findTodoById = (req: Request, res: Response) => {
	try {
		const {id} = req.params
		TodoModel.findById(id, (error: any, todo: any) => {
			if (error) {
				Logger.error(error)
				res.status(StatusCode.BAD_REQUEST).send({
					error: 'Error getting todo'
				})
			} else {
				Logger.debug(todo)
				res.status(StatusCode.OK).json(todo)
			}
		})
	} catch (error) {
		Logger.error(error)
		res.status(StatusCode.INTERNAL_SERVER_ERROR).json({error})
	}
}

const updateTodo = (req: Request, res: Response) => {
	try {
		const {id} = req.params
		const {title, assignedTo} = req.body
		const query = {
			title,
			assignedTo
		}
		TodoModel.findByIdAndUpdate(id, query, returnUpdatedObject, (error, todo) => {
			if (error) {
				Logger.error(error)
				res.status(StatusCode.BAD_REQUEST).send({
					error: 'Error updating todo'
				})
			} else {
				Logger.debug(todo)
				res.status(StatusCode.OK).json(todo)
			}
		})
	} catch (error) {
		Logger.error(error)
		res.status(StatusCode.INTERNAL_SERVER_ERROR).json({error})
	}
}

const toggleTodoStatus = (req: Request, res: Response) => {
	try {
		const {id} = req.params
		const {newTodoStatus} = req.body
		const query = {
			completed: newTodoStatus
		}
		TodoModel.findByIdAndUpdate(id, query, returnUpdatedObject, (error, todo) => {
			if (error) {
				Logger.error(error)
				res.status(StatusCode.BAD_REQUEST).send({
					error: 'Error updating todo'
				})
			} else {
				Logger.debug(todo)
				res.status(StatusCode.OK).json(todo)
			}
		})
	} catch (error) {
		Logger.error(error)
		res.status(StatusCode.INTERNAL_SERVER_ERROR).json({error})
	}
}

const deleteTodo = (req: Request, res: Response) => {
	try {
		const {id} = req.params
		TodoModel.findByIdAndDelete(id, (error: any, todo: any) => {
			if (error) {
				Logger.error(error)
				res.status(StatusCode.BAD_REQUEST).send({
					error: 'Error deleting todo'
				})
			} else {
				Logger.debug(todo)
				res.status(StatusCode.OK).json(todo)
			}
		})
	} catch (error) {
		Logger.error(error)
		res.status(StatusCode.INTERNAL_SERVER_ERROR).json({error})
	}
}

export default {
	create,
	findAllTodos,
	findTodoById,
	updateTodo,
	toggleTodoStatus,
	deleteTodo
}
