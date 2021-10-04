let x, y
let text = "";

for (x = 1; x <= 6; x++) {
    for (y = 1; y < x; y++) {
        text = text + ("* ");
    }
    console.log(text);
    text = "";
}
