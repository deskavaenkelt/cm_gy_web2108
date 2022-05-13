import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import MorganMiddleware from '../middlewares/MorganMiddleware'
import ExpressApp from './ExpressApp'

dotenv.config()
const frontendPort = process.env.FRONTEND_PORT

const allowedOrigins = [`http://localhost:${ frontendPort }`]
const allowedMethods = ['GET', 'POST', 'PUT', 'DELETE']

const options: cors.CorsOptions = {
	origin: allowedOrigins,
	methods: allowedMethods
}

ExpressApp.use(cors(options))
ExpressApp.use(express.urlencoded({extended: true}))
ExpressApp.use(express.json())
ExpressApp.use(MorganMiddleware)
