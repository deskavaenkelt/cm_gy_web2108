import './App.css';
import { useState } from "react";
// import { alive, getUsers, getUserById, createUser } from "./utils/api/service/ApiService";
import http from './utils/api/UserApi'

function App() {
    const [text, setText] = useState('')

    function alive() {
        http.get('/')
            .then(function ( response ) {
                setText(response.data)
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

    function updateUser(id, name, age, gender) {
        let payload = {
            "id": id,
            "name": name,
            "age": age,
            "gender": gender
        }
        http.put(`/users`, payload)
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

    function deleteUserById(id) {
        http.delete(`/users/${ id }`)
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

    return (
        <div>
            <h1>Axios</h1>
            <p>{ text }</p>
            <button onClick={ alive }>Alive</button>
            <button onClick={ getUsers }>Users</button>
            <button onClick={ () => {getUserById(10)} }>UsersById</button>
            <button onClick={ () => {createUser('Ada', 18, 'Female')} }>UsersById</button>
            <button onClick={ () => {updateUser(14,'Ada', 19, 'Female')} }>UpdateUser</button>
            <button onClick={ () => {deleteUserById(10)} }>DeleteUsersById</button>
        </div>
    );
}

export default App;
