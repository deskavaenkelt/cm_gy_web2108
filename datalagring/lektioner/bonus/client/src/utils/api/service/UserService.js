import http from '../MyApi'

const UserService = {
    createUser: (user) => {
        return http.post('/user', user)
    },

    getAll: () => {
        return http.get('/user/all')
    },

    getByName: (name) => {
        return http.get(`/user/name/${name}`)
    },

    getById: (id) => {
        return http.get(`/user/${id}`)
    },

    updateUserById: (id, user) => {
        return http.put(`/user/${id}`, user)
    },

    deleteUserById: (id) => {
        return http.delete(`/user/${id}`)
    }
}

export default UserService
