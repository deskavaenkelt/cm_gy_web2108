import UserController from '../controller/UserController.js'

const routes = (app) => {
    const userUrl = '/users'
    const usersUrlById = `${userUrl}/:userId`
    const searchUsers = `/searchUsers`

    app.post(userUrl, UserController.createUser)
    app.get(userUrl, UserController.getAllUsers)
    app.get(usersUrlById, UserController.getUserById)
    app.get(searchUsers, UserController.getUserByUsername)
    app.put(usersUrlById, UserController.updateUserById)
    app.delete(usersUrlById, UserController.deleteUserById)
};

export default {
    routes
}
