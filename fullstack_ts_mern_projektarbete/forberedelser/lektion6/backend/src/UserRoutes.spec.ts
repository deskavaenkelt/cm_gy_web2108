import Chai from 'chai'
import 'mocha'
import StatusCode from './configurations/StatusCode'
import app from './Server'
import chaiHttp from 'chai-http'
import { User } from './utils/interface/User'

Chai.use(chaiHttp)
const expect = Chai.expect

const randomString = Math.random().toString(36).substring(7)
let userId: string = '616718bda4ab77e25e33ec5b'
const user: User = {
	username: randomString,
	password: randomString,
}
const updatedUser: User = {
	username: randomString + randomString,
	password: randomString + randomString,
}

const usersRoute = '/users'

const testingNonExistingRoute = () => {
	describe('Test a route that does not exist', () => {
		it('Expecting 404 not found', () => {
			return Chai.request(app).get(`/${ randomString }`)
				.then((response) => {
					expect(response.status).to.equal(StatusCode.NOT_FOUND)
				})
		})
	})
}

const createUser = () => {
	describe('Testing CREATE(POST) method for a user entity', () => {
		it('Expecting a user to be created', (done) => {
			Chai.request(app)
				.post(usersRoute)
				.send(user)
				.end((error, response) => {
					expect(response.status).to.equal(StatusCode.CREATED)
					expect(response.body).be.a('object')
					userId = response.body._id
					expect(response.body).have.property('username').eq(user.username)
					expect(response.body).have.property('password').eq(user.password)
					done()
				})
		})
	})
}

const getAllUsers = () => {
	describe('Testing READ(GET) method for all users entity', () => {
		it('Expecting a array with all users', (done) => {
			Chai.request(app)
				.get(usersRoute)
				.end((error, response) => {
					expect(response.status).to.equal(StatusCode.OK)
					expect(response.body).be.a('array')
					expect(response.body.length).be.eq(response.body.length)
					done()
				})
		})
	})
}

const updateUser = () => {
	describe('Testing UPDATE(PUT) a user in database', () => {
		it('Expecting a user to be updated', (done) => {
			Chai.request(app)
				.put(`${usersRoute}/${ userId }`)
				.send(updatedUser)
				.end((error, response) => {
					expect(response.status).to.equal(StatusCode.OK)
					expect(response.body).be.a('object')
					expect(response.body).have.property('_id').eq(userId)
					expect(response.body).have.property('username').eq(updatedUser.username)
					expect(response.body).have.property('password').eq(updatedUser.password)
					done()
				})
		})
	})
}

const deleteUser = () => {
	describe('Testing DELETING(DELETE) a user in database', () => {
		it('Expecting a user to be deleted', (done) => {
			Chai.request(app)
				.delete(`${usersRoute}/${ userId }`)
				.end((error, response) => {
					expect(response.status).to.equal(StatusCode.OK)
					done()
				})
		})
	})
}

describe('TESTING THE USER_API ROTE', () => {
	testingNonExistingRoute()
	createUser()
	getAllUsers()
	updateUser()
	deleteUser()
})
