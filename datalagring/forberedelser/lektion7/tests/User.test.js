import Chai from "chai"
import ChaiHTTP from "chai-http"
import { describe, it as test } from "mocha"
import app from "../src/Server.js"

Chai.should()       // Instantiate Chai
Chai.use(ChaiHTTP)  // Test against an API

const randomString = Math.random().toString(36).substring(7)
let userId
const user = {
    username: randomString,
    password: randomString,
}
const updatedUser = {
    username: randomString + randomString,
    password: randomString + randomString,
}

const usersRoute = '/users'

const testingNonExistingRoute = () => {
    describe('Test a route that does not exist', () => {
        test('Expecting 404 not found', (done) => {
            Chai.request(app)
                .get(`/${ randomString }`)
                .end((req, res) => {
                    res.should.have.a.status(404)
                    done()
                })
        })
    })
}

const createUser = () => {
    describe('Testing CREATE(POST) method for a user entity', () => {
        test('Expecting a user to be created', (done) => {
            Chai.request(app)
                .post(usersRoute)
                .send(user)
                .end((error, response) => {
                    response.should.have.a.status(201)
                    response.body.should.be.a('object')
                    userId = response.body._id
                    response.body.should.have.property('username').eq(user.username)
                    response.body.should.have.property('password').eq(user.password)
                    done()
                })
        })
    })
}

const getAllUsers = () => {
    describe('Fetch(GET) all users', () => {
        test('Expecting to return allUsers', (done) => {
            Chai.request(app)
                .get(usersRoute)
                .end((error, response) => {
                    response.should.have.status(200)
                    response.body.should.be.a('array')
                    response.body.length.should.be.eq(response.body.length)
                    done()
                })
        })
    })
}

const updateUserById = () => {
    describe('Updating(PUT) a user in the database', () => {
        test('Expecting a user to be updated', (done) => {
            Chai.request(app)
                .put(`${ usersRoute }/${ userId }`)
                .send(updatedUser)
                .end((error, response) => {
                    response.should.have.status(200)
                    response.body.should.be.a('object')
                    response.body.should.have.property('_id').eq(userId)
                    response.body.should.have.property('username').eq(updatedUser.username)
                    response.body.should.have.property('password').eq(updatedUser.password)
                    done()
                })
        })
    })
}

const deleteUserById = () => {
    describe('Testing Deleting(DELETE) a user in database', () => {
        test('Expecting a user to be deleted', (done) => {
            Chai.request(app)
                .delete(`${ usersRoute }/${ userId }`)
                .end((error, response) => {
                    response.should.have.status(200)
                    done()
                })
        })
    })
}

describe('TESTING THE USER_API ROUTES', () => {
    testingNonExistingRoute()
    createUser()
    getAllUsers()
    updateUserById()
    deleteUserById()
})
