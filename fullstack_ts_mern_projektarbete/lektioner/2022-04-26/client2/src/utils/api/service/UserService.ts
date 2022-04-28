import http from '../MyApi'
import { CreateOrUpdateUser } from '../../interface/Users'

const UserService = {
	createUser: (user: CreateOrUpdateUser) => {
		return http.post('/user', user)
	},
	
	getAll: () => {
		return http.get('/user/all')
	},
	
	getByName: (name: string) => {
		return http.get(`/user/name/${ name }`)
	},
	
	getById: (id: string) => {
		return http.get(`/user/${ id }`)
	},
	
	updateUserById: (id: string, user: CreateOrUpdateUser) => {
		return http.put(`/user/${ id }`, user)
	},
	
	deleteUserById: (id: string) => {
		return http.delete(`/user/${ id }`)
	}
}

export default UserService
