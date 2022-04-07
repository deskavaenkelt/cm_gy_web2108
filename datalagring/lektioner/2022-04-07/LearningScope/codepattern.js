for (let count = 0; count < 10; count++) {
    console.log(count);
}

console.log("---------------------------------------------------------------------------");
let leet=1337;
let value=1300;

while (value<leet)
{
    value++;
    console.log(value);
}

console.log("---------------------------------------------------------------------------");

let age=25;
let bmonth=8;
let bday=10;
let today = new Date().getDate();
let thisMonth = new Date().getMonth();
if (bmonth>=thisMonth && bday>=today)
{
    age++;
}
console.log(age);