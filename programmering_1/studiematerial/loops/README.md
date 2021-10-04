# Loopar

## Innehåll

- [Generellt](#generellt)
- [For-loopen](#for-loopen)
    - [Exempel 1](#exempel-1)
    - [Statement 1](#statement-1)
    - [Exempel 2](#exempel-2)
    - [Statement 2](#statement-2)
    - [Statement 3](#statement-3)
    - [Exempel 3](#exempel-3)
- [For/In](#forin)
    - [For/In Loop](#forin-loop)
    - [Exempel 4](#exempel-4)
    - [For/In över Arrays](#forin-ver-arrays)
    - [Exempel 5](#exempel-5)
    - [Array.forEach()](#arrayforeach)
    - [Exempel 6](#exempel-6)
    - [Exempel 7](#exempel-7)
- [For Of](#for-of)
    - [For/Of Loop](#forof-loop)
    - [Loopa över en array](#loopa-ver-en-array)
    - [Exempel 8](#exempel-8)
    - [Loopa över en string](#loopa-ver-en-string)
    - [Exempel 9](#exempel-9)
- [While](#while)
    - [While loop](#while-loop)
    - [Exempel 10](#exempel-10)
    - [Do/While Loop](#dowhile-loop)
    - [Exempel 11](#exempel-11)
- [Jämförelse For och While](#jmfrelse-for-och-while)
    - [Exempel 12](#exempel-12)
- [Break och Continue](#break-och-continue)
    - [Break Statement](#break-statement)
    - [Exempel 13](#exempel-13)
    - [Continue Statement](#continue-statement)
    - [Exempel 14](#exempel-14)
- [Labels](#labels)
    - [Exempel 15](#exempel-15)
- [Övningar](#vningar)
- [Svar](#svar)

# Generellt

Slingor/loopar kan utföra ett kodblock flera gånger.

JavaScript-loopar Slingor är praktiska, om du vill köra samma kod om och om igen, varje gång med ett annat värde.

Ofta är detta fallet när man arbetar med arrays:

```javascript
let cars = ["Volvo", "Polstar", "Volkswagen", "Audi", "BMW"]
```

Istället för att skriva:

```javascript
let cars = ["Volvo", "Polstar", "Volkswagen", "Audi", "BMW"]

console.log(cars[0])    // Arrays börjar på 0
console.log(cars[1])
console.log(cars[2])
console.log(cars[3])
console.log(cars[4])
```

Så kan man skriva:

```javascript
let cars = ["Volvo", "Polstar", "Volkswagen", "Audi", "BMW"]

let index;
for (index = 0; index < 5; index++) {
    console.log(cars[index])
}
```

Man byter ofta ut

- `index` till `i`
- samt det finns en inbyggd funktion för att få fram längden på en array `array.length`:

```javascript
let cars = ["Volvo", "Polstar", "Volkswagen", "Audi", "BMW"]

let i;  // i istället för index
for (i = 0; i < cars.length; i++) {  // cars.length istället för 5
    console.log(cars[i])
}
```

Dessutom behöver `i` inte initieras utanför loopen:

```javascript
let cars = ["Volvo", "Polstar", "Volkswagen", "Audi", "BMW"]

for (i = 0; i < cars.length; i++) {  // i initieras inne i loopen
    console.log(cars[i])
}
```

Alla exempel ovan skriver ut följande till konsolen:

```
Volvo
Polstar
Volkswagen
Audi
BMW
```

# For-loopen

## Syntax

```javascript
for (statement1; statement2; statement3) {
    // code block to be executed
}
```

- **Statement 1** körs (en gång) innan kodblocket körs.
- **Statement 2** definierar villkoret för att köra kodblocket.
- **Statement 3** körs (varje gång) efter att kodblocket har exekverats.

### Exempel 1

```javascript
for (i = 0; i < 5; i++) {
    console.log(i);
}
```

Resultat:

```
0
1
2
3
4
```

Från exemplet ovan kan du utläsa:

- `statement1` anger en variabel innan slingan startar (`let i = 0`).
- `statement2` definierar villkoret för att slingan ska köras (i måste vara mindre än 5 (`i < 5`)).
- `statement3` ökar ett värde (i++) varje gång kodblocket i slingan har exekverats.

## Statement 1

- Normalt använder du statement 1 för att initialisera variabeln som används i slingan (`i = 0`).
- Så är inte alltid fallet, JavaScript bryr sig inte. `statement1` är valfritt.
- Du kan initiera många värden i uttalande 1 (åtskilda av komma):

### Exempel 2

```javascript
let cars = ["Volvo", "Polstar", "Volkswagen", "Audi", "BMW"]

for (i = 2, len = cars.length, text = ""; i < len; i++) {
    text += cars[i] + ", ";
}

console.log(text);
```

Resultat:

```
Volkswagen, Audi, BMW,
```

Och du kan utelämnar `statement1` (som när dina värden ställs in, innan slingan startar):

```javascript
let cars = ["Volvo", "Polstar", "Volkswagen", "Audi", "BMW"]

let i = 2;              // Börjar på index 2
let len = cars.length;
let text = "";

for (; i < len; i++) {
    text += cars[i] + " * ";
}

console.log(text);
```

Resultat:

```
Volkswagen * Audi * BMW * 
```

## Statement 2

- Ofta används `statement2` för att utvärdera tillståndet för den ursprungliga variabeln.
- Så är inte alltid fallet, JavaScript bryr sig inte. `statement2` är också valfritt.
- Om `statement2` returnerar sant kommer slingan att börja om igen, om den returnerar falsk slutar slingan.

_Obs: Om du utelämnar `statement2` måste du ge en `break` inuti slingan. Annars slutar slingan aldrig. Detta kommer att
krascha din webbläsare._

## Statement 3

- `statement3` ökar ofta värdet på den ursprungliga variabeln.
- Detta är inte alltid fallet, JavaScript bryr sig inte och `statement3` är valfritt.
- `statement3` kan göra allt som negativt steg (i--), positivt steg (i = i + 15) eller något annat.
- `statement3` kan också utelämnas (som när du ökar dina värden i slingan):

### Exempel 3

```javascript
let cars = ["Volvo", "Polstar", "Volkswagen", "Audi", "BMW"]

let i = 0;
let len = cars.length;
let text = "";

for (; i < len;) {
    text += cars[i] + " - ";
    i++;
}

console.log(text);
```

Resultat:

```
Volvo - Polstar - Volkswagen - Audi - BMW - 
```

# For/In

## For/In Loop

`for/in statement` loopar igenom egenskaperna för ett objekt:

## Syntax

```javascript
for (key in object) {
    // code block to be executed
}
```

### Exempel 4

```javascript
let person = { firstname: "John", lastname: "Doe", age: 25 };   // Object

let text = "";
let x;
for (x in person) {
    text += person[x];
}

console.log(text);
```

Resultat:

```
JohnDoe25 
```

### Förklaring

- `For in-loopen` itererar över ett personobjekt
- Varje iteration returnerar en nyckel `key` (x)
- Nyckeln används för att komma åt nyckelns värde `value`
- Värdet på nyckeln är `person[x]`

## For/In över Arrays

JavaScript `for/in` kan också loopa över egenskaperna för en array:

## Syntax

```javascript
for (variable in array) {
    code
}
```

### Exempel 5

```javascript
let numbers = [45, 4, 9, 16, 25];

let txt = "";
let x;

for (x in numbers) {
    txt += numbers[x] + " - ";
}

console.log(txt);
```

Resultat:

```
45 - 4 - 9 - 16 - 25 - 
```

_Obs: Använd inte `for/in` över en array om **indexordningen** är viktig._

_Indexordningen är implementeringsberoende och det går inte att komma åt array-värden i den ordning du förväntar dig._

_Det är bättre att använda en `for-loop`, en `for/of` eller `Array.forEach()` när ordningen är viktig._

## Array.forEach()

Metoden `forEach()` anropar en funktion (en återuppringningsfunktion _(eng: a callback function)_) en gång för varje
array-element.

### Exempel 6

```javascript
let txt = "";
let numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
    txt = txt + value + " * ";
}

console.log(txt);
```

Resultat:

```
45 * 4 * 9 * 16 * 25 * 
```

Observera att funktionen tar 3 argument:

- Varans värde
- Artikelindexet
- Själva arrayen

I exemplet ovan används endast värdeparametern. Exemplet kan skrivas om till:

### Exempel 7

```javascript
let txt = "";
let numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value) {
    txt = txt + value + " * ";
}

console.log(txt);
```

Resultat:

```
45 * 4 * 9 * 16 * 25 * 
```

# For Of

## For/Of Loop

JavaScript `for/of statement` loopar igenom värdena på ett iterabelt objekt.

Det låter dig lopa över iterabla datastrukturer som Arrays, Strings, Maps, NodeLists och mer:

## Syntax

```javascript
for (variable of iterable) {
    // code block to be executed
}
```

`variable` - För varje iteration tilldelas variabeln värdet för nästa egenskap (property). Variabel kan deklareras
med `const`, `let`, eller `var`.

`iterable` - Ett objekt som har iterabla egenskaper.

## Loopa över en array

### Exempel 8

```javascript
let cars = ["BMW", "Volvo", "Mini"];
let text = "";

for (let x of cars) {
    text += x + " - ";
}

console.log(text);
```

Resultat:

```
BMW - Volvo - Mini - 
```

## Loopa över en string

### Exempel 9

```javascript
let language = "JavaScript";
let text = "";

for (let x of language) {
    text += x + "-";
}

console.log(text);
```

Resultat:

```
J-a-v-a-S-c-r-i-p-t-
```

# While

Slingor/loopar kan utföra ett kodblock så länge som ett angivet villkor är sant.

## While loop

`while` loopar sig genom ett kodblock så länge som ett angivet villkor är sant.

## Syntax

```javascript
while (condition) {
    // code block to be executed
}
```

### Exempel 10

```javascript
while (i < 10) {
    console.log("The number is " + i);
    i++;  // itereringen sker här
}
```

Resultat:

```
The number is 1
The number is 2
The number is 3
The number is 4
The number is 5
The number is 6
The number is 7
The number is 8
The number is 9
```

_Om du glömmer att öka variabeln `i` som används som `condition` slutar slingan aldrig. Detta kommer att krascha din
webbläsare._

## Do/While Loop

`do/while` loopen är en variant av while-slingan. Denna loop kommer att utföra kodblocket en gång, innan det
kontrolleras om villkoret är sant, kommer det att upprepas slingan så länge villkoret är sant.

## Syntax

```javascript
do {
    // code block to be executed
}
while (condition);
```

### Exempel 11

I exemplet nedan används en `do/while loop`. Slingan kommer alltid att köras minst en gång, även om villkoret är falskt,
eftersom kodblocket körs innan villkoret testas:

```javascript
do {
    console.log("The number is " + i);
    i++;      // Glöm inte öka här
}
while (i < 10);
```

Resultat:

```
The number is 1
The number is 2
The number is 3
The number is 4
The number is 5
The number is 6
The number is 7
The number is 8
The number is 9
```

_Glöm inte att öka variabeln som används som `condition`, annars slutar slingan aldrig!_

## Jämförelse For och While

Du kommer nu att upptäcka att en while-loop är ungefär densamma som en for-loop, med `statement 1` och `statement 3`
utelämnat.

Loopen i det här exemplet använder en `lfor-loop` för att samla in bilnamnen från bilens array:

### Exempel 12

I exemplet nedan används en `do/while loop`. Slingan kommer alltid att köras minst en gång, även om villkoret är falskt,
eftersom kodblocket körs innan villkoret testas:

```javascript
let cars = ["BMW", "Volvo", "Polstar", "Ford"];
let i = 0;
let text = "";

for (; cars[i];) {
    text += cars[i] + "#";
    i++;
}

console.log(text);
```

Resultat:

```
BMW#Volvo#Polstar#Ford#
```

Loopen i det här exemplet använder en `while-loop` för att samla in bilnamnen från bilens array:

```javascript
let cars = ["BMW", "Volvo", "Polstar", "Ford"];
let i = 0;
let text = "";

while (cars[i]) {
    text += cars[i] + "#";
    i++;
}

console.log(text);
```

Resultat:

```
BMW#Volvo#Polstar#Ford#
```

# Break och Continue

- `break statement` "hoppar ut" ur en slinga.
- `continue statement` "hoppar över" en iteration i slingan.

## Break Statement

Du har redan sett pausuttalandet `break` som användes i ett tidigare exempel. Den användes för att "hoppa ut" från ett
switch() statement.

Pausmeddelandet kan också användas för att hoppa ur en loop:

### Exempel 13

```javascript
let text = "";

for (i = 0; i < 10; i++) {
    if (i === 3) {
        break;
    }
    console.log("The number is " + i);
}
```

Resultat:

```
The number is 0
The number is 1
The number is 2
```

_I exemplet ovan avslutar `break` loopen ("bryter" slingan) när loop-räknaren (i) är 3._

## Continue Statement

Fortsätt-satsen `continue` bryter en iteration (i slingan), om ett angivet villkor uppstår, och fortsätter med nästa
iteration i slingan.

Detta exempel hoppar över värdet 3:

### Exempel 14

```javascript
let text = "";

for (i = 0; i < 10; i++) {
    if (i === 3) {
        continue;
    }
    console.log("The number is " + i);
}
```

Resultat:

```
The number is 0
The number is 1
The number is 2
The number is 4
The number is 5
The number is 6
The number is 7
The number is 8
The number is 9
```

## Labels

För att märka JavaScript-statements föregår du uttalandena med ett etikettnamn `label` och ett kolon:

```javascript
label:
    statements
```

`break` och `continue` är de enda JavaScript-uttalanden som kan "hoppa ur" ett kodblock.

## Syntax

```
break labelname;

continue labelname;
```

`continue statement` (med eller utan en etikettreferens) kan bara användas för att **hoppa över _en_ loop-iteration**.

`break statement` utan en etikettreferens, kan bara användas för att **hoppa ur _en_ slinga eller en `switch`**.

Med en etikettreferens kan `break statement` användas för att hoppa ut ur vilket kodblock som helst:

### Exempel 15

```javascript
let cars = ["BMW", "Volvo", "Saab", "Ford"];

list: {
    console.log(cars[0]);
    console.log(cars[1]);
    break list;
    console.log(cars[2]);
    console.log(cars[3]);
}
```

Resultat:

```
BMW
Volvo
```

# Övningar

Skriv av alla exempel och experimentera med dem.

1. Skriv ett JavaScript för en loop som kommer att upprepas från 0 till 15. För varje iteration kontrolleras det om det
   aktuella numret är udda eller jämnt och visar ett meddelande på skärmen.
    - Exempel:
        - "0 is even"
        - "1 is odd"
        - "2 is even"
2. Skriv ett JavaScript-program som beräknar betyget för olika poäng i intervallet 0-100.

| Intervall | Betyg |
| --------- |:-----:|
| <60       | F     |
| <70       | D     |
| <80       | C     |
| <90       | B     |
| <100      | A     |

3. Skriv ett JavaScript-program som beräknar, genomsnittet av följande elever. Därefter används detta medeltal för att
   bestämma medelbetyget för klassen.

| Student Name  | Poäng |
| ------------- |:-----:|
| David         | 80    |
| Vinoth        | 77    |
| Divya         | 88    |
| Ishitha       | 95    |
| Thomas        | 68    |

| Intervall | Betyg |
| --------- |:-----:|
| <60       | F     |
| <70       | D     |
| <80       | C     |
| <90       | B     |
| <100      | A     |

4. Skriv ett JavaScript-program som itererar igenom heltal från 1 till 100. Men för multiplar av tre skriver du "Fizz"
   istället för numret och för multiplarna av fem skriver "Buzz". För siffror som är multiplar av både tre och fem
   skriver du "FizzBuzz".
    - Alla tal skrivs ut till konsolen
    - Tal som går att dela med 3 ska ersättas med "Fizz"
    - Tal som går att dela med 5 ska ersättas med "Buzz"
    - Tal som går att dela med 3 och 5 ska ersättas med "FizzBuzz"

5. Skriv ett JavaScript-program för att konstruera följande mönster med hjälp av en nästlad för loop.

```
*
* *
* * *
* * * *
* * * * *
```

6. Skriv ett JavaScript-program för att konstruera följande mönster med hjälp av en nästlad för loop.

```
* * * * *
* * * *
* * *
* *
*
```

7. Skriv ett JavaScript-program för att konstruera följande mönster med hjälp av en nästlad för loop.

```
* 
* * 
* * * 
* * * * 
* * * * * 
* * * * * 
* * * * 
* * * 
* * 
* 
```

8. Skriv ett JavaScript-program för att konstruera följande mönster med hjälp av en nästlad för loop.

```
* * * * *
* * * *
* * *
* *
*
*
* *
* * *
* * * *
* * * * *

```

9. Skriv ett JavaScript-program för att beräkna den största gemensamma nämnaren (SGN) av två positiva heltal.

10. Skriv ett JavaScript-program för att summera alla multiplarna av 3 och 5 under 1000.
    - Om talet är delbart med 3 addera det till summan
    - Om talet är delbart med 5 addera det till summan
    - Svar = 233168

11. [Loops](03-Loops.js)

# Svar

- [Övning 1](ovning1.js)
- [Övning 2](ovning2.js)
- [Övning 3](ovning3.js)
- [Övning 4](ovning4.js)
- [Övning 5](ovning5.js)
- [Övning 6](ovning6.js)
- [Övning 7](ovning7.js)
- [Övning 8](ovning8.js)
- [Övning 9](ovning9.js)
- [Övning 10](ovning10.js)
