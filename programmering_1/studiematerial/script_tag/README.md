# \<script> - taggen

## Innehåll

- [Intern/Inline JavaScript](#interninline-javascript)
- [JavaScript-funktioner och händelser](#javascript-funktioner-och-hndelser)
- [JavaScript i `<head>` eller `<body>`](#javascript-i-head-eller-body)
- [JavaScript i `<head>`](#javascript-i-head)
- [JavaScript i `<body>`](#javascript-i-body)
    - [Viktigt!](#viktigt)
- [Extern JavaScript](#extern-javascript)
    - [Fördelar med externa JavaScript](#frdelar-med-externa-javascript)
- [Externa referenser](#externa-referenser)
- [Separat JavaScript fil (enligt kom igång dokumentet)](#separat-javascript-fil-enligt-kom-igng-dokumentet)
- [JavaScript Output](#javascript-output)
- [JavaScript visningsmöjligheter](#javascript-visningsmjligheter)
- [Använda innerHTML](#anvnda-innerhtml)
- [Använda `document.write()`](#anvnda-documentwrite)
    - [Varning 1](#varning-1)
    - [Varning 2](#varning-2)
- [Använda `window.alert()`](#anvnda-windowalert)
- [Använda `console.log()`](#anvnda-consolelog)
- [JavaScript Print](#javascript-print)
- [Övningar](#vningar)

I HTML infogas JavaScript-kod mellan `<script>` och `</script>` taggar.

## Intern/Inline JavaScript

``` html
<script>
document.getElementById("demo").innerHTML = "My First JavaScript";
</script>
```

### Notera

Äldre JavaScript-exempel kan använda ett typattribut:

``` html
<script type = "text / javascript">
```

Typattributet krävs inte då JavaScript är standardspråk för skript i HTML.

## JavaScript-funktioner och händelser

En JavaScript-funktion är ett block av JavaScript-kod, som kan köras när den "kallas" på.

Till exempel kan en funktion anropas när en händelse inträffar, som när användaren klickar på en knapp.

Vi kommer gå igenom funktioner senare i kursen.

## JavaScript i `<head>` eller `<body>`

Du kan placera valfritt antal skript i ett HTML-dokument.

Skript kan placeras i `<body>`, eller i `<head>` -sektionen på en HTML-sida, eller i båda.

## JavaScript i `<head>`

I det här exemplet placeras en JavaScript-funktion i avsnittet `<head>` på en HTML-sida.

Funktionen anropas (kallas) när man klickar på en knapp:

```html 
<!DOCTYPE html>
<html lang="en">
<head>
<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</head>
<body>

<h1>A Web Page</h1>
<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>

</body>
</html>
```

[Exempel 5](exempel/exempel5.html)

## JavaScript i `<body>`

I det här exemplet placeras en JavaScript-funktion i avsnittet `<body>` på en HTML-sida.

Funktionen anropas (kallas) när man klickar på en knapp:

``` html 
<!DOCTYPE html>
<html lang="en">
<body>

<h1>A Web Page</h1>
<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>

</body>
</html>
```

[Exempel 6](exempel/exempel6.html)

### Viktigt!

Att placera skript längst ner på `<body>` -elementet förbättrar visningshastigheten, eftersom tolkning av skript saktar
ner visningen av innehållet på skärmen.

## Extern JavaScript

Skript kan också placeras i externa filer:

```javascript
function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}
```

[Exempel 7](exempel/exempel7.js)

Externa skript är praktiska när samma kod används på många olika webbsidor.

JavaScript-filer har fil-tillägget `.js`.

För att använda ett externt skript, placera namnet på skriptfilen i attributet src (source) för en `<script>` -tagg:

```html

<script src="myScript.js"></script>
```

Du kan placera en extern skriptreferens i `<head>` eller `<body>` som du vill.

Skriptet beter sig som om det befann sig exakt där taggen `<script>` finns.

Externa skript kan inte innehålla `<script>` -taggar.

### Fördelar med externa JavaScript

Att placera skript i externa filer har några fördelar:

- Den separerar HTML och kod
- Det gör HTML och JavaScript lättare att läsa och underhålla
- Cachade JavaScript-filer kan påskynda sidläsningar

För att lägga till flera skript-filer på en sida - använd flera skript-taggar:

```html

<script src="myScript1.js"></script>
<script src="myScript2.js"></script>
```

## Externa referenser

Externa skript kan hänvisas till med en fullständig URL eller med en sökväg i förhållande till den aktuella webbsidan.

I det här exemplet används en fullständig URL för att länka till ett skript:

```html

<script src="https://www.w3schools.com/js/myScript1.js"></script>
```

I det här exemplet används ett skript i en angiven mapp på den aktuella webbplatsen:

```html

<script src="/js/myScript1.js"></script>
```

This example links to a script located in the same folder as the current page:

```html

<script src="myScript1.js"></script>
```

## Separat JavaScript fil (enligt kom igång dokumentet)

```html

<html lang="en">
<header>
    <script src="./index.js"/>
</header>

<body>
<h1>Let's learn JavaScript</h1>
</body>

</html>
```

```javascript
alert("Welcome to this JavaScript tutorial")
```

# JavaScript Output

## JavaScript visningsmöjligheter

JavaScript kan "visa" data på olika sätt:

- Skriva in i ett HTML-element med hjälp av `innerHTML`.
- Skriva in i HTML-utdata med `document.write()`.
- Skriva in en varningsruta med hjälp av `window.alert()`.
- Skriva till webbläsarkonsolen med `console.log()`.

## Använda innerHTML

För att komma åt ett HTML-element kan JavaScript använda metoden `document.getElementById(id)`.

ID-attributet `id` definierar HTML-elementet. Egenskapen `innerHTML` definierar HTML-innehållet:

```html
<!DOCTYPE html>
<html lang="en">
<body>

<h1>My First Web Page</h1>
<p>My First Paragraph</p>

<p id="demo"></p>

<script>
    document.getElementById("demo").innerHTML = 5 + 6;
</script>

</body>
</html>
```

[Exempel 8](exempel/exempel8.html)

Att ändra den inre HTML-egenskapen för ett HTML-element är ett vanligt sätt att visa data i HTML.

## Använda `document.write()`

För teständamål är det bekvämt att använda `document.write()`:

```html
<!DOCTYPE html>
<html lang="en">
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
    document.write(5 + 6);
</script>

</body>
</html>
```

[Exempel 9](exempel/exempel9.html)

### Varning 1

Med hjälp av `document.write()` efter att ett HTML-dokument har laddats raderas all befintlig HTML:

```html
<!DOCTYPE html>
<html lang="en">
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<button type="button" onclick="document.write(5 + 6)">Try it</button>

</body>
</html>
```

[Exempel 10](exempel/exempel10.html)

### Varning 2

Metoden `document.write()` ska endast användas för testning.

## Använda `window.alert()`

Du kan använda en varningsruta för att visa data:

```html
<!DOCTYPE html>
<html lang="en">
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
    window.alert(5 + 6);
</script>

</body>
</html>
```

[Exempel 11](exempel/exempel11.html)
Du kan hoppa över `window` nyckelordet.

I JavaScript är fönsterobjektet det globala omfångsobjektet, vilket innebär att variabler, egenskaper och metoder som
standard tillhör fönsterobjektet. Det betyder också att det är frivilligt att ange `window` nyckelordet:

```html
<!DOCTYPE html>
<html lang="en">
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
    alert(5 + 6);
</script>

</body>
</html>
```

[Exempel 12](exempel/exempel12.html)

## Använda `console.log()`

För felsökningsändamål kan du ringa metoden console.log()` i webbläsaren för att visa data.

Du kommer att lära dig mer om felsökning i ett senare kapitel.

```html
<!DOCTYPE html>
<html lang="en">
<body>

<script>
    console.log(5 + 6);
</script>

</body>
</html>
```

[Exempel 13](exempel/exempel13.html)

## JavaScript Print

JavaScript har inga utskriftsobjekt eller utskriftsmetoder.

Du kan inte komma åt utdataenheter från JavaScript.

Det enda undantaget är att du kan ringa metoden `window.print() i webbläsaren för att skriva ut innehållet i det
aktuella fönstret.

```html
<!DOCTYPE html>
<html lang="en">
<body>

<button onclick="window.print()">Print this page</button>

</body>
</html>
```

[Exempel 14](exempel/exempel14.html)

# Övningar

Skriv av alla exempel och se så att de fungerar på din egna dator
