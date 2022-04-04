import Logger from "../utils/Logger.js"
import dotenv from "dotenv"
import mongoose from "mongoose";

dotenv.config()
const port = process.env.PORT
const environment = process.env.NODE_ENV
const mongodb_url = process.env.MONGODB_URL
const dbName = process.env.MONGODB_DB_NAME
const dbCollection = process.env.MONGODB_COLLECTION

function isServerInDevelopmentMode() {
    const devEnv = 'development'
    const env = environment || devEnv
    const isDevelopment = env === devEnv
    if (isDevelopment) {
        Logger.warn('Server is in development mode!'.toUpperCase())
    }
}

const connectToPort = (app) => {
    app.listen(port, () => {
        isServerInDevelopmentMode()
        Logger.info(`server stated at http://localhost:${ port }`)
    })
}

const connectToDatabase = async () => {
    // mongoose
    const uri = mongodb_url + dbName
    const options = { useNewUrlParser: true, useUnifiedTopology: true }
    try {
        await mongoose.connect(uri, options)
        Logger.info('Successfully connected to the Database')
    } catch (error) {
        Logger.error('Error connecting to the Database'.toUpperCase(), error)
        process.exit()
    }
}

export default {
    connectToPort,
    connectToDatabase
}
