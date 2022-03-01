import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import { describe, it } from 'mocha'
import app from '../src/server.js'

Chai.should()
Chai.use(ChaiHTTP)

const testingNonExistingRoute = () => {
    describe('Testing a route that does not exist', () => {
        it('should expect 404 not found', (done) => {
            Chai.request(app)
                .get('/randomUrl')
                .end((request, response) => {
                    response.should.have.a.status(404)
                    done()
                })
        })
    })
}

describe('Testing API Alive routes', () => {
    testingNonExistingRoute()
})
