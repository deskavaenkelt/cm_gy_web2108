# Statement, Syntax och Kommentarer

## Innehåll

- [Statement](#statement)
    - [Exempel](#exempel)
    - [JavaScript program](#javascript-program)
    - [JavaScript statements](#javascript-statements)
    - [Semikolon ;](#semikolon-)
    - [JavaScript White Space (tomma mellanrum)](#javascript-white-space-tomma-mellanrum)
    - [JavaScript linjelängd och radbrytningar](#javascript-linjelngd-och-radbrytningar)
    - [JavaScript kodblock](#javascript-kodblock)
    - [JavaScript nyckelord](#javascript-nyckelord)
- [Syntax](#syntax)
    - [Vad betyder syntax](#vad-betyder-syntax)
    - [JavaScript Värden](#javascript-vrden)
        - [JavaScript Literals](#javascript-literals)
        - [JavaScript Variables](#javascript-variables)
    - [JavaScript Operatorer](#javascript-operatorer)
    - [JavaScript Expressions - Uttryck](#javascript-expressions---uttryck)
    - [JavaScript Keywords - Nyckelord ](#javascript-keywords---nyckelord)
    - [JavaScript Identifiers](#javascript-identifiers)
    - [JavaScript är skiftlägeskänsligt](#javascript-r-skiftlgesknsligt)
    - [JavaScript och camelCase](#javascript-och-camelcase)
    - [avaScript Character Set](#javascript-character-set)
- [Kommentarer](#kommentarer)
    - [Kommentarer från en rad](#kommentarer-p-en-rad)
    - [Flerlinjekommentarer](#flerlinjekommentarer)
    - [Använda kommentarer för att förhindra utförande](#anvnda-kommentarer-fr-att-frhindra-utfrande)
- [Övningar](#vningar)

# Statement

## Exempel

```javascript
let x, y, z;    // Statement 1
x = 5;          // Statement 2
y = 6;          // Statement 3
z = x + y;      // Statement 4
```

## JavaScript program

Ett **datorprogram** är en lista med "instruktioner" som ska "köras" av en dator.

På ett programmeringsspråk kallas dessa programmeringsinstruktioner **statements** (uttalanden).

Ett JavaScript-program är en lista över **statements** (programmeringsuttalanden).

_I HTML körs JavaScript-program av webbläsaren._

## JavaScript statements

JavaScript statements består av:

Värden, operatörer, uttryck, nyckelord och kommentarer.

Detta statement talar om för webbläsaren att skriva "Hello Dolly." inuti ett HTML-element med id = "demo":

```javascript
document.getElementById("demo").innerHTML = "Hello Dolly.";
```

De flesta JavaScript-program innehåller många JavaScript statements.

Statements utförs en efter en i samma ordning som de skrivs.

_JavaScript-program (och JavaScript statements) kallas ofta **JavaScript-kod.**_

## Semikolon ;

Semikolon separerar JavaScript-uttalanden (statements).

Lägg till ett semikolon i slutet av varje körbart uttalande:

```javascript
let a, b, c;     // Declarera 3 variabler
a = 5;           // Tilldela värdet 5 till a
b = 6;           // Tilldela värdet 6 till b
c = a + b;       // Tilldela sum värdet av a och b till c
```

När de separeras av semikolon är flera påståenden på en rad tillåtna:

```javascript
a = 5;
b = 6;
c = a + b;
```

_På webben kan du se exempel utan semikolon.  
Att avsluta uttalanden med semikolon krävs inte, men rekommenderas starkt._

## JavaScript White Space (tomma mellanrum)

JavaScript ignorerar flera mellanslag. Du kan lägga till "vitt utrymme" i ditt skript för att göra det mer läsbart.

Följande rader är ekvivalenta:

```javascript
let person = "Hege";
let person = "Hege";
```

_En god praxis är att placera utrymmen runt operatörer (= + - * /):_

```javascript
let x = y + z;
```

## JavaScript linjelängd och radbrytningar

För bästa läsbarhet vill programmerare ofta undvika kodrader som är längre än 80 tecken.

Om ett JavaScript-uttalande inte passar på en rad är det bästa stället att bryta det efter en operatör:

```javascript
document.getElementById("demo").innerHTML =
    "Hello Dolly!";
```

## JavaScript kodblock

JavaScript-uttalanden kan grupperas i kodblock, inom måsvingar {...}.

Syftet med kodblock är att definiera uttalanden som ska köras tillsammans.

En plats där du hittar uttalanden grupperade i block, är i JavaScript-funktioner:

```javascript
function myFunction() {
    document.getElementById("demo1").innerHTML = "Hello Dolly!";
    document.getElementById("demo2").innerHTML = "How are you?";
}
```

## JavaScript nyckelord

JavaScript-uttalanden börjar ofta med ett nyckelord för att identifiera JavaScript-åtgärden som ska utföras.

Besök den [Reserverade ordreferens listan](https://www.w3schools.com/js/js_reserved.asp) för att se en fullständig lista
med JavaScript-nyckelord.

Här är en lista över några av de nyckelord som du kommer att lära dig om i den här handledningen:

| Nyckelord     | Beskrivning   |
| ------------- |:-------------:|
| break | Terminates a switch or a loop |
| continue |  Jumps out of a loop and starts at the top|
| debugger | Stops the execution of JavaScript, and calls (if available) the debugging function |
| do ... while | Executes a block of statements, and repeats the block, while a condition is true |
| for | Marks a block of statements to be executed, as long as a condition is true |
| function | Declares a function |
| if ... else | Marks a block of statements to be executed, depending on a condition |
| return | Exits a function |
| switch | Marks a block of statements to be executed, depending on different cases |
| try ... catch | Implements error handling to a block of statements |
| let | Declares a variable |
| const | Declares a variable |

_JavaScript-nyckelord är reserverade ord. Reserverade ord kan inte användas som namn på variabler._

# Syntax

## Vad betyder syntax

Syntax är en uppsättning regler (motsvarar tex Svenskans grammatiska regler), som beskriver hur JavaScript-program
konstrueras:

```javascript
let x, y, z;       // Deklarera variabler
x = 5;
y = 6;      // Tilldela värden
z = x + y;         // Kalkylera värden
```

## JavaScript Värden

JavaScript syntaxen definierar två typer av värden:

- Fasta värden
- Variabla värden

Fasta värden kallas `Literals`.

Variabla värden kallas `Variables`.

### JavaScript Literals

De två viktigaste syntaxreglerna för fasta värden är:

1. **Nummer** skrivs med eller utan decimaler:

```javascript
10.50

1001
```

2. **Strängar** är text, skriven i dubbla eller enkla citat:

```javascript
"John Doe"

'John Doe'
```

### JavaScript Variables

I ett programmeringsspråk används **variabler** för att **lagra** datavärden.

JavaScript använder nyckelorden `let/const` för att **deklarera** variabler.

Ett **likhetstecken** används för att **tilldela** variabler värden.

I detta exempel definieras `x` som en variabel. Därefter tilldelas (ges) `x` värdet `6`:

```javascript
let x;
x = 6;
```

## JavaScript Operatorer

JavaScript använder **aritmetiska operatorer** (+ - * /) för att **beräkna** värden:

```javascript
(5 + 6) * 10
```

JavaScript använder en **tilldelningsoperator** (=) för att **tilldela** variabler värden:

```javascript
let x, y;
x = 5;
y = 6;
```

## JavaScript Expressions - Uttryck

Ett uttryck är en kombination av värden, variabler och operatorer som beräknas till ett värde.

Beräkningen kallas en utvärdering (evaluation).

Till exempel utvärderas 5 * 10 till 50:

```javascript
5 * 10
```

Uttryck kan också innehålla variabla värden:

```javascript
x * 10
```

Värdena kan vara av olika slag, till exempel siffror och strängar.

Till exempel, "John" + "" + "Doe", utvärderas till "John Doe":

```javascript
"John" + " " + "Doe"
```

## JavaScript Keywords - Nyckelord

JavaScript-nyckelord används för att identifiera åtgärder som ska utföras.

Nyckelordet let/const säger till webbläsaren att skapa variabler:

```javascript
let x, y;
x = 5 + 6;
y = x * 10;
```

## JavaScript kommentarer

Inte alla JavaScript-uttalanden "körs".

Kod efter dubbla snedstreck `//` eller mellan `/* och */` behandlas som en kommentar.

Kommentarer ignoreras och kommer inte att utföras:

```javascript
let x = 5;   // I will be executed

// let x = 6;   I will NOT be executed

/* 
Flera
rader
bortkommenterad
 */
```

## JavaScript Identifiers

Identifierare är namn.

I JavaScript används identifierare för att namnge variabler (och nyckelord, funktioner och etiketter).

Reglerna för "legala" namn är mycket desamma för de flesta programmeringsspråk.

I JavaScript måste det första tecknet vara en bokstav eller en understrykning (`_`) eller ett dollartecken (`$`).

Efterföljande tecken kan vara bokstäver, siffror, understrykningar eller dollartecken.

_Siffror är inte tillåtna som första tecken._
_På så sätt kan JavaScript enkelt skilja identifierare från siffror._

## JavaScript är skiftlägeskänsligt

Alla JavaScript-identifierare är skiftlägeskänsliga (**Case Sensitive**).

Variablerna `lastName` och `lastname` är två olika variabler:

```javascript
let lastname, lastName;
lastName = "Doe";
lastname = "Peterson";
```

## JavaScript och camelCase

Historiskt har programmerare använt olika sätt att sammanfoga flera ord i ett variabelnamn:

**Bindestreck (Hyphens):**

first-name, last-name, master-card, inter-city.

_Bindestreck är **inte** tillåtna i JavaScript. De är reserverade för subtraktion._

**Understreck (Underscore):**

first_name, last_name, master_card, inter_city.

**Upper Camel Case (Pascal Case):**

FirstName, LastName, MasterCard, InterCity.

**Lower Camel Case:**

JavaScript-programmerare brukar använda camelCase som börjar med små bokstäver:

firstName, lastName, masterCard, interCity.

## JavaScript Character Set

JavaScript använder Unicode-teckenuppsättningen.

Unicode täcker (nästan) alla karaktärer, skiljetecken och symboler i världen.

För en närmare titt, läs den kompletta [Unicode-referensen](https://www.w3schools.com/charsets/ref_html_utf8.asp).

# Kommentarer

JavaScript-kommentarer kan användas för att förklara JavaScript-kod och för att göra den mer läsbar.

JavaScript-kommentarer kan också användas för att förhindra körning när man testar alternativ kod.

## Kommentarer på en rad

Kommentarer från en rad börjar med `//`.

All text mellan `//` och slutet av raden ignoreras av JavaScript (kommer inte att köras).

Det här exemplet använder en enradig kommentar före varje kodrad:

```javascript
// Change heading:
document.getElementById("myH").innerHTML = "My First Page";

// Change paragraph:
document.getElementById("myP").innerHTML = "My first paragraph.";
```

I det här exemplet används en enda radkommentar i slutet av varje rad för att förklara koden:

```javascript
let x = 5;      // Declare x, give it the value of 5
let y = x + 2;  // Declare y, give it the value of x + 2
```

## Flerlinjekommentarer

Kommentarer med flera rader börjar med `/*` och slutar med `*/`.

All text mellan `/* och */` ignoreras av JavaScript.

Detta exempel använder en kommentar med flera rader (ett kommentarblock) för att förklara koden:

```javascript
/*
The code below will change
the heading with id = "myH"
and the paragraph with id = "myP"
in my web page:
*/
document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";
```

_Det är vanligast att använda enradiga kommentarer._
_Blockkommentarer används ofta för formell dokumentation._

## Använda kommentarer för att förhindra utförande

Att använda kommentarer för att förhindra exekvering av kod är lämpligt för kodtestning.

Lägga till `//` framför en kodrad ändrar kodraderna från en körbar rad till en kommentar.

I det här exemplet används `//` för att förhindra körning av en av kodraderna:

```javascript
//document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";
```

I det här exemplet används ett kommentarblock för att förhindra körning av flera rader:

```javascript
/*
document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";
*/

```

# Övningar

Skriv av alla exempel och se så att de fungerar på din egna dator
