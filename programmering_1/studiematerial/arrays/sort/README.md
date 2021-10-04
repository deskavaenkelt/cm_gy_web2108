# Arrays - Sortering

## Innehåll

- [Sortera en array](#sortera-en-array)
- [Sortera en array baklänges (reversing)](#sortera-en-array-baklnges-reversing)
- [Numerisk sortering](#numerisk-sortering-numeric-sort)
- [Jämförelse funktionen (Compare Function)](#jmfrelse-funktionen-compare-function)
- [Gör en array osorterad](#gr-en-array-osorterad)
- [Fisher Yates Metoden](#fisher-yates-metoden)
- [Hitta det högsta (eller lägsta) array värdet](#hitta-det-hgsta-eller-lgsta-array-vrdet)
- [Använda Math.max() på en array](#anvnda-mathmax-p-en-array)
- [Använda Math.min() på en array](#anvnda-mathmin-p-en-array)
- [My Min/Max JavaScript-metoder](#my-minmax-javascript-metoder)
- [Sortera objekt arrayer](#sortera-objekt-arrayer)
- [Övningar](#vningar)

# Sortera en array

Metoden `sort()` sorterar en array alfabetiskt:

**Exempel**

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
sorted_fruits = fruits.sort();
console.log(fruits);
console.log(sorted_fruits);
```

**Resultat**:

```
[ 'Banana', 'Orange', 'Apple', 'Mango' ]
[ 'Apple', 'Banana', 'Mango', 'Orange' ]
[ 'Apple', 'Banana', 'Mango', 'Orange' ]
```

# Sortera en array baklänges (reversing)

Metoden `reverse()` reverserar elementen i en array.

Du kan använda den för att sortera en array i fallande ordning:

**Exempel**

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
console.log(fruits.sort());
console.log(fruits.reverse());
```

**Resultat**:

```
[ 'Banana', 'Orange', 'Apple', 'Mango' ]
[ 'Apple', 'Banana', 'Mango', 'Orange' ]
[ 'Orange', 'Mango', 'Banana', 'Apple' ]
```

# Numerisk sortering (Numeric Sort)

Som standard sorterar `sort()` värden som **strängar**.

Detta fungerar bra för strängar ("Apple" kommer före "Banana").

Om siffror sorteras som strängar är "25" dock större än "100", eftersom "2" är större än "1".

På grund av detta kommer `sort()`-metoden att ge felaktigt resultat vid sortering av nummer.

Du kan åtgärda detta genom att tillhandahålla en **jämförelsefunktion (compare function)**:

**Exempel**

```javascript
let points = [40, 100, 1, 5, 25, 10];
console.log(points);

points.sort(function (a, b) {
    return a - b
});
console.log(points);
```

**Resultat**:

```
[ 40, 100, 1, 5, 25, 10 ]
[ 1, 5, 10, 25, 40, 100 ]
```

Använd samma trick för att sortera en array i fallande ordning:

**Exempel**

```javascript
let points = [40, 100, 1, 5, 25, 10];
console.log(points);

points.sort(function (a, b) {
    return b - a
});
console.log(points);
```

**Resultat**:

```
[ 40, 100, 1, 5, 25, 10 ]
[ 100, 40, 25, 10, 5, 1 ]
```

# Jämförelse funktionen (Compare Function)

Syftet med jämförelse funktionen är att definiera en alternativ sorteringsordning.

Jämförelse funktionen ska returnera ett negativt, noll eller positivt värde, beroende på argumenten:

```
function(a, b){return a - b}
```

När `sort()` jämför två värden skickar den värdena till jämförelsefunktionen och sorterar värdena efter det
returnerade (negativa, noll, positiva) värdet.

Om resultatet är negativt sorteras `a` före `b`.

Om resultatet är positivt sorteras `b` före `a`.

Om resultatet är 0 görs inga ändringar med sorteringsordningen för de två värdena.

**Exempel**

Jämförelsefunktionen jämför alla värden i arrayen, två värden åt gången `(a, b)`.

När man jämför 40 och 100 kallar `sort()` metoden jämförelsefunktionen (40, 100).

Funktionen beräknar 40 - 100 `(a - b)`, och eftersom resultatet är negativt (-60), sorterar sorteringsfunktionen 40 som
ett värde lägre än 100.

**Exempel**

```javascript
let points = [40, 100, 1, 5, 25, 10];

function myFunction1() {
    points.sort();
    console.log(points);
}

function myFunction2() {
    points.sort(function (a, b) {
        return a - b
    });
    console.log(points);
}

console.log(points);
myFunction1();
myFunction2();
```

**Resultat**:

```
[ 40, 100, 1, 5, 25, 10 ]
[ 1, 10, 100, 25, 40, 5 ]
[ 1, 5, 10, 25, 40, 100 ]
```

# Gör en array osorterad

**Exempel**

```javascript
let points = [40, 100, 1, 5, 25, 10];
console.log(points)
points.sort(function (a, b) {
    return 0.5 - Math.random()
});
console.log(points)
```

**Resultat**:

```
[ 40, 100, 1, 5, 25, 10 ]
[ 100, 40, 5, 1, 10, 25 ]
```

# Fisher Yates Metoden

Ovanstående exempel är `array.sort()` inte korrekt, det kommer att gynna vissa siffror framför de andra.

Den mest populära korrekta metoden kallas "Fisher Yates shuffle" och introducerades i datavetenskap redan 1938!

I JavaScript kan metoden översättas till detta:

**Exempel**

```javascript
let points = [40, 100, 1, 5, 25, 10];
console.log(points)

for (i = points.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * i)
    k = points[i]
    points[i] = points[j]
    points[j] = k
}
console.log(points)
```

**Resultat**:

```
[ 40, 100, 1, 5, 25, 10 ]
[ 1, 10, 100, 25, 40, 5 ]
```

# Hitta det högsta (eller lägsta) array värdet

Det finns inga inbyggda funktioner för att hitta max- eller minvärde i en array.

Men efter att du har sorterat en array kan du använda indexet för att få de högsta och lägsta värdena.

Sortering stigande:

**Exempel**

```javascript
let points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
    return a - b
});
console.log(points)
```

**Resultat**:

```
[ 1, 5, 10, 25, 40, 100 ]
```

Sortering fallande:

**Exempel**

```javascript
let points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
    return b - a
});
console.log(points)
```

**Resultat**:

```
[ 100, 40, 25, 10, 5, 1 ]
```

_Att sortera en hel array är en mycket ineffektiv metod om du bara vill hitta det högsta (eller lägsta) värdet._

# Använda Math.max() på en array

Du kan använda `Math.max.apply` för att hitta det högsta numret i en array:

**Exempel**

```javascript
let points = [40, 100, 1, 5, 25, 10];
console.log(Math.max.apply(null, points))
```

**Resultat**:

```
100
```

# Använda Math.min() på en array

Du kan använda `Math.min.apply` för att hitta det lägsta numret i en array:

**Exempel**

```javascript
let points = [40, 100, 1, 5, 25, 10];
console.log(Math.min.apply(null, points))
```

**Resultat**:

```
1
```

# My Min/Max JavaScript-metoder

Den snabbaste lösningen är att använda en "hemmagjord" metod.

Denna funktion loopar igenom en array som jämför varje värde med det högsta värdet som hittats:

**Exempel find Max**

```javascript
let points = [40, 100, 1, 5, 25, 10];

function myArrayMax(arr) {
    let len = arr.length;
    let max = -Infinity;
    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }
    return max;
}

console.log(myArrayMax(points))
```

**Resultat**:

```
100
```

**Exempel find Min**

```javascript
let points = [40, 100, 1, 5, 25, 10];

function myArrayMin(arr) {
    let len = arr.length;
    let min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    return min;
}

console.log(myArrayMin(points))
```

**Resultat**:

```
1
```

# Sortera objekt arrayer

JavaScript-arrays innehåller ofta objekt:

**Exempel**

```javascript
let cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 }
];

console.log(cars)
```

**Resultat**:

```
[
  { type: 'Volvo', year: 2016 },
  { type: 'Saab', year: 2001 },
  { type: 'BMW', year: 2010 }
]
```

Även om objekt har egenskaper av olika datatyper kan metoden `sort()` användas för att sortera arrayen.

Lösningen är att skriva en jämförelsefunktion för att jämföra egenskapernas värden:

```javascript
cars.sort(function (a, b) {
    return a.year - b.year
});
```

**Exempel sortering på år**

```javascript
let cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 }
];

console.log(cars)
cars.sort(function (a, b) {
    return a.year - b.year
});
console.log(cars)
```

**Resultat**:

```
[
  { type: 'Volvo', year: 2016 },
  { type: 'Saab', year: 2001 },
  { type: 'BMW', year: 2010 }
]
[
  { type: 'Saab', year: 2001 },
  { type: 'BMW', year: 2010 },
  { type: 'Volvo', year: 2016 }
]
```

Att jämföra sträng egenskaper är lite mer komplicerat:

**Exempel**

```javascript
let cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 }
];

console.log(cars)

cars.sort(function (a, b) {
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
});
```

**Resultat**:

```
[
  { type: 'Volvo', year: 2016 },
  { type: 'Saab', year: 2001 },
  { type: 'BMW', year: 2010 }
]
[
  { type: 'BMW', year: 2010 },
  { type: 'Saab', year: 2001 },
  { type: 'Volvo', year: 2016 }
]
```

# Övningar

1. Skriv av alla exempel och experimentera med dem.

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
