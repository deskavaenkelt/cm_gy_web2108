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

function qtyTimesPrice(index) {
    return data[index].qty * data[index].price
}

function readInput(){
    // let inputQty = Number(document.getElementById('inputQty').value)
    data[0].qty = Number(document.getElementById('inputQty').value)

    if (data[0].qty < 1) {
        document.getElementById('showVolkswagen').style.display ='none'
    } else {
        document.getElementById('showVolkswagen').style.display ='block'
    }
    let sum = data[0].qty * data[0].price;
    // let sum = qtyTimesPrice(0)
    document.getElementById('inputSum').innerText = String(sum)
}





function alwaysRunOnChange() {
    console.log('alwaysRunOnChange')
    generateCartItem()
}
