import { Express } from 'express'
import UserController from '../controllers/UserController'

const UserRoutes = (server: Express) => {
	// Create
	server.post('/user/', UserController.createUser)
	
	// Read
	server.get('/user/all', UserController.getAllUsers)
	server.get('/user/name/:name/', UserController.getUserByName)
	server.get('/user/name/:name/:gender', UserController.getUserByNameAndGender)
	server.get('/user/:id', UserController.getUserById)
	
	// Update
	server.put('/user/:id', UserController.updateUserById)
	
	// Delete
	server.delete('/user/:id', UserController.deleteUserById)
}

export default UserRoutes
