import http from '../UsersApi'

const alive = () => {
    return http.get('/')
}

export default {
    alive
}
