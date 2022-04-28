import http from '../MyApi'
import { CreateOrUpdateUser } from '../../interface/Users'

const UserService = {
	createUser: (payload: CreateOrUpdateUser) => {
		return http.post('/user', payload)
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
	
	updateUserById: (id: string, payload: CreateOrUpdateUser) => {
		return http.put(`/user/${ id }`, payload)
	},
	
	deleteUserById: (id: string) => {
		return http.delete(`/user/${ id }`)
	}
}

export default UserService
