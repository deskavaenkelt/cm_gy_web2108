import dotenv from 'dotenv'
import StatusCode from '../configurations/StatusCode'

dotenv.config()
const env = process.env.NODE_ENV

// Own made middlewares
const notFound = (req: { originalUrl: any; }, res: { status: (arg0: number) => void; }, next: (arg0: Error) => void) => {
	const error = new Error(`Not Found: ${ req.originalUrl }`)
	res.status(StatusCode.NOT_FOUND)
	next(error)
}

const errorHandler = (error: any, req: any, res: any, next: any) => {
	const statusCode = res.statusCode === 200 ? 500 : res.statusCode
	res.status(statusCode)
	res.json({
		statusCode,
		message: error.message,
		stackTrace: env === 'development' ? error.stack : 'lol'
	})
}

export {
	notFound,
	errorHandler
}
