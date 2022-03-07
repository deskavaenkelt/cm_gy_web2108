import Axios from 'axios'

const UsersApi = Axios.create({
    baseURL: 'http://localhost:3001'
})

export default UsersApi
