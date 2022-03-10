import UserController from '../controllers/UserController.js'

const urls = {
    user: '/user/',
    getUsers: '/users'
}

// Endpoint + Business Logic and CRUD Operations
const routes = (app) => {
    // CREATE
    app.post(urls.user, UserController.createUser)

    // READ
    app.get(urls.getUsers, UserController.getUsers)
    app.get('/users/name', UserController.getUserNames)
    app.get('/user/:name', UserController.getUserByName)

    // UPDATE
    app.put(urls.user, UserController.updateUserByName)

    // DELETE
    app.delete('/user/:name', UserController.deleteUserByName)
}

export default {
    routes,
    urls
}
