# Concatenating Strings - Sätta ihop strängar

## Innehåll

- [Exempel 1](#exempel-1exempelex1js)
- [Exempel 2](#exempel-2exempelex2js)
- [Exempel 3](#exempel-3exempelex3js)
- [Exempel 4](#exempel-4exempelex4js)
- [Exempel 5](#exempel-5exempelex5js)
- [Exempel 6](#exempel-6exempelex6js)
- [Övningar](#vningar)

Det kommer in extra tecken framför dollartecken $, det är en begränsning i det format som används här. Källkoden finns i
separata filer som löser det problemet.

## [Exempel 1](exempel/ex1.js)

```javascript
const greetUser = "Hey! Welcome to my website"
const userName = "Arasto"

alert(greetUser + userName)
```

Result: `Hey ! Welcome to my websiteArasto`

## [Exempel 2](exempel/ex2.js)

```javascript
const greetUser = "Hey! Welcome to my website"
const userName = "Arasto"
const message = greetUser + userName

alert(message)
```

Result: `Hey ! Welcome to my websiteArasto`

## [Exempel 3](exempel/ex3.js)

```javascript
const greetUser = "Hey! Welcome to my website"
const userName = "Arasto"
const message2 = `greetUser`

alert(message2)
```

Result: `greetUser`

## [Exempel 4](exempel/ex4.js)

```javascript
const greetUser = "Hey! Welcome to my website"
const userName = "Arasto"
const message2 = `${ greetUser }`

alert(message2)
```

Result: `Hey ! Welcome to my website`

## [Exempel 5](exempel/ex5.js)

```javascript
const greetUser = "Hey! Welcome to my website"
const userName = "Arasto"
const message2 = `${ greetUser } ${ userName }`

alert(message2)
```

Result: `Hey ! Welcome to my website Arasto`

## [Exempel 6](exempel/ex6.js)

```javascript
const greetUser = "Hey! Welcome to my website"
const userName = "Arasto"
const message2 = `${ greetUser } ${ userName }, please enjoy your stay!`

alert(message2)
```

Result: `Hey ! Welcome to my website Arasto, please enjoy your stay!`

# Övningar

1. Skriv av alla exempel och se så att de fungerar på din egna dator
2. Skapa 5-10 egna varianter på koden ovan från exempel 5 och 6, samt experimentera även med andra datatyper.

    - sträng
    - nummer
    - decimaltal
    - boolean
    - undefined
    - null
