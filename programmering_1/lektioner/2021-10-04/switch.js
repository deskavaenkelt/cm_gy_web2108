console.log('Switch')

// Syntax
// if, else if, else
// if (true) {
//     // Code block
// } else if (true) {
//     // Code block
// } else {
//     // Code block
// }

// Switch
// switch (expression) {
//     case x:
//         // Code block
//         break
//     case y:
//         // Code block
//         break
//     default:
//         // Code block
// }

let todaysDay = new Date().getDay()
console.log(todaysDay)
// let day = 'fail, not supposed to happen'    // Global variabel
let day    // Global variabel

switch (todaysDay) {
    case 0:
        day = 'Söndag'
        break
    case 1:
        day = 'Måndag'
        break
    case 2:
        day = 'Tisdag'
        break
    case 3:
        day = 'Onsdag'
        break
    case 4:
        day = 'Torsdag'
        break
    case 5:
        day = 'Fredag'
        break
    case 6:
        day = 'Lördag'
        break
    default:
        day = 'fail, not supposed to happen'
}

console.log('day:', day)
