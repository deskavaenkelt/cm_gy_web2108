import Axios from 'axios'

const MyAPI = Axios.create({
    baseURL: 'http://localhost:3001'
})

export default MyAPI
