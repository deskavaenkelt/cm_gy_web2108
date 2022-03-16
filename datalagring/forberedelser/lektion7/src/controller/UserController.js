import UserModel from "../models/UserModel.js";
import Logger from "../utils/Logger.js";

const createUser = async (req, res) => {
    Logger.http(req.body)

    const user = new UserModel({
        username: req.body.username,
        password: req.body.password,
    })
    Logger.debug(user)

    try {
        const response = await user.save()
        Logger.debug(response)
        res.status(201).send(response)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

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
    try {
        Logger.http(`req.params.userId: ${ req.params.userId }`)
        const response = await UserModel.findById(req.params.userId)
        Logger.debug(response)
        res.status(200).send(response)
    } catch (error) {
        res.status(500).send({
            message: `Error occurred while trying to retrieve user with ID ${ req.params.userId }`,
            error: error.message
        })
    }
}

const getUserByUsername = async (req, res) => {
    try {
        Logger.http(`req.query.username: ${ req.query.username }`)
        const response = await UserModel.find({ username: req.query.username })
        Logger.debug(response)
        response.length !== 0
            ? res.status(200).send(response)
            : res.status(404).send({ message: `Couldn't find user with username '${ req.query.username }'` })
    } catch (error) {
        res.status(500).send({
            message: `Error occurred while trying to retrieve user with username ${ req.query.username }`,
            error: error.message
        })
    }
}

const updateUserById = async (req, res) => {
    try {
        Logger.http(`req.params.userId: ${ req.params.userId }`)
        Logger.http(`req.body: ${ req.body }`)

        if (!req.body) {
            res.status(400).send({ message: `Can't update with empty values!` })
        }

        const response = await UserModel.findByIdAndUpdate(req.params.userId, {
            username: req.body.username,
            password: req.body.password,
        }, { new: true });
        Logger.debug(response)

        response.length !== 0
            ? res.status(200).send(response)
            : res.status(404).send({ message: `Couldn't find user with ID '${ req.params.userId }'` })
    } catch (error) {
        res.status(500).send({
            message: `Error occurred while trying to update user with ID: ${ req.params.userId }`,
            error: error.message
        })
    }
}

const deleteUserById = async (req, res) => {
    try {
        Logger.http(req.params.userId)
        const response = await UserModel.findByIdAndDelete(req.params.userId)
        Logger.debug(response)
        res.status(200).send({
            message: `Successfully deleted user with username: '${ response.username }' and ID: ${req.params.userId }`
        })
    } catch (error) {
        res.status(500).send({
            message: `Error occurred while trying to delete user with ID: ${ req.params.userId }`,
            error: error.message
        })
    }
}

export default {
    createUser,
    getAllUsers,
    getUserById,
    getUserByUsername,
    updateUserById,
    deleteUserById
}
