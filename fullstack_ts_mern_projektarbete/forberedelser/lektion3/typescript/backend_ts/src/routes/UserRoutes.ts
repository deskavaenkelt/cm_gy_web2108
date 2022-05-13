import { getAllUsers, getUserById } from '../controller/UserController'
import ExpressApp from '../configuration/ExpressApp'

const usersUrl = '/users'
const usersUrlById = `${usersUrl}/:id`

const routes = () => {
	ExpressApp.get(usersUrl, getAllUsers)
	ExpressApp.get(usersUrlById, getUserById)
}

export default {
	routes
}
