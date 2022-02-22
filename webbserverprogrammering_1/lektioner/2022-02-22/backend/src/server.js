import express from 'express'
import Configuration from './configurations/configuration.js'
import ApplyMiddlewares from './configurations/ApplyMiddlewares.js'
import AliveController from './controller/AliveController.js'
import UserController from './controller/UserController.js'

// Initiate ExpressAPP
const app = express()
ApplyMiddlewares(app)

// Endpoint + Business Logic
app.get('/', AliveController.alive)

// CRUD

// CREATE
app.post('/user/', UserController.creatUser)

// READ
app.get('/users', UserController.getUsers)
app.get('/users/name', UserController.getUserNames)
app.get('/user/:name', UserController.getUserByName)

// UPDATE
app.put('/user/', UserController.updateUserByName)

// DELETE
app.delete('/user/:name', UserController.deleteUserByName)

// Start Server
Configuration.connectToPort(app)
