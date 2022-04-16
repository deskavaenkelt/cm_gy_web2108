
let siffra: number = 5
siffra = 6
// number='hello' <--- error

function sum(a, b) {
    return a + b;
}

function sub(a: number, b: number) {
    return a - b;
}

// var konsekvent med typer annars kan du lura dig själv
// genom att skicka in fel parametrar 
// Citerar mr Miyagi: https://www.youtube.com/watch?v=FHg2eJHlyo4
// "Walk on road, hmm? 
// Walk left side, safe. Walk right side, safe. Walk middle; 
// sooner or later… get squish just like grape."
// Med andra ord, antingen kör du med TypeScript eller inte
// blanda inte stilarna!
function cheat(a, b) {
    return sub(a, b); // Lurar sub att tro att en string är ett number, vilket orsakar krasch
                      // kompilatorn märker inte tabben!
}

// Sum tar emot :any och då fungerar både strängar och siffror  
console.log(sum(1, 3)) // 4
console.log(sum('hello', 'world')); // helloworld

// sub tar emot :number och då fungerar bara siffror
console.log(sub(1, 3)) // -2
// console.log(sub('hello','world')); // NaN
let a = 'hello';
let b = 5;

// gör inte så! Cheat tar emot :any och då fungerar både strängar och siffror
// men sen anropar den sub som bara tar emot siffror, så sub tror att det :any
// som skickats in är en siffra och sen kraschar scriptet
console.log(cheat(a, b)); // NaN



