# Arrays - Översikt

JavaScript-arrays används för att lagra flera värden i en enda variabel.

## Innehåll

- [Vad är en array?](#vad-r-en-array)
- [Skapa en array](#skapa-en-array)
    - [Syntax](#syntax)
- [Användning av nyckelordet "new"](#anvndning-av-nyckelordet-new)
    - [Note](#note)
- [Access till element i en Array](#access-till-element-i-en-array)
- [Ändra ett element i en array](#ndra-ett-element-i-en-array)
- [Access till alla element i en array](#access-till-alla-element-i-en-array)
- [Access till en hel array](#access-till-en-hel-array)
- [Arrays är objekt](#arrays-r-objekt)
- [Array element kan vara objekt](#array-element-kan-vara-objekt)
- [Array egenskaper och metoder](#array-egenskaper-och-metoder)
    - [length egenskaper](#length-egenskaper)
    - [Access till det första elementet i listan](#access-till-det-frsta-elementet-i-listan)
    - [Access till det sista elementet i listan](#access-till-det-sista-elementet-i-listan)
    - [Loopa igenom en array](#loopa-igenom-en-array)
    - [Lägg till element i en array](#lgg-till-element-i-en-array)
    - [Associerande Arrays](#associerande-arrays)
    - [Skillnaden mellan Arrays och Objekt](#skillnaden-mellan-arrays-och-objekt)
- [När ska jag använda arrays eller objekt.](#nr-ska-jag-anvnda-arrays-eller-objekt)
- [Undvik new Array()](#undvik-new-array)
- [Hur man känner igen en Array](#hur-man-knner-igen-en-array)
    - [Lösning 1](#lsning-1)
    - [Lösning 2](#lsning-2)
    - [Lösning 3](#lsning-3)
- [Övningar](#vningar)
    - [Arrayer](#arrayer)
    - [Metoder](#metoder)

**Exempel**

```javascript
let cars = ["Saab", "Volvo", "BMW"];
```

## Vad är en array?

En array är en speciell variabel som kan innehålla mer än ett värde åt gången.

Om du har en lista med objekt (till exempel en lista med bilnamn) kan lagring av bilar i enstaka variabler se ut så här:

**Exempel**

```javascript
let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";
```

Men vad händer om du vill gå igenom bilarna och hitta en specifik? Och tänk om du inte hade tre bilar utan 300?

Lösningen blir då en array!

En array kan innehålla många värden under ett enda namn, och man kan komma åt värdena genom att hänvisa till ett
indexnummer.

## Skapa en array

Att använda en matris bokstavligt är det enklaste sättet att skapa en JavaScript Array.

#### Syntax

```
let array_name = [item1, item2, ...];      
```

**Exempel**

```javascript
let cars = ["Saab", "Volvo", "BMW"];
```

Utrymmen (whitespaces) och radbrytningar är inte viktiga. En deklaration kan sträcka sig över flera rader:

**Exempel**

```javascript
let cars = [
    "Saab",
    "Volvo",
    "BMW"
];
```

## Användning av nyckelordet "new"

Följande exempel skapar också en matris och tilldelar värden till den:

**Exempel**

```javascript
let cars = new Array("Saab", "Volvo", "BMW");
```

### Note

_De två exemplen ovan gör exakt samma. Det finns inget behov av att använda `newArray()`. För enkelhet, läsbarhet och
exekveringshastighet, använd den första (den array bokstavliga metoden)._

## Access till element i en Array

Du får åtkomst till ett arrayelement genom att hänvisa till **indexnumret**.

Detta statement får tillgång till värdet av det första elementet i `cars`:

**Exempel**

```javascript
let cars = ["Saab", "Volvo", "BMW"];
let name = cars[0];
console.log(name);
```

**Resultat**:

```
Saab
```

**Notera:** arrayer börjar på 0.  
`[0]` är det första elementet.  
`[1]` är det andra elementet.

## Ändra ett element i en array

Detta uttalande ändrar värdet på det första elementet i `cars`:

**Exempel**

```javascript
let cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Polestar";
console.log(cars[0]);
```

**Resultat**:

```
Polestar
```

## Access till alla element i en array

**Exempel**

```javascript
let cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Polestar";
console.log(cars[0]);
```

**Resultat**:

```
Polestar
```

## Access till en hel array

Med JavaScript kan hela arrayen nås genom att hänvisa till arraynamnet:

**Exempel**

```javascript
let cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Polestar";
console.log(cars);
```

**Resultat**:

```
[ 'Polestar', 'Volvo', 'BMW' ]
```

## Arrays är objekt

Arrayer är en speciell typ av objekt. `typeof`-operatören i JavaScript returnerar "objekt" för arrayer.

Men JavaScript-arrays beskrivs bäst som arrays.

Arrays använder siffror för att komma åt dess "element". I detta exempel returnerar `person[0]` John:

**Array**

```javascript
let person = ["John", "Doe", 46];
console.log(person[0]);
```

Objekt använder **namn** för att komma åt dess "medlemmar". I det här exemplet returnerar `person.firstName` John:

**Objekt**

```javascript
let person = { firstName: "John", lastName: "Doe", age: 46 };
console.log(person.firstName);
```

## Array element kan vara objekt

JavaScript-variabler kan vara objekt. Arrayer är speciella sorters föremål.

På grund av detta kan du ha variabler av olika typer i samma array.

Du kan ha:

- objekt i en array.
- funktioner i en matris.
- matriser i en matris:

**Exempel**

```javascript
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;
```

## Array egenskaper och metoder

Den verkliga styrkan med JavaScript-arrayer är de inbyggda array-egenskaperna och metoderna:

**Exempel**

```javascript
let x = cars.length;   // The length property returns the number of elements
let y = cars.sort();   // The sort() method sorts arrays
```

### length egenskaper

Längdegenskapen `.length` för en array returnerar längden på en array (antalet element i arrayen).

**Exempel**

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);
```

**Resultat**:

```
4
```

_**Obs:** Egenskapen `.length` är alltid ett mer än det högsta array-indexet._

### Access till det första elementet i listan

**Exempel**

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits[0]);
```

**Resultat**:

```
Banana
```

### Access till det sista elementet i listan

**Exempel**

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits[fruits.length - 1]);
```

**Resultat**:

```
Mango
```

### Loopa igenom en array

Det säkraste sättet att loopa igenom en array är att använda en `for`-loop:

**Exempel**

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

**Resultat**:

```
Banana
Orange
Apple
Mango
```

Du kan också använda funktionen `Array.forEach()`:

**Exempel**

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.forEach(item => {
    console.log(item);
});
```

**Resultat**:

```
Banana
Orange
Apple
Mango
```

### Lägg till element i en array

Det enklaste sättet att lägga till ett nytt element i en array är att använda metoden `push()`:

**Exempel**

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.push("Lemon");

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

**Resultat**:

```
Banana
Orange
Apple
Mango
Lemon
```

Nytt element kan också läggas till i en array med längdegenskapen:

**Exempel**

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits[fruits.length] = "Lemon";

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

**Resultat**:

```
Banana
Orange
Apple
Mango
Lemon
```

_**Varning:** Att lägga till element med höga index kan skapa odefinierade "hål" i en array:_

**Exempel**

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits[6] = "Lemon";

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

**Resultat**:

```
Banana
Orange
Apple
Mango
undefined
undefined
Lemon
```

### Associerande Arrays

Många programmeringsspråk stöder arrays med namngivna index.

Arrayer med namngivna index kallas associerande arrays (eller hashes, (Associative Arrays)).

JavaScript stöder **inte** arrayer med namngivna index.

I JavaScript använder arrayer alltid numrerade index.

**Exempel**

```javascript
let person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
let x = person.length;
let y = person[0];

console.log(person)
console.log(x)
console.log(y)
```

**Resultat**:

```
[ 'John', 'Doe', 46 ]
3
John
```

_**VARNING !!**  
Om du använder namngivna index kommer JavaScript att definiera arrayen till ett standardobjekt.  
Efter det kommer vissa matrismetoder och egenskaper att ge felaktiga resultat._

**Exempel**

```javascript
let person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
let x = person.length;
let y = person[0];

console.log(person)
console.log(x)
console.log(y)
```

**Resultat**:

```
[ firstName: 'John', lastName: 'Doe', age: 46 ]
0
undefined
```

### Skillnaden mellan Arrays och Objekt

I JavaScript använder **arrays** numrerade index.

I JavaScript använder **objekt** namngivna index.

_Arrays är en speciell typ av objekt med numrerade index._

## När ska jag använda arrays eller objekt.

- JavaScript stöder inte associerande matriser.
- Du bör använda **objekt** när du vill att elementnamnen ska vara **strängar (text)**.
- Du bör använda **matriser** när du vill att elementnamnen ska vara **siffror**.

## Undvik new Array()

Det finns inget behov av att använda JavaScript: s inbyggda arraykonstruktör `new` Array().

**Använd [] istället.**

Dessa två olika uttalanden skapar båda en ny tom matris med poäng:

```javascript
let points = new Array();     // Bad
let points = [];              // Good 
```

Dessa två olika uttalanden skapar båda en ny matris som innehåller 6 nummer:

```javascript
let points = new Array(40, 100, 1, 5, 25, 10); // Bad
let points = [40, 100, 1, 5, 25, 10];          // Good
```

`new` nyckelordet komplicerar bara koden. Det kan också ge några oväntade resultat:

```javascript
let points = new Array(40, 100);  // Creates an array with two elements (40 and 100)
console.log(points)
```

**Resultat**:

```
[ 40, 100 ]
```

Vad händer om jag tar bort ett av elementen?

```javascript
let points = new Array(40);  // Creates an array with two elements (40 and 100)
console.log(points)
```

**Resultat**:

```
[ <40 empty items> ]
```

## Hur man känner igen en Array

En vanlig fråga är: Hur vet jag om en variabel är en array?

Problemet är att JavaScript-operatörstypen `typeof` returnerar "objekt":

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(typeof fruits);
```

**Resultat**:

```
object
```

Typeof-operatören returnerar objekt eftersom en JavaScript-array är ett objekt.

### Lösning 1:

För att lösa detta problem definierar ECMAScript 5 en ny metod Array.isArray():

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(Array.isArray(fruits));
```

**Resultat**:

```
true
```

### Lösning 2:

För att lösa detta problem kan du skapa din egen `isArray()`-funktion:

```javascript
function isArray(x) {
    return x.constructor.toString().indexOf("Array") > -1;
}

let fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(isArray(fruits));
```

**Resultat**:

```
true
```

Funktionen ovan returnerar alltid true om argumentet är en array.

Eller mer exakt: det returnerar sant om objektprototypen innehåller ordet "Array".

### Lösning 3:

Instansen av operatorn `instanceof` returnerar true om ett objekt skapas av en given konstruktör:

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits instanceof Array);
```

**Resultat**:

```
true
```

# Övningar

## Arrayer

1. Skriv av alla exempel och experimentera med dem.

2. Skapa 4 olika arrayer met 3-5 attribut var för:
    - en karaktär
    - ett vapen
    - en sköld
    - skills

3. Gör samma sak som i övning 2 men med nyckelordet `new`

4. Skriv ut alla egenskaper från övning 2 till skärmen

5. Ändra 2 värden i varje array från övning 2

6. Skriv ut varje hel array från övning 2

7. Gör om övning 2 med objekt istället
    - en karaktär
    - ett vapen
    - en sköld
    - skills

8. Skriv ut alla egenskaper från övning 7 till skärmen

9. Ändra 2 värden i varje array från övning 7

10. Skriv ut varje hel array från övning 7

## Metoder

**Från övning 2 och 7 på alla arrayer och objekt**

11. Använd längdmetoden och lagra dem i egna variabler. Skriv sedan ut dem.

12. Plocka första elementet och lagra dem i egna variabler. Skriv sedan ut dem.

13. Plocka ut sista elementet och lagra dem i egna variabler. Skriv sedan ut dem.

14. Plocka ut resterande element och lagra dem i egna variabler. Skriv sedan ut dem.

15. Loopa igenom alla dina listor och skriv ut vad de innehåller.

16. Lägg till element i alla listor, skriv ut listan. Använd båda metoderna.

17. Beskriv skillnaden mellan arrays och objekt.

18. Vad ska du undvika med arrays?

19. Skriv ut de olika funktionerna/testerna du kan göra för att testa om en variabel är en array.
