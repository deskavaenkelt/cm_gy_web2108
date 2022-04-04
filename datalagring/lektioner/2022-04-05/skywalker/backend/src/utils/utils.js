import Chai from "chai"
import ChaiHTTP from "chai-http"
import { describe, it as test } from "mocha"
import app from "../src/Server.js"

Chai.should();
chai.use(ChaiHTTP);

import Chai from "chai"
import ChaiHTTP from "chai-http"
import { describe, it as test } from "mocha"
import app from "../src/Server.js"

Chai.should()       // Instantiate Chai
Chai.use(ChaiHTTP)  // Test against an API

const randomString = Math.random().toString(36).substring(7)
let personId
const person = {
    name: randomString,
    birthPlace: randomString,
}
const updatedperson = {
    name: randomString + randomString,
    birthPlace: randomString + randomString,
}

const personsRoute = '/person'

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

const createperson = () => {
    describe('Testing CREATE(POST) method for a person entity', () => {
        test('Expecting a person to be created', (done) => {
            Chai.request(app)
                .post(personsRoute)
                .send(person)
                .end((error, response) => {
                    response.should.have.a.status(201)
                    response.body.should.be.a('object')
                    personId = response.body._id
                    response.body.should.have.property('name').eq(person.personname)
                    response.body.should.have.property('birthPlace').eq(person.password)
                    done()
                })
        })
    })
}

const getAllpersons = () => {
    describe('Fetch(GET) all persons', () => {
        test('Expecting to return allpersons', (done) => {
            Chai.request(app)
                .get(personsRoute)
                .end((error, response) => {
                    response.should.have.status(200)
                    response.body.should.be.a('array')
                    response.body.length.should.be.eq(response.body.length)
                    done()
                })
        })
    })
}

const updatepersonById = () => {
    describe('Updating(PUT) a person in the database', () => {
        test('Expecting a person to be updated', (done) => {
            Chai.request(app)
                .put(`${ personsRoute }/${ personId }`)
                .send(updatedperson)
                .end((error, response) => {
                    response.should.have.status(200)
                    response.body.should.be.a('object')
                    response.body.should.have.property('_id').eq(personId)
                    response.body.should.have.property('personname').eq(updatedperson.personname)
                    response.body.should.have.property('password').eq(updatedperson.password)
                    done()
                })
        })
    })
}

const deletepersonById = () => {
    describe('Testing Deleting(DELETE) a person in database', () => {
        test('Expecting a person to be deleted', (done) => {
            Chai.request(app)
                .delete(`${ personsRoute }/${ personId }`)
                .end((error, response) => {
                    response.should.have.status(200)
                    done()
                })
        })
    })
}

describe('TESTING THE person_API ROUTES', () => {
    testingNonExistingRoute()
    createperson()
    getAllpersons()
    updatepersonById()
    deletepersonById()
})

