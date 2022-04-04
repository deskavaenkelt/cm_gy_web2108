import personController from "../controllers/personController.js";

const routes = (app) => {
    const personUrl = '/person'
    const personsUrlById = `${personUrl}/:id`
    const searchpersons = `/searchPerson`

    app.post(personUrl, personController.createPerson)
    app.get(personUrl, personController.getAllPersons)
    app.get(personsUrlById, personController.getPersonById)
    app.get(searchpersons, personController.getPersonById)
    app.put(personsUrlById, personController.updatePersonById)
    app.delete(personsUrlById, personController.deletePersonById)
};

export default {
    routes
}
