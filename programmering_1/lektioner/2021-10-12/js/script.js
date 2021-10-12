const maxNum = 10

function verifyGuess(correctNumber, guess) {
    let isGuessCorrect = false
    console.log(`Du gissade på: ${ guess }`)
    if (correctNumber === guess) {
        console.log('Rätt nummer!')
        isGuessCorrect = true
    } else if (correctNumber > guess) {
        console.log('Du gissade för lågt')
    } else if (correctNumber < guess) {
        console.log('Du gissade för högt');
    } else {
        console.log('Du skrev inte in ett nummer!');
    }
    return isGuessCorrect
}

function generateRandomNumber(maxNumber) {
    let correctNumber = Math.floor(Math.random() * maxNumber + 1)
    console.log('correctNumber:', correctNumber)
    return correctNumber
}

let random = generateRandomNumber(maxNum)

function runGameFor() {
    let input
    for (let i = 0; i < 3; i++) {
        input = Number(window.prompt(`Skriv in ett nummer mellan 1 - ${ maxNum }:`))
        let exitGame = verifyGuess(random, input)
        if (exitGame) {
            break
        }
    }
    console.log('GAME OVER')
}

function runGameWhile() {
    let input
    let runGame = true
    let counter = 0
    while (runGame) {
        input = Number(window.prompt(`Skriv in ett nummer mellan 1 - ${ maxNum }:`))

        if (input === -1) {
            break
        }

        let exitGame = verifyGuess(random, input);
        if (exitGame) {
            runGame = !runGame
        }
        counter++
    }
    console.log(`GAME OVER efter ${counter} försök.`)
}

// runGameFor()
runGameWhile()
