let sum = 0;

// loop and increase the sum with the counter value
for (let counter = 0; counter < 10; counter++) {
    increaseSum(counter);
}
console.log(sum);

for (let counter = 0; counter < 25; counter+=4) {
    showEven(counter);
}

// Increase the sum
function increaseSum(counter) {
    let add = sum + counter;
    console.log(`${sum} + ${counter} = ${add}`);
    sum = add;
    if (counter % 2 === 0) showEven(counter)
}

// Show even numbers
function showEven(counter)
{
    let even = `${counter} is even`;
    console.log(even);
}

