import { loggers } from "winston";
import personModel from "../models/person.js";
import Logger from "../utils/Logger.js";

const createPerson = async (req, res) => {
    Logger.http("POST /person");
    Logger.http("req.body: " + JSON.stringify(req.body));
    const { name, born, birthPlace, mother, father } = req.body;
    const person = new personModel({
        name,
        born,
        birthPlace,
        mother,
        father
    });

    try {
        await person.save();
        Logger.info("Person created successfully");
        res.status(201).send(person);
    } catch (error) {
        Logger.error("Error creating person", error);
        res.status(500).send(error);
    }
}

const getAllPersons = async (req, res) => {
    Logger.http("GET /person");
    Logger.http("req.body: " + JSON.stringify(req.body));
    try {
        const persons = await personModel.find();
        Logger.info("Persons found successfully");
        res.status(200).send(persons);
    } catch (error) {
        Logger.error("Error getting persons", error);
        res.status(500).send(error);
    }
}

const getPersonById = async (req, res) => {
    Logger.http("GET /person/:id");
    Logger.http("req.body: " + JSON.stringify(req.body));

    const { id } = req.params;
    try {
        const person = await personModel.findById(id);
        Logger.info("Person found successfully");
        res.status(200).send(person);
    } catch (error) {
        Logger.error("Error getting person", error);
        res.status(500).send(error);
    }
}

const getPersonByName = async (req, res) => {
    Logger.http("GET /person/name/:name");
    Logger.http("req.body: " + JSON.stringify(req.body));

    const { name } = req.params;
    try {
        const person = await personModel.findOne({ name });
        Logger.info("Person found successfully");
        res.status(200).send(person);
    } catch (error) {
        Logger.error("Error getting person", error);
        res.status(500).send(error);
    }
}

const updatePersonById = async (req, res) => {
    Logger.http("PUT /person/:id");
    Logger.http("req.body: " + JSON.stringify(req.body));
    Logger.info("Id: " + JSON.stringify(req.params));

    const { id } = req.params;
    const { name, born, birthPlace, mother, father } = req.body;
    try {
        const person = await personModel.findByIdAndUpdate(id, {
            name,
            born,
            birthPlace,
            mother,
            father,
            isUpdated: true
        });
        Logger.info("Person updated successfully");

        const newPerson = {
            name,
            born,
            birthPlace,
            mother,
            father,
            _id: id
        }
        res.status(200).send(newPerson);
    } catch (error) {
        Logger.error("Error updating person", error);
        res.status(500).send(error);
    }
}

const deletePersonById = async (req, res) => {
    Logger.http("DELETE /person/:id");
    Logger.http("req.body: " + JSON.stringify(req.body));
    Logger.info("Id: " + JSON.stringify(req.params));

    const { id } = req.params;
    try {
        await personModel.findByIdAndDelete(id);
        Logger.info("Person deleted successfully");
        res.status(200).send();
    } catch (error) {
        Logger.error("Error deleting person", error);
        res.status(500).send(error);
    }
}

export default {
    createPerson,
    getAllPersons,
    getPersonById,
    getPersonByName,
    updatePersonById,
    deletePersonById
}
