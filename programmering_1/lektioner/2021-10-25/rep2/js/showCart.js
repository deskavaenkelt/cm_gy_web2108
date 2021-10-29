// id='cart-content'

function showCartContent(cartItem) {
    return `
    <article class='card-cart'>
            <h3>Make: ${ cartItem.make }</h3>
            <p>Quantity: ${ cartItem.quantity }</p>
        </article>
    `
}

function generateCartItem() {
    let htmlElement = ''

    for (const item of myCart) {
        htmlElement += showCartContent(item)
    }
    updateElementIdHtml('cart-content', htmlElement)
}

function readInput(){
    let inputQty = Number(document.getElementById('inputQty').value)
    let sum = inputQty * data[0].price
    document.getElementById('inputSum').innerText = String(sum)
}





function alwaysRunOnChange() {
    console.log('alwaysRunOnChange')
    generateCartItem()
}
