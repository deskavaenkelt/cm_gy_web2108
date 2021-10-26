function updateElementIdText(elementId, text) {
    document.getElementById(elementId).innerText = String(text)
}

function updateElementIdHtml(elementId, html) {
    document.getElementById(elementId).innerHTML = html
}

function generateSingleCardV2(car) {
    return `
    <article class='card'>
            <h3>Make: ${ car.make }</h3>
            <p>Model: ${ car.model }</p>
            <p>Engine: ${ car.engine }</p>
            <p>Price:  ${ car.price } kr</p>
            <button id='${ car.make }'>Köp</button>
        </article>
    `
}

function updateContent() {
    let htmlElement = ''

    for (const car of data) {
        htmlElement += generateSingleCardV2(car)
    }

    updateElementIdHtml('card-contents', htmlElement)
}

updateContent()

