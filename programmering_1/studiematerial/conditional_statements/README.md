# Villkorliga uttalanden (Conditional statements)

## Innehåll

- [Villkorliga uttalanden](#villkorliga-uttalanden)
- [if](#if)
    - [Exempel 1](#exempel-1)
    - [Exempel 2](#exempel-2)
    - [Exempel 3](#exempel-3)
- [else](#else)
    - [Exempel 4](#exempel-4)
    - [Exempel 5](#exempel-5)
    - [Exempel 6](#exempel-6)
    - [Exempel 7](#exempel-7)
- [else if](#else-if)
    - [Exempel 8](#exempel-8)
    - [Exempel 9](#exempel-9)
    - [Exempel 10](#exempel-10)
- [switch](#switch)
    - [Exempel 11](#exempel-11)
    - [break](#break)
    - [Exempel 12](#exempel-12)
    - [default](#default)
    - [Exempel 13](#exempel-13)
    - [Exempel 14](#exempel-14)
- [Gemensamma kodblock](#gemensamma-kodblock)
    - [Exempel 15](#exempel-15)
    - [Exempel 16](#exempel-16)
    - [Exempel 17](#exempel-17)
- [switch detaljer](#switch-detaljer)
- [Strikt jämförelse](#strikt-jmfrelse)
    - [Exempel 18](#exempel-18)
- [Ternary operator](#ternary-operator)
    - [Exempel 19](#exempel-19)
    - [Exempel 20](#exempel-20)
    - [Exempel 21](#exempel-21)
    - [Exempel 22](#exempel-22)
- [Övningar](#vningar)

# Villkorliga uttalanden

Villkorliga uttalanden används för att utföra olika åtgärder baserat på olika förhållanden.

Ofta när du kodar så vill du kunna ta beslut i koden "om detta gör det, annars gör detta".

Du kan använda villkorliga uttalanden i din kod för att göra detta.

I JavaScript har vi följande villkorliga uttalanden:

Använd `if` för att specificera ett kodblock som ska köras, om ett angivet villkor är sant  
Använd `else` för att ange ett kodblock som ska köras, om samma villkor är falskt  
Använd `else if` om du vill ange ett nytt villkor att testa, om det första villkoret är falskt  
Använd `switch` för att ange många alternativa kodblock som ska köras

# if

## Syntax

Observera att `if` skrivs med små bokstäver. Stora bokstäver (If eller IF) genererar ett JavaScript-fel.

```javascript
if (condition) {
    //  kodblock som ska köras om villkoret är true
}
```

### Exempel 1

```javascript
if (true) {
    greeting = "Hej";
}

alert(greeting)
```

#### Resultat:

```
Hej
```

### Exempel 2

```javascript
if (false) {
    greeting = "Hej";
}

alert(greeting)
```

#### Resultat:

```

```

Gör en hälsning "God dag" om timmen är mindre än 18:00:

### Exempel 3

```javascript
let greeting = "God dag";
let hour = 17;

if (hour < 18) {
    alert(greeting);
}
```

#### Resultat:

```
God dag
```

# else

## Syntax

```javascript
if (condition) {
    //  kodblock som ska köras om villkoret är true
} else {
    //  kodblock som ska köras om villkoret är false
}
```

Använd `else` uttalandet för att ange ett kodblock som ska köras om `if` villkoret är falskt.

### Exempel 4

```javascript
if (true) {
    greeting = "Hej";
} else {
    greeting = "Hej då";
}

alert(greeting)
```

#### Resultat:

```
Hej
```

### Exempel 5

```javascript
if (false) {
    greeting = "Hej";
} else {
    greeting = "Hej då";
}

alert(greeting)
```

#### Resultat:

```
Hej då
```

### Exempel 6

```javascript
let greeting = "";
let hour = 17;

if (hour < 18) {
    greeting = "God dag";
} else {
    greeting = "God kväll";
}

alert(greeting)
```

#### Resultat:

```
God dag
```

### Exempel 7

Om hour är mindre än 18, skapa en "God dag" -hälsning, annars "God kväll":

```javascript
let greeting = "";
let hour = 19;

if (hour < 18) {
    greeting = "God dag";
} else {
    greeting = "God kväll";
}

alert(greeting)
```

#### Resultat:

```
God kväll
```

# else if

## Syntax

```javascript
if (condition1) {
    //  kodblock som ska köras om condition1 är true
} else if (condition2) {
    //  kodblock som ska köras om condition1 är false och condition2 är true 
} else {
    //  kodblock som ska köras om condition1 är false och condition2 är false
}
```

Använd `else if` uttalande för att ange ett nytt villkor om det första villkoret är falskt.

### Exempel 8

Om hour är mindre än 10:00, skapa en "God morgon" -hälsning, om inte, men tiden är mindre än 20:00, skapa en "Good dag"
-hälsning, annars en "God kväll" -hälsning:

```javascript
let greeting = "";
let hour = 9;

if (hour < 10) {
    greeting = "God morgon";
} else if (hour < 20) {
    greeting = "God dag";
} else {
    greeting = "God kväll";
}

alert(greeting)
```

#### Resultat:

```
God morgon
```

### Exempel 9

Om hour är mindre än 10:00, skapa en "God morgon" -hälsning, om inte, men tiden är mindre än 20:00, skapa en "Good dag"
-hälsning, annars en "God kväll" -hälsning:

```javascript
let greeting = "";
let hour = 15;

if (hour < 10) {
    greeting = "God morgon";
} else if (hour < 20) {
    greeting = "God dag";
} else {
    greeting = "God kväll";
}

alert(greeting)
```

#### Resultat:

```
God dag
```

### Exempel 10

Om hour är mindre än 10:00, skapa en "God morgon" -hälsning, om inte, men tiden är mindre än 20:00, skapa en "Good dag"
-hälsning, annars en "God kväll" -hälsning:

```javascript
let greeting = "";
let hour = 21;

if (hour < 10) {
    greeting = "God morgon";
} else if (hour < 20) {
    greeting = "God dag";
} else {
    greeting = "God kväll";
}

alert(greeting)
```

#### Resultat:

```
God kväll
```

# switch

`switch` används för att utföra olika åtgärder baserat på olika förhållanden likt `if-else`.

Använd switch-uttrycket för att välja ett av många kodblock som ska köras.

## Syntax

```javascript
switch (expression) {
    case x:
        // code block
        break;
    case y:
        // code block
        break;
    default:
    // code block
}
```

Så här fungerar det:

- `switch` utvärderas en gång.
- Uttryckets värde `expression` jämförs med värdena i varje enskilt fall `case`.
- Om det värdet för `expression` matchar `case` körs det associerade kodblocket.
- Om det inte finns någon matchning körs standard kodblocket `default`.

### Exempel 11

Metoden getDay() returnerar veckodagen som ett tal mellan 0 och 6.

(Söndag = 0, måndag = 1, tisdag = 2 ..)

I det här exemplet används veckodagsnumret för att beräkna veckodagens namn:

```javascript
let todaysDay = new Date().getDay()
let day = "";

switch (todaysDay) {
    case 0:
        day = "Söndag";
        break;
    case 1:
        day = "Måndag";
        break;
    case 2:
        day = "Tisdag";
        break;
    case 3:
        day = "Onsdag";
        break;
    case 4:
        day = "Torsdag";
        break;
    case 5:
        day = "Fredag";
        break;
    case 6:
        day = "Lördag";
}

alert(day)
```

#### Resultat:

```
Dagens dag
```

## break

När JavaScript når ett pausnyckelordet `break`, bryter det ut från växelblocket.

Detta kommer att stoppa körningen inuti switch-blocket.

Det är inte nödvändigt att bryta det sista fallet i ett växelblock. Blocket bryter (slutar) där ändå.

Obs: Om du utelämnar `break` kommer nästa ärende `case` att utföras även om utvärderingen inte matchar fallet.

### Exempel 12

```javascript
let todaysDay = 1   // Dagen är satt manuellt till 1 dvs Måndag
let day = "";

switch (todaysDay) {
    case 0:
        day = "Söndag";
        break;
    case 1:
        day = "Måndag"; // Saknar break så nästa case kommer köras
    case 2:
        day = "Tisdag"; // kommer skrivas ut
        break;
    case 3:
        day = "Onsdag";
        break;
    case 4:
        day = "Torsdag";
        break;
    case 5:
        day = "Fredag";
        break;
    case 6:
        day = "Lördag";
}

alert(day)
```

#### Resultat:

```
Tisdag
```

## default

Standardnyckelordet `default` anger koden som ska köras om det inte finns något `case` som matchar:

### Exempel 13

```javascript
let todaysDay = 1   // Dagen är satt manuellt
let day = "";

switch (todaysDay) {
    case 0:
        day = "Söndag";
        break;
    case 6:
        day = "Lördag";
        break;
    default:
        day = "Ser fram emot helgen";
}

alert(day)
```

#### Resultat:

```
Ser fram emot helgen
```

Standardfallet `default` behöver inte vara det sista fallet i ett växlingsblock:

### Exempel 14

```javascript
let todaysDay = 1   // Dagen är satt manuellt
let day = "";

switch (todaysDay) {
    default:
        day = "Ser fram emot helgen";
        break; // Viktigt att komma ihåg
    case 0:
        day = "Söndag";
        break;
    case 6:
        day = "Lördag";
}

alert(day)
```

#### Resultat:

```
Ser fram emot helgen
```

Obs: Om `default` inte är det sista fallet i switch-blocket, kom ihåg att avsluta `default` med en `break`.

# Gemensamma kodblock

Ibland vill du att olika switch-fall ska använda samma kod.

I det här exemplet delar 4 och 5 samma kodblock samt 0 och 6 delar ett annat kodblock:

### Exempel 15

```javascript
let todaysDay = 1   // Dagen är satt manuellt
let text = "";

switch (todaysDay) {
    case 4:
    case 5:
        text = "Snart är det helg";
        break;
    case 0:
    case 6:
        text = "Det är helg";
        break;
    default:
        text = "Ser fram emot helgen"
}

alert(text)
```

#### Resultat:

```
Ser fram emot helgen
```

### Exempel 16

```javascript
let todaysDay = 4   // Dagen är satt manuellt
let text = "";

switch (todaysDay) {
    case 4:
    case 5:
        text = "Snart är det helg";
        break;
    case 0:
    case 6:
        text = "Det är helg";
        break;
    default:
        text = "Ser fram emot helgen"
}

alert(text)
```

#### Resultat:

```
Snart är det helg
```

### Exempel 17

```javascript
let todaysDay = 6   // Dagen är satt manuellt
let text = "";

switch (todaysDay) {
    case 4:
    case 5:
        text = "Snart är det helg";
        break;
    case 0:
    case 6:
        text = "Det är helg";
        break;
    default:
        text = "Ser fram emot helgen"
}

alert(text)
```

#### Resultat:

```
Det är helg
```

# switch detaljer

Om flera ärenden `case` matchar ett ärendevärde `expression` väljs det **första** ärendet.

Om inga matchande fall hittas fortsätter programmet till standardetiketten **`default`**.

Om ingen standardetikett `default` hittas fortsätter programmet till uttalandet **efter switch-uttrycket**.

# Strikt jämförelse

`switch` använder **strikt** jämförelse (===).

Värdena måste vara av samma typ för att matcha.

En strikt jämförelse kan bara vara sann om operanderna är av samma typ.

I detta exempel kommer det inte att finnas någon matchning för x:

### Exempel 18

```javascript
let text = "";

let x = "0";
switch (x) {
    case 0:
        text = "Off";
        break;
    case 1:
        text = "On";
        break;
    default:
        text = "Inget värde hittades";
}

alert(text)
```

#### Resultat:

```
Inget värde hittades
```

# Ternary operator

JavaScript innehåller också en villkorlig operatör som tilldelar ett värde till en variabel baserat på vissa villkor.

## Syntax

```javascript
variablename = (condition) ? value1 : value2 
```

```javascript
condition ? /* block med kod */ : /* block med kod */
```

### Exempel 19

```javascript
let voteable = (age < 18) ? "För ung" : "Tillräckligt gammal";

alert(voteable)
```

Om den variabeln `age` är ett värde under 18 kommer värdet av den variabeln `voteable` att vara "För ung", annars är
värdet på den variabeln `voteable`att vara "Tillräckligt gammal".

### Exempel 20

```javascript
const canCharacterUseWands = true

canCharacterUseWands ? alert('You can use wands!') : alert('You cannot use wands!')
```

#### Resultat:

```
You can use wands!
```

### Exempel 21

```javascript
const canCharacterUseWands = false

canCharacterUseWands ? alert('You can use wands!') : alert('You cannot use wands!')
```

#### Resultat:

```
You cannot use wands!
```

### Exempel 22

_Samma resultat som ovan men enklare att läsa._

```javascript
const canCharacterUseWands = false

canCharacterUseWands
    ? alert('You can use wands!')
    : alert('You cannot use wands!')

```

#### Resultat:

```
You cannot use wands!
```

# Övningar

- Skriv av alla exempel och verifiera att de fungerar för dig
- Experimentera med dem

```javascript
const sword = 'Excalibur'
const wand = 'Elder wand'
const canEquipSword = false
const canEquipWand = false

if (expression) {
    alert('You have equipped' + sword)
} else if (expression) {
    alert('You have equipped the' + wand)
} else {
    alert('Your character cannot equip neither swords nor wands unfortunatley : ‹')
}
```

Ändra koden ovan så att din karaktär kan använda:

- `sword`
- `wand`
- ingetdera

- Skriv motsvarande kod för övningen ovan med Ternary uttryck istället

Skriv ett JavaScript-program som:

1. accepterar två heltal och visar det större av dem.
2. accepterar två heltal och visar det mindre av dem.
3. för att sortera tre nummer. Visa med en resultatet med en `console.log()`.
    - Exempel nummer : 0, -1, 4
    - Sortera på största nummer, Resultat : 4, 0, -1 [Svar](ovning3.js)
    - Sortera på minsta nummer, Resultat : -1, 0, 4
4. hittar det största talet av fem siffror. Visa med en resultatet med en `console.log()`.
    - Exempel nummer : -5, -2, -6, 0, -1
    - Resultat : 0 [Svar](ovning4.js)
5. hittar det minsta talet av fem siffror. Visa med en resultatet med en `console.log()`.
    - Exempel nummer : -5, -2, -6, 0, -1
    - Resultat : -5
6. [Conditionals](04-Conditionals.js)
