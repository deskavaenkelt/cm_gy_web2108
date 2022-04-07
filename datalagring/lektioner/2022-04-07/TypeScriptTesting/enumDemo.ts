// current month
let currentMonth = new Date().getMonth();
let currentDay= new Date().getDay();

console.log(currentMonth);

// 0 = january
// 3 = april

const january = 0;
const februray = 1;
const march = 2;
const april = 3;
const may = 4;
const june = 5;
const july = 6;
const august = 7;
const september = 8;
const october = 9;
const november = 10;
const december = 11;

// Magic numbers (Fy skäms! Gör inte så!)
if (currentMonth==3) {
    console.log("It's april");
}

// using const
if (currentMonth==january) {
    console.log("It's january");
}

// Konstanta värden som kan användas överallt för att koden ska bli mer läsbar.
enum months {
    January = 0, february, march, april, may, june, july, august, september, october, november, december
}    

enum days {
    Sunday = 0, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
}

enum paperSizeHeight {
    A4 = 297, A3=420, A2=594, A1=841
}

if (currentMonth=== months.december) {
    console.log("It's december");
}

if (currentMonth=== months.december && currentDay===24) {
    console.log("Merry Xmas!");
}

if (currentMonth=== months.march) {
    console.log("It's march");
}

