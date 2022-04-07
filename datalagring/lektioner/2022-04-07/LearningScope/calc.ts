/*
Deklarera variabler
Kontrollera eller sätt variablernas värde
Använd variablerna
Presentera / returnera resultat

{ // Scope start


} // Scope end
*/ 

function squareArea(a:number) {
    if (a<=0) return 0;
    let area = a*a;
    return area;
}

function divide(a:number, b:number) {
    if(b===0) return 0;
    return a / b;
}

console.log(squareArea(25));
// console.log(divide(10, 2));
// console.log(divide(10, 0)); // Infinity (not a number) ~ 

// console.log(squareArea(10));
// console.log(squareArea(0)); // NaN
// console.log(squareArea(-10));
