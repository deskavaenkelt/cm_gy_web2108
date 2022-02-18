# Inlämningsuppgift i Webbserverprogrammering 1

## Innehåll

- [Inledning](#inledning)
    - [Bakgrund](#bakgrund)
    - [Frågeställningen](#frgestllningen)
    - [Mål](#ml)
    - [Avgränsning](#avgrnsning)
        - [Backend/API](#backendapi)
        - [Frontend](#frontend)
        - [Testning med REST Klient](#testning-med-rest-klient)
    - [Syfte](#syfte)
    - [Vad ska ni leverera?](#vad-ska-ni-leverera)
- [Projekt Uppgift](#projekt-uppgift)
    - [API med frontend och backend](#api-med-frontend-och-backend)
    - [Funktioner som ska finnas](#funktioner-som-ska-finnas)
        - [CRUD metoder](#crud-metoder)
        - [Egenskaper varje TODO ska ha](#egenskaper-varje-todo-ska-ha)
- [Betygskrav](#betygskrav)
    - [Betyg E](#betyg-e)
    - [Betyg C](#betyg-c)
    - [Betyg A](#betyg-a)
- [Sista inlämningstid](#sista-inlmningstid)

# Inledning

## Bakgrund

Ni är nu i slutet på kursen Webbserverprogrammering 1

## Frågeställningen

Hur kan vi implementera ett API på en backend som vi testar med API-tester innan vi bygger vår frontend.

## Mål

I detta projektet ska ni göra en enkel backend med ett RESTapi som har automatiska tester i backend samt i Insomnia Rest
Client eller Postman. Er Backend ska därefter kopplas till en enklare frontend.

Ert API ska hantera TODOs där ni ska kunna skapa, läsa ut, redigera samt radera TODOs enligt CRUD principen. Era TODOs
ska existera i en "in memory database".

## Avgränsning

### Backend/API

Javascript på backend med hjälp av NODE.js med de paket ni behöver och avgränsat till de paket vi gått igenom under föreläsningarna. Automatiska tester.

#### Ni ska använda:

- Node.JS

#### Ni får använda följande npm-paket:

- [``]()


#### Dvs inga:

- andra NPM paket

#### Frivilligt


### Frontend

React på frontend och användning av JavaScript med de paket ni behöver och avgränsat till de paket vi gått igenom på föreläsningarna.

#### Ni ska använda:

- React

#### Ni får använda följande npm-paket:

- [`React Router v.6`](https://reactrouter.com/docs/en/v6/getting-started/tutorial)
- [`Tachyons`](https://tachyons.io)
- [`Axios`](https://axios-http.com/docs/intro)
- [`React Icons`](https://react-icons.github.io/react-icons)

#### Dvs ingen:

- Vanilla HTML, CSS eller JavaScript
- JQuery
- andra NPM paket

#### Frivilligt

- Media Queries
- [`CSS Moduler`](https://github.com/css-modules/css-modules)

### Testning med REST Klient

Användning av Rest Klient för att skapa manuella och automatiska tester.

Tillåtna klienter:

- Insomnia
- Postman

## Syfte

Att ni ska lära er hur man testar ett API samt hur man kopplar ihop frontend med backend via ett API.

## Vad ska ni leverera?

En TODO applikation som kan:

- Skapa nya TODOs
- Visa alla TODOs från databasen
- Visa en enskild TODO från databasen
- Uppdatera en TODO i databasen
    - Uppdatera texten
    - Uppdatera om en todo är klar eller inte
- Radera TODOs från er TODO databas

Förväntad funktionalitet:

- Full funktionalitet ska finnas på backend med korrekta API-anrop.
- Full funktionalitet ska finnas på frontend med korrekta API-anrop, CSS så man ser vad som är vad på sidan (behöver
  inte vara avancerat).
- En konfigurationsfil med era tester som jag kan importera för att kontrollera era tester.

# Projekt Uppgift

## API med frontend och backend

Skapa en backend med API som kan prata med en frontend samt utför manuella och automatiska tester på backend.

### Funktioner som ska finnas

#### CRUD metoder

- Skapa nya TODOs
- Visa alla TODOs från databasen
- Visa en enskild TODO från databasen
- Uppdatera en TODO i databasen
    - Uppdatera texten
    - Uppdatera om en todo är klar eller inte
- Radera TODOs från er TODO databas

#### Egenskaper varje TODO ska ha

- `id` (unikt id på varje TODO)
- `text` (Själva todo meddelandet)
- `done` (är uppgiften klar)
- `assignedTo` (vem ska utföra uppgiften)

Ni får addera mer fält om ni vill.

# Betygskrav

Det är primärt funktionaliteten på ert arbete som betygssätts. Gränssnittet bör
se polerat ut då det ger erfarenhet, repetition och något som ni skulle kunna ha som "portfolio projekt". Detta skapar en röd tråd i er utveckling.

## Betyg E

- **Planera** lösningsförslag innan uppgiften påbörjas med till exempel:
  - Hur du tänker försöka lösa uppgiften.
  - Pseudokod.
  - Diagram.
  - Trello
- Konsekvent **kod stil**:
  - Tydlig namngivning av variabler.
  - Strukturerad och enkelt kommenterad källkod med tillfredsställande resultat.
  - **Lättläst kod.**
- Gör en enklare kontroll så att dina funktioner fungerar som de ska.
- Manuella tester

### Dokumentation

**I en README.md fil!**

- Gör en enkel dokumentation på ditt arbete, _till exempel_:

  - Beskriv lite olika lösningar du gjort.
  - Beskriv något som var besvärligt att få till.
  - Beskriv om du fått byta lösning och varför i sådana fall.
  - Använd korrekta begrepp och syntax i dina beskrivningar.

#### Projektet skall fungera som avsett

## Betyg C

Allt i [Betyg E](#betyg-e) ska vara uppfyllt samt:

- Upprätta en genomarbetad projektplan
- **Dela upp** din kod i strukturerade komponenter
- Arbeta enligt **DRY-principen** (Do Not Repeat you’re self)
- Kontrollera dina funktioner inte har sidoeffekter:
  - det vill säga kontrollera vad som matar sin i funktionerna och säkerställ att programmet inte kraschar vid
    felaktig inmatning.
  - Kontrollera så att du inte får orimliga resultat beroende på inmatning.
- Se till så att det inte finns programlogiska fel
- Manuella och automatiserade tester finns
- Resultatet är tillfredsställande anpassat till användarens behov utifrån några principer för användbarhet.

### Dokumentation

Din dokumentation ska utöver det i [Betyg E](#betyg-e) innehålla:

- Beskriv hur du felsökt ditt program när det uppstått problem
- Utvärdera din inlämning
    - Vad gick bra
    - Vad gick dåligt
    - Vad har du lärt dig
- Vilka möjligheter ser du med de kunskaper du fått under kursen.
- Eleven gör en noggrann dokumentation av sitt arbete samt utvärderar med nyanserade omdömen sitt arbete och resultat utifrån projektplanen.

## Betyg A

Allt i [Betyg C](#betyg-c) ska vara uppfyllt samt:

- Skriv så tydlig kod så kommentarer ofta blir onödiga.
- Där du använder kommentarer ska de _**noggranna och utförliga/tydliga**_.
- **Väldigt lättläst kod** dvs någon med kunskaper motsvarande den nivå ni befinner er på nu, ska kunna läsa och förstå er kod.
- Majoriteten av din kod ska bestå av strukturerade komponenter samt återanvända komponenter.
- Produkten är av god kvalitet när det gäller funktion, vilket eleven kontrollerar med hjälp av flera tester, även manuella. Dessutom kontrollerar eleven med säkerhet, produktens tillgänglighet med automatiserade tester och simuleringar samt manuella tester.
- Testa er endpoints (Backend)
- 5 tester varav ett `fireEvent()` (Frontend)

### Dokumentation

Din dokumentation ska utöver det i [Betyg C](#betyg-c) innehålla:

- Motivera varför du valt en specifik lösning.
- Lämna förslag på förbättringar av din kod.
- Lämna exempel på lösningar du valde att **inte** implementera
- Lämna förslag på förbättringar av din UI/UX design eller reflektera över den.

# Sista inlämningstid

2022-03-13, 23:59
