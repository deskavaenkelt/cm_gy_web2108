import userDatabase from '../data/userDatabase.js'
import Logger from '../utils/Logger.js'

const createUser = (req, res) => {
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
        userDatabase.push(newObject)
        Logger.info(userDatabase[userDatabase.length - 1])
        res.status(201).send(userDatabase[userDatabase.length - 1])
    }else {
        Logger.error('name, age or gender failed')
        res.status(204).send('No body')
    }
}

const getUsers = (req, res) => {
    Logger.info('getUsers()')
    res.status(200).send(userDatabase)
}

const userNames = () => {
    const names = []
    userDatabase.forEach(user => {
        names.push({
            name: user.name
        })
    })
    return names
}

const getUserNames = (req, res) => {
    const responseFromDb = userNames()
    res.status(200).send(responseFromDb)
}

const searchUserByName = (name) => {
    let object = `Could not find "${ name }" in database`
    userDatabase.forEach(user => {
        if (name === user.name) {
            object = user
            return user
        }
    })
    return object
}

const getUserByName = (req, res) => {
    const name = req.params.name
    const responseFromDb = searchUserByName(name)
    res.status(200).send(responseFromDb)
}

const modifyUserByName = (name, newName, age, gender) => {
    let object = `Could not find "${ name }" in database`
    userDatabase.forEach(user => {
        if (name === user.name) {
            user.name = newName
            user.age = age
            user.gender = gender
            object = user
            return user
        }
    })
    return object
}

const updateUserByName = (req, res) => {
    const { name, newName, age, gender } = req.body
    const response = modifyUserByName(name, newName, age, gender)
    res.status(202).send(response)
}

const removeUserByName = (name) => {
    let text = `User with name: "${ name }" `

    for (let i = 0; i < userDatabase.length; i++) {
        if (name === userDatabase[i].name) {
            text += `was deleted from database!`
            userDatabase.splice(i, 1)
            return text
        }
    }

    text += `don't exist in database!`
    return text
}

const deleteUserByName = (req, res) => {
    const name = req.params.name
    const responseFromDB = removeUserByName(name)
    res.status(200).send(responseFromDB)
}

export default {
    createUser,
    getUsers,
    getUserNames,
    getUserByName,
    updateUserByName,
    deleteUserByName
}
