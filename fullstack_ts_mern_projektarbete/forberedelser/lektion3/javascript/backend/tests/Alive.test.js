import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import { describe, it } from 'mocha'
import app from '../src/server.js'

Chai.should()
Chai.use(ChaiHTTP)
const expect = Chai.expect

const testNonExistingRoute = () => {
    describe('Testing a route that does not exist', () => {
        it('should test a route that does not exist and returns 404', (done) => {
            Chai.request(app)
                .get('/randomUrl')
                .end((request, response) => {
                    response.should.have.a.status(404)
                    done()
                })
        })
    })
}

const testNonExistingRouteExpect = () => {
    describe('Testing a route that does not exist with expect', () => {
        it('should test a route that does not exist and returns 404 with expect', (done) => {
            Chai.request(app)
                .get('/randomUrl')
                .end((request, response) => {
                    // response.should.have.a.status(404)
                    expect(response.status).to.equal(404)
                    done()
                })
        })
    })
}

const testExistingRoute = () => {
    describe('Testing a route that does exist', () => {
        it('should test a route that does exist and returns 200', (done) => {
            Chai.request(app)
                .get('/')
                .end((request, response) => {
                    response.should.have.a.status(200)
                    Chai.expect(response.text).to.equal('API is Alive!');
                    done()
                })
        })
    })
}

const testExistingRouteExpect = () => {
    describe('Testing a route that does exist with expect', () => {
        it('should test a route that does exist and returns 200 with expect', (done) => {
            Chai.request(app)
                .get('/')
                .end((request, response) => {
                    expect(response.status).to.equal(200)
                    // expect(response.text).to.equal('API is Alive!');
                    expect(response.text).to.equal('API is Alive!');
                    done()
                })
        })
    })
}


describe('TESTING API ALIVE ROUTES!', () => {
    testNonExistingRoute()
    testNonExistingRouteExpect()
    testExistingRoute()
    testExistingRouteExpect()
})
