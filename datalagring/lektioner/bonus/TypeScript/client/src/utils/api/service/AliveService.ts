import http from '../MyApi'

const apiConnectionStatus = () => {
    return http.get('/')
}

export default {
    apiConnectionStatus
}
