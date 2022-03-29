# Inlämningsuppgift i Datalagring

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

Ni är nu i slutet på kursen Datalagring

## Frågeställningen

Hur kan vi implementera en databas till en backend medTillhörande API som vi testar med API-tester.

## Mål

I detta projektet ska ni göra en enkel backend med ett RESTapi som kopplas till en databas.

Ert API ska hantera TODOs där ni ska kunna skapa, läsa ut, redigera samt radera TODOs enligt CRUD principen. 

## Avgränsning

### MongoDB

Vi kommer att använda MongoDB som databas till projektet så tillåtna npm paket är:

- `mongodb`
- `mongoose`

### Backend/API

Javascript på backend med hjälp av NODE.js med de paket ni behöver och avgränsat till de paket vi gått igenom.

Då vi använder oss av TODOs så kan ni återanvända/modifiera er inlämning i Webbserverprogrammering 1 eller bygga om backend på nytt så att den använder sig av en MongoDB databas.

### Frontend

Då vi kommer använda oss av vårt API från inlämningen i Webbserverprogrammering 1 så bör ni kunna återanvända eran befintliga frontend. 

**Så det är _inget krav_ på att tillhandahålla en frontend.**

React på frontend och användning av JavaScript med de paket ni behöver och avgränsat till de paket vi gått igenom.

### Testning med REST Klient

Användning av Rest Klient för att skapa manuella och automatiska tester.

Tillåtna klienter:

- Insomnia
- Postman

Då vi kommer använda oss av vårt API från inlämningen i Webbserverprogrammering 1 så bör ni kunna återanvända era befintliga tester.

**Så det är _inget krav_ på att tillhandahålla en frontend.**

## Syfte

Att ni ska lära er hur man kopplar ihop en databas med backend samt testar den.

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
- En konfigurationsfil med era tester som jag kan importera för att kontrollera era tester.

# Projekt Uppgift

## API med NodeJS backend samt MongoDB databas

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

Det är funktionaliteten på ert arbete som betygssätts, alla operationer ska fungera.

## Betyg E

- Upprätta en enkel projektplan innan uppgiften påbörjas med till exempel:
    - Hur du tänker försöka lösa uppgiften.
    - Pseudokod.
    - Diagram.
- Konsekvent kod stil:
    - Tydlig namngivning av variabler.
    - Strukturerad och enkelt kommenterad källkod med tillfredsställande resultat.
    - **Lättläst kod.**
- Gör en enklare kontroll så att dina funktioner fungerar som de ska.
- Manuella tester

### Dokumentation

- Gör en enkel dokumentation på ditt arbete, till exempel:
    - Beskriv lite olika lösningar du gjort.
    - Beskriv något som var besvärligt att få till.
    - Beskriv om du fått byta lösning och varför i sådana fall.
    - Använd korrekta begrepp och syntax i dina beskrivningar.

#### Programmet skall fungera

## Betyg C

Allt i [Betyg E](#betyg-e) ska vara uppfyllt samt:

- Upprätta en genomarbetad projektplan
- Ren struktur på din kod
- Arbeta enligt DRY-principen (Do Not Repeat you’re self)
- Kontrollera så att du inte får orimliga resultat beroende på inmatning.
- Se till så att det inte finns programlogiska fel

### Dokumentation

Din dokumentation ska utöver det i [Betyg E](#betyg-e) innehålla:

- Beskriv hur du felsökt ditt program när det uppstått problem
- Utvärdera din inlämning
  - Vad gick bra
  - Vad gick dåligt
  - Vad har du lärt dig
- Vilka möjligheter ser du med de kunskaper du fått under kursen.

## Betyg A

Allt i [Betyg C](#betyg-c) ska vara uppfyllt samt:

- Upprätta en genomarbetad projektplan som revideras vid behov
- Skriv så tydlig kod så kommentarer ofta blir onödiga.
- Där du använder kommentarer ska de _**noggranna och utförliga/tydliga**_.
- **Väldigt lättläst kod** dvs någon med mindre-/nybörjar-kunskaper ska kunna läsa och förstå er kod.
- Du ska separera din kod enligt **MVC-Pattern** (Model-View-Controller)

### Dokumentation

Din dokumentation ska utöver det i [Betyg C](#betyg-c) innehålla:

- Motivera varför du valt en specifik lösning.
- Lämna förslag på förbättringar av din kod.
- Lämna exempel på lösningar du valde att **inte** implementera

# Sista inlämningstid

24 Oktober 2021 kl 23:59
