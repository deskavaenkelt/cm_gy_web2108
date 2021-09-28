// Globala variabler
let number1 = 2
let number2 = number1 * 2  // 4

let summary = number1 + number2
console.log('summary=', summary)

function mySummary() {
    let summary2 = number1 + number2
    console.log('MySummary=', summary2)
}

mySummary()

function mySummary2() {
    let summary2 = number1 + number2
    return summary2
}

console.log('mySummary2=', mySummary2())

function mySummary3() {
    return number1 + number2
}

console.log('mySummary3=', mySummary3())

function addition() {
    return number1 + number2
}

let sum = addition()
console.log('sum=', sum)
console.log('addition()=', addition())

function additionMedIngaendeTal(tal1, tal2) {
    return tal1 + tal2
}

console.log('additionMedIngaendeTal', additionMedIngaendeTal(number1, number2))
console.log('additionMedIngaendeTal', additionMedIngaendeTal(3, 4))

console.log('-------------------------------------------')

function addition() {
    return number1 + number2
}
console.log('addition()=', addition())

function subtraction() {
    return number1 - number2
}
console.log('subtraction()=', subtraction())

function division() {
    return number1 / number2
}
console.log('division()=', division())

function multiplication() {
    return number1 * number2
}
console.log('multiplication()=', multiplication())
console.log('-------------------------------------------')

function addTwoNumbers(tal1, tal2) {
    return tal1 + tal2
}
function subtractTwoNumbers(tal1, tal2) {
    return tal1 - tal2
}
function divideTwoNumbers(tal1, tal2) {
    return tal1 / tal2
}
function multiplyTwoNumbers(tal1, tal2) {
    return tal1 * tal2
}
console.log('addTwoNumbers()=', addTwoNumbers(2,4))
console.log('addTwoNumbers()=', addTwoNumbers(4,6))
console.log('addTwoNumbers()=', addTwoNumbers(8,12))
console.log('subtractTwoNumbers()=', subtractTwoNumbers(number1,number2))
console.log('divideTwoNumbers()=', divideTwoNumbers(number1,number2))
console.log('multiplyTwoNumbers()=', multiplyTwoNumbers(number1,number2))
