let myCart = []

function itemAlreadyInCart(make) {
    for (const item of myCart) {
        if (item.make === make) {
            return true
        }
    }
    return false
}

function updateQuantity(make) {
    for (const item of myCart) {
        if (item.make === make) {
            item.quantity += 1
        }
    }
}

function insertItemToCart(make) {
    myCart.push({
        make: make,
        quantity: 1
    });
}
function cartIsEmpty() {
    return myCart.length === 0
}

function addItemToCart(make) {
    if (cartIsEmpty()) {
        insertItemToCart(make);
    } else {
        if (itemAlreadyInCart(make)) {
            updateQuantity(make);
        } else {
            insertItemToCart(make);
        }
    }
    console.log(myCart)
}

function addButtonEventListeners(elementId) {
    document.getElementById(elementId)
        .addEventListener('click', function () {
            addItemToCart(elementId)
        });
}

window.addEventListener('load', function () {
    for (const carMake of data) {
        addButtonEventListeners(carMake.make)
    }
})




