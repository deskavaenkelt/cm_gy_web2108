import Axios from 'axios'

const serverUrl = process.env.REACT_APP_SERVER_URL || 'http://localhost'
const serverPort = process.env.REACT_APP_SERVER_PORT || '3001'

const url = `${ serverUrl }:${ serverPort }`

const MyApi = Axios.create({
    baseURL: url
})

export default MyApi
