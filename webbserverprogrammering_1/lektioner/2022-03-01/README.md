# Workflow

## Backend

### Gammalt

<details>

<summary>Det vi lärt oss hittills:</summary>

Skapa en ny projektmapp, skriv följande i den:

```shell
npm init --yes
npm i express dotenv cors
npm i -D nodemon
```

Editera `package.json`, exempel:

```json
{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "src/server.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "RestAPI",
    "Express"
  ],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.0.0",
    "express": "^4.17.3"
  },
  "devDependencies": {
    "nodemon": "^2.0.15"
  }
}
```

> Se till att ha med `type`

Skapa `server.js` med innehållet:

```javascript
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
const port = process.env.PORT || 8080

// Config stuff
const allowedRequestOrigins = '*'
const allowedRequestMethods = ['GET', 'POST', 'PUT', 'DELETE']

const cors_options = {
    origin: allowedRequestOrigins,
    methods: allowedRequestMethods
}

const app = express()
app.use(cors(cors_options))

app.get('/', (req, res) => {
    res.send('Välkommen till mitt API!')
})

app.listen(port, () => {
    console.log('Server running on port http://localhost:3001')
})
```

#### Nodemon

Start servern med:

- `npx nodemon src/server.js`

#### Dotenv

Skapa filen `.env`:

```dotenv
PORT=3001
```

**OBS! Lägg till `.env` i `.gitignore`**

Skapa filen `.env_templete` med samma variabler men tomma värden:

```dotenv
# create a new file .env
# transfer your information to that file
PORT="ENTER YOUR PREFERRED PORT HERE"
```

</details>

### Nytt

#### Addera Säkerhet

```shell
npm i helmet morgan
```

I ApplyMiddlewares.js:

```javascript
import helmet from 'helmet'

app.use(helmet())
```

#### Bättre loggning

```shell
npm i helmet morgan
```

```javascript
import morgan from 'morgan'

app.use(morgan('common'))
```

#### Egen middleware function

```javascript
function isAuthenticated(req, res) {
    console.log('Middleware function is running')
}

app.use(isAuthenticated)
```

> Evig loop i webbläsaren då funktionen inte avslutas

```javascript
function isAuthenticated(req, res, next) {
    console.log('Middleware function is running')
    next()
}

app.use(isAuthenticated)
```

> `next` löser det

#### Cannot GET /

```javascript
const notFound = (req, res, next) => {
    const error = new Error(`Not found: "${ req.originalUrl }"!`)
    res.status(404)
    next(error)
}

const wrongPath = (app) => {
    app.use(notFound)
}

export default {
    wrongPath
}
```

#### Error Handler

```javascript
const errorHandler = (error, reg, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        statusCode: statusCode,
        message: error.message,
        stackTrace: error.stack
    })
    next()
}

const errorHandling = (app) => {
    app.use(errorHandler)
}

export default {
    errorHandling
}
```

#### Testning

```shell
npm i -D mocha chai chai-http
```

