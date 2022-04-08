import express from 'express'
import Configuration from './configuration/configurations.js'
import Middlewares from './middlewares/Middlewares.js'
import AliveRoute from './routes/AliveRoute.js'
import UserRoutes from './routes/UserRoutes.js'
import Logger from './utils/Logger.js'

// Express server
const app = express()

// Middlewares
Middlewares.apply(app)

// Routes
AliveRoute.routes(app)
UserRoutes.routes(app)

// Error handling middleware
Middlewares.wrongPathAndErrorHandling(app)

// Start server and connect to database
Configuration.connectToDatabase().then(r => Logger.info('Database connected'))
Configuration.connectToPort(app)

// Export app for testing
export default app
