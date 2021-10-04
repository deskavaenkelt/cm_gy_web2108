let x, y
let text = "";

for (x = 6; x >= 2; x--) {
    for (y = 1; y < x; y++) {
        text = text + ("* ");
    }
    console.log(text);
    text = "";
}

for (x = 2; x <= 6; x++) {
    for (y = 1; y < x; y++) {
        text = text + ("* ");
    }
    console.log(text);
    text = "";
}
