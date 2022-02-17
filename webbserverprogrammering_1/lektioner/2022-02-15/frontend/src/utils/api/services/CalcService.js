import http from '../MyAPI'

const add = (num1, num2) => {
    return http.post(`/calc/add/${num1}/${num2}`)
}

const sub = (num1, num2) => {
    return http.post(`/calc/sub/${num1}/${num2}`)
}

const multi = (num1, num2) => {
    return http.post(`/calc/multi/${num1}/${num2}`)
}

const div = (num1, num2) => {
    return http.post(`/calc/div/${num1}/${num2}`)
}

export default {
    add,
    sub,
    multi,
    div
}
