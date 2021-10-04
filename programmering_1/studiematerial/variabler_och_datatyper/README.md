# Variabler och Primitiva datatyper

## Innehåll

- [Variabler](#variables)
    - [Likheter med Algebra](#likheter-med-algebra)
    - [JavaScript Identifiers](#javascript-identifiers)
    - [Assignment Operator](#assignment-operator)
    - [Deklarera (Creating) JavaScript Variabler](#deklarera-creating-javascript-variabler)
    - [En deklarering många variabler](#en-deklarering-mnga-variabler)
    - [JavaScript Arithmetic](#javascript-arithmetic)
    - [JavaScript Dollar tecken $](#javascript-dollar-tecken-)
    - [JavaScript Underscore (_)](#javascript-underscore-_)
- [Primitiva datatyper](#primitiva-datatyper)
    - [Exempel](#exempel)
    - [Undefined - odefinierad](#undefined---odefinierad)
    - [Empty Values - Tomma värden](#empty-values---tomma-vrden)
    - [String - Sträng](#string---strng)
    - [Number - Nummer](#number---nummer)
    - [Boolean - Sann eller Falsk](#boolean---sann-eller-falsk)
    - [Null](#null)
    - [Skillnaden mellan null och undefined](#skillnaden-mellan-null-och-undefined)
- [Begreppet datatyper](#begreppet-datatyper)
    - [JavaScript typer är dynamiska](#javascript-typer-r-dynamiska)
    - [JavaScript Strings](#javascript-strings)
    - [JavaScript Numbers](#javascript-numbers)
    - [JavaScript Booleans](#javascript-booleans)
    - [JavaScript Arrays](#javascript-arrays)
    - [JavaScript Objects](#javascript-objects)
    - [Primitiv data](#primitiv-data)
    - [Complex data](#complex-data)
- [Övningar](#vningar)

## Variables

JavaScript-variabler är behållare för lagring av datavärden. I detta exempel är `x`, `y` och `z` variabler, de
deklareras med nyckelorden `let` och `const`:

- `let` (deprecated, gammalt variabelnamn, använd ej)
- `let` - Är en variabel som kan ändras efter den initierats
- `const` - Är en variabel som _INTE_ kan ändras efter den initierats

````javascript
let x = 5;
let y = 6;
const z = x + y;
````

Från exemplet ovan kan du förvänta dig att:

- `x` lagrar värdet 5
- `y` lagrar värdet 6
- `z` lagrar värdet 11

### Likheter med Algebra

Exempel med variablerna price1, price2 och total:

````javascript
let price1 = 5;
let price2 = 6;
let total = price1 + price2;
````

- price1 och price2 håller variabler
- total representerar ett uttryck `total = (price1 + price2)`

_"JavaScript variabler är behållare som lagrar värden"_

### JavaScript Identifiers

Alla JavaScript-variabler måste identifieras med unika namn.

Dessa unika namn kallas `identifiers`.

Identifierare kan vara korta namn (som x och y) eller mer beskrivande namn (ålder, summa, totalVolym).

De allmänna reglerna för att konstruera namn för variabler (unika identifierare) är:

- Namn kan innehålla bokstäver, siffror, understrykningar och dollartecken.
- Namnen måste börja med en bokstav
- Namn kan också börja med $ och _
- Namnen är skiftlägeskänsliga (y och Y är olika variabler)
- Reserverade ord (som JavaScript-nyckelord) kan inte användas som namn

_JavaScript-identifierare är skiftlägeskänsliga._

### Assignment Operator

I JavaScript är likhetstecknet (=) en "tilldelnings" -operatör, inte en "lika med" -operatör.

Detta skiljer sig från **algebra**. Följande är inte meningsfullt i algebra:

````javascript
x = x + 5
````

I **JavaScript** är det dock meningsfullt: _det tilldelar värdet x + 5 till x._

(Det beräknar värdet på x + 5 och sätter resultatet i x. Värdet på x ökas med 5.)

_Operatorn "lika med" är skriven som == i JavaScript._

### Deklarera (Creating) JavaScript Variabler

````javascript
let pi = 3.14;
let person = "John Doe";
let answer = 'Yes I am!';
````

_Det är en bra programmeringspraxis att deklarera alla variabler i början av ett skript._

### En deklarering många variabler

Du kan deklarera många variabler i en deklarering.

Starta uttalandet med `let` eller `const` och separera variablerna med kommatecken:

````javascript
let person = "John Doe", carName = "Volvo", price = 200;
````

Deklareringen kan även sträcka sig över flera rader:

````javascript
let person = "John Doe",
    carName = "Volvo",
    price = 200;
````

### JavaScript Arithmetic

Precis som med algebra kan du utföra aritmetik med JavaScript-variabler med hjälp av operatorer som `=` och `+`:

```javascript
let x = 5 + 2 + 3;
```

```javascript
let x = "John" + " " + "Doe";
```

```javascript
let x = "5" + 2 + 3;
```

### JavaScript Dollar tecken `$`

Du kommer ihåg att JavaScript-identifierare (namn) måste börja med:

- En bokstav (A-Z eller a-z)
- Ett dollartecken (`$`)
- Ett understrykning (_)

Eftersom JavaScript behandlar ett dollartecken som en bokstav är identifierare som innehåller `$` giltiga variabelnamn:

```javascript
let $$$ = "Hello World";
let $ = 2;
let $myMoney = 5;
```

Att använda dollartecknet är inte så vanligt i JavaScript, men professionella programmerare använder det ofta som ett
alias för huvudfunktionen i ett JavaScript-bibliotek.

I JavaScript-jQuery-biblioteket används till exempel main `$` för att välja HTML-element. I jQuery `$ ("p");` betyder "
välj alla p-element".

### JavaScript Underscore (_)

Eftersom JavaScript behandlar understrykningstecken som en bokstav är identifierare som innehåller _ giltiga
variabelnamn:

```javascript
let _lastName = "Johnson";
let _x = 2;
let _100 = 5;
```

Att använda understrykning är inte särskilt vanligt i JavaScript, men en konvention bland professionella programmerare
är att använda den som ett alias för "privata (dolda)" variabler.

## Primitiva datatyper

JavaScript-variabler kan innehålla många **datatyper**: siffror, strängar, objekt och mer:

````javascript
let length = 16;                                    // Number
let lastName = "Johnson";                           // String
let x = { firstName: "John", lastName: "Doe" };     // Object
````

### Exempel

#### Undefined - odefinierad

- I JavaScript har en variabel utan ett värde, `undefined` odefinierat värde. Typen är också `undefined`.
- Varje variabel kan tömmas genom att sätta värdet till `undefined`. Typen kommer också att vara `undefined`.

````javascript
const greetUser                                     // undefined - "har inte blivit definierad"
const greetUser = undefined                         // Samma som ovan men definieras

alert(typeof greetUser)
alert(greetUser)
````

#### Empty Values - Tomma värden

- Ett tomt värde har inget att göra med undefined att göra.
- En tom sträng har både ett juridiskt värde och en typ.

`````javascript
let car = "";                                       // Värdet är "", 
alert(typeof car)                                   // typeof är "string"
alert(car)
`````

#### String - Sträng

````javascript
const sayHello = "Hey! Wellcome to my tutorial"     // string

alert(typeof sayHello)
alert(sayHello)
````

#### Number - Nummer

````javascript
const elite = 1337                                  // number

alert(typeof elite)
alert(elite)
````

#### Boolean - Sann eller Falsk

````javascript
const isTeacher = true                              // boolean

alert(typeof isTeacher)
alert(isTeacher)
````

#### Null

- I JavaScript är null "ingenting". Det ska vara något som inte finns.
- Tyvärr är datatypen null i JavaScript ett objekt, vilket betraktas som en bugg.

````javascript
const noValue = null                                // null - "har blivit definierad men fått värdet null"

alert(typeof noValue)                               // Object - bugg från JavaScripts urprung
alert(noValue)
````

#### Skillnaden mellan null och undefined

`undefined` och `null` är lika i värde men olika i typ:

````javascript
typeof undefined           // undefined
typeof null                // object

null === undefined         // false
null == undefined          // true
````

## Begreppet datatyper

Vid programmering är datatyper ett viktigt begrepp. För att kunna använda variabler är det viktigt att veta något om
typen. Utan datatyper kan en dator inte lösa detta problem säkert:

````javascript
let x = 16 + "Volvo";
````

Har det någon mening att lägga till "Volvo" till sexton? Kommer det att ge ett fel eller kommer det att ge ett resultat?

JavaScript behandlar exemplet ovan som:

````javascript
let x = "16" + "Volvo";
````

_When adding a number and a string, JavaScript will treat the number as a string._

JavaScript utvärderar uttryck från vänster till höger. Olika sekvenser kan ge olika resultat:

````javascript
let x = 16 + 4 + "Volvo";
````

Resultat:
`20Volvo`

````javascript
let x = "Volvo" + 16 + 4;
````

Resultat:
`Volvo164`

I det första exemplet behandlar JavaScript 16 och 4 som siffror tills det når "Volvo".

I det andra exemplet, eftersom den första operanden är en sträng, behandlas alla operander som strängar.

### JavaScript typer är dynamiska

JavaScript har dynamiska typer. Det betyder att samma variabel kan användas för att innehålla olika datatyper:

````javascript
let x;           // x är nu "undefined"
x = 5;           // x är nu "Number"
x = "John";      // x är nu "String"
````

### JavaScript Strings

- En sträng (eller en textsträng) är en serie tecken så som "John Doe".
- Strängar skrivs med citat. Du kan använda enkla eller dubbla citattecken:

````javascript
let carName1 = "Volvo XC60";   // Dubbla citattecken
let carName2 = 'Volvo XC60';   // Enkla citattecken
````

_Du kan använda citat inuti en sträng, så länge de inte matchar citaten som omger strängen:_

````javascript
let answer1 = "It's alright";             // Enkelt citattecken inne i Dubbla citattecken
let answer2 = "He is called 'Johnny'";    // Enkla citattecken inne i Dubbla citattecken
let answer3 = 'He is called "Johnny"';    // Dubbla citattecken inne i Enkla citattecken
````

### JavaScript Numbers

- JavaScript har bara en typ av nummer.
- Siffror kan skrivas med eller utan decimaler:

````javascript
let x1 = 34.00;     // Skrivet med decimaltecken
let x2 = 34;        // Skrivet utan decimaltecken
````

_Extra stora eller extra små siffror kan skrivas med vetenskaplig (exponentiell) notation:_

````javascript
let y = 123e5;      // 12300000
let z = 123e-5;     // 0.00123
````

### JavaScript Booleans

Booleans kan bara ha 2 värden: sant `true` eller falsk `false`

````javascript
let x = 5;
let y = 5;
let z = 6;
(x == y)       // Returns true
    (x == z)       // Returns false
````

_Booleans används ofta vid villkorlig testning._

### JavaScript Arrays

- JavaScript Arrays skrivs med hakparenteser `[]`.
- Array artiklar avgränsas med komma.
- Följande kod deklarerar (skapar) en array som kallas bilar, som innehåller tre objekt (bilnamn):

````javascript
let cars = ["Saab", "Volvo", "BMW"];

console.log(cars[0])    // returns "Saab"
console.log(cars[1])    // returns "Volvo"
console.log(cars[2])    // returns "BMW"
````

_Array index är nollbaserade, vilket innebär att det första objektet är [0], det andra är [1] och så vidare._

### JavaScript Objects

- JavaScript objekt skrivs med måsvingar "curly braces" `{}`.
- Objektegenskaper skrivs som namn: värdepar, åtskilda av kommatecken.

````javascript
let person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };

console.log(person.firstName)   // Returns "John"
console.log(person.age)         // Returns "50"
````

_Objektet (personen) i exemplet ovan har fyra egenskaper: förnamn, efternamn, ålder och ögon färg._

Du kan tömma ett objekt genom att sätta det till `null`:

````javascript
let person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
person = null;    // Nu är värdet null, men typen är fortfarande ett object
````

Du kan även tömma ett objekt genom att sätta det till `undefined`:

````javascript
let person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
person = undefined;    // Nu är både värdet och typen undefined
````

[Skillnaden mellan null och undefined](#skillnaden-mellan-null-och-undefined)

### Primitiv data

- Ett primitivt datavärde är ett enda enkelt datavärde utan ytterligare egenskaper och metoder.
- `typeof` operatorn kan returnera en av dessa primitiva typer:

````javascript
typeof "John"              // Returns "string"
typeof 3.14                // Returns "number"
typeof true                // Returns "boolean"
typeof false               // Returns "boolean"
typeof x                   // Returns "undefined" (if x has no value)
````

### Complex data

- `typeof` operatorn kan returnera en av två komplexa typer:
    - `function`
    - `object`
- `typeof` operatorn returnerar "objekt" för objekt, arrays och null.
- `typeof` operatorn returnerar inte "objekt" för funktioner.

````javascript
typeof { name: 'John', age: 34 }    // Returns "object"
typeof [1, 2, 3, 4]                 // Returns "object" (not "array", see note below)
typeof null                         // Returns "object"
typeof function myFunc() {
}                                   // Returns "function"
````

# Övningar

1. Skriv av alla exempel och se så att de fungerar på din egna dator
2. Skapa en variabel för varje datatyp och lagra något i den.
    - sträng
    - nummer
    - decimaltal
    - boolean
    - undefined
    - null
3. Skapa en Array med värden
4. Skapa ett object som innehåller alla datatyper
5. Skapa 2 variabler och lägg ihop
    - sträng
    - nummer
    - decimaltal
    - boolean
6. [Variabler](01-Variables.js)
7. [Arrays](02-Arrays.js)
8. [Objects](05-Objects.js)
