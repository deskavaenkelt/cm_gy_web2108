let myCart = []

function itemAlreadyInCart(make) {
    for (const car of myCart) {
        if (car.make === make) {
            return true;
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

function addToCart(make) {
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
    alwaysRunOnChange()
}

function makeButtonListener(make) {
    document.getElementById(make)
        .addEventListener('click', function () {
            addToCart(make)
        });
}

window.addEventListener('load', function () {
    for (const car of data) {
        makeButtonListener(car.make)
    }
})




