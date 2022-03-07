import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import { describe, it } from 'mocha'
import app from '../src/server.js'

Chai.should()
Chai.use(ChaiHTTP)
const expect = Chai.expect

const randomString = Math.random().toString(36).substring(7)
console.log(randomString)

const newUser = {
    name: 'Carina',
    age: 29,
    gender: 'Female'
}
const updatedUser = {
    name: newUser.name,
    newName: 'Christoffer',
    age: '19',
    gender: 'Male'
}

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

const getUserNames = () => {    // Hemläxa
    describe('Testing to get an array if users name (GET)', () => {
        it('should expect a array of user names', (done) => {

        })
    })
}

const checkIfUserDoNotExist = (name) => {
    describe('Testing message on user that dont exists', () => {
        it('should return a string', (done) => {
            Chai.request(app)
                .get(`/user/${ name }`)
                .end((error, response) => {
                    expect(response.status).to.equal(200)
                    expect(response.text).to.equal(`Could not find "${ name }" in database`)
                    done()
                })
        })
    })
}

const createUser = () => {
    describe('Testing to create a user (POST)', () => {
        it('should expect a user to be created', (done) => {
            Chai.request(app)
                .post('/user')
                .send(newUser)
                .end((error, response) => {
                    expect(response.status).to.equal(201)

                    const body = response.body
                    expect(body.name).to.equal(newUser.name)
                    expect(body.age).to.equal(newUser.age)
                    expect(body.gender).to.equal(newUser.gender)
                    done()
                })
        })
    })
}

const getUserByName = (name, age, gender) => {
    describe('Testing if a user Exist(GET)', () => {
        it(`should expect a user object to be returned`, (done) => {
            Chai.request(app)
                .get(`/user/${ name }`)
                .end((error, response) => {
                    expect(response.status).to.equal(200)

                    const body = response.body
                    expect(body).to.be.an('object')
                    expect(body.name).to.equal(name)
                    expect(body.age).to.equal(age)
                    expect(body.gender).to.equal(gender)
                    done()
                })
        })
    })
}

const updateUserByNameDontExist = () => {
    describe('Testing to update a user (PUT)', () => {
        it('should expect a error string', (done) => {
            Chai.request(app)
                .put(`/user/`)
                .send(updatedUser)
                .end((error, response) => {
                    expect(response.status).to.equal(202)
                    expect(response.text).to.equal(`Could not find "${ newUser.name }" in database`)
                    done()
                })
        })
    })
}

const updateUserByName = () => {
    describe('Testing to update a user (PUT)', () => {
        it('should expect a user to be updated', (done) => {
            Chai.request(app)
                .put(`/user/`)
                .send(updatedUser)
                .end((error, response) => {
                    expect(response.status).to.equal(202)

                    const body = response.body
                    expect(body).to.be.an('object')
                    expect(body.name).to.equal(updatedUser.newName)
                    expect(body.age).to.equal(updatedUser.age)
                    expect(body.gender).to.equal(updatedUser.gender)
                    done()
                })
        })
    })
}

const deleteUserByNameUserDontExist = () => {
    describe('Testing to delete a user by name that do not exist in db (DELETE)', () => {
        it('should expect a string with fail message', (done) => {
            Chai.request(app)
                .del(`/user/${ newUser.name }`)
                .end((error, response) => {
                    expect(response.status).to.equal(200)
                    expect(response.text).to.equal(`User with name: "${ newUser.name }" don't exist in database!`)
                    done()
                })
        })
    })
}

const deleteUserByName = () => {
    describe('Testing to delete a user by name (DELETE)', () => {
        it('should expect a user to be deleted', (done) => {
            Chai.request(app)
                .del(`/user/${ updatedUser.newName }`)
                .end((error, response) => {
                    expect(response.status).to.equal(200)
                    expect(response.text).to.equal(`User with name: "${ updatedUser.newName }" was deleted from database!`)
                    done()
                })
        })
    })
}

describe('TESTING USER API ROUTES!', () => {
    testNonExistingRouteExpect()
    getUsers()
    getUsersExpect()

    checkIfUserDoNotExist(newUser.name) // Carina
    updateUserByNameDontExist()

    createUser()
    getUserByName(newUser.name, newUser.age, newUser.gender) // Carina

    checkIfUserDoNotExist(updatedUser.newName) // Christoffer
    updateUserByName()
    getUserByName(updatedUser.newName, updatedUser.age, updatedUser.gender) // Christoffer

    deleteUserByNameUserDontExist()
    deleteUserByName()
})
