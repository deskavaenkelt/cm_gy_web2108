console.log('Loops')

function hr() {
    let text = ''
    for (let i = 0; i < 40; i++) {
        text += '-'
    }
    console.log(text)
}

// For-loop

for (let i = 0; i < 10; i++) {
    console.log('i=', i)
}
hr()
for (let i = 0; i <= 10; i++) {
    console.log('i=', i)
}
hr()

let array = [11, 25, 68, 14, 78];
console.log('array.length=', array.length)

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}
hr()

// for in

for (number in array) {
    console.log(array[number])
}
hr()

// while loop
let j = 0
while (j < 10) {
    console.log('j=', j)
    j++
}
hr()

let isTrue = true
let round = 0
while (isTrue) {
    console.log('round:', round)

    if (round === 10) {
        isTrue = false;
    }
    round++
}
hr()

// do while
j = 20
do {
    console.log('do-while')
    console.log('j=', j)
}
while (j < 10)

while (j < 10) {
    console.log('while')
    console.log('j=', j)
    j++
}

