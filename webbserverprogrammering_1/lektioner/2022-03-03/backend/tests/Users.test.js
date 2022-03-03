import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import { describe, it } from 'mocha'
import app from '../src/server.js'
import urls from '../src/routes/UserRoutes.js'

Chai.should()
Chai.use(ChaiHTTP)
const expect = Chai.expect

const randomString = Math.random().toString(36).substring(7)
console.log(randomString)


const testNonExistingRouteExpect = () => {
    describe('Testing a route that does not exist with expect', () => {
        it('should test a route that does not exist and returns 404 with expect', (done) => {
            Chai.request(app)
                .get(`/${ randomString }`)
                .end((request, response) => {
                    expect(response.status).to.equal(404)
                    done()
                })
        })
    })
}

const getUsers = () => {
    describe('Testing to get an array of users (GET)', () => {
        it('should expect an array of users to be returned', (done) => {
            Chai.request(app)
                .get('/users')
                .end((error, response) => {
                    response.should.have.a.status(200)
                    response.body.should.have.a('array')
                    response.body.length.should.equal(4)
                    response.body.length.should.not.equals(5)
                    response.body.length.should.not.equals(3)
                    done()
                })
        })
    })
}

const getUsersExpect = () => {
    describe('Testing to get an array of users (GET) with expect', () => {
        it('should expect an array of users to be returned with expect', (done) => {
            Chai.request(app)
                .get('/users')
                .end((error, response) => {
                    expect(response.status).to.equal(200)

                    const body = response.body
                    expect(body).to.be.an('array')
                    expect(body.length).to.equal(4)
                    expect(body.length).to.not.equal(3)
                    expect(body.length).to.not.equal(5)

                    const user = body[0]
                    expect(user).to.be.an('object')
                    expect(user.name).to.equal('Aram')
                    expect(user.age).to.equal(30)
                    expect(user.gender).to.equal('Male')
                    done()
                })
        })
    })
}

const createUser = () => {
    describe('Testing to create a user (POST)', () => {
        it('should expect a user to be created', (done) => {

        })
    })
}

const getUserNames = () => {
    describe('Testing to get an array if users name (GET)', () => {
        it('should expect a array of user names', (done) => {

        })
    })
}

const getUserByName = () => {
    describe('Testing to get an user object (POST)', () => {
        it('should expect a user to be created', (done) => {

        })
    })
}

const updateUserByName = () => {
    describe('Testing to create a user (POST)', () => {
        it('should expect a user to be created', (done) => {

        })
    })
}

const deleteUserByName = () => {
    describe('Testing to create a user (POST)', () => {
        it('should expect a user to be created', (done) => {

        })
    })
}

describe('TESTING USER API ROUTES!', () => {
    testNonExistingRouteExpect()
    getUsers()
    getUsersExpect()
})
