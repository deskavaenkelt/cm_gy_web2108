import AliveController from '../controllers/AliveController.js'

// Endpoint + Business Logic
const routes = (app) => {
    app.get('/', AliveController.alive)
}

export default {
    routes
}
