# 2021-09-06

## Dagens lektion

- [Repetition HTML](#repetition-html)
    - [Krav på ett HTML dokument](#krav-p-ett-html-dokument)
    - [Vi kommer editera vår mall/template](#vi-kommer-editera-vr-malltemplate)
    - [Taggar vi gått igenom](#taggar-vi-gtt-igenom)
    - [Semantik](#semantik)
    - [Kommentarer](#kommentarer)
- [Repetition CSS]()
    - [Box modellen](#box-modellen)
    - [Inline CSS](#inline-css)
    - [Internal CSS](#internal-css)
    - [External CSS](#external-css)
    - [Cascading Order](#cascading-order)
    - [Selectors](#selectors)
    - [CSS Layout - float and clear](#css-layout---float-and-clear)
- [Ny HTML](#ny-html)
    - [Tabeller](#tabeller)
    - [](#)
    - [](#)
- [Ny CSS](#ny-css)
    - [Flexbox CSS](#flexbox-css)
    - [](#)
- [](#)

## Repetition HTML

### Krav på ett HTML dokument:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Title</title>
</head>
<body>

</body>
</html>
```

### Vi kommer editera vår mall/template

1. Öppna inställningar/settings -> Editor -> File andCode Template
2. Markera `HTML`
3. Efter `<meta charset="UTF-8">` lägg till raden:   
   `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
4. När ni sedan skapar en ny HTML-fil så bör det se ut ungefär som nedan.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Title</title>
</head>
<body>

</body>
</html>
```

### Taggar vi gått igenom

(Utöver de som krävs)

```html
<h1></h1> till <h6></h6>
<p></p>
<span></span>
<strong></strong>
<em></em>

<img src='' alt=''>
<a href=''></a>

<section></section>
<article></article>
<div></div>

<form action=''></form>
<label></label>
<input type='text'>
<input type='email'>
<input type='password' minlength='5' maxlength='10'>
<input type="date">
<input type='radio'>
<input type='checkbox'>
<input type='submit'>
<input type='reset'>
```

### Semantik

[HTML Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)

Exempel på __icke-semantiska__ element/taggar: `<div>` och `<span>` - De säger inget om vad de innehåller.

Exempel på __semantiska__ element/taggar: `<form>`, `<table>`, och `<article>` - De definierar klart vad de innehåller.

#### Semantiska element i HTML

```html

<article></article>
<aside></aside>
<details></details>
<figcaption></figcaption>
<figure></figure>
<footer></footer>
<header></header>
<main></main>
<mark></mark>
<nav></nav>
<section></section>
<summary></summary>
<time></time>
```

### Kommentarer

Vi skriver kommentarer i HTML med taggen `<!-- Kommentar -->`, exempel:

```html
<!-- Write your comments here -->

<!-- This is a comment -->

<p>This is a paragraph.</p>

<!-- Remember to add more information here -->

<!-- Do not display this image at the moment
<img border="0" src="pic_trulli.jpg" alt="Trulli">
-->
```

## Repetition CSS

CSS = Cascading Style Sheet

### Box modellen

[w3schools](https://www.w3schools.com/css/css_boxmodel.asp)

### Inline CSS

Är när vi skriver styling direkt i taggarna.

`index.html`

```html
<!DOCTYPE html>
<html lang='en'>
<body>

<h1 style="color:blue;text-align:center;">This is a heading</h1>
<p style="color:red;">This is a paragraph.</p>

</body>
</html>
```

__Tips:__ Inline CSS förlorar många av fördelarna med stylesheets, *så använd det så lite som möjligt.*

### Internal CSS

Är när vi skriver vår CSS i `<head>`.

`index.html`

```html
<!DOCTYPE html>
<html lang='en'>
<head>
    <style>
        body {
            background-color: linen;
        }

        h1 {
            color: maroon;
            margin-left: 40px;
        }
    </style>
    <title>Title</title>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```

__Tips:__ Detta används framför allt i guider där man enbart vill ha en fil, *för enkelhetens skull*.

### External CSS

`style.css`

```css
body {
    background-color: linen;
}

h1 {
    color: maroon;
    margin-left: 40px;
}
```

`index.html`

```html
<!DOCTYPE html>
<html lang='en'>
<head>
    <title>Title</title>
    <link rel='stylesheet' href='style.css'>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```

__Tips:__ Detta är det som primärt används.

### Cascading Order

Prioritering av CSS

1. Inline CSS
2. External och Internal CSS (i `<head>`, prio enligt den ordning de står i)
3. Webbläsarens standardinställningar

### CSS Enheter

[Länk till w3schools](https://www.w3schools.com/css/css_units.asp)

### Selectors

Med detta menas att vi kan modifiera `taggar` direkt men att vi även kan skapa ytterligare `selectors` med hjälp av `id`
och `class`.

- `<tag-name>` används när vi vill påverka alla taggar av en viss typ.
- `id` används för unika saker likt någons personnummer.
- `class` används för återkommande saker likt att vi vill ha samma font eller färg på vissa element.

Exempel med Internal CSS:

```html
<!DOCTYPE html>
<html lang='en'>
<head>
    <style>
        body {
            background-color: linen;
        }

        h1 {
            color: maroon;
            margin-left: 40px;
        }

        #sub-heading {
            font-size: 2em;
        }

        .my-paragraph {
            color: maroon;
        }
    </style>
    <title>Title</title>
</head>
<body>

<h1>This is a heading</h1>

<h2 id='sub-heading'>This is a sub-heading</h2>

<p class='my-paragraph'>This is a paragraph.</p>
<p class='my-paragraph'>This is a paragraph.</p>
<p class='my-paragraph'>This is a paragraph.</p>

</body>
</html>
```

### CSS Layout - float and clear

Vi nuddade vid CSS float förra veckan.

Snabb titt på hur vi gjorde sist samt självstudier att titta på det igen:

[Länk till w3schools](https://www.w3schools.com/css/css_float.asp)

## Ny HTML

### Tabeller

## Ny CSS

### Flexbox CSS

## Övningar

- [HTML Quiz](https://www.w3schools.com/html/html_quiz.asp)
- [Övningar i HTML](https://www.w3schools.com/html/exercise.asp)
- [CSS Selector Game](https://css-diner.netlify.app/)



