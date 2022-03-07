import http from '../UsersApi'

const getAllUsers = () => {
    return http.get('/users')
}

const createUser = (newUser) => {
    return http.post('/user', newUser)
}

const updateUser = (changedUser) => {
    return http.put('/user', changedUser)
}

const deleteUser = (name) => {
    return http.delete(`/user/${ name }`)
}

export default {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
}
