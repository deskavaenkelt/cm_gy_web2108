console.log(1 + 1)
console.log('vanlig console.log: ' + 1 + 1)
console.log('vanlig console.log: ' + '1' + '1')
console.log('vanlig console.log: ', 1 + 1)

let sum = 1 + 1
console.log(sum)
console.log('sum', sum)

sum = 2 + 2
console.log('sum', sum)

let text = 'JavaScript'
console.log('text:', text)
console.log('text=', text)
// console.log('text2=', text2)

const number = 5
console.log('number=', number)

// number = 6
const pi = 3.141592
// console.log(14 + 5)
// console.log(14 + 6)
// console.log(14 + 7)
// console.log(14 + 8)

console.log(pi + 5)
console.log(pi + 6)
console.log(pi + 7)
console.log(pi + 8)
console.log(22/7)

// Variabler
var num1 = 1 // IG=F på inlämning
let num2 = 2
const num3 = 3

// Typer
// string
let name1 = 'Sträng eller String'
let name2 = "Sträng eller String"
const name3 = "Sträng eller String"
console.log(name1)
console.log(name2)
console.log(name3)
console.log(typeof (name1))
console.log(typeof (name2))
console.log(typeof (name3))

// number
let something1 = 1      // number
let something2 = '1'    // string
let number1 = 1         // number
let number2 = -1        //number
console.log('something1', something1, typeof (something1)) // number
console.log('something2', something2, typeof (something2)) // string
console.log('number1', number1, typeof (number1))
console.log('number2', number2, typeof (number2))

// something2 = 1
// console.log(something2)
// console.log(typeof (something2))

// Compare
console.log(something1 == number1)
console.log(1 == 1)
console.log(something1 == something2)                   // Kollar om variablerna är lika
console.log(typeof (something1) == typeof (something2)) // Kollar om typerna är lika, == betyder "löst är lika med"
console.log(something1 === something2)                  // Kollar om variablerna och typerna är lika, === betyder "strikt är lika med"

// boolean
let isTrue = true
let isFalse = false
console.log('isTrue', isTrue, typeof (isTrue))      //boolean
console.log('isFalse', isFalse, typeof (isFalse))   //boolean

// Compare 2
// = Assign variable with value
// == betyder "löst är lika med"
// === betyder "strikt är lika med"
console.log('something1 === number1 =', something1 === number1)
console.log('1 === 1 =', 1 === 1)
console.log('1 === 2 =', 1 === 2)
console.log('1 === "1" =', 1 === "1")
console.log('1 === "2" =', 1 === "2")
console.log('something1 === something2 = ', something1 === something2)                   // Kollar om variablerna är lika
console.log(
    'typeof (something1) === typeof (something2)',
    typeof (something1) === typeof (something2)
)                                                                                       // Kollar om typerna är lika
console.log('something1 === something2', something1 === something2)                     // Kollar om variablerna och typerna är lika






