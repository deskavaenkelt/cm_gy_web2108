import { Express } from 'express'
import AliveController from '../controllers/AliveController'

// Endpoint + Business Logic
const AliveRoutes = (app: Express) => {
	app.get('/', AliveController.alive)
}

export default AliveRoutes
