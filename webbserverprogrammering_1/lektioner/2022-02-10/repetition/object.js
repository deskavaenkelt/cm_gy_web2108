let name = 'Lars'

let person = {
    name: 'Jane',
    city: 'San Francisco',
    children: ['child 1', 'child 2'],
    livesIn: function () {
        return this.name + ' lives in ' + this.city
    }
}

console.log(person)
console.log(person.name)
console.log(person.children)
console.log(person.children.slice(0, 1))
console.log(person.children.slice(1, 2))
console.log(person.children[0])
console.log(person.children[1])

console.log(`${ person.name } lives in ${ person.city }`)
console.log(person.livesIn())

console.log('---------------------')

let persons = [
    {
        name: 'Lars',
        city: 'Göteborg'
    },
    {
        name: 'Aram',
        city: 'Stenungsund'
    },
]

console.log(persons)
persons.push({
    name: 'Kimmie',
    city: 'Mölndal'
})
console.log(persons)

console.log(persons[2].name)
console.log(persons[2])
console.log(persons[1].city)
