# Simple Express application

Skapa en ny projektmapp, skriv följande i den:

```shell
npm init --yes
npm i express
```

Editera `package.json` efter behov.

Skapa `index.js` med innehållet:

```javascript
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Välkommen till mitt API!')
})

app.listen(3001, () => {
    console.log('Server running on port http://localhost:3001')
})
```

Starta servern med:

```shell
node index.js
```

Avsluta servern med: `ctrl-c`.

## modules

I `package.json` lägg till `type` så filen tex ser ut så här:

```json
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
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
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.12"
  }
}

```

## Installera

### Restart server in save

nodemon: `npm install -D nodemon`

Start servern med:

- `npm nodemon index.js`
- `npx nodemon index.js`

### Dotenv

- `npm i dotenv`

New file `.env`:

```dotenv
PORT=3001
```

**OBS! Lägg till `.env` i `.gitignore`**

New file `.env_templete`:

```dotenv
# create a new file .env
# transfer your information to that file
PORT="ENTER YOUR PREFERRED PORT HERE"
```

Add in `index.js`

```javascript
import dotenv from 'dotenv'

dotenv.config()
const port = process.env.PORT
```
