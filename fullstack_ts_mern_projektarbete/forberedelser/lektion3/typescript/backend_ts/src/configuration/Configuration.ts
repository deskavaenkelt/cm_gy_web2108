import Logger from '../utils/Logger'
import dotenv from 'dotenv'
import ExpressApp from './ExpressApp'

dotenv.config()

const port: number = Number(process.env.SERVER_PORT)
const env: string = process.env.NODE_ENV

const connectToPort = () => {
	ExpressApp.listen(port, () => {
		Logger.info(`Server started at http://localhost:${ port }`)
		if (env === 'development') {
			Logger.warn(`Server running in development mode!`.toUpperCase())
		}
	})
}

export default {
	connectToPort,
}
