let cars = ["Volvo", "Polstar", "Volkswagen", "Audi", "BMW"]
let string = 'Något'

console.log(cars)
console.log(cars[1])

for (let index = 0; index < cars.length; index++) {
    console.log(cars[index])
}

let volvo = {
    make: "Volvo",
    model: "V90",
    engine: "B5",
    price: 648759
}

let bmw = {
    make: "BMW",
    model: "740",
    engine: "V8",
    price: 1648759
}

// console.log(volvo)
// console.log(volvo.engine)
// console.log(volvo.price)
// console.log(bmw)
// console.log(bmw.engine)
// console.log(bmw.price)

let newCars = [volvo, bmw]

let newCars2 = [
    {
        make: "Volvo",
        model: "V90",
        engine: "B5",
        price: 648759
    },
    {
        make: "BMW",
        model: "740",
        engine: "V8",
        price: 1648759
    }
]

let newCars3 = [{}, {}, {}, {}, {}, {}, {}, {}, {}, ]

console.log(newCars)
console.log(newCars2)
console.log(newCars[0])
console.log(newCars2[0])
console.log(newCars[0].make)
console.log(newCars2[0].make)
console.log(newCars[1].make)
console.log(newCars2[1].make)

for (let i = 0; i < newCars.length; i++) {
    console.log(newCars[i].model)
}

function carHtmlGenerator(car) {
    return `
<article class='myCarStyling'>
    <h1>${ car.make }</h1>
    <h2>${ car.model }</h2>
    <p>Price: ${ car.price } SEK</p>
    <button id='${ car.make }${ car.model }'>Köp</button>
</article>
`
}

let myCart = `
<article class='myCarStyling'>
    <h1>${ newCars[0].make }</h1>
    <h2>${ newCars[0].model }</h2>
    <p>Price: ${ newCars[0].price }</p>
    <button id='${ newCars[0].make }${ newCars[0].model }'>Köp</button>
</article>
<article class='myCarStyling'>
    <h1>${ newCars[1].make }</h1>
    <h2>${ newCars[1].model }</h2>
    <p>Price: ${ newCars[1].price }</p>
    <button id='${ newCars[1].make }${ newCars[1].model }'>Köp</button>
</article>
`

let myCart2 = carHtmlGenerator(newCars[0])

let myCart3 = []

for (let i = 0; i < newCars.length; i++) {
    myCart3.push(carHtmlGenerator(newCars[i]))
}

// document.getElementById('car-id').innerHTML = myCart3

console.log('---------------')
console.log(newCars[0].engine)
newCars[0].engine = 'D1'
console.log(newCars[0].engine)
newCars[0].engine = 'T5'
console.log(newCars[0].engine)
console.log('---------------')

newCars[0].doors = 5
console.log(newCars[0].doors)
console.log(newCars)

