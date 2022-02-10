let inventory = [
    {
        bookName: 'Bok 1',
        price: 49,
        availability: 10,
        buyAmount: 0
    },
    {
        bookName: 'Bok 2',
        price: 79,
        availability: 10,
        buyAmount: 0
    },
    {
        bookName: 'Bok 3',
        price: 29,
        availability: 10,
        buyAmount: 0
    }
]

function printInventory() {
    console.log('---------- Inventory ------------')
    inventory.forEach(item => {
        console.log(`${ item.bookName }, ${ item.availability } i lager, ${ item.buyAmount } i kundkorgen`)
    })
    console.log('---------------------------------')
}

console.log(inventory)
// printInventory()

// inventory.push({
//     bookName: 'Bok 4',
//     price: 19,
//     availability: 10,
//     buyAmount: 0
// })
// printInventory()

function multiplyBooksWithPrice(index) {
    return inventory[index].buyAmount * inventory[index].price
}

console.log(multiplyBooksWithPrice(0))
// Lägg till 3 böcker av första boken i kundkorgen
inventory[0].buyAmount = 3
// printInventory()
console.log(multiplyBooksWithPrice(0))

// Lägg till en bok av varje i kundkorgen
for (let i = 0; i < inventory.length; i++) {
    inventory[i].buyAmount += 1
}
// printInventory()

inventory.forEach(item => {
    item.buyAmount += 1
})
printInventory()

for (let i = 0; i < inventory.length; i++) {
    console.log(multiplyBooksWithPrice(i))
}

function calculateTotalPrice() {
    let sum = 0
    for (let i = 0; i < inventory.length; i++) {
        sum += multiplyBooksWithPrice(i)
    }
    return sum
}

console.log(calculateTotalPrice())

function displayFreight() {
    const freeFreight = 500
    if (calculateTotalPrice() >= freeFreight) {
        console.log('Du har fri frakt!')
    } else {
        let remaining = freeFreight - calculateTotalPrice()
        console.log(`${remaining}kr kvar till fri frakt!`)
    }
}

displayFreight()
inventory[2].buyAmount += 1
displayFreight()
inventory[2].buyAmount += 1
displayFreight()

// Summering av antal böcker i kundkorg
function summarizeAllBooks() {
    let sum = 0
    inventory.forEach(item => {
        sum += item.buyAmount
    })
    return sum
}

printInventory()
console.log(`Du har ${summarizeAllBooks()} böcker i din kundkorg!`)

console.log('-----------------------------------')

// Slutför köpet och minska antalet böcker i inventory
// inventory[0].availability -= inventory[0].buyAmount
function updateAvailability() {
    inventory.forEach(item => {
        item.availability -= item.buyAmount
        item.buyAmount = 0
    })
    console.log('Paketet har skickats!')
    console.log(`Du har ${summarizeAllBooks()} böcker i din kundkorg!`)
}
updateAvailability()
printInventory()
