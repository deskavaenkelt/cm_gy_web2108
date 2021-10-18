function alertSomething() {
    alert('Something')
}

function consoleLogSomething() {
    console.log('Something')
}

// Event Listener
document.getElementById('event-listener-1')
    .addEventListener('click', function () {
        console.log('Event listener 1 clicked')
    });

function eventListenerTwo() {
    console.log('Event listener 2 clicked')
}

document.getElementById('event-listener-2')
    .addEventListener('click', eventListenerTwo);

// Hämta data från ett fält
function nameFieldButton() {
    let nameField = document.getElementById('name-field').value
    // console.log('nameFieldButton clicked, "value" of input:', nameField)

    let helloNameField = document.getElementById('hello-name-field')
    // console.log(helloNameField)
    // document.getElementById('hello-name-field').innerText = 'Hej '
    // helloNameField.innerText = `Hej ${nameField}!`
    // helloNameField.innerText = `<strong>Hej ${nameField}!</strong>`
    helloNameField.innerHTML = `<strong>Hej ${nameField}!</strong>`
}

function add(x, y) {
    return x + y
}

function addNumbers() {
    const number1 = Number(document.getElementById('num-field1').value)
    const number2 = Number(document.getElementById('num-field2').value)
    const sum = document.getElementById('sum-num-field')

    sum.innerText = add(number1, number2)
}

const morE = 'more'

function somethingMoreToLoadOnPageRender() {
    document.getElementById('more').innerText = morE.toUpperCase()
}

somethingMoreToLoadOnPageRender()
