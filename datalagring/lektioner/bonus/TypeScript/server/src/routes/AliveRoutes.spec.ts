import Chai from 'chai'
import chaiHttp from 'chai-http'
import server from '../server'
import StatusCode from '../utils/StatusCode'

Chai.use(chaiHttp)
const expect = Chai.expect

const randomString = Math.random().toString(36).substring(7)

const testingServerAlive = () => {
	describe('Alive Route', () => {
		it('should return 200', () => {
			return Chai.request(server).get('/')
				.then((response) => {
					expect(response).to.have.status(StatusCode.OK)
					expect(response.text).to.eql('Connected to TypeScript API!')
				})
		})
	})
}

const testingNonExistingRoute = () => {
	describe('Test a route that does not exist', () => {
		it('Expecting 404 not found', () => {
			return Chai.request(server).get(`/${ randomString }`)
				.then((response) => {
					expect(response.status).to.equal(StatusCode.NOT_FOUND)
				})
		})
	})
}

describe('TESTING THE ALIVE API ROUTE', () => {
	testingServerAlive()
	testingNonExistingRoute()
})
