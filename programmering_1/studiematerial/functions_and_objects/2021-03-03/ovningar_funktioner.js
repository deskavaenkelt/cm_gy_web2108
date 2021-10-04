// Skriv några olika funktioner som:
//
// 1 skriver ut något till konsolen
// 2 ändra funktionen så den tar emot en variabel som också skrivs ut
// 3 Använd flera variabler, samma upplägg
// 4 returnera värden från funktionerna
// 5 lagra returnerade värden
// 6 skriv ut returnerade värden
// 7 Använd globala variabler
//
// Tips:
//
//     Använd en karaktär med klass, namn, vapen, hp. Skriv funktioner som:
//
//     - Byter vapen på karaktären
//     - Ökar och minskar hp

// Prova gärna med Array värden

let badGuy = ["Warrior", "Sword", 100]

// 1 & 2
function funktion1(character) {
    console.log("Klass: " + character[0])
}

funktion1(badGuy)

// 3 Använd flera variabler, samma upplägg
function funktion2(characterClass, characterWeapon, characterHp) {
    console.log(characterClass + ", " + characterWeapon + ", " + characterHp)
}

funktion2(badGuy[0], badGuy[1], badGuy[2])

// 4 returnera värden från funktionerna
function funktion3(character) {
    return character[0]
}

console.log(funktion3(badGuy))

// 5 lagra returnerade värden, 6 skriv ut returnerade värden
console.log("Uppgift 5")
function funktion4(character) {
    return character[0]
}

let badGuyClass = funktion4(badGuy)
console.log(badGuyClass)

// 7 Använd globala variabler
console.log("Uppgift 7")

let text = "Character class is: "

function funktion5(character) {
    return text + character[0]
}

console.log(funktion5(badGuy))

