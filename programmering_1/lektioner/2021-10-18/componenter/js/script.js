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
    console.log('nameFieldButton clicked, content off input:', nameField)
}
