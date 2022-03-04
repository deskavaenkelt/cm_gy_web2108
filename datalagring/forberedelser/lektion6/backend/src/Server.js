import express from 'express'
import cors from 'cors'
import Logger from "./utils/Logger.js";
import MorganMiddleware from "./middlewares/MorganMiddleware.js"
import Middlewares from "./middlewares/Middlewares.js"
import helmet from "helmet"
import Configuration from './configuration/Configuration.js'
import UserRoutes from "./routes/UserRoutes.js";

const app = express();

// Middleware
app.use(helmet())
app.use(MorganMiddleware)
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(Middlewares.errorHandler)

// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("API is Alive!");
});

UserRoutes.routes(app)

// Place after all valid URLs
app.use(Middlewares.notFound)

Configuration.connectToDatabase().then()
Configuration.connectToPort(app)
