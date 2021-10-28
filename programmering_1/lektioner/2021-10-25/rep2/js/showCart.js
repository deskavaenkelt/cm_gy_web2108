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






function alwaysRunOnChange() {
    console.log('alwaysRunOnChange')
    generateCartItem()
}
