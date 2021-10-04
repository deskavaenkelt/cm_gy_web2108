# Arrays - Iteration

Array-iterationsmetoder fungerar på varje array-objekt.

## Innehåll

- [Array.forEach()](#arrayforeach)
- [Array.map()](#arraymap)
- [Array.filter()](#arrayfilter)
- [Array.reduce()](#arrayreduce)
- [Array.reduceRight()](#arrayreduceright)
- [Array.every()](#arrayevery)
- [Array.some()](#arraysome)
- [Array.indexOf()](#arrayindexof)
- [Array.lastIndexOf()](#arraylastindexof)
- [Array.find()](#arrayfind)
- [Array.findIndex()](#arrayfindindex)
- [Övningar](#vningar)

# Array.forEach()

Metoden `forEach()` anropar en funktion (a callback function) en gång för varje array element.

**Exempel**

```javascript
let txt = "";
let numbers = [45, 4, 9, 16, 25];

function myFunction(value, index, array) {
    txt = txt + value + ", ";
}

numbers.forEach(myFunction);

console.log(txt);
```

**Resultat**:

```
45, 4, 9, 16, 25, 
```

Observera att funktionen tar 3 argument:

- Föremålet värde
- Artikelindexet
- Arrayen själv

I exemplet ovan används endast värdeparametern. Exemplet kan skrivas om till:

**Exempel**

```javascript
let txt = "";
let numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value) {
    txt = txt + value + ", ";
}

console.log(txt);
```

**Resultat**:

```
45, 4, 9, 16, 25, 
```

# Array.map()

Metoden `map()` skapar en ny array genom att utföra en funktion på varje array element.

`map()`-metoden kör inte funktionen för array element utan värden.

`map()`-metoden ändrar inte den ursprungliga arrayen.

Detta exempel multiplicerar varje array värde med 2:

**Exempel**

```javascript
let numbers1 = [45, 4, 9, 16, 25];
let numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
    return value * 2;
}

console.log(numbers1);
console.log(numbers2);
```

**Resultat**:

```
[ 45, 4, 9, 16, 25 ]
[ 90, 8, 18, 32, 50 ]
```

Observera att funktionen tar 3 argument:

- Varans värde
- Artikelindexet
- Arrayen själv

När en call back funktionen endast använder värdeparametern kan index- och array parametrarna utelämnas:

**Exempel**

```javascript
let numbers1 = [45, 4, 9, 16, 25];
let numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
    return value * 2;
}

console.log(numbers1);
console.log(numbers2);
```

**Resultat**:

```
[ 45, 4, 9, 16, 25 ]
[ 90, 8, 18, 32, 50 ]
```

# Array.filter()

Metoden `filter()` skapar en ny array med array element som klarar ett test.

Det här exemplet skapar en ny array från element med ett värde större än 18:

**Exempel**

```javascript
let numbers = [45, 4, 9, 16, 25];
let over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}

console.log(numbers);
console.log(over18);
```

**Resultat**:

```
[ 45, 4, 9, 16, 25 ]
[ 45, 25 ]
```

Observera att funktionen tar 3 argument:

- Varans värde
- Artikelindexet
- Arrayen själv

När en call back funktionen endast använder värdeparametern kan index- och array parametrarna utelämnas:

**Exempel**

```javascript
let numbers = [45, 4, 9, 16, 25];
let over18 = numbers.filter(myFunction);

function myFunction(value) {
    return value > 18;
}

console.log(numbers);
console.log(over18);
```

**Resultat**:

```
[ 45, 4, 9, 16, 25 ]
[ 45, 25 ]
```

# Array.reduce()

Metoden `reduce()` kör en funktion på varje array element för att producera (reducera det till) ett enda värde.

Metoden `reduce()` fungerar från vänster till höger i arrayen. Se även `reduceRight()`.

_Metoden `reduce()` minskar inte den ursprungliga arrayen._

Detta exempel hittar summan av alla siffror i en array:

**Exempel**

```javascript
let numbers1 = [45, 4, 9, 16, 25];
let sum = numbers1.reduce(myFunction);

function myFunction(total, value, index, array) {
    return total + value;
}

console.log(numbers1);
console.log(sum);
```

**Resultat**:

```
[ 45, 4, 9, 16, 25 ]
99
```

Observera att funktionen tar fyra argument:

- Summan (det initiala värdet / det tidigare returnerade värdet)
- Artikels värde
- Artikel indexet
- Arrayen själv

Exemplet ovan använder inte index- och arrayparametrarna. Det kan skrivas om till:

**Exempel**

```javascript
let numbers1 = [45, 4, 9, 16, 25];
let sum = numbers1.reduce(myFunction);

function myFunction(total, value) {
    return total + value;
}

console.log(numbers1);
console.log(sum);
```

**Resultat**:

```
[ 45, 4, 9, 16, 25 ]
99
```

Metoden `reduce()` kan acceptera ett initialvärde:

**Exempel**

```javascript
let numbers1 = [45, 4, 9, 16, 25];
let sum = numbers1.reduce(myFunction, 100);

function myFunction(total, value) {
    return total + value;
}

console.log(numbers1);
console.log(sum);
```

**Resultat**:

```
[ 45, 4, 9, 16, 25 ]
199
```

# Array.reduceRight()

Metoden `reduceRight()` kör en funktion på varje array element för att producera (reducera det till) ett enda värde.

`reduceRight()` fungerar från höger till vänster i arrayen. Se även `reduce()`.

Metoden `reduceRight()` minskar inte den ursprungliga arrayen.

Detta exempel hittar summan av alla siffror i en array:

**Exempel**

```javascript
let numbers1 = [45, 4, 9, 16, 25];
let sum = numbers1.reduceRight(myFunction);

function myFunction(total, value, index, array) {
    return total + value;
}

console.log(numbers1);
console.log(sum);
```

**Resultat**:

```
[ 45, 4, 9, 16, 25 ]
99
```

Observera att funktionen tar fyra argument:

- Summan (det initiala värdet / det tidigare returnerade värdet)
- Artikels värde
- Artikel indexet
- Arrayen själv

Exemplet ovan använder inte index- och arrayparametrarna. Det kan skrivas om till:

**Exempel**

```javascript
let numbers1 = [45, 4, 9, 16, 25];
let sum = numbers1.reduceRight(myFunction);

function myFunction(total, value) {
    return total + value;
}

console.log(numbers1);
console.log(sum);
```

**Resultat**:

```
[ 45, 4, 9, 16, 25 ]
99
```

# Array.every()

Metoden `every()` kontrollerar om alla array värden klarar ett test.

I det här exemplet kontrolleras om alla array värden är större än 18:

**Exempel**

```javascript
let numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}

console.log(numbers);
console.log(allOver18);
```

**Resultat**:

```
[ 45, 4, 9, 16, 25 ]
false
```

Observera att funktionen tar 3 argument:

- Artikels värde
- Artikel indexet
- Arrayen själv

När en "call back function" endast använder den första parametern (värde) kan de andra parametrarna utelämnas:

**Exempel**

```javascript
let numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value) {
    return value > 18;
}

console.log(numbers);
console.log(allOver18);
```

**Resultat**:

```
[ 45, 4, 9, 16, 25 ]
false
```

# Array.some()

Metoden `some()` kontrollerar om vissa array värden klarar ett test.

I det här exemplet kontrolleras om vissa array värden är större än 18:

**Exempel**

```javascript
let numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}

console.log(numbers);
console.log(someOver18);
```

**Resultat**:

```
[ 45, 4, 9, 16, 25 ]
true
```

Observera att funktionen tar 3 argument:

- Artikels värde
- Artikel indexet
- Arrayen själv

När en "call back function" endast använder den första parametern (värde) kan de andra parametrarna utelämnas:

**Exempel**

```javascript
let numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

function myFunction(value) {
    return value > 18;
}

console.log(numbers);
console.log(someOver18);
```

**Resultat**:

```
[ 45, 4, 9, 16, 25 ]
true
```

# Array.indexOf()

Metoden `indexOf()` söker i en array efter ett elementvärde och returnerar sin position.

**Obs!** Det första objektet har position 0, det andra objektet har position 1 och så vidare.

**Exempel**

```javascript
let fruits = ["Apple", "Orange", "Apple", "Mango"];
let a = fruits.indexOf("Apple");

console.log(fruits);
console.log(a);
```

**Resultat**:

```
[ 'Apple', 'Orange', 'Apple', 'Mango' ]
0
```

## Syntax

```javascript
array.indexOf(item, start)
```

| Egenskap  | Notering |
| --------- | -------- |
| item      | Nödvändig. Objektet att söka efter. |
| start     | Frivillig. Var du ska börja sökningen. Negativa värden börjar vid den givna positionen och räknar från slutet och söker till slutet. |

`Array.indexOf()` returnerar -1 om objektet inte hittas.

Om artikeln är närvarande mer än en gång returnerar den positionen för den första förekomsten.

# Array.lastIndexOf()

`Array.lastIndexOf()` är detsamma som `Array.indexOf()` men returnerar positionen för den senaste förekomsten av det
angivna elementet.

**Exempel**

```javascript
let fruits = ["Apple", "Orange", "Apple", "Mango"];
let a = fruits.lastIndexOf("Apple");

console.log(fruits);
console.log(a);
```

**Resultat**:

```
[ 'Apple', 'Orange', 'Apple', 'Mango' ]
2
```

## Syntax

```javascript
array.lastIndexOf(item, start)
```

| Egenskap  | Notering |
| --------- | -------- |
| item      | Nödvändig. Objektet att söka efter. |
| start     | Frivillig. Var du ska börja sökningen. Negativa värden börjar vid den givna positionen och räknar från slutet och söker till början |

# Array.find()

Metoden `find()` returnerar värdet för det första array elementet som passerar en testfunktion.

Detta exempel hittar (returnerar värdet på) det första elementet som är större än 18:

**Exempel**

```javascript
let numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}

console.log(numbers);
console.log(first);
```

**Resultat**:

```
[ 4, 9, 16, 25, 29 ]
25
```

Observera att funktionen tar 3 argument:

- Artikels värde
- Artikel indexet
- Arrayen själv

När en "call back function" endast använder den första parametern (värde) kan de andra parametrarna utelämnas:

**Exempel**

```javascript
let numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value) {
    return value > 18;
}

console.log(numbers);
console.log(first);
```

**Resultat**:

```
[ 4, 9, 16, 25, 29 ]
25
```

# Array.findIndex()

Metoden `findIndex()` returnerar indexet för det första array elementet som passerar en testfunktion.

Detta exempel hittar indexet för det första elementet som är större än 18:

**Exempel**

```javascript
let numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}

console.log(numbers);
console.log(first);
console.log(numbers[first]);
```

**Resultat**:

```
[ 4, 9, 16, 25, 29 ]
3
25
```

Observera att funktionen tar 3 argument:

- Artikels värde
- Artikel indexet
- Arrayen själv

När en "call back function" endast använder den första parametern (värde) kan de andra parametrarna utelämnas:

**Exempel**

```javascript
let numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction);

function myFunction(value) {
    return value > 18;
}

console.log(numbers);
console.log(first);
console.log(numbers[first]);
```

**Resultat**:

```
[ 4, 9, 16, 25, 29 ]
3
25
```

# Övningar

1. Skriv av alla exempel och experimentera med dem.

Använd de olika array iterationerna på uppgifterna från [sort](../sort) (uppgifterna nedan)

2. Skapa 4 olika arrayer met 3-5 attribut var för:
    - en karaktär
    - ett vapen
    - en sköld
    - skills

3. Skriv ut variablerna som sorterade strängar

4. Skriv ut variablerna som sorterade strängar, reversed

5. Skapa följande arrays eller hitta på egna:
    - `arr1 = [9, 5, 12, 99, 2, 8, 75]`
    - `arr2 = [5, 99, 2, 75]`
    - `arr3 = [9, 5, 12, 99, 2, 8, 75, 24, 65, 23]`
    - `arr4 = [9, 12, 5]`

6. Skriv en funktion för att sortera dem stigande

7. Skriv en funktion för att sortera dem fallande

8. Gör samtliga arrayer osorterade med alla metoder som gåtts igenom

9. Hitta det högsta och lägsta array värdet i alla arrayer med alla metoder som gåtts igenom

10. Skapa följande objekt:

```javascript
let cars = [
    { type: "Polestar", year: 2021 },
    { type: "Koenigsegg", year: 2016 },
    { type: "Volvo", year: 2018 }
];
```

```javascript
let houses = [
    { floors: 1, color: "red", windows: 4 },
    { floors: 2, color: "green", windows: 8 },
    { floors: 1, color: "blue", windows: 3 }
];
```

```javascript
let persons = [
    { name: "Adam", age: 25, height: 179 },
    { name: "Bengt", age: 23, height: 201 },
    { name: "Cecar", age: 29, height: 163 },
    { name: "David", age: 21, height: 182 }
];
```

11. Sorterar på alla värden som finns i samtliga objekt enligt exempel material.


