// if (false || true) {
//     console.log('Condition was true')
// } else {
//     console.log('Condition was false')
// }

// let isTrue = false
// if (isTrue) {
//     console.log('Condition was true')
// } else if (!isTrue) { // = False
//     console.log('Condition was false')
// }

// let number = 0
// if (number === 1) {
//     console.log('number is = one')
// } else if (number === 2) {
//     console.log('number is = two')
// } else if (number === 3) {
//     console.log('number is = three')
// } else {
//     console.log('number is not 1, 2 or 3')
// }

// if (number === 1) {
//     console.log('number is = one')
// }
// if (number === 2) {
//     console.log('number is = one')
// }
// if (number === 3) {
//     console.log('number is = one')
// }

// let greeting = 'fail'
// let hour = 13
//
// if (hour < 10) {
//     greeting = 'God morgon'
// } else if (hour <= 13) {
//     greeting = 'God Lunch'
// } else if (hour < 20) {
//     greeting = 'God dag'
// } else {
//     greeting = 'God kväll'
// }
//
// console.log(greeting)


let myHour = 13   // Global variabel

function getGreeting(hour) {
    let greeting = 'fail'   // Local Variabel
    if (hour < 10) {
        greeting = 'God morgon'
    } else if (hour <= 13) {
        greeting = 'God Lunch'
    } else if (hour < 20) {
        greeting = 'God dag'
    } else {
        greeting = 'God kväll'
    }
    return greeting
}

console.log(getGreeting(14))
console.log(getGreeting(myHour))

myHour = new Date().getHours()
console.log(myHour)
console.log(getGreeting(myHour))
