import { Express } from 'express'
import Logger from '../utils/Logger'
import StatusCode from '../utils/StatusCode'


const AliveRoutes = (app: Express) => {
	app.get('/', (req, res) => {
		Logger.http('AliveRoutes::GET /')
		res.status(StatusCode.OK).send('API is Alive with TypeScript!')
	})
}

export default AliveRoutes
