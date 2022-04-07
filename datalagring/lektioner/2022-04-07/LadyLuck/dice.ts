// class that simulates a dice
class Dice {
    sides: number;
    // constructor
    constructor(sides: number) {
        this.sides = sides;
    }
    // method that returns a random number between 1 and the number of sides
    roll() {
        return Math.floor(Math.random() * this.sides) + 1;
    }
}

class RollDiceAndGetImages {
    // method that returns an array of images
    result: string;
    getImages() {
        let sum = 0;
        let images = [];
        let rolls = [];
        let dice = new Dice(6);
        
/* Here is the explanation for the code above:
1. The for loop is a bit more complicated than the while loop. The for loop is a more advanced loop. It has a counter, a test condition and a command to execute after the test condition has been evaluated.
2. The code inside the loop is indented, so the code inside the loop is indented inside the loop.
3. The let keyword is used to create a new variable inside the loop. The let keyword is used to create a new variable inside the loop.
4. The roll variable is assigned the result of the roll method of the dice object.
5. The sum variable is assigned the sum of the roll variable and the sum variable.
6. The rolls array is assigned the result of pushing the roll variable onto the rolls array.
7. The sort method is used to sort the rolls array. */

        for (let i = 0; i < 6; i++) {
            let roll = dice.roll();
            sum += roll;
            rolls.push(roll);
        }
        rolls.sort(); // Sortera arrayen

/* Here is the explanation for the code above:
1. The for loop starts at the first index of the rolls array (0) and ends at the length of the rolls array (6).
2. The variable i is a placeholder variable that starts at 0 and increments through the array.
3. The variable images is an empty array.
4. The variable images.push is pushing the string of the img tag with an image source of `img/dice${rolls[i]}.png` to the images array.
5. The variable images is being returned at the end of the for loop. */
        for (let i = 0; i < rolls.length; i++) {
            images.push(`<img class="dice" src="img/dice${rolls[i]}.png" />`);
        }

        this.result = `<h1>You rolled ${sum}</h1>` + this.getScores(rolls);
        return images;
    }

    getScores(rolls) {
        // find pairs
        let results = `You had ${this.findPairs(rolls)}<br>`;
        // find three of a kind
        results += `You had ${this.findThreeOfAKind(rolls)}<br>`;
        // find four of a kind
        results += `You had ${this.findFourOfAKind(rolls)}<br>`;
        results += `You had ${this.findFiveOfAKind(rolls)}<br>`;
        results += `You had ${this.findSixOfAKind(rolls)}<br>`;
        return results;
    }

    findPairs(rolls:Array<number>) {
        // find pairs in the array of rolls
        let pairs = [];
        for (let i = 0; i < rolls.length; i++) {
            for (let j = i + 1; j < rolls.length; j++) {
                if (rolls[i] == rolls[j]) {
                    pairs.push(rolls[i]);
                }
            }
        }
        // return a textual description of amount of pairs
        if (pairs.length == 0) return "no pairs";
        else if (pairs.length == 1) return `one pair (${pairs[0]})`;
        else if (pairs.length == 2) return `two pairs (${pairs[0]} and ${pairs[1]})`;
        else if (pairs.length == 3) return `three pairs (${pairs[0]} and ${pairs[1]} and ${pairs[2]})`;
        else if (pairs.length == 4) return `four pairs (${pairs[0]} and ${pairs[1]} and ${pairs[2]} and ${pairs[3]})`;
        else if (pairs.length == 5) return `five pairs (${pairs[0]} and ${pairs[1]} and ${pairs[2]} and ${pairs[3]} and ${pairs[4]})`;
        return "a lot of pairs";
    }

    findThreeOfAKind(rolls) {
        // find three of a kind in the array of rolls
        let threeOfAKind = [];
        for (let i = 0; i < rolls.length; i++) {
            for (let j = i + 1; j < rolls.length; j++) {
                for (let k = j + 1; k < rolls.length; k++) {
                    if (rolls[i] == rolls[j] && rolls[j] == rolls[k]) {
                        threeOfAKind.push(rolls[i]);
                    }
                }
            }
        }
        // return a textual description of amount of three of a kind
        if (threeOfAKind.length == 0) return "no three of a kind";
        else if (threeOfAKind.length == 1) return `one three of a kind (${threeOfAKind[0]})`;
        else if (threeOfAKind.length == 2) return `two three of a kind (${threeOfAKind[0]} and ${threeOfAKind[1]})`;
        else if (threeOfAKind.length == 3) return `three three of a kind (${threeOfAKind[0]} and ${threeOfAKind[1]} and ${threeOfAKind[2]})`;
        else if (threeOfAKind.length == 4) return `four three of a kind (${threeOfAKind[0]} and ${threeOfAKind[1]} and ${threeOfAKind[2]} and ${threeOfAKind[3]})`;
        else if (threeOfAKind.length == 5) return `five three of a kind (${threeOfAKind[0]} and ${threeOfAKind[1]} and ${threeOfAKind[2]} and ${threeOfAKind[3]} and ${threeOfAKind[4]})`;
        return "a lot of three of a kind";
    }

