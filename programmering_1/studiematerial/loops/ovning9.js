let a = 1024; // First number
let b = 128;  // Second number
let sgn;
while (a !== b) {
    if (a > b) {
        a = a - b;
    } else {
        b = b - a;
    }
}
sgn = a;
console.log(sgn);
