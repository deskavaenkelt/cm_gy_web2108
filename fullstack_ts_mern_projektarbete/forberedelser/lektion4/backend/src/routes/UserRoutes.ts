import { Express } from 'express'
import UserController from '../controllers/UserController'

const usersUrl: string = '/users'
const usersUrlWithId: string = `${usersUrl}/:userId`
const searchUsers = `/searchUser`

const routes = (app: Express) => {
	app.post(usersUrl, UserController.createUser)
	app.get(usersUrl, UserController.getAllUsers)
	app.get(usersUrlWithId, UserController.getUserWithId)
	app.get(searchUsers, UserController.getUserWithQuery)
	app.put(usersUrlWithId, UserController.updateUser)
	app.delete(usersUrlWithId, UserController.deleteUser)
}

export default {
	routes
}
