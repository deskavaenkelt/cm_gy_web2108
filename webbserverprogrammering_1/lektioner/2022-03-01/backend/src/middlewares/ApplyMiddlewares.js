import cors from 'cors'

const allowedRequestOrigins = '*'
const allowedRequestMethods = ['GET', 'POST', 'PUT', 'DELETE']

const cors_options = {
    origin: allowedRequestOrigins,
    methods: allowedRequestMethods
}

const ApplyMiddlewares = (app) => {
    app.use(cors(cors_options))
}

export default ApplyMiddlewares
