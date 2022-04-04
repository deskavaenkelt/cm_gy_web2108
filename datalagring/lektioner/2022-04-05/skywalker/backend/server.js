import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import helmet from "helmet";
import MorganMiddleware from "./src/middlewares/MorganMiddleware.js";
import Middlewares from "./src/middlewares/Middlewares.js"
import Configuration from "./src/configuration/config.js"
import PersonRoutes from "./src/routes/PersonRoutes.js"

dotenv.config()
const app = express()

// Middleware
app.use(helmet())
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

PersonRoutes.routes(app)

// Place After all valid urls
app.use(Middlewares?.notFound)

Configuration.connectToDatabase()
Configuration.connectToPort(app)

export default app
