# Backend i TypeScript

## Setup

<details>
<summary>npm packet</summary>

```shell
npm init -y
npm i express dotenv helmet cors mongoose winston morgan
npm i -D nodemon typescript tslint @types/node @types/express @types/helmet @types/cors @types/mongoose @types/morgan
npm i -D mocha @types/mocha chai @types/chai chai-http @types/chai-http ts-node ts-mocha @types/expect ts-node-dev
```

</details>

<details>
<summary>Update your package.json</summary>

```json
{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "dist/Server.js",
  "scripts": {
    "prebuild": "tslint -c tslint.json -p tsconfig.json --fix",
    "build": "tsc",
    "prestart": "npm run build",
    "start": "node .",
    "startts": "ts-node-dev src/Server.ts",
    "start:nodemon": "./node_modules/nodemon/bin/nodemon.js",
    "test": "mocha -r ts-node/register src/**/*.spec.ts"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "helmet": "^4.6.0",
    "mongoose": "^6.0.12",
    "morgan": "^1.10.0",
    "winston": "^3.3.3"
  },
  "devDependencies": {
    "@types/chai": "^4.2.22",
    "@types/chai-http": "^4.2.0",
    "@types/cors": "^2.8.12",
    "@types/expect": "^24.3.0",
    "@types/express": "^4.17.13",
    "@types/helmet": "^4.0.0",
    "@types/mocha": "^9.0.0",
    "@types/mongoose": "^5.11.97",
    "@types/morgan": "^1.9.3",
    "@types/node": "^16.11.6",
    "chai": "^4.3.4",
    "chai-http": "^4.3.0",
    "mocha": "^9.1.3",
    "nodemon": "^2.0.14",
    "ts-node": "^10.4.0",
    "tslint": "^6.1.3",
    "typescript": "^4.4.4"
  }
}
```

</details>

<details>
<summary>tsconfig.json</summary>

Create a file named `tsconfig.json` in the root folder of your project, and add the following configuration.

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es6",
    "noImplicitAny": true,
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist",
    "baseUrl": ".",
    "paths": {
      "*": [
        "node_modules/*"
      ]
    }
  },
  "include": [
    "src/**/*"
  ]
}
```

</details>

<details>
<summary>tslint.json</summary>

Create a new file in the root folder named `tslint.json` file and add the following configuration.

```json
{
  "defaultSeverity": "error",
  "extends": [
    "tslint:recommended"
  ],
  "jsRules": {},
  "rules": {
    "trailing-comma": [
      false
    ]
  },
  "rulesDirectory": []
}
```

</details>

<details>
<summary>Nodemon</summary>

Create `nodemon.json` configuration file inside root directory.

```json
{
  "ignore": [
    ".git",
    "node_modules",
    "dist"
  ],
  "watch": [
    "./src"
  ],
  "exec": "npm start",
  "ext": "ts"
}
```

Add additional script for nodemon inside package.json scripts.

```json
{
  "start:nodemon": "./node_modules/nodemon/bin/nodemon.js"
}
```

- `npm run start:nodemon`

</details>

<details>
<summary>.env file with content</summary>

In root folder, create a file named `.env`. Open the file and add the following:

```env
SERVER_PORT=3001
MONGODB_URL=mongodb://localhost:27017/
MONGODB_DB_NAME=api
MONGODB_COLLECTION=user
NODE_ENV=development
```

</details>

<details>
<summary>Winston</summary>

Create folder `utils` in `src`and create file `Logger.ts` with content:

```typescript
import winston from 'winston'

const levels = {
	error: 0,
	warn: 1,
	info: 2,
	http: 3,
	debug: 4,
}

const level = () => {
	const env = process.env.NODE_ENV || 'development'
	const isDevelopment = env === 'development'
	return isDevelopment ? 'debug' : 'warn'
}

const colors = {
	error: 'red',
	warn: 'yellow',
	info: 'green',
	http: 'magenta',
	debug: 'white',
}

winston.addColors(colors)

const format = winston.format.combine(
	winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss:ms'}),
	winston.format.colorize({all: true}),
	winston.format.printf(
		(info) => `${ info.timestamp } ${ info.level }: ${ info.message }`,
	),
)

const transports = [
	new winston.transports.Console(),
	new winston.transports.File({
		filename: 'logs/error.log',
		level: 'error',
	}),
	new winston.transports.File({filename: 'logs/all.log'}),
]

const Logger = winston.createLogger({
	level: level(),
	levels,
	format,
	transports,
})

