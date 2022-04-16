import UserController from '../controllers/UserController.js'

const urls = {
    user: '/user/',
    getUsers: '/users'
}

// Endpoint + Business Logic and CRUD Operations
const routes = (app) => {
    // CREATE
    app.post('/user/', UserController.createUser)

    // READ
    app.get('/user/all', UserController.getAllUsers)
    // app.get('/users/name', UserController.getUserNames)
    app.get('/user/name/:name', UserController.getUserByName)
    app.get('/user/:id', UserController.getUserById)

    // UPDATE
    app.put('/user/:id', UserController.updateUserById)

    // DELETE
    app.delete('/user/:id', UserController.deleteUserById)
}

export default {
    routes,
    urls
}
