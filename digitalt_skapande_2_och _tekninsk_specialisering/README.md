# Portfolio projekt

## Innehåll

- [Inledning](#inledning)
    - [Bakgrund](#bakgrund)
    - [Frågeställningen](#frgestllningen)
    - [Mål](#ml)
    - [Avgränsning](#avgrnsning)
    - [Syfte](#syfte)
    - [Vad ska ni leverera?](#vad-ska-ni-leverera)
        - [Övrigt](#vrigt)
- [Projekt Uppgift](#projekt-uppgift)
    - [Skapa Portfolio Projekt](#skapa-portfolio-projekt)
- [Betygskrav](#betygskrav)
    - [Betyg E](#betyg-e)
    - [Betyg C](#betyg-c)
    - [Betyg A](#betyg-a)
- [Sista inlämningstid](#sista-inlmningstid)

# Inledning

## Bakgrund

Ni är nu i slutet på utbildningen och vi kommer slå ihop kurserna Digitalt skapande 2 och Teknisk specialisering.

## Frågeställningen

Hur kan vi bygga en webbsida till en potentiell kund där vi kombinerar alla tidigare kunskaper under utbildningen. Vi
ska
alltså bygga:

- Frontend i React
- Backend/API med NodeJS (Valfritt)
- Databas med MongoDB (Valfritt)

Med tester på frontend och backend samt använda TypeScript i denna inlämningen.

## Mål

I denna kursen så måste ni tänka på hur er hemsida ser ut med funktionalitet, design och användarupplevelse (UI/UX). Ni
ska även ha
responsiv design för:

- Mobile
- Tablet
- Desktop

Grundtanken är att ni gör ett "Portfolio projekt" som ska vara en webbsida som visar er kunskaper och erfarenheter till
potentiella arbetsgivare.

## Avgränsning

Ni ska använda:

- TypeScript
- React på frontend.
- NodeJS på backend (om backend används).
- MongoDB som databas (om databas används).

Ni får använda:

Valfria Node paket men ni måste kunna förklara vad alla gör och hur ni använt dem.

## Syfte

Få en förståelse för hur man bygger responsiva webbplatser med ett snyggt UI samt genomtänkt UX design. Praktisera de
kunskaper ni fått under tidigare kurser och på så vis kombinera ihop samtliga till en helhetslösning som vi med fördel
driftsätter i live miljö.

## Vad ska ni leverera?

En valfri webbsida som kan fungera som portfolio när ni söker arbete.

**Ni skall använda er av _TypeScript_ i denna inlämning.**

### Övrigt

Alla punker nedan ska vara uppfyllda för att kunna bli godkänd på kursen!

**Ni ska:**

- Använda er av Jira för projektplanering
- Strukturera upp ert arbete
- Dokumentera ert arbete

# Projekt Uppgift

## Skapa Portfolio projekt

Ni ska leverera en snygg helhetslösning som ni kan använda när ni söker arbete framgent.

# Betygskrav

## Generell dokumentation

1. Ni ska ha en generell dokumentation för ert projekt.
2. Ni ska även lämna in era **egna** reflektioner i varsin MarkDown fil `<ertNamnDokumentation>.md`.

Är ni 3 personer i er grupp så innebär det alltså 1 `dokumentation.md` + 3 st `<ertNamnDokumentation>.md`-filer.

## Betyg E

- **Planera** lösningsförslag innan uppgiften påbörjas med till exempel:
    - Hur du tänker försöka lösa uppgiften.
    - Pseudokod.
    - Diagram.
    - Jira
- Konsekvent **kod stil**:
    - Tydlig namngivning av variabler.
    - Strukturerad och enkelt kommenterad källkod med tillfredsställande resultat.
    - **Lättläst kod.**
- Gör en enklare kontroll så att dina funktioner fungerar som de ska.
- Manuella tester
- Semantik i möjligaste mån och god programmeringspraxis
- Jira och projekthantering enligt Scrum
- Användande av TypeScript
- Ordentlig dokumentation på:
    - Hur man driftar hela projektet
    - Hur man startar/stoppar backend/frontend/databas
    - Allt som behövs för att vem som helst ska kunna starta projektet på sin dator

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
- Eleven gör en noggrann dokumentation av sitt arbete samt utvärderar med nyanserade omdömen sitt arbete och resultat
  utifrån projektplanen.

## Betyg A

Allt i [Betyg C](#betyg-c) ska vara uppfyllt samt:

- Upprätta en genomarbetad projektplan som revideras vid behov
- Skriv så tydlig kod så kommentarer ofta blir onödiga.
- Där du använder kommentarer ska de _**noggranna och utförliga/tydliga**_.
- **Väldigt lättläst kod** dvs någon med kunskaper motsvarande den nivå ni befinner er på nu, ska kunna läsa och förstå
  er kod.
- Majoriteten av din kod ska bestå av strukturerade komponenter samt återanvända komponenter.
- Produkten är av god kvalitet när det gäller funktion, vilket eleven kontrollerar med hjälp av flera tester, även
  manuella. Dessutom kontrollerar eleven med säkerhet, produktens tillgänglighet med automatiserade tester och
  simuleringar samt manuella tester.
- Automatiska tester
    - Testa alla era endpoints (Backend) med både Insomnia/Postman samt med Mocha/Chai
    - 20 tester varav 5 `fireEvent()` (Frontend)

### Dokumentation

Din dokumentation ska utöver det i [Betyg C](#betyg-c) innehålla:

- Motivera varför du valt en specifik lösning.
- Lämna förslag på förbättringar av din kod.
- Lämna exempel på lösningar du valde att **inte** implementera
- Lämna förslag på förbättringar av din UI/UX design eller reflektera över den.

## Sista inlämningstid

Deadline 3 Oktober 2022, 13:00 då vi har redovisning med en enkel demonstration utav det ni det ni skapat.
