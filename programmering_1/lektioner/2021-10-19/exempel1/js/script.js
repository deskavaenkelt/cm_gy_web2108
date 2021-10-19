// 1.
function updateIdName() {
    document.getElementById('name').innerText = 'Lars'
}

// 2.
function bestCarOnPageLoad() {
    document.getElementById('car').innerText = 'Polestar'
}

bestCarOnPageLoad()

// 3.
function getInputFromInputString() {
    let input = document.getElementById('inputString').value
    // console.log(input)
    document.getElementById('inputResult').innerText = input
}

function updateInputStringValue() {
    document.getElementById('inputString').value = 'Random'
}

// function getInputFromInputStringV2(value) {
//     let input = document.getElementById('inputString').value
//     console.log(value)
// }
