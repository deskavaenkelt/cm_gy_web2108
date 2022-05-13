import http from '../UserApi'

function alive() {
    http.get('/')
        .then(function ( response ) {
            return response.data
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            return 'Error'
        })
        .then(function () {
            // always executed
        });
}

function getUsers() {
    http.get('/users')
        .then(function (response) {
            // console.log(response.data)
            return response.data
            // setText(response.data)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}

function getUserById(id) {
    http.get(`/users/${ id }`)
        .then(function (response) {
            console.log(response.data)
            // setText(response.data)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}

function createUser(name, age, gender) {
    let payload = {
        "name": name,
        "age": age,
        "gender": gender
    }
    http.post(`/users`, payload)
        .then(function (response) {
            console.log(response.data)
            // setText(response.data)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}




export {
    alive,
    getUsers,
    getUserById,
    createUser
}
