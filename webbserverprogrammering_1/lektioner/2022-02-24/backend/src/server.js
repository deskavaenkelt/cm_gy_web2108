import express from 'express'
import Configuration from './configurations/configuration.js'
import ApplyMiddlewares from './configurations/ApplyMiddlewares.js'
import AliveRoutes from './routes/AliveRoutes.js'
import UserRoutes from './routes/UserRoutes.js'

// Initiate ExpressAPP
const app = express()
ApplyMiddlewares(app)

AliveRoutes.routes(app)
UserRoutes.routes(app)

// Start Server
Configuration.connectToPort(app)
