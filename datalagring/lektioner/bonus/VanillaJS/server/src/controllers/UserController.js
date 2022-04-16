// import userDatabase from '../data/userDatabase.js' - deprecated
import Logger from '../utils/Logger.js'
import UserModel from '../models/UserModel.js'
import StatusCode from '../utils/StatusCode.js'

// Make function asynchronus
const createUser = async (req, res) => {
    Logger.info('createUser()')
    Logger.http(req.body)
    const { name, age, gender } = req.body
    if (name && age && gender) {
        const newObject = {
            name: name,
            age: Number(age),
            gender: gender
        }
        Logger.debug(newObject)
        // Old
        // userDatabase.push(newObject)
        // Logger.info(userDatabase[userDatabase.length - 1])
        // res.status(StatusCode.CREATED).send(userDatabase[userDatabase.length - 1])

        // Mongoose
        try {
            const user = new UserModel(newObject)
            const response = await user.save()
            Logger.debug(response)
            res.status(StatusCode.CREATED).send(response)
        } catch (error) {
            Logger.error(error)
            res.status(StatusCode.BAD_REQUEST).send({
                error: 'Error creating user'
            })
        }
    } else {
        Logger.error('name, age or gender failed')
        res.status(StatusCode.NO_CONTENT).send('No body')
    }
}

const getAllUsers = (req, res) => {
    // old
    // Logger.info('getAllUsers()')
    // res.status(StatusCode.OK).send(userDatabase)

    // Mongoose
    try {
        // Callback solves error handling, users = response
        UserModel.find({}, (error, users) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Error getting users'
                })
            } else {
                Logger.info(users)
                res.status(StatusCode.OK).send(users)
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error getting users'
        })
    }
}

// old
// const userNames = () => {
//     const names = []
//     userDatabase.forEach(user => {
//         names.push({
//             name: user.name
//         })
//     })
//     return names
// }

const getUserNames = (req, res) => {
    // old
    // const responseFromDb = userNames()
    // res.status(StatusCode.OK).send(responseFromDb)

    // Mongoose
    try {
        UserModel.find({}, 'name', (error, users) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Error getting users'
                })
            } else {
                Logger.info(users)
                res.status(StatusCode.OK).send(users)
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error getting users'
        })
    }
}

// old
// const searchUserByName = (name) => {
//     let object = `Could not find "${ name }" in database`
//     userDatabase.forEach(user => {
//         if (name === user.name) {
//             object = user
//             return user
//         }
//     })
//     return object
// }

const getUserByName = (req, res) => {
    // const name = req.params.name
    // const responseFromDb = searchUserByName(name)
    // res.status(StatusCode.OK).send(responseFromDb)

    // Mongoose
    try {
        UserModel.find({ name: req.params.name }, (error, user) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Error getting user'
                })
            } else {
                Logger.info(user)
                res.status(StatusCode.OK).send(user.length > 0 ? user : {
                    message: `User with id '${ req.params.id }' not found`
                })
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error getting user'
        })
    }
}

const getUserById = (req, res) => {
    try {
        UserModel.findById(req.params.id, (error, user) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Error getting user'
                })
            } else {
                Logger.info(user)
                res.status(StatusCode.OK).send(user ? user : {
                    message: `User with id '${ req.params.id }' not found`
                })
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error getting user'
        })
    }
}

// old
// const modifyUserByName = (name, newName, age, gender) => {
//     let object = `Could not find "${ name }" in database`
//     userDatabase.forEach(user => {
//         if (name === user.name) {
//             user.name = newName
//             user.age = age
//             user.gender = gender
//             object = user
//             return user
//         }
//     })
//     return object
// }
// const updateUserByName = (req, res) => {
//     const { name, newName, age, gender } = req.body
//     const response = modifyUserByName(name, newName, age, gender)
//     res.status(202).send(response)
// }

// Update user parameters
const updateUserById = (req, res) => {
    try {
        const updatedUser = {
            name: req.body.name,
            age: req.body.age,
            gender: req.body.gender
        }
        Logger.debug(req.params.id)
        Logger.debug(updatedUser)
        UserModel.findByIdAndUpdate(req.params.id, updatedUser, { new: true }, (error, user) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Error updating user with id ' + req.params.id
                })
            } else {
                Logger.info(user)
                res.status(StatusCode.OK).send(user ? user : {
                    message: `User with id '${ req.params.id }' not found`
                })
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error updating user'
        })
    }
}
// write update function for user model


// old
// const removeUserByName = (name) => {
//     let text = `User with name: "${ name }" `
//
//     for (let i = 0; i < userDatabase.length; i++) {
//         if (name === userDatabase[i].name) {
//             text += `was deleted from database!`
//             userDatabase.splice(i, 1)
//             return text
//         }
//     }
//
//     text += `don't exist in database!`
//     return text
// }
// const deleteUserByName = (req, res) => {
//     const name = req.params.name
//     const responseFromDB = removeUserByName(name)
//     res.status(StatusCode.OK).send(responseFromDB)
// }

const deleteUserById = (req, res) => {
    try {
        UserModel.findByIdAndRemove(req.params.id, (error, user) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Error deleting user'
                })
            } else {
                Logger.info(user)
                res.status(StatusCode.OK).send(
                    user
                        ? {
                            message: `User with id '${ req.params.id }' was deleted from database!`
                        }
                        : {
                    message: `User with id '${ req.params.id }' not found`
                })
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error deleting user'
        })
    }
}
export default {
    createUser,
    getAllUsers,
    getUserNames,
    getUserByName,
    getUserById,
    updateUserById,
    deleteUserById
}
