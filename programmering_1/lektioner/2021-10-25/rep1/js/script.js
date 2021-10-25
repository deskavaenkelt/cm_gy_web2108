// Array
let cars = ['Volvo', 'Polstar', 'Volkswagen', 'Audi', 'BMW']

console.log(cars)
console.log(cars[1])

console.log('-----------------------------')
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}

console.log('-----------------------------')
for (const item of cars) {
    console.log(item)
}

console.log('-----------------------------')

// Object
let volvo = {
    make: 'Volvo',
    model: 'V90',
    engine: 'B5',
    price: 648759,
    img: 'url'
}

console.log(volvo)
console.log(volvo.model)

let bmw = {
    make: 'BMW',
    model: '740',
    engine: 'V8',
    price: 1648759
}

console.log(bmw)
console.log(bmw.model)
bmw.img = 'url'
console.log(bmw)

class Car {
    constructor(make, model, engine, price, img) {
        this.make = make
        this.model = model
        this.engine = engine
        this.price = price
        this.img = img
    }
}

let audi = new Car('Audi', 'Q5', 'V8', 2349753)
console.log(audi)
console.log(audi.model)

console.log('-----------------------------')

let carsWithObjects = [volvo, bmw, audi]
console.log(carsWithObjects)
console.log(carsWithObjects[0].model)

function findSomething(index) {
    return index * 3
}

for (let i = 0; i < carsWithObjects.length; i++) {
    console.log(carsWithObjects[i].model)
    console.log(findSomething(i))
}

for (const car of carsWithObjects) {
    console.log(car.model)
}

console.log('-----------------------------')

let newCars = [
    {
        make: 'Volkswagen',
        model: 'Passat',
        engine: 'TDI',
        price: 448759
    },
    {
        make: 'Fiat',
        model: '500',
        engine: '1.2l',
        price: 363259
    },
    {
        make: 'Tesla',
        model: 'Roadster',
        engine: 'Electric',
        price: 2986236
    }
]

for (let i = 0; i < carsWithObjects.length; i++) {
    const item = carsWithObjects[i]
    console.log(item.model)
    console.log(findSomething(i))
}

console.log(newCars)
for (const item of newCars) {
    console.log(item.model)
}
