import express from 'express' // routes
import dotenv from 'dotenv'   // .env
import cors from 'cors'       // IP & POST, GET, PUT, DELETE
import helmet from "helmet";  // security, hide modules
// import morgan from "morgan";
import MorganMiddleware from "./middlewares/MorganMiddleware.js"; // Logger
import Middlewares from "./middlewares/Middlewares.js" // Middlewares
import Configuration from "./configuration/Configuration.js" // Configuration
import UserRoutes from "./routes/UserRoutes.js"

dotenv.config()
const app = express()

// Middleware
app.use(helmet())

app.use(MorganMiddleware)
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

// Istället för bodyParser, använd express.
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