export default Logger
```

Logger commands:

```typescript
Logger.error("This is an error log");
Logger.warn("This is a warn log");
Logger.info("This is a info log");
Logger.http("This is a http log");
Logger.debug("This is a debug log");
```

</details>

<details>
<summary>Morgan</summary>

Create folder `middlewares` in `src`and create file `MorganMiddleware.ts` with content:

```typescript
import morgan, { StreamOptions } from "morgan";

import Logger from "../utils/logger";

const stream: StreamOptions = {
	write: (message) => Logger.http(message),
};

const skip = () => {
	const env = process.env.NODE_ENV || "development";
	return env !== "development";
};

const MorganMiddleware = morgan(
	":method :url :status :res[content-length] - :response-time ms", {stream, skip}
);

export default MorganMiddleware;
```

</details>

<details>
<summary>Status Codes</summary>

In `configurations`-folder create `StatusCode.ts` with content:

```typescript
// 1xx informational response – the request was received, continuing process

// 2xx successful – the request was successfully received, understood, and accepted
const OK = 200
const CREATED = 201

// 3xx redirection – further action needs to be taken in order to complete the request

// 4xx client error – the request contains bad syntax or cannot be fulfilled
const BAD_REQUEST = 400
const UNAUTHORIZED = 401
const FORBIDDEN = 403
const NOT_FOUND = 404
const METHOD_NOT_ALLOWED = 405

// 5xx server error – the server failed to fulfil an apparently valid request
const INTERNAL_SERVER_ERROR = 500

export default {
	OK,
	CREATED,
	BAD_REQUEST,
	UNAUTHORIZED,
	FORBIDDEN,
	NOT_FOUND,
	METHOD_NOT_ALLOWED,
	INTERNAL_SERVER_ERROR
}
```

</details>

<details>
<summary>Own middlewares</summary>

In `configurations`-folder create `Middleware.ts` with content:

```typescript
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
```

</details>

<details>
<summary>Create a express application with our middlewares</summary>

Create a folder named `src`. In this folder, create a file named `Server.ts`. Open the file and add the following
JavaScript.

```typescript
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import Logger from './utils/Logger'
import MorganMiddleware from './middlewares/MorganMiddleware'
import StatusCode from './configurations/StatusCode'
import { notFound, errorHandler } from './middlewares/Middleware'

const app = express()
const port = process.env.PORT

// Middlewares
const allowedOrigins = ['http://localhost:3000']
const allowedMethods = ['GET', 'POST', 'PUT', 'DELETE']

const options: cors.CorsOptions = {
	origin: allowedOrigins,
	methods: allowedMethods
}

app.use(cors(options))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(MorganMiddleware)
app.use(errorHandler)

app.get('/', (req, res) => {
	res.status(StatusCode.OK).send('API is Alive with TypeScript!')
})

app.use(notFound)

app.listen(port, () => {
	Logger.info(`server started at http://localhost:${ port }`)
})

export default app
```

Now, from the terminal or command line, you can launch the application.

`npm run start`

or

`npm run start:nodemon`

If all goes well, you should see this message written to the console.

`server started at http://localhost:3001`

`npm run startts`


</details>

## Mongoose

<details>
<summary></summary>
</details>


<details>
<summary></summary>
</details>


<details>
<summary></summary>
</details>

## Tests

<details>
<summary>Testing a TypeScript API With Mocha and Chai</summary>

[source](https://tutorialedge.net/typescript/testing-typescript-api-with-mocha-chai/)

First and foremost, we’ll have to install the libraries that we wish to use to test our systems.

```shell
npm i chai-http @types/chai-http @types/express @mocha
```

Once you have installed the above packages, you will have to add the `test` script to your `package.json` file within your project:

```json
{
  "scripts": {
    "test": "mocha -r ts-node/register src/**/*.spec.ts"
  }
}
```

This will subsequently allow you to run `npm run test` within your project, and it will walk through every test file that features `.spec.ts` in its filename.

### A Simple Test

Ok, so we’ve got the necessary libraries installed, how do we then go about using these to test our codebase?

Well, let’s start by writing a really simple `chai` test suite that will test a very simple `/` API endpoint.

Create a file `Server.spec.ts` with content:

```typescript
import Chai from 'chai'
import 'mocha'
import StatusCode from './configuration/StatusCode'
import app from './Server'
import chaiHttp = require('chai-http')

Chai.use(chaiHttp)
const expect = Chai.expect

describe('API Alive Request', () => {
	it('should return "API is Alive with TypeScript!" on call', () => {
		return Chai.request(app).get('/')
			.then(res => {
				expect(res.text).to.eql('API is Alive with TypeScript!')
				expect(res.status).to.equal(StatusCode.OK)
			})
	})
})
```

</details>


<details>
<summary></summary>
</details>
