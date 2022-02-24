import cors from 'cors'
import express from 'express'

// Config stuff
const allowedRequestOrigins = '*'
const allowedRequestMethods = ['GET', 'POST', 'PUT', 'DELETE']

const cors_options = {
    origin: allowedRequestOrigins,
    methods: allowedRequestMethods
}

const ApplyMiddlewares = (app) => {
    app.use(cors(cors_options))
    app.use(express.json())
}

export default ApplyMiddlewares
