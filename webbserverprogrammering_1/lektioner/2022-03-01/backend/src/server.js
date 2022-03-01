import express from 'express'
import Configuration from './configuration/configurations.js'
import Middlewares from './middlewares/Middlewares.js'
import AliveRoute from './routes/AliveRoute.js'

const app = express()
Middlewares.apply(app)

AliveRoute.routes(app)

Middlewares.wrongPath(app)
Middlewares.errorHandling(app)

Configuration.connectToPort(app)
