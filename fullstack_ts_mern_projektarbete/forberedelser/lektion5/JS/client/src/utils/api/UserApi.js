import Axios from 'axios'

const hostUrl = 'http://localhost'
const port = 3001
const url = hostUrl + ':' + port

const UserApi = Axios.create({
    baseURL: url
})

export default UserApi
