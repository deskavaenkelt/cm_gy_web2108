import UserModel from "../models/UserModel.js";
import Logger from "../utils/Logger.js"

// CRUD
// Create
const createUser = async (req, res) => {
    Logger.http(req.body)

    const user = new UserModel({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
    })
    Logger.debug(user)

    try {
        const response = await user.save()
        Logger.debug(response)
        res.status(200).send(response)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

// Read
const getAllUsers = async (req, res) => {
    try {
        const response = await UserModel.find({})
        Logger.debug(response)
        res.status(200).send(response)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const getUserById = async (req, res) => {
    const id = req.params.id
    try {
        Logger.http(`req.params.id: ${ id }`)
        const response = await UserModel.findById(id)
        Logger.debug(response)
        res.status(200).send(response)
    } catch (error) {
        res.status(500).send({
            message: `Error occurred while retrieving user with id ${ id }`,
            error: error.message
        })
    }
}

const getUserByName = async (req, res) => {
    const queryName = req.query.name
    try {
        Logger.http(`req.query.name: ${ queryName }`)
        const response = await UserModel.find({ name: queryName })
        Logger.debug(response)
        response.length !== 0
            ? res.status(200).send(response)
            : res.status(404).send(`Couldn't find user with name: "${ queryName }"`)

    } catch (error) {
        res.status(500).send({
            message: `Error occurred while retrieving user with name ${ queryName }`,
            error: error.message
        })
    }
}

// Update
const updateUser = async (req, res) => {
    let queryId
    let body

    try {
        queryId = req.params.id
        body = req.body
        Logger.http(`queryId: ${ queryId }`)
        Logger.http(`body: ${ body }`)

        if (!body) {
            res.status(400).send(`Can't update user with empty values`)
        }

        const response = await UserModel.findByIdAndUpdate(queryId, {
            name: body.name,
            age: body.age,
            gender: body.gender,
        }, { new: true })
        Logger.debug(response)
        response.length !== 0
            ? res.status(200).send(response)
            : res.status(404).send(`Couldn't find user with id: "${ queryId }"`)
    } catch (error) {
        res.status(500).send({
            message: `Error occurred while trying to update user with id ${ queryId }`,
            error: error.message
        })
    }
}

// Delete
const deleteUser = async (req, res) => {
    let queryId
    try {
        queryId = req.params.id
        Logger.http(queryId)
        const response = await UserModel.findByIdAndDelete(queryId)
        Logger.debug(response)
        res.status(200).send({
            message: `Successfully deleted user with name: "${ response.name }" and ID: "${ queryId }"`
        })
    } catch (error) {
        res.status(500).send({
            message: `Error occurred while trying to delete user with id ${ queryId }`,
            error: error.message
        })
    }
}

export default {
    createUser,
    getAllUsers,
    getUserById,
    getUserByName,
    updateUser,
    deleteUser
}
