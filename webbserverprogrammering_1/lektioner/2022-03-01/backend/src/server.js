import express from 'express'
import Configuration from './configuration/configurations.js'
import ApplyMiddlewares from './middlewares/ApplyMiddlewares.js'
import AliveRoute from './routes/AliveRoute.js'

const app = express()
ApplyMiddlewares(app)

AliveRoute.routes(app)

Configuration.connectToPort(app)
