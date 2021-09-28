// scoop = {} = Avgränsning
let personObject = {
    firstName: 'John',
    lastName: 'Smith',
    age: 50,
    isMale: true
}

console.log(personObject)
console.log(typeof (personObject))
console.log(personObject.firstName)
console.log('----------------------------')

let p1 = {
    firstName: 'Adam',
    age: 20
}
let p2 = {
    firstName: 'Bengtina',
    age: 22
}
console.log(p1)
console.log(p2)
console.log(p1.firstName)
console.log(p2.firstName)

let persons = [
    {
        firstName: 'Adam',
        age: 20
    },
    {
        firstName: 'Bengtina',
        age: 22
    }
]
console.log('persons:', persons)
console.log(persons[0])
console.log(persons[0].firstName)

for (let i = 0; i < persons.length; i++) {
    console.log('i=', i, persons[i])
}
