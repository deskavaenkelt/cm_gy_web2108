let myCart = []

function cartIsEmpty() {
    return myCart.length === 0
}

function addItemToCart(id) {
    myCart.push({ id: id, quantity: 1 });
}

function updateItemInCartAdd(item) {
    myCart[item.atIndex].quantity += 1;
}

function isIdInCart(id) {
    let isAlbumInCart = false
    let i
    for (i = 0; i < myCart.length; i++) {
        if (myCart[i].id === id) {
            isAlbumInCart = true
            break
        }
    }
    return {
        albumIsInCart: isAlbumInCart,
        atIndex: i,
    }
}

function withAlbumDataFor(id) {
    let album
    data.forEach(element => {
        if (element.id === id) {
            album = new Album(element.id, element.title, element.artist, element.price, element.link, element.alt)
        }
    })
    return album
}

function forInputId(id) {
    let inputId
    for (const item of data) {
        if (item.id === id) {
            inputId = item.title + item.artist
            break
        }
    }
    return inputId
}

function getInput(inputId) {
    return Number(document.getElementById(inputId).value)
}

function updateCart() {
    for (let i = 0; i < myCart.length; i++) {
        myCart[i].quantity = getInput(forInputId(myCart[i].id))
        if (myCart[i].quantity === 0) {
            myCart.splice(i, 1)
        }
    }
    alwaysRunOnChange()
}

function buildArticleForOneAlbum(album, item) {
    const summary = item.quantity * album.price
    const price = album.price
    const inputId = album.title + album.artist

    return `
    <article class='cart-card'>
        <div class='cart-img'>
            <img class='card-image' src='${ album.link }' alt='${ album.alt }'>
        </div>
                
        <h3 class='cart-title'>${ album.title }</h3>
        <div class='cart-quantity'>
            <input class='cart-input' 
                    id='${ inputId }'
                    type='number' 
                    value='${ item.quantity }' 
                    min='0' 
                    max='10' 
                    onchange='updateCart()'><span id='cart-input-text'>${ price } kr/st</span>
        </div>
        <p id='${ album.id }' class='cart-price'>${ summary } kr</p>
    </article>
    <hr>
    `
}

function buildCart() {
    let htmlCart = ''
    myCart.forEach(item => {
        htmlCart += buildArticleForOneAlbum(withAlbumDataFor(item.id), item)
    })
    document.getElementById('cart-items').innerHTML = htmlCart
}

function addAlbumToCart(id) {
    if (cartIsEmpty()) {
        addItemToCart(id)
    } else {
        let item = isIdInCart(id)

        if (item.albumIsInCart) {
            updateItemInCartAdd(item)
        } else {
            addItemToCart(id)
        }
    }

    alwaysRunOnChange()
    console.log(myCart)
}

function updateInnerTextOnId(elementId, text) {
    document.getElementById(elementId).innerText = String(text)
}

function numberOfAlbumsInCart() {
    let total = 0
    for (const item of myCart) {
        total += item.quantity
    }

    total === 1
        ? updateInnerTextOnId('number-of-albums-in-cart', `${ total } Album`)
        : updateInnerTextOnId('number-of-albums-in-cart', `${ total } Albums`)
}

function calculateTotalSum() {
    let total = 0
    for (const item of myCart) {
        let album = withAlbumDataFor(item.id)
        total += item.quantity * album.price
    }
    return total
}

function handleShippingText(total) {
    const freeFreight = 259
    if (total > freeFreight) {
        updateInnerTextOnId('freight-text', `Du har fri frakt!`)
    } else {
        const rest = freeFreight - total
        let text = `Fri frakt över ${ freeFreight }kr (${ rest }kr kvar)`
        updateInnerTextOnId('freight-text', text)
    }
}

function calculateTotalSumOfCartItems() {
    let total = calculateTotalSum()
    updateInnerTextOnId('total-sum-in-cart', total)
    handleShippingText(total)
}

function alwaysRunOnChange() {
    buildCart()
    numberOfAlbumsInCart()
    calculateTotalSumOfCartItems()
}

alwaysRunOnChange()

function buyStuffInCart() {
    alert(`Du köpte album för totalt ${ calculateTotalSum() }kr`)
    const name = prompt("Skriv in ditt namn:")
    alert(`och jag äger nu din själ ${ name } =P`)
    myCart = []
    alwaysRunOnChange()
}
