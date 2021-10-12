console.log('tree')
console.log()

function drawRoot(size) {
    let txt = ''
    for (let j = 0; j < size; j++) {
        txt += ' '
    }
    txt += '|'
    console.log(txt)

}

function drawTreeOdd(h) {
    for (let i = 0; i <= h; i++) {
        let star = '';
        //Changed to start high then decrease
        for (let k = 1; k <= h - i; k++) {
            //shortened to one space
            star += " ";
        }

        for (let j = 0; j <= i; j++) {
            //Added space so there is an odd number
            //of symbols and the star above fits
            //the space
            star += " *";
        }
        //Moved into the loop
        console.log(star);
    }
}

drawTreeOdd(5)
drawRoot(6)

function drawTree(h) {
    for (let i = 0; i < h; i++) {
        let star = '';
        let space = (h - i);
        if (i === 0) {
            star += ' '.repeat(space + 1) + '\n';
        }
        star += ' '.repeat(space + 1);
        let zero = 2 * i + 1;
        star += '*'.repeat(zero);
        console.log(star);
    }
}
let sizez = 15
drawTree(sizez);
drawRoot(sizez + 1)
