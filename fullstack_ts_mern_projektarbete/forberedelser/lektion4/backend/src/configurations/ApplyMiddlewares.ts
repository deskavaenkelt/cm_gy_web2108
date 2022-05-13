import cors from 'cors'
import express, { Express } from 'express'
import helmet from 'helmet'
import { errorHandler } from '../middlewares/Middleware'
import MorganMiddleware from '../middlewares/MorganMiddleware'

// Middlewares
const allowedOrigins = ['http://localhost:3000']
// const allowedOrigins = ['*']
const allowedMethods = ['GET', 'POST', 'PUT', 'DELETE']

const options: cors.CorsOptions = {
	origin: allowedOrigins,
	methods: allowedMethods
}

const ApplyMiddlewares = (app: express.Application) => {
	app.use(helmet())
	app.use(cors(options))
	app.use(express.urlencoded({extended: false}))
	app.use(express.json())
	app.use(MorganMiddleware)
	app.use(errorHandler)
}

export default ApplyMiddlewares
