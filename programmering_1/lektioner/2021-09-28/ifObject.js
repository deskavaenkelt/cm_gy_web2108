let users = [
    {
        name: 'John',
        age: 36,
    },
    {
        name: 'Aram',
        age: 19,
    },
    {
        name: 'Christoffer',
        age: 26,
    }
]

// if (users[1].name.toLowerCase() === 'aRaM'.toLowerCase()) {
//     console.log('Success')
// } else {
//     console.log('Fail')
// }

for (let i = 0; i < users.length; i++) {
    if (users[i].name.toLowerCase() === 'aRaM'.toLowerCase()) {
        console.log('Success at index =', i)
        break
    } else {
        console.log('Fail =', i)
    }
}

console.log('Done')


for (let i = 1; i < 11; i++) {
    console.log('Hacking NASA progress: ' + i * 10 + '%')
}
console.log('Success')
