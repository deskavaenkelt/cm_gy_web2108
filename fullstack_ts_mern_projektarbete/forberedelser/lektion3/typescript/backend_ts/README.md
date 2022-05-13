# Backend with TypeScript

## Setting up the project environment

- `npm init -y`
- `npm install express`
- `npm install dotenv`
- `npm install -D nodemon`

### Create a standard express application:

Create a folder named `src`. In this folder, create a file named `Server.ts`. Open the file and add the following
JavaScript.

```javascript
const express = require("express");
const app = express();
const port = 3001; // default port to listen

// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("API is Alive!");
});

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${ port }`);
});
```

Next, update `package.json` to instruct `npm` on how to run your application. Change the main property value to point
to `src/Server.ts`, and add a `start` script to the `scripts` object.

```json
  "main": "src/Server.ts",
"scripts": {
"start": "node .",
"test": "echo \"Error: no test specified\" && exit 1"
},
```

Now, from the terminal or command line, you can launch the application.

`npm run start`

If all goes well, you should see this message written to the console.

`server started at http://localhost:3001`

### Setup your Node.js project to use TypeScript.

- `npm install --save-dev typescript`
- `npm install --save-dev tslint`

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

Based on this `tsconfig.json` file, the TypeScript compiler will (attempt to) compile any files ending with `.ts` it
finds in the `src` folder, and store the results in a folder named `dist`. Node.js uses the CommonJS module system, so
the value for the `module` setting is `commonjs`. Also, the target version of JavaScript is ES6 (ES2015), which is
compatible with modern versions of Node.js.

Next, create a new file in the root folder named `tslint.json` file and add the following configuration.

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

Next, update your `package.json` to change `main` to point to the new `dist folder created by the TypeScript compiler.
Also, add a couple of scripts to execute TSLint and the TypeScript compiler just before starting the Node.js server.

```json
{
  "main": "dist/Server.ts",
  "scripts": {
    "prebuild": "tslint -c tslint.json -p tsconfig.json --fix",
    "build": "tsc",
    "prestart": "npm run build",
    "start": "node .",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

Finally, change the extension of the `src/Server.ts` file from `.js` to `.ts`, the TypeScript extension, and run the
start script.

`npm run start`

### Fix TypeScript Errors

Change the server.ts content to this

```typescript
// const express = require( "express" );
import express from "express";

const app = express();
const port = 3001; // default port to listen

// define a route handler for the default home page
app.get("/", (req, res) => {
	res.send("API is Alive!");
});

// start the Express server
app.listen(port, () => {
	// tslint:disable-next-line:no-console
	console.log(`server started at http://localhost:${ port }`);
});
```

Update your project so that TypeScript can use the type declarations for Node.js and Express.

- `npm install --save-dev @types/node @types/express`

Next, rerun the start script and verify there are no more errors.

- `npm run start`

### Nodemon

- `npm install --save-dev nodemon`

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
  // <- files inside folder to watch
  "exec": "npm start",
  // <- command that will be executed when nodemon starts
  "ext": "ts"
  // <- files to watch
}
```

Remove the comments of course. Add additional script for nodemon inside package.json scripts.

```json
"start:nodemon": "./node_modules/nodemon/bin/nodemon.js",
```

- `npm run start:nodemon`

### CORS

- `npm install cors`
- `npm install --save-dev @types/cors`

```typescript
// Add a list of allowed origins.
// If you have more origins you would like to add, you can add them to the array below.
const allowedOrigins = ['http://localhost:3000'];
const allowedMethods = ['GET', 'POST', 'PUT', 'DELETE'];

const options: cors.CorsOptions = {
	origin: allowedOrigins,
	methods: allowedMethods
};

app.use(cors(options))
```

### Add JSON support

```typescript
app.use(express.urlencoded({extended: false}))
app.use(express.json())
```

- `npm run start:nodemon`

## Bonus: Replace `console.log()` with `winston`

[winston](https://www.npmjs.com/package/winston)

- `npm i winston`

Create folder `utils` in `src`and create file `logger.ts` with content:

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

[Better logs for ExpressJS using Winston and Morgan with Typescript](https://levelup.gitconnected.com/better-logs-for-expressjs-using-winston-and-morgan-with-typescript-1c31c1ab9342)

### Morgan middleware

- `npm install morgan @types/morgan`

Create folder `config` in `src`and create file `morganMiddleware.ts` with content:

```typescript
import morgan, { StreamOptions } from "morgan";

import Logger from "../utils/logger";

// Override the stream method by telling
// Morgan to use our custom logger instead of the console.log.
const stream: StreamOptions = {
// Use the http severity
	write: (message) => Logger.http(message),
};

// Skip all the Morgan http log if the
// application is not running in development mode.
// This method is not really needed here since
// we already told to the logger that it should print
// only warning and error messages in production.
const skip = () => {
	const env = process.env.NODE_ENV || "development";
	return env !== "development";
};

// Build the morgan middlewares
const morganMiddleware = morgan(
// Define message format string (this is the default one).
// The message format is made from tokens, and each token is
// defined inside the Morgan library.
// You can create your custom token to show what do you want from a request.
	":method :url :status :res[content-length] - :response-time ms",
// Options: in this case, I overwrote the stream and the skip logic.
// See the methods above.
	{stream, skip}
);

export default morganMiddleware;
```

## Resources

- [Use TypeScript to Build a Node API with Express](https://developer.okta.com/blog/2018/11/15/node-express-typescript)
- [Create new Node.js application with Express, TypeScript, Nodemon and ESLint - Part 1](https://dev.to/admirnisic/create-new-node-js-application-with-express-typescript-nodemon-and-eslint-f2l)
- [TypeScript Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
- [TypeScript Modules](https://www.typescriptlang.org/docs/handbook/modules.html)
- [How to serve POST request with Node using Express and Typescript?](https://stackoverflow.com/questions/61291330/how-to-serve-post-request-with-node-using-express-and-typescript)
- [Add CORS Support to Your Express + TypeScript API](https://www.twilio.com/blog/add-cors-support-express-typescript-api)
