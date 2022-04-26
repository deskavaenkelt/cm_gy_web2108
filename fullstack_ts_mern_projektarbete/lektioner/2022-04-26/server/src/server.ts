import express from 'express'
import Configuration from './configurations/Configuration'
import Middleware from './middlewares/Middleware'
import AliveRoutes from './routes/AliveRoutes'
import Logger from './utils/Logger'

const server = express()
Middleware.applyMiddlewares(server)

// Routes
AliveRoutes(server)

Middleware.errorHandlerAndNotFound(server)

Configuration.connectToPort(server)
Configuration.connectToDatabase().then(() => {
	Logger.debug('--== lolz ==--')
})

export default server
