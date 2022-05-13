import cors from 'cors'
import express from 'express'
import MorganMiddleware from './middlewares/MorganMiddleware'
import Logger from './utils/Logger'

const app = express()
const frontendPort = 3000
const port = 3001

const allowedOrigins = [`http://localhost:${ frontendPort }`]
const allowedMethods = ['GET', 'POST', 'PUT', 'DELETE']

const options: cors.CorsOptions = {
	origin: allowedOrigins,
	methods: allowedMethods
}

app.use(cors(options))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(MorganMiddleware)


app.get('/', (req, res) => {
	res.send('API is Alive with TypeScript! and Nodemon')
})

app.listen(port, () => {
	Logger.info(`Server started at http://localhost:${ port }`)
})

Logger.error('This is an error log')
Logger.warn('This is a warn log')
Logger.info('This is a info log')
Logger.http('This is a http log')
Logger.debug('This is a debug log')

const num1: number = 5
const num2: any = '6'
const num3 = 4

Logger.debug(num1 + Number(num2))
Logger.debug(`${ num1 } + ${ num2 }`)
Logger.debug(num2)
Logger.debug(num3)

const data: any = {
	name: 'Adam',
	age: num1,
	gender: true
}

Logger.debug(data)

interface User {
	name: string;
	age: number;
	gender: boolean;
	height?: number;	// optional
}

const adam: User = {
	name: 'Adam',
	age: 5,
	gender: false
}

Logger.debug(adam)

const myArray: User[] = [
	{
		name: 'Adam',
		age: 5,
		gender: false
	},
	{
		name: 'Bengt',
		age: 6,
		gender: true,
		height: 110
	}
]

Logger.warn(myArray)
Logger.warn(myArray[0])
Logger.warn(myArray[0].name)
