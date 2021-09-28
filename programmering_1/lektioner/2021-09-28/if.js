if (true) {
    console.log('true')
}

if (false) {
    console.log('false')
}

if (!true) {
    console.log('!true')
}

if (!false) {
    console.log('!false')
}

// let isTrue = true;
let isTrue = false;
if (isTrue) {
    console.log('isTrue')
}
if (!isTrue) {
    console.log('isNotTrue')
}
console.log('----------------------------------')
console.log('|| OR')
if (true || false) {
    console.log('true || false')
}
if (false || true) {
    console.log('false || true')
}
if (true || true) {
    console.log('true || true')
}
if (false || false) {
    console.log('false || false')
}

console.log('----------------------------------')
console.log('&& AND')
if (true && false) {
    console.log('true && false')
}
if (false && true) {
    console.log('false && true')
}
if (true && true) {
    console.log('true && true')
}
if (false && false) {
    console.log('false && false')
}

let name = 'Lars'
if (name === 'Aram' || name === 'Christoffer') {
    console.log('Success')
}
