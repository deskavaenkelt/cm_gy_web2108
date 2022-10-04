import Chai from 'chai'
import 'mocha'
import app from './index'
import chaiHttp  from 'chai-http'

Chai.use(chaiHttp)
const expect = Chai.expect

describe('API Alive Request', () => {
	it('should return "API is Alive with TypeScript!" on call', () => {
		return Chai.request(app).get('/')
			.then(res => {
				expect(res.status).to.equal(200)
				expect(res.text).to.eql('API is Alive with TypeScript!')
			})
	})
})
