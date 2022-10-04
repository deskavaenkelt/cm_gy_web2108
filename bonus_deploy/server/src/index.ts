import express from 'express'
import Configuration from './configurations/Configuration'
import Middleware from './middlewares/Middleware'
import AliveRoutes from './routes/AliveRoutes'
import TodoRoutes from './routes/TodoRoutes'
import Logger from './utils/Logger'


const app = express()
Middleware.applyMiddlewares(app)

AliveRoutes(app)
TodoRoutes(app)

Middleware.errorHandlerAndNotFound(app)
Configuration.connectToPort(app)
Configuration.connectToDatabase().then(() => {
	Logger.debug('--== lolz ==--')
})

export default app
