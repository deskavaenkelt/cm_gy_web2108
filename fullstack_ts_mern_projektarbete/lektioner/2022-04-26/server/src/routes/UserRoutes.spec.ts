import Chai from 'chai'
import chaiHttp from 'chai-http'
import server from '../server'
import { ReadUser } from '../utils/interface/Users'
import Logger from '../utils/Logger'
import StatusCode from '../utils/StatusCode'

Chai.use(chaiHttp)
const expect = Chai.expect

const randomString = Math.random().toString(36).substring(7)
Logger.debug(randomString)

const newUser = {
	name: 'Carin',
	age: 29,
	gender: 'Female'
}

let createdUser: ReadUser

const updatedUser = {
	name: newUser.name,
	newName: 'Christoffer',
	age: 19,
	gender: 'Male'
}

const deleteNonExistingId = '625adaff07c5b68f395ccfa3'

// Create new user
const createUser = () => {
	describe('Create user', () => {
		it('should create a user', () => {
			return Chai.request(server)
				.post('/user/')
				.send(newUser)
				.then((response) => {
					expect(response).to.have.status(StatusCode.CREATED)
					expect(response.body).to.be.an('object')
					expect(response.body).to.have.property('name')
					expect(response.body).to.have.property('age')
					expect(response.body).to.have.property('gender')
					createdUser = response.body
					expect(response.body.name).to.equal(newUser.name)
					expect(response.body.age).to.equal(newUser.age)
					expect(response.body.gender).to.equal(newUser.gender)
				})
		})
	})
}

const getUsers = () => {
	describe('Get Users', () => {
		it('should expect an array of users to be returned', () => {
			return Chai.request(server)
				.get('/user/all')
				.then((response) => {
					expect(response).to.have.status(StatusCode.OK)
					expect(response.body).to.be.an('array')
					expect(response.body).to.have.length.greaterThan(0)
				})
		})
	})
}

const getUserByName = () => {
	describe('Get User By Name', () => {
		it(`should expect a user object to be returned`, () => {
			return Chai.request(server)
				.get(`/user/name/${ createdUser.name }`)
				.then((response) => {
					expect(response).to.have.status(StatusCode.OK)
					expect(response.body).to.be.an('array')
					expect(response.body).to.have.length.greaterThan(0)
					expect(response.body[0]).to.have.property('name')
					expect(response.body[0]).to.have.property('age')
					expect(response.body[0]).to.have.property('gender')
					expect(response.body[0].name).to.equal(newUser.name)
					expect(response.body[0].age).to.equal(newUser.age)
					expect(response.body[0].gender).to.equal(newUser.gender)
				})
		})
	})
}

const getUserById = () => {
	describe('Get user by id', () => {
		it('should expect a user to be returned', () => {
			return Chai.request(server)
				.get(`/user/${ createdUser._id }`)
				.then((response) => {
					expect(response).to.have.status(StatusCode.OK)
					expect(response.body).to.be.an('object')
					expect(response.body).to.have.property('name')
					expect(response.body).to.have.property('age')
					expect(response.body).to.have.property('gender')
					expect(response.body.name).to.equal(newUser.name)
					expect(response.body.age).to.equal(newUser.age)
					expect(response.body.gender).to.equal(newUser.gender)
				})
		})
	})
}

const getNonExistingUserById = () => {
	describe('Get Non Existing User By Id', () => {
		it('should expect a error string', () => {
			return Chai.request(server)
				.get(`/user/${ deleteNonExistingId }`)
				.send(updatedUser)
				.then((response) => {
					expect(response.status).to.equal(StatusCode.OK)
					expect(response.body.message).to.equal(`User with id '${ deleteNonExistingId }' not found`)
				})
		})
	})
}

const updateUserById = () => {
	describe('Update user by id', () => {
		it('should expect a user with updated info to be returned', () => {
			return Chai.request(server)
				.put(`/user/${ createdUser._id }`)
				.send(updatedUser)
				.then((response) => {
					expect(response).to.have.status(StatusCode.OK)
					expect(response.body).to.be.an('object')
					expect(response.body).to.have.property('name')
					expect(response.body).to.have.property('age')
					expect(response.body).to.have.property('gender')
					expect(response.body.name).to.equal(updatedUser.name)
					expect(response.body.age).to.equal(updatedUser.age)
					expect(response.body.gender).to.equal(updatedUser.gender)
				})
		})
	})
}

const updateNonExistingUserById = () => {
	describe('Update Non Existing User By Id', () => {
		it('should expect a error string', () => {
			return Chai.request(server)
				.put(`/user/${ deleteNonExistingId }`)
				.send(updatedUser)
				.then((response) => {
					expect(response.status).to.equal(StatusCode.OK)
					expect(response.body.message).to.equal(`User with id '${ deleteNonExistingId }' not found`)
				})
		})
	})
}

const deleteUserById = () => {
	describe('Delete User By Id', () => {
		it('should expect a text message to be returned', () => {
			return Chai.request(server)
				.delete(`/user/${ createdUser._id }`)
				.then((response) => {
					expect(response).to.have.status(StatusCode.OK)
					expect(response.body).to.be.an('object')
					expect(response.body.message).to.equal(`User with id '${ createdUser._id }' was deleted from database!`)
				})
		})
	})
}

const deleteNonExistingUserById = () => {
	describe('Testing to delete a NON-EXISTING user by id (DELETE)', () => {
		it('should expect a text message to be returned', () => {
			return Chai.request(server)
				.delete(`/user/${ createdUser._id }`)
				.then((response) => {
					expect(response).to.have.status(StatusCode.OK)
					expect(response.body).to.be.an('object')
					expect(response.body.message).to.equal(`User with id '${ createdUser._id }' not found`)
				})
		})
	})
}

describe('TESTING THE ALIVE API ROUTE', () => {
	createUser()
	getUsers()
	getUserByName()
	getUserById()
	getNonExistingUserById()
	updateUserById()
	updateNonExistingUserById()
	deleteUserById()
	deleteNonExistingUserById()
})
