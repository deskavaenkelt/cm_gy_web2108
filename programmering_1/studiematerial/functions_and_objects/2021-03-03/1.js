function print_something() {
    console.log('Hej klassen, i funktionen');
}

// print_something()

function print_name(name) {
    console.log("Hej " + name)
}

let my_name = "Lars"

print_name(my_name)

print_name("Arasto")

function name(parameters1, parameter2, parameter3) {
    console.log(parameters1 + " " + parameter2 + " " + parameter3)
}


function name2(parameters1, parameter2, parameter3) {
    console.log(parameters1 + " " + parameter2)
}

name("Lars", 38, "Strömberg")
name2("Lars", 38,)

function addition(x, y) {
    console.log(x + y)
}

addition(4, 5)
addition("Lars", 5)

function addition2(x, y) {
    return x + y;
}

let summa = addition2(5, 6)
console.log(summa)

console.log("==========================================")

function convertToCelsius(degreesInFahrenheit) {
    // (5 / 9) * (farenheit - 32)
    return (5 / 9) * (degreesInFahrenheit - 32);
}

let farenheit = 90

let degreesInFahrenheit = convertToCelsius(farenheit)
console.log(degreesInFahrenheit)

console.log(convertToCelsius(80))
console.log(convertToCelsius)

let text = "Temperaturen är " + farenheit + " grader farenheit, det blir " + convertToCelsius(farenheit) + " grader celsius"

console.log(text)
