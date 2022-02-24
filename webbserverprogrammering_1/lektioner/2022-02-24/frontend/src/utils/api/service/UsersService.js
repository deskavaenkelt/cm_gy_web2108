import http from '../UsersApi'

const getAllUsers = () => {
    return http.get('/users')
}

const createUser = (newUser) => {
    return http.post('/user', newUser)
}

export default {
    getAllUsers,
    createUser
}
