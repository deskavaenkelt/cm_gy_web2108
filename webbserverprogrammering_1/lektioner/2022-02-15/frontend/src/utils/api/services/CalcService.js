import http from '../MyAPI'

const add = (num1, num2) => {
    return http.post(`/calc/add/${num1}/${num2}`)
}

export default {
    add
}
