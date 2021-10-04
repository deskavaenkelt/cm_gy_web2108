# Arrays - Metoder

JavaScript-arrays används för att lagra flera värden i en enda variabel.

## Innehåll

- [Konvertera Arrayer till Strings?](#konvertera-arrayer-till-strings)
- [Popping and Pushing](#popping-and-pushing)
    - [Popping](#popping)
    - [Pushing](#pushing)
- [Skifta element](#skifta-element)
- [Ändra element](#ndra-element)
- [Radera element](#radera-element)
- [Splicing an Array](#splicing-an-array)
- [Använd splice() för att ta bort element](#anvnd-splice-fr-att-ta-bort-element)
- [Sammanfogande (Concatenating) arrays](#sammanfogande-concatenating-arrays)
- [Skivning av en array](#skivning-av-en-array)
- [Automatiskt toString()](#automatiskt-tostring)
- [Hitta max- och min-värden i en array](#hitta-max--och-min-vrden-i-en-array)
- [Övning](#vning)

# Konvertera Arrayer till Strings

JavaScript-metoden `toString()` konverterar en array till en sträng med (kommaseparerade) array-värden.

**Exempel**

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
console.log(fruits.toString());
```

**Resultat**:

```
[ 'Banana', 'Orange', 'Apple', 'Mango' ]
Banana,Orange,Apple,Mango
```

Metoden `join()` förenar också alla arrayelement till en sträng.

Det beter sig precis som `toString()`, men dessutom kan du ange separator:

**Exempel**

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
console.log(fruits.join(" * "));
```

**Resultat**:

```
[ 'Banana', 'Orange', 'Apple', 'Mango' ]
Banana * Orange * Apple * Mango
```

# Popping and Pushing

När du arbetar med arrays är det enkelt att ta bort element och lägga till nya element.

Det här är popping och pushing:

Att poppa objekt **ur** en array eller trycka objekt **in** i en array.

## Popping

Metoden `pop()` tar bort det sista elementet från en array:

**Exempel**

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.pop();
console.log(fruits);
```

**Resultat**:

```
[ 'Banana', 'Orange', 'Apple', 'Mango' ]
[ 'Banana', 'Orange', 'Apple' ]
```

Metoden `pop()` returnerar värdet som "poppades ut":

**Exempel**

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
let pop = fruits.pop();
console.log(fruits);
console.log(pop);
```

**Resultat**:

```
[ 'Banana', 'Orange', 'Apple', 'Mango' ]
[ 'Banana', 'Orange', 'Apple' ]
Mango
```

## Pushing

`push()`-metoden lägger till ett nytt element i en array (i slutet):

**Exempel**

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits);
```

**Resultat**:

```
[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]
```

`push()`-metoden returnerar den nya array-längden:

**Exempel**

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let push = fruits.push("Kiwi");
console.log(fruits);
console.log(push);
```

**Resultat**:

```
5
```

# Skifta element

Skiftning motsvarar popping, arbetar på det första elementet istället för det sista.

Metoden `shift()` tar bort det första array elementet och "skiftar" alla andra element till ett lägre index.

**Exempel**

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
console.log(fruits);
```

**Resultat**:

```
[ 'Orange', 'Apple', 'Mango' ]
```

Metoden `shift()` returnerar strängen som "skiftats ut":

**Exempel**

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let shift = fruits.shift();
console.log(fruits);
console.log(shift);
```

**Resultat**:

```
[ 'Orange', 'Apple', 'Mango' ]
Banana
```

Metoden `unshift()` lägger till ett nytt element i en array (i början) och "unshifts" äldre element:

**Exempel**

```javascript
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
console.log(fruits);
```

**Resultat**:

```
[ 'Lemon', 'Banana', 'Orange', 'Apple', 'Mango' ]
```

Metoden `unshift()` returnerar den nya array-längden.

**Exempel**

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let unshift = fruits.unshift("Lemon");
console.log(fruits);
console.log(unshift);
```

**Resultat**:

```
[ 'Lemon', 'Banana', 'Orange', 'Apple', 'Mango' ]
5
```

# Ändra element

Array element nås med hjälp av deras **indexnummer**:

- Array **index** börjar med 0.
    - [0] är det första arrayelementet,
    - [1] är det andra,
    - [2] är det tredje ...

**Exempel**

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";
console.log(fruits);
```

**Resultat**:

```
[ 'Kiwi', 'Orange', 'Apple', 'Mango' ]
```

The `length` property provides an easy way to append a new element to an array:

**Exempel**

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";
console.log(fruits);
```

**Resultat**:

```
[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]
```

# Radera element

Eftersom JavaScript-arrays är objekt kan element raderas med JavaScript-operatorn `delete:

**Exempel**

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[2]
console.log(fruits);
```

**Resultat**:

```
[ 'Banana', 'Orange', <1 empty item>, 'Mango' ]
```

_**Obs!** Att använda delete kan lämna odefinierade hål i arrayen. Använd `pop()` eller `shift()` istället._

# Splicing an Array

Metoden `splice() kan användas för att lägga till nya objekt i en array:`

**Exempel**

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);
```

**Resultat**:

```
[ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]
```

Den första parametern (2) definierar **positionen** där nya element ska **läggas till** (splitsas in).

Den andra parametern (0) definierar **hur många** element som ska tas bort.

Resten av parametrarna ("Citron", "Kiwi") definierar de nya elementen som ska **läggas till**.

Metoden `splice()` returnerar en array med de raderade objekten:

**Exempel**

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let deleted = fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits);
console.log(deleted);
```

**Resultat**:

```
[ 'Banana', 'Orange', 'Lemon', 'Kiwi' ]
[ 'Apple', 'Mango' ]
```

# Använd splice() för att ta bort element

Med smart parameterinställning kan du använda `splice() för att ta bort element utan att lämna "hål" i arrayen:

**Exempel**

```javascript
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
let deleted = fruits.splice(0, 1);
console.log(fruits);
console.log(deleted);
```

**Resultat**:

```
[ 'Banana', 'Orange', 'Apple', 'Mango' ]
[ 'Orange', 'Apple', 'Mango' ]
[ 'Banana' ]
```

Den första parametern (0) definierar positionen där nya element ska **läggas till** (splitsas in).

Den andra parametern (1) definierar **hur många** element som ska **tas bort**.

Resten av parametrarna utelämnas. Inga nya element kommer att läggas till.

# Sammanfogande (Concatenating) arrays

Metoden `concat()` skapar en ny array genom att slå samman (concatenating) befintliga arrays:

**Exempel med 2 arrays**

```javascript
let myGirls = ["Cecilie", "Lone"];
let myBoys = ["Emil", "Tobias", "Linus"];
let myChildren = myGirls.concat(myBoys);
console.log(myGirls);
console.log(myBoys);
console.log(myChildren);
```

**Resultat**:

```
[ 'Cecilie', 'Lone' ]
[ 'Emil', 'Tobias', 'Linus' ]
[ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus' ]
```

_**Obs:** `concat()`-metoden ändrar inte de befintliga arrayerna. Det returnerar alltid en ny array._

Metoden `concat()` kan ta ett valfritt antal array argument:

**Exempel med 3 arrays**

```javascript
let arr1 = ["Cecilie", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let arr3 = ["Robin", "Morgan"];
let myChildren = arr1.concat(arr2, arr3);
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(myChildren);
```

**Resultat**:

```
[ 'Cecilie', 'Lone' ]
[ 'Emil', 'Tobias', 'Linus' ]
[ 'Robin', 'Morgan' ]
[
  'Cecilie', 'Lone',
  'Emil',    'Tobias',
  'Linus',   'Robin',
  'Morgan'
]
```

`concat()`-metoden kan också ta strängar som argument:

**Exempel addera sträng till array**

```javascript
let arr1 = ["Emil", "Tobias", "Linus"];
let myChildren = arr1.concat("Peter");
console.log(arr1);
console.log(myChildren);
```

**Resultat**:

```
[ 'Emil', 'Tobias', 'Linus' ]
[ 'Emil', 'Tobias', 'Linus', 'Peter' ]
```

# Skivning av en array

Metoden `slice()` skivar ut en bit av en array in i en ny array.

I det här exemplet skärs en del av en array ut från array element 1 ("Orange"):

**Exempel**

```javascript
let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits.slice(1);
console.log(fruits);
console.log(citrus);
```

**Resultat**:

```
[ 'Banana', 'Orange', 'Lemon', 'Apple', 'Mango' ]
[ 'Orange', 'Lemon', 'Apple', 'Mango' ]
```

_Metoden `slice()` skapar en ny array. Det tar inte bort några element från källarrayen._

I det här exemplet skärs en del av en array ut från array element 3 ("Apple"):

**Exempel**

```javascript
let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits.slice(3);
console.log(fruits);
console.log(citrus);
```

**Resultat**:

```
[ 'Banana', 'Orange', 'Lemon', 'Apple', 'Mango' ]
[ 'Apple', 'Mango' ]
```

Metoden `slice()` kan ta två argument så som `slice(1, 3)`.

Metoden väljer sedan element från startargumentet och upp till (men inkluderar inte) slutargumentet.

**Exempel**

```javascript
let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits.slice(1, 3);
console.log(fruits);
console.log(citrus);
```

**Resultat**:

```
[ 'Banana', 'Orange', 'Lemon', 'Apple', 'Mango' ]
[ 'Orange', 'Lemon' ]
```

Om slutargumentet utelämnas, som i de första exemplen, skär metoden `slice()` t resten av arrayen.

**Exempel**

```javascript
let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits.slice(2);
console.log(fruits);
console.log(citrus);
```

**Resultat**:

```
[ 'Banana', 'Orange', 'Lemon', 'Apple', 'Mango' ]
[ 'Lemon', 'Apple', 'Mango' ]
```

# Automatiskt toString()

JavaScript konverterar automatiskt en array till en kommaseparerad sträng när ett primitivt värde förväntas.

Detta är alltid fallet när du försöker mata ut en array till skärmen.

Dessa två exempel ger samma resultat:

**Exempel 1**

```html
<!DOCTYPE html>
<html lang="en">
<body>

<h2>JavaScript Array Methods</h2>

<h2>toString()</h2>

<p>The toString() method returns an array as a comma separated string:</p>

<p id="demo"></p>

<script>
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    document.getElementById("demo").innerHTML = fruits.toString();
</script>

</body>
</html>
```

**Resultat**:

```
JavaScript Array Methods
toString()
The toString() method returns an array as a comma separated string:

Banana,Orange,Apple,Mango
```

**Exempel 2**

```html
<!DOCTYPE html>
<html lang="en">
<body>

<h2>JavaScript Array Methods</h2>

<p>JavaScript automatically converts an array to a comma separated string when a simple value is expected:</p>

<p id="demo"></p>

<script>
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    document.getElementById("demo").innerHTML = fruits;
</script>

</body>
</html>
```

**Resultat**:

```
JavaScript Array Methods
JavaScript automatically converts an array to a comma separated string when a simple value is expected:

Banana,Orange,Apple,Mango
```

**Däremot på en backend eller när man skriver till konsolen**

**Exempel 3**

```javascript
let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let string = fruits.toString()
console.log(fruits);
console.log(string);
```

**Resultat**:

```
[ 'Banana', 'Orange', 'Lemon', 'Apple', 'Mango' ]
Banana,Orange,Lemon,Apple,Mango
```

_**Obs!** Här gäller inte "automatiskt toString"_

_Alla JavaScript-objekt har en `toString()`-metod._

# Hitta max- och min-värden i en array

Det finns inga inbyggda funktioner för att hitta det högsta eller lägsta värdet i en JavaScript-array.

# Övning

1. Skriv av alla exempel och experimentera med dem.

2. Skapa 4 olika arrayer met 3-5 attribut var för:
    - en karaktär
    - ett vapen
    - en sköld
    - skills

3. Skriv ut variablerna som strängar

4. Använd join() på arrayerna och skriv ut strängarna till skärmen

5. Använd `pop` 2-3 ggr per array, skriv ut varje steg till skärmen

6. Använd `push` 2-3 ggr per array, skriv ut varje steg till skärmen

7. Använd `shift` 2-3 ggr per array, skriv ut varje steg till skärmen

8. Använd `unshift` 2-3 ggr per array, skriv ut varje steg till skärmen

9. Ändra element värde på 2-3 positioner i varje array

10. Använd `delete` 2-3 ggr per array, skriv ut varje steg till skärmen

11. Vilka "problem" finner du med metoden `delete`

12. Använd `splice()` 2-3 ggr per array, skriv ut varje steg till skärmen

13. Använd `splice()` 2-3 ggr per array för att **ta bort element**, skriv ut varje steg till skärmen

14. Sätt ihop dina arrayer med `.concat`, skriv ut varje steg till skärmen
    - 2 arrayer alla varianter
    - 3 arrayer alla varianter
    - 4 arrayer alla varianter

15. Sätt in strängar i dina arrayer med `.concat`, skriv ut varje steg till skärmen

16. Använd `slice()` 2-3 ggr per array, skriv ut varje steg till skärmen

17. Använd `slice()` 2-3 ggr per array med dubbla parametrar, skriv ut varje steg till skärmen

18. Använd `toString()` på dina arrayer, skriv ut varje steg till skärmen
