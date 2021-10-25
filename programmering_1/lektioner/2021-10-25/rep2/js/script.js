let data = [
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

let myCart = []

function updateElementIdText(elementId, text) {
    document.getElementById(elementId).innerText = String(text)
}

function updateElementIdHtml(elementId, html) {
    document.getElementById(elementId).innerHTML = html
}

// function generateSingleCardV1() {
//     return `
//     <article class='card'>
//             <h3>Make: <span id='make'>NONE</span></h3>
//             <p>Model: <span id='model'>NONE</span></p>
//             <p>Engine: <span id='engine'>NONE</span></p>
//             <p>Price: <span id='price'>NONE</span></p>
//         </article>
//     `
// }

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

// updateElementIdText('make', data[0].make)
// updateElementIdText('model', data[0].model)
// updateElementIdText('engine', data[0].engine)
// updateElementIdText('price', `${ data[0].price } kr`)

function itemAlreadyInCart(make) {
    if (data[0].make === make) {
        return true;
    } else {
        return false
    }

}

function updateQuantity(make) {
    myCart[0].quantity += 1
}

function insertItemToCart(make) {
    myCart.push({
        make: make,
        quantity: 1
    });
}

window.addEventListener('load', function () {
    document.getElementById(data[0].make)
        .addEventListener('click', function () {
            const make = data[0].make

            if (myCart.length === 0) {
                insertItemToCart(make);
            } else {
                if (itemAlreadyInCart(make)) {
                    updateQuantity(make);
                } else {
                    insertItemToCart(make);
                }
            }

            console.log(myCart)
        });

    document.getElementById(data[1].make)
        .addEventListener('click', function () {
            const make = data[1].make

            if (myCart.length === 0) {
                insertItemToCart(make);
            } else {
                if (itemAlreadyInCart(make)) {
                    updateQuantity(make);
                } else {
                    insertItemToCart(make);
                }
            }

            console.log(myCart)
        });

    document.getElementById(data[2].make)
        .addEventListener('click', function () {
            const make = data[2].make

            if (myCart.length === 0) {
                insertItemToCart(make);
            } else {
                if (itemAlreadyInCart(make)) {
                    updateQuantity(make);
                } else {
                    insertItemToCart(make);
                }
            }

            console.log(myCart)
        });
})




