console.log("person")

let person = {
    firstname: "John",
    lastname: "Doe",
    age: 30,
    eyeColor: "blue",
    fullName: function (){
        return this.firstname + " " + this.lastname;
    }
}

console.log(person)
console.log(person.firstname + " " + person.lastname)
console.log(person.fullName())
console.log(person.fullName)

// Undvik detta
let x = new String();
let y = new Number();
let z = new Boolean();
// Undvik detta

// This

let car = {
    type: "Polestar",
    model: 2,
    motor: "electric",
    color: "red",
    fullCarStats: function (){
        return this.type + ", " + this.model + ", " + this.motor + ", " + this.color
    }
}

console.log(car.fullCarStats())

// Explicit funktions bindning

// .call och .apply

let person2 = {
    fullName: function (){
        return this.firstname + " " + this.lastname
    }
}

let person3 = {
    firstname: "John",
    lastname: "Doe"
}

let text = person2.fullName.call(person3)
console.log(text)


// Arrow functions
function sum(x, y){
    return x + y
}

console.log(sum(1, 2))

const add = (x, y) => {
    return x + y
}

console.log(add(2,3))

