# Funktioner och objekt

## Innehåll

- [Funktioner](#funktioner)
    - [Kalla på en function (invoke, calls)](#kalla-p-en-function-invoke-calls)
    - [Funktion returns](#funktion-returns)
    - [Varför har man funktioner?](#varfr-har-man-funktioner)
    - [() Operatorn åberopar Funktionen](#-operatorn-beropar-funktionen)
    - [Funktioner som används som variabel värden](#funktioner-som-anvnds-som-variabel-vrden)
    - [Lokala variabler (Local Variables)](#lokala-variabler-local-variables)
- [Objekt](#objekt)
    - [Motsvara verkliga Objekt, Egenskaper och metoder](#motsvara-verkliga-objekt-egenskaper-och-metoder)
    - [JavaScript Objekt](#javascript-objekt)
    - [Objekt definition](#objekt-definition)
    - [Objekt egenskaper](#objekt-egenskaper)
    - [Access till objekt egenskaper](#access-till-objekt-egenskaper)
    - [Objekt metoder](#objekt-metoder)
    - [This nyckelordet](#this-nyckelordet)
    - [Access till Objekt Metoder ](#access-till-objekt-metoder)
    - [Förklara inte Strings, Numbers och Booleans som objekt!](#frklara-inte-strings-numbers-och-booleans-som-objekt)
- [This](#this)
    - [Vad är This?](#vad-r-this)
    - [This i en metod](#this-i-en-metod)
    - [This för sig själv](#this-fr-sig-sjlv)
    - [This i en funktion (standard)](#this-i-en-funktion-standard)
    - [This i en funktion (strikt)](#this-i-en-funktion-strikt)
    - [This i en "Event Handlers"](#this-i-event-handlers)
    - [Objekt metods bindning](#objekt-metods-bindning)
    - [Explicit funktions bindning](#explicit-funktions-bindning)
- [Övningar](#vningar)

# Funktioner

En JavaScript-funktion är ett kodblock som är utformat för att utföra en viss uppgift.

En JavaScript-funktion körs när "något" åberopar det (kallar på den).

## Syntax

En JavaScript-funktion definieras med funktionsnyckelordet `function`, följt av ett **namn** följt av parenteser **()**.

Funktionsnamn kan innehålla bokstäver, siffror, understrykningar och dollartecken (samma regler som för variabler).

Parenteserna kan innehålla parameternamn åtskilda av kommatecken:  
**(parameter1, parameter2, ...)**

Koden som ska köras, av funktionen, placeras inom måsvingar (curly brackets): **{}**

```javascript
function name(parameter1, parameter2, parameter3) {
    // code to be executed
}
```

- Funktionsparametrar **parameters** listas inom parentesen () i funktionsdefinitionen.
- Funktionsargument **arguments** är de **värden** som tas emot av funktionen när den anropas.
- Inuti funktionen beter sig argumenten (parametrarna) som lokala variabler.

En funktion är ungefär densamma som en procedur eller en subrutin, på andra programmeringsspråk.

### Exempel

Multiplicera 2 tal och skriv ut resultatet

```javascript
function myFunction(parameter1, parameter2) {
    console.log(parameter1 * parameter2);
}

myFunction(2, 3)    // Funktionen måste åberopas
```

Resultat:

```
6
```

## Kalla på en function (invoke, calls)

Koden inuti funktionen körs när "något" anropar (invoke (calls)) funktionen:

- När en händelse inträffar (när en användare klickar på en knapp)
- När den anropas (kallas) från JavaScript-kod
- Automatiskt (själv åberopat)

## Funktion returns

När JavaScript når en `return` kommer funktionen att sluta köras.

Om funktionen har anropats från ett `statement` kommer JavaScript att "returnera" för att köra koden som finns efter
anropet.

Funktioner beräknar ofta ett **returvärde**. Returvärdet "returneras" tillbaka till "åberopande funktion":

### Exempel

```javascript
function myFunction(a, b) {
    return a * b;   // Functionen returnerar produkten av a och b
}

let product = myFunction(2, 3)

console.log(product)
```

Resultat:

```
6
```

## Varför har man funktioner?

Du kan återanvända koden: Definiera koden en gång och använd den många gånger.

Du kan använda samma kod många gånger med olika argument för att ge olika resultat.

### Exempel

```javascript
function convertToCelsius(degreesInFahrenheit) {
    return (5 / 9) * (degreesInFahrenheit - 32);
}

let degreesInFahrenheit = 90
let degreesInCelsius = convertToCelsius(degreesInFahrenheit)

console.log(degreesInCelsius)
```

Resultat:

```
32.22222222222222
```

## () Operatorn åberopar Funktionen

Med exemplet ovan hänvisar `convertToCelsius` till funktionsobjektet och `convertToCelsius()` till funktionsresultatet.

Anrop till en funktion utan () returnerar funktionsobjektet istället för funktionsresultatet.

### Exempel

```javascript
function convertToCelsius(degreesInFahrenheit) {
    return (5 / 9) * (degreesInFahrenheit - 32);
}

console.log(convertToCelsius)
```

Resultat:

```
[Function: convertToCelsius]
```

## Funktioner som används som variabel värden

Funktioner kan användas på samma sätt som du använder variabler, i alla typer av formler, tilldelningar och beräkningar.

### Exempel

Istället för att använda en variabel för att lagra returvärdet för en funktion:

```javascript
function convertToCelsius(degreesInFahrenheit) {
    return (5 / 9) * (degreesInFahrenheit - 32);
}

let degreesInCelsius = convertToCelsius(77);

let text = "Temperaturen är " + degreesInCelsius + " Celsius";

console.log(text)
```

Resultat:

```
Temperaturen är 25 Celsius
```

Kan du använda funktionen direkt, som ett variabelt värde:

```javascript
function convertToCelsius(degreesInFahrenheit) {
    return (5 / 9) * (degreesInFahrenheit - 32);
}

let text = "Temperaturen är " + convertToCelsius(77) + " Celsius";

console.log(text)
```

Resultat:

```
Temperaturen är 25 Celsius
```

## Lokala variabler (Local Variables)

Variabler som deklareras inom en JavaScript-funktion blir **LOKAL** för funktionen.

Lokala variabler kan endast nås från funktionen.

```javascript
// code here can NOT use carName

function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
}

// code here can NOT use carName
```

Eftersom lokala variabler bara känns igen i sina funktioner kan variabler med samma namn användas i olika funktioner.

Lokala variabler skapas när en funktion startar och raderas när funktionen är klar.

# Objekt

## Motsvara verkliga Objekt, Egenskaper och metoder

I verkligheten är en bil ett objekt.

En bil har egenskaper som vikt och färg, och metoder som start och stopp:

![Bild på en Fiat 500](objectExplained.gif)

| Egenskaper         | Metoder     |
| :----------------: |:-----------:|
| car.name = Fiat    | car.start() |
| car.model = 500    | car.drive() |
| car.weight = 850kg | car.brake() |
| car.color = white  | car.stop()  |

Alla bilar har samma **egenskaper**, men egenskapernas **värden** skiljer sig från bil till bil.

Alla bilar har samma **metoder**, men metoderna utförs **vid olika tidpunkter**.

## JavaScript Objekt

Du har redan lärt dig att JavaScript-variabler är behållare för datavärden.

Den här koden tilldelar ett enkelt värde (Fiat) till en variabel med namnet bil:

```javascript
let car = "Fiat";
```

Objekt är också variabler men objekt kan innehålla många värden.

Den här koden tilldelar många värden (Fiat, 500, vit) till en variabel med namnet bil:

```javascript
let car = { type: "Fiat", model: "500", color: "white" };
```

Värdena skrivs som `name:value` par (namn och värde åtskilda av ett kolon).

_JavaScript-objekt är behållare för **namngivna värden** som kallas egenskaper eller metoder._

## Objekt definition

Du definierar (och skapar) ett JavaScript-objekt med ett objekt literal:

### Exempel

```javascript
let person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
```

Utrymmen och radbrytningar är inte viktiga. En objektdefinition kan sträcka sig över flera rader:

### Exempel

```javascript
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
```

# Objekt egenskaper

| Egenskaper   | Värde  |
| :----------- |:------:|
| firstName    | John   |
| lastName     | Doe    |
| age          | 50     |
| eyeColor     | blue   |

## Access till objekt egenskaper

Du kan komma åt objektegenskaper på två sätt:

```javascript
objectName.propertyName
```

eller:

```javascript
objectName["propertyName"]
```

### Exempel

```javascript
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

console.log(person.lastName);
```

eller:

```javascript
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

console.log(person["lastName"]);
```

Resultat:

```
Doe
```

## Objekt metoder

Objekt kan också ha **metoder**.

Metoder är **åtgärder (actions)** som kan utföras på objekt.

Metoder är lagrade i egenskaper som **funktionsdefinitioner (function definitions)**.

| Egenskaper   | Värde  |
| :----------- |:------ |
| firstName    | John   |
| lastName     | Doe    |
| age          | 50     |
| eyeColor     | blue   |
| fullName     | function() {return this.firstName + " " + this.lastName;} |

_En metod är en funktion som lagras som en egenskap._

### Exempel

```javascript
person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
```

## This nyckelordet

I en funktionsdefinition `this` hänvisar till "ägaren (owner)" av funktionen.

I exemplet ovan är `this` **personobjektet** som "äger" `fullName-funktionen`.

Med andra ord betyder `this.firstName` egenskapen `firstName` för **`this` objekt**.

## Access till Objekt Metoder

Du får åtkomst till en objektmetod med följande syntax:

```javascript
objectName.methodName()
```

### Exempel

```javascript
person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

let name = person.fullName();
console.log(name);
```

```
John Doe
```

Om du öppnar en metod **utan** parenteserna() kommer den att returnera **funktionsdefinitionen**:

### Exempel

```javascript
person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

let name = person.fullName;
console.log(name);
```

```
[Function: fullName]
```

## Förklara inte Strings, Numbers och Booleans som objekt!

När en JavaScript-variabel deklareras med nyckelordet `new` skapas variabeln som ett objekt:

```javascript
let x = new String();        // Deklarerar x som ett String objekt
let y = new Number();        // Deklarerar y som ett Number objekt
let z = new Boolean();       // Deklarerar z som ettBoolean objekt
```

Undvik `String`, `Number` och `Boolean` objekt. De komplicerar din kod och saktar ner körhastigheten.

# This

```javascript
let person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
```

## Vad är This?

JavaScript det `this` nyckelordet hänvisar till objektet det tillhör.

`this` har olika värden beroende på var den används:

- I en metod hänvisar `this` till **ägarobjektet**.
- Ensam, hänvisar `this` till det **globala objektet**.
- I en funktion avser `this` det globala **objektet**.
- I en funktion i strikt läge är `this` odefinierat `undefined`.
- I en händelse avser `this` **elementet** som fick händelsen.
- Metoder som `call()` och `apply()` kan `this` hänvisa till vilket objekt som helst.

## This i en metod

I en objektmetod avser `this` "metodens" ägare.

I exemplet ovanför hänvisar `this` till **personobjektet**.

**Person** objektet är **ägare** till **fullName**-metoden.

```javascript
let person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {     // Härifrån
        return this.firstName + " " + this.lastName;
    }                           // till hit, 3 rader
};
```

## This för sig själv

När `this` används ensam är **ägaren** det globala objektet, så refererar `this` till det globala objektet.

I ett webbläsarfönster är det globala objektet `[object Window]`:

### Exempel

```javascript
let x = this;
```

I **strikt läge (mode)**, när det används ensamt, så refererar `this` till det globala objektet `[object Window]`:

### Exempel

```javascript
"use strict";
let x = this;
```

## This i en funktion (standard)

I en JavaScript-funktion är ägaren av funktionen "**default** binding for `this`".

Så i en funktion hänvisar `this` till det globala objektet `[object Window]`:

### Exempel

```javascript
function myFunction() {
    return this;
}
```

## This i en funktion (strikt)

JavaScript **strikt läge (mode)** tillåter inte **default** binding.

Så när det används i en funktion, i "strict mode", är `this` `undefined`.

### Exempel

```javascript
"use strict";

function myFunction() {
    return this;
}
```

## This i "Event Handlers"

I HTML-händelsehanterare hänvisar `this` till HTML-elementet som fick händelsen:

### Exempel

```javascript
<button onclick="this.style.display='none'">
    Click to Remove Me!
</button>
```

## Objekt metods bindning

I dessa exempel är detta **personobjektet** (personobjektet är funktionens "ägare"):

### Exempel

```javascript
let person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    myFunction: function () {
        return this;
    }
};
```

### Exempel

```javascript
let person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
```

Med andra ord: **this.firstName** betyder egenskapen **firstName** för **`this`** (person) objektet.

## Explicit funktions bindning

Metoderna `call()` och `apply()` är fördefinierade JavaScript-metoder.

De kan båda användas för att anropa en objektmetod med ett annat objekt som argument.

I exemplet nedan när man kallar på person1.fullName med person2 som argument, kommer detta att hänvisa till person2,
även om det är en metod för person1:

### Exempel

```javascript
let person1 = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

let person2 = {
    firstName: "John",
    lastName: "Doe",
}

text = person1.fullName.call(person2);
console.log(text)
```

Resultat:

```
John Doe
```

# Övningar

1. Skriv av alla exempel och se så att de fungerar på din egna dator

2. Experimentera med dem

3. Gör 4 funktioner för de 4 räknesätten som returnerar sitt svar
    - Addition
    - Subtraktion
    - Multiplikation
    - Division
        - Lägg till en kontroll som kontrollerar så man inte kan dividera med 0 (noll).

4. Skapa ett objekt med en person som har egenskaper samt en funktion som skriver ut all data.
    - Skriv ut all separat data från personen till konsolen samt använd den inbyggda funktionen för att skriva ut all
      data.

5. Skapa flera objekt med flera personer som har egenskaper samt skapa ett separat objekt som har en funktion som
   skriver ut all data (explicit funktions bindning).

6. Skapa ett hus som object med egenskaper samt inbyggda funktioner för att:
    - Öppna/stänga dörrar
    - Öppna/stänga fönster

7. Skriv en hälsning till användaren:
    - beroende på vilken tid det är på dygnet. T ex. ”God förmiddag”, ”God middag”.
    - Skriv också en hälsning med vilken årstid det är.

8. Konvertera Celsius till Fahrenheit.  
   Man ska kunna konvertera Celsius till Fahrenheit.  
   Extra: gör så att man kan välja om man ska konvertera Celsius till Fahrenheit eller omvänt.  
   `fahrenheit = celsius * 9 / 5 + 32`  
   `celsius = (fahrenheit - 32) * 5 / 9`

9. Skapa ett objekt för en person med egenskaper för namn, adress, telefon, vilket år man är född. Objektet ska ha en
   funktion som räknar ut hur gammal man är.

10. [Funktioner](06-Functions.js)

11. [Funktioner ovh Returns](07-FunctionsReturn.js)

12. [Objekt](05-Objects.js)

13. Gör alla övningar med ECMAScript 2015 - ES6
    - dvs Arrow functions
