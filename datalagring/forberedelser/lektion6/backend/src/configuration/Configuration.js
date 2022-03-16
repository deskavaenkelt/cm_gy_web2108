import Logger from "../utils/Logger.js"
import dotenv from 'dotenv'
import mongoose from "mongoose"

dotenv.config()
const port = process.env.PORT
const environment = process.env.NODE_ENV
const mongodb_url = process.env.MONGODB_URL
const dbName = process.env.MONGODB_DB_NAME

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
        Logger.info(`server started at http://localhost:${ port }`);
    });
}

const connectToDatabase = async () => {
    const uri = mongodb_url + dbName
    const option = { useNewUrlParser: true, useUnifiedTopology: true }
    try {
        await mongoose.connect(uri, option)
        Logger.info('Successfully connected to the Database')
    } catch (error) {
        Logger.error('Error connecting to Database!'.toUpperCase())
        process.exit()
    }
};

export default {
    connectToPort,
    connectToDatabase
}