    findFourOfAKind(rolls) {
        // find four of a kind in the array of rolls
        let fourOfAKind = [];
        for (let i = 0; i < rolls.length; i++) {
            for (let j = i + 1; j < rolls.length; j++) {
                for (let k = j + 1; k < rolls.length; k++) {
                    for (let l = k + 1; l < rolls.length; l++) {
                        if (rolls[i] == rolls[j] && rolls[j] == rolls[k] && rolls[k] == rolls[l]) {
                            fourOfAKind.push(rolls[i]);
                        }
                    }
                }
            }
        }
        // return a textual description of amount of four of a kind
        if (fourOfAKind.length == 0) return "no four of a kind";
        else if (fourOfAKind.length == 1) return `one four of a kind (${fourOfAKind[0]})`;
        else if (fourOfAKind.length == 2) return `two four of a kind (${fourOfAKind[0]} and ${fourOfAKind[1]})`;
        else if (fourOfAKind.length == 3) return `three four of a kind (${fourOfAKind[0]} and ${fourOfAKind[1]} and ${fourOfAKind[2]})`;
        else if (fourOfAKind.length == 4) return `four four of a kind (${fourOfAKind[0]} and ${fourOfAKind[1]} and ${fourOfAKind[2]} and ${fourOfAKind[3]})`;
        else if (fourOfAKind.length == 5) return `five four of a kind (${fourOfAKind[0]} and ${fourOfAKind[1]} and ${fourOfAKind[2]} and ${fourOfAKind[3]} and ${fourOfAKind[4]})`;
        return "a lot of four of a kind";
    }

    findFiveOfAKind(rolls) {
        // find five of a kind in the array of rolls
        let fiveOfAKind = [];
        for (let i = 0; i < rolls.length; i++) {
            for (let j = i + 1; j < rolls.length; j++) {
                for (let k = j + 1; k < rolls.length; k++) {
                    for (let l = k + 1; l < rolls.length; l++) {
                        for (let m = l + 1; m < rolls.length; m++) {
                            if (rolls[i] == rolls[j] && rolls[j] == rolls[k] && rolls[k] == rolls[l] && rolls[l] == rolls[m]) {
                                fiveOfAKind.push(rolls[i]);
                            }
                        }
                    }
                }
            }
        }
        // return a textual description of amount of five of a kind
        if (fiveOfAKind.length == 0) return "no five of a kind";
        else if (fiveOfAKind.length == 1) return `one five of a kind (${fiveOfAKind[0]})`;
        else if (fiveOfAKind.length == 2) return `two five of a kind (${fiveOfAKind[0]} and ${fiveOfAKind[1]})`;
        else if (fiveOfAKind.length == 3) return `three five of a kind (${fiveOfAKind[0]} and ${fiveOfAKind[1]} and ${fiveOfAKind[2]})`;
        else if (fiveOfAKind.length == 4) return `four five of a kind (${fiveOfAKind[0]} and ${fiveOfAKind[1]} and ${fiveOfAKind[2]} and ${fiveOfAKind[3]})`;
        else if (fiveOfAKind.length == 5) return `five five of a kind (${fiveOfAKind[0]} and ${fiveOfAKind[1]} and ${fiveOfAKind[2]} and ${fiveOfAKind[3]} and ${fiveOfAKind[4]})`;
        return "a lot of five of a kind";
    }	

    findSixOfAKind(rolls) {
        // find six of a kind in the array of rolls
        let sixOfAKind = [];
        for (let i = 0; i < rolls.length; i++) {
            for (let j = i + 1; j < rolls.length; j++) {
                for (let k = j + 1; k < rolls.length; k++) {
                    for (let l = k + 1; l < rolls.length; l++) {
                        for (let m = l + 1; m < rolls.length; m++) {
                            for (let n = m + 1; n < rolls.length; n++) {
                                if (rolls[i] == rolls[j] && rolls[j] == rolls[k] && rolls[k] == rolls[l] && rolls[l] == rolls[m] && rolls[m] == rolls[n]) {
                                    sixOfAKind.push(rolls[i]);
                                }
                            }
                        }
                    }
                }
            }
        }
        // return a textual description of amount of six of a kind
        if (sixOfAKind.length == 0) return "no six of a kind";
        else if (sixOfAKind.length == 1) return `one six of a kind (${sixOfAKind[0]})`;
        else if (sixOfAKind.length == 2) return `two six of a kind (${sixOfAKind[0]} and ${sixOfAKind[1]})`;
        else if (sixOfAKind.length == 3) return `three six of a kind (${sixOfAKind[0]} and ${sixOfAKind[1]} and ${sixOfAKind[2]})`;
        else if (sixOfAKind.length == 4) return `four six of a kind (${sixOfAKind[0]} and ${sixOfAKind[1]} and ${sixOfAKind[2]} and ${sixOfAKind[3]})`;
        else if (sixOfAKind.length == 5) return `five six of a kind (${sixOfAKind[0]} and ${sixOfAKind[1]} and ${sixOfAKind[2]} and ${sixOfAKind[3]} and ${sixOfAKind[4]})`;

    }

}

function GetDices() {
    let img = new RollDiceAndGetImages();
    let dices = img.getImages();
    document.getElementById("dice").innerHTML = dices.join("");
    document.getElementById("resultText").innerHTML = img.result;
}

