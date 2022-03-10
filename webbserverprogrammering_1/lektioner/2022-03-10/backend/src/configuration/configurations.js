import dotenv from 'dotenv'
import Logger from '../utils/Logger.js'

dotenv.config()

const port = process.env.SERVER_PORT || 8080    // Default to port 8080

const differentMessages = () => {
    Logger.error('Error text')
    Logger.warn('Warn text')
    Logger.info('Info text')
    Logger.http('HTTP text')
    Logger.debug('Debug text')
}

const connectToPort = (app) => {
    app.listen(port, () => {
        // differentMessages()
        Logger.info(`Server running on port http://localhost:${ port }`)
    })
}

const connectToDatabase = (app) => {
    // Nästa kurs
}

export default {
    connectToPort,
    connectToDatabase
}
