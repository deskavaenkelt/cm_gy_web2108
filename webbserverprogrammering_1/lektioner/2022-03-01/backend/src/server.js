import express from 'express'
import Configuration from './configuration/configurations.js'
import ApplyMiddlewares from './middlewares/ApplyMiddlewares.js'

const app = express()
ApplyMiddlewares(app)

app.get('/', (req, res) => {
     res.status(200).send('API is Alive!')
})

Configuration.connectToPort(app)
