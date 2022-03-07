import Axios from 'axios'

const hostUrl = process.env.REACT_APP_SERVER_URL
const port = process.env.REACT_APP_SERVER_PORT
const url = `${hostUrl}:${port}`
// console.log('url', url)

const UsersApi = Axios.create({
	baseURL: url
})

export default UsersApi
