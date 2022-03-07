# BookFace Fullstack projekt (Grupp uppgift)

## Innehåll

- [Inledning](#inledning)
    - [Bakgrund](#bakgrund)
    - [Frågeställningen](#frgestllningen)
    - [Mål](#ml)
    - [Avgränsning](#avgrnsning)
    - [Syfte](#syfte)
    - [Vad ska ni leverera?](#vad-ska-ni-leverera)
        - [Webbutveckling 3 del](#webbutveckling-3-del)
        - [Webbserverprogrammering 2 del](#webbserverprogrammering-2-del)
        - [Övrigt](#vrigt)
- [Projekt Uppgift](#projekt-uppgift)
    - [Skapa BookFace](#skapa-bookface)
    - [Funktioner som ska finnas](#funktioner-som-ska-finnas)
- [Betygskrav](#betygskrav)
    - [Betyg E](#betyg-e)
    - [Betyg C](#betyg-c)
    - [Betyg A](#betyg-a)
- [Sista inlämningstid](#sista-inlmningstid)

# Inledning

## Bakgrund

Ni är nu i slutet på utbildningen och vi kommer slå ihop kurserna Webbutveckling 3 och Webbserverprogrammering 2.

## Frågeställningen

Hur kan vi bygga en helhetslösning (fullstack) där vi kombinerar alla tidigare kunskaper under utbildningen. Vi ska
alltså bygga:

- Frontend i React
- Backend/API med NodeJS
- Databas med MongoDB

Med tester på frontend och backend samt använda TypeScript i denna inlämningen.

## Mål

I detta projektet ska ni göra en backend med ett RESTapi som kopplas till en frontend samt har automatiska tester i
Insomnia Rest Client eller Postman samt enhetstester på backend och frontend. MongoDB skall användas som databas.

Projektet kan med fördel driftas i live miljö hos någon aktör (ex: Azure, AWS, Digital Ocean med flera). Ett delmål är
även att ha någon enkel verifiering där alla testerna måste gå igenom för att de skall vara tillåtet att drifta
projektet i sådana fall.

I denna kursen så måste ni även tänka på hur er hemsida ser ut med design och användarupplevelse (UI/UX). Ni ska även ha
responsiv design för:

- Mobile
- Tablet
- Desktop

## Avgränsning

Ni ska använda:

- TypeScript
- React på frontend.
- NodeJS på backend.
- MongoDB som databas.

Ni får använda:

Valfria Node paket men ni måste kunna förklara vad alla gör och hur ni använt dem.

## Syfte

Få en förståelse för hur man bygger responsiva webbplatser med ett snyggt UI samt genomtänkt UX design. Praktisera de
kunskaper ni fått under kursen och på så vis kombinera ihop samtliga till en helhetslösning som vi med fördel
driftsätter i live miljö.

## Vad ska ni leverera?

Ni skall använda er av TypeScript i kombination med MERN-Stacken i denna inlämning.

### Webbutveckling 3 del

En frontend byggd i React. Det ska finnas tester manuella och automatiska i projektet som kan användas för validering av
koden.

### Webbserverprogrammering 2 del

En backend byggd i NodeJS. Det ska finnas tester i projektet som kan användas för validering av koden. Både
Insomnia/Postman tester samt automatiska.

### Databas

Ni bör ha separata databaser för development och production och kunna växla mellan dem.

### Övrigt

Om ni driftar ert project online ska ni köra era tester innan bygget av koden för driftning online.

Alla punker nedan ska vara uppfyllda för att kunna bli godkänd på kursen!

**Ni ska:**

- Använda er av Jira för projektplanering
- Strukturera upp ert arbete
- Dokumentera ert arbete

# Projekt Uppgift

## Skapa BookFace

Ni ska leverera en meddelandetjänst som kräver inloggning för att använda och visa innehållet på webbplatsen. Detta
medför att man måste kunna registrera sig och logga in. Lösenorden ska krypteras i databasen och man ska inte kunna
utföra "reverse engineering" på det. Man ska kunna posta meddelanden i ett flöde som alla kan se.

Utöver detta så ska man kunna skicka meddelanden mellan användare men det är en uppgift som ligger som "extra uppgift"
som skall prioriteras at göras sist. Det är en så kallad "nice to have feature".

## Funktioner som ska finnas

En helhetslösning med följande egenskaper:

- Lagra
    - Användare
    - Meddelanden

- Kryptering av lösenord
- Inloggning
- Registrering

- Skicka/Skriva inlägg
- Skicka meddelanden (nice to have feature)

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

Deadline 17 Juni 2022, 23:59
