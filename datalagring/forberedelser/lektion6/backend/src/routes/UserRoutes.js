import UserController from '../controller/UserController.js'

const routes = (app) => {
    const userUrl = '/users'
    const usersUrlById = `${userUrl}/:id`
    const searchUser = `/searchUser`

    app.post(userUrl, UserController.createUser)
    app.get(userUrl, UserController.getAllUsers)
    app.get(usersUrlById, UserController.getUserById)
    app.get(searchUser, UserController.getUserByName)
    app.put(usersUrlById, UserController.updateUser)
    app.delete(usersUrlById, UserController.deleteUser)
}

export default {
    routes
}
