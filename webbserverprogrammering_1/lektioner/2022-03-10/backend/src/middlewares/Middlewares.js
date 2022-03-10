import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import MorganMiddleware from './MorganMiddleware.js'

const allowedRequestOrigins = '*'
const allowedRequestMethods = ['GET', 'POST', 'PUT', 'DELETE']

const cors_options = {
    origin: allowedRequestOrigins,
    methods: allowedRequestMethods
}

const apply = (app) => {
    app.use(helmet())
    app.use(cors(cors_options))
    app.use(express.json())
    app.use(MorganMiddleware)
}

const notFound = (req, res, next) => {
    const error = new Error(`Not found "${ req.originalUrl }"!`)
    res.status(404)
    next(error)
}

const wrongPath = (app) => {
    app.use(notFound)
}

const errorHandler = (error, req, res, next) => {
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
    apply,
    wrongPath,
    errorHandling
}
