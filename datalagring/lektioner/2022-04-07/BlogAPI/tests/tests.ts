import Chai from "chai"
import ChaiHTTP from "chai-http"
import { describe, it as test } from "mocha"
import app from "../source/server"


Chai.should()       // Instantiate Chai
Chai.use(ChaiHTTP)  // Test against an API

const testRoute= "/posts/"
const randomString = Math.random().toString(36).substring(7)

const testingNonExistingRoute = () => {
    describe('Test a route that does not exist', () => {
        test('Expecting 404 not found', (done:any) => {
            Chai.request(app)
                .get(`/${ randomString }`)
                .end((req, res) => {
                    res.should.have.a.status(404)
                    done()
                })
        })
    })
}

// Test CRUD on the test route
const testingCreate = () => {
    describe('Test create', () => {
        test('Expecting 200 OK', (done:any) => {
            Chai.request(app)
                .post(testRoute)
                .send({
                    title: randomString,
                    body: randomString
                })
                .end((req, res) => {
                    res.should.have.a.status(200)
                    done()
                })
        })
    })
}
// read post 1
const testingRead = () => {
    describe('Test read', () => {
        test('Expecting 200 OK', (done:any) => {
            Chai.request(app)
                .get(`${ testRoute }1`)
                .end((req, res) => {
                    res.should.have.a.status(200)
                    res.body.should.be.a('object')
                    done()
                })
        })
    })
}

// update post 1
const testingUpdate = () => {
    describe('Test update', () => {
        test('Expecting 200 OK', (done:any) => {
            Chai.request(app)
                .put(`${ testRoute }1`)
                .send({
                    title: randomString,
                    body: randomString
                })
                .end((req, res) => {
                    res.should.have.a.status(200)
                    done()
                })
        })
    })
}

// delete post 1
const testingDelete = () => {
    describe('Test delete', () => {
        test('Expecting 200 OK', (done:any) => {
            Chai.request(app)
                .delete(`${ testRoute }1`)
                .end((req, res) => {
                    res.should.have.a.status(200)
                    done()
                })
        })
    })
}

// List all posts
const testingList = () => {
    describe('Test list', () => {
        test('Expecting 200 OK', (done:any) => {
            Chai.request(app)
                .get(testRoute)
                .end((req, res) => {
                    res.should.have.a.status(200)
                    res.body.should.be.a('object')
                    done()
                })
        })
    })
}

export {
    testingNonExistingRoute,
    testingCreate,
    testingRead,
    testingUpdate,
    testingDelete,
    testingList
}

describe('TESTING THE posts_API ROUTES', () => {
    testingNonExistingRoute()
    testingCreate()
    testingRead()
    testingUpdate()
    testingDelete()
    testingList()
})
