import dotenv from 'dotenv'
import Logger from '../utils/Logger.js'
import mongoose from 'mongoose'

dotenv.config()

const port = process.env.SERVER_PORT || 8080    // Default to port 8080
const environment = process.env.NODE_ENV
const mongodb_url = process.env.MONGODB_URL
const dbName = process.env.MONGODB_DB_NAME
const dbCollection = process.env.MONGODB_COLLECTION

const differentMessages = () => {
    Logger.error('Error text')
    Logger.warn('Warn text')
    Logger.info('Info text')
    Logger.http('HTTP text')
    Logger.debug('Debug text')
}

function isServerInDevelopmentMode() {
    if (environment === 'development') {
        Logger.warn('Server is in development mode!'.toUpperCase())
    }
}

const connectToPort = (app) => {
    app.listen(port, () => {
        // differentMessages()
        isServerInDevelopmentMode()
        Logger.info(`Server running on port http://localhost:${ port }`)
    })
}

const connectToDatabase = async () => {
    const uri = mongodb_url + dbName

    try {
        await mongoose.connect(uri)
        Logger.info('Successfully connected to database')
    } catch (error) {
        Logger.error('Error connecting to database'.toUpperCase(), error)
        process.exit()
    }
}

export default {
    connectToPort,
    connectToDatabase
}
