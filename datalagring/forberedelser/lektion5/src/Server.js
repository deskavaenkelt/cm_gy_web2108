import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import helmet from "helmet";
// import morgan from "morgan";
import MorganMiddleware from "./middlewares/MorganMiddleware.js";
import Middlewares from "./middlewares/Middlewares.js"
import Configuration from "./configuration/Configuration.js"
import UserRoutes from "./routes/UserRoutes.js"
import mongoose from "mongoose";
import Logger from "./utils/Logger.js";

dotenv.config()
const app = express()
const mongodb_url = process.env.MONGODB_URL
const dbName = process.env.MONGODB_DB_NAME

// Middleware
app.use(helmet())
// app.use(morgan('combined'))
app.use(MorganMiddleware)
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(Middlewares?.errorHandler)

// Api alive route
app.get('/', (req, res) => {
    res.send('Api is Alive!')
})

UserRoutes.routes(app)

// Place After all valid urls
app.use(Middlewares?.notFound)

Configuration.connectToDatabase()
Configuration.connectToPort(app)
