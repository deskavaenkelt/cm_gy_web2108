import UserController from '../controller/UserController.js'

/*
    www.minsida.com

    Router = vägen som användaren tar för att komma åt en resurs

    www.minsida.com/users
    www.minsida.com/users/:userId
    www.minsida.com/searchUsers
    www.minsida.com/todo
    www.minsida.com/todo/:todoId
*/


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

    app.post('/todo', TodoController.createTodo);
    app.post('/todo/ornotTodo/',() => { console.log("That's the question") })
};

export default {
    routes
}
