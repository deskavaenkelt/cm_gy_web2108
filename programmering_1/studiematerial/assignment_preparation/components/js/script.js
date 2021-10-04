function alertSomething() {
    // alert("Something");
    console.log("Something more");
}

// Event Listener
window.addEventListener("load", function (){
    document.getElementById("event-listener1")
        .addEventListener("click", function (e) {
            console.log("Event Listener 1 was clicked");
        })

    document.getElementById("event-listener2")
        .addEventListener("click", function (e) {
            console.log("Event Listener 2 was clicked");
        })
});

function nameFieldButton() {
    let nameField = document.getElementById("name-field").value
    console.log(nameField)

    let helloNameField = document.getElementById("hello-name-field")
    // helloNameField.innerText = "Hello " + nameField
    // helloNameField.innerHTML = "<strong>Hello " + nameField + "</strong>"
    helloNameField.innerHTML = `<strong>Hello ${ nameField } </strong>`
}

function addNumbers(x, y) {
    return x + y;
}

function numFieldButton() {
    // Hämta variabler
    let num1 = document.getElementById("num-field1").valueAsNumber;
    let num2 = document.getElementById("num-field2").valueAsNumber;
    // console.log("num1: " + num1)
    // console.log("num2: " + num2)

    // Skriv ut resultatet här
    let sum = document.getElementById("sum-num-field");

    // let result = num1 + num2;
    // sum.innerHTML = result
    sum.innerHTML = addNumbers(num1, num2);

}

let morE = "more"

function somethingMoreToLoadOnPageRender() {
    document.getElementById("more").innerHTML = morE;
}

somethingMoreToLoadOnPageRender()


function dubble(x) {
    return x * 2;
}

function xTwo() {
    let number = document.getElementById("x-two-field").valueAsNumber;
    let xTwoResult = document.getElementById("x-two-result")

    xTwoResult.innerHTML = dubble(number);
}

xTwo()
