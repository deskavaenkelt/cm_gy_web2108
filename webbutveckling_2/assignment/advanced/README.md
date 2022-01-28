# Inlämningsuppgift - Avancerad

## Innehåll

- [Inledning](#inledning)
    - [Bakgrund](#bakgrund)
    - [Frågeställningen](#frgestllningen)
    - [Mål](#ml)
    - [Avgränsning](#avgrnsning)
    - [Syfte](#syfte)
    - [Vad ska ni leverera?](#vad-ska-ni-leverera)
- [Projekt Uppgift](#projekt-uppgift)
    - [Lägg till varor i kundkorgen](#lgg-till-varor-i-kundkorgen)
- [Betygskrav](#betygskrav)
    - [Betyg E](#betyg-e)
    - [Betyg C](#betyg-c)
    - [Betyg A](#betyg-a)
- [Sista inlämningstid](#sista-inlmningstid)

# Inledning

## Bakgrund

Ni är nu i slutet på kursen Webbutveckling 2

## Frågeställningen

Hur kan vi göra en kundkorg som uppdateras **i React**.

## Mål

I detta projekt ska ni göra en SPA i React där man kan lägga album man vill köpa i en kundkorg. Man ska kunna uppdatera
antalet album samt att när en viss summa nås får man fri frakt.

## Avgränsning

#### Ni ska använda:

- React

#### Ni får använda följande npm-paket:

- `react-router-dom@6`
- `tachyons`
- `axios`

#### Dvs ingen:

- HTML, CSS eller Vanilla JavaScript
- JQuery
- andra NPM paket

#### Frivilligt

- Media Queries
- CSS Moduler

### Ni får givetvis utgå från vanilla men implementeringen ska vara i React

## Syfte

Få en förståelse för hur man bygger responsiva webbplatser med ett snyggt UI samt genomtänkt UX design i React.

## Vad ska ni leverera?

### En applikation med en kundkorg, där man ska kunna:

- Visa vilka album som finns
- Lägga till album i en kundkorg
- Ta bort album i en kundkorg
- Uppdatera antalet album i en kundkorg

### Gränssnittsmässigt så bör ni ha:

- Wireframes (en grov skiss på vad ni tänkt)
- En snyggare Prototyp på hur ni tänkt er resultatet
- Personas (2-3 st)
- Genomtänkta/enhetliga fonter
- Genomtänkt/enhetligt färgschema
- Genomtänkt UI (Användargränssnitt) som ska ge en bra UX (Användarupplevelse)

### Övrigt

- Ni bör använda er av Trello för projektplanering
- Strukturera upp ert arbete
- Dokumentation på ert arbete

# Projekt Uppgift

## Lägg till varor i kundkorgen

![](img/1.png)

### Funktioner som ska finnas

1. När användaren ändrar antalet album så ska summan uppdateras med en gång.

2. Priser på varor i intervallet **0-79kr**

3. Det ska inte vara möjligt att skriva in felaktiga värden så som negativa värden i "antalet album boxarna".

4. Kundkorgen ska vara tillgänglig från bilden på en kundkorg samt knappen "Checkout".

5. Om ordern är på mer än **259kr** (eller lika med) så ska det vara fri frakt. Om summan för fri frakt inte uppnåtts så
   visa hur långt (skillnaden) det är kvar till fri frakt:

6. Kontrollera och hantera felaktiga värden

![](img/2.png)

# Betygskrav

Det är primärt funktionaliteten i kombination med grundläggande gränssnittsdesign på ert arbete som betygssätts men ert projekt ska ändå se ordentligt ut då ni lärt er kombinera färger, typsnitt samt hur man vill att ögat ska dras/förflyttats över er sida i Gränssnittsdesignskursen.

Er sida ska med andra ord se någorlunda polerad ut då vi hela tiden för varje nykurs  bygger på kunskaper från tidigare kurser och skapar en röd tråd i er utveckling.

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

### Dokumentation

**I en README.md fil!**

- Gör en enkel dokumentation på ditt arbete, _till exempel_:

  - Beskriv lite olika lösningar du gjort.
  - Beskriv något som var besvärligt att få till.
  - Beskriv om du fått byta lösning och varför i sådana fall.
  - Använd korrekta begrepp och syntax i dina beskrivningar.

-  I utvärderingen diskuterar eleven översiktligt hur det egna gränssnittet förhåller sig till generella principer för hur en god användarupplevelse skapas.

#### Webbplatsen skall fungera

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
- **Väldigt lättläst kod** dvs någon med mindre-/nybörjar-kunskaper ska kunna läsa och förstå er kod.
- Majoriteten av din kod ska bestå av strukturerade komponenter samt återanvända komponenter.
- Produkten är av god kvalitet när det gäller funktion vilket eleven kontrollerar med hjälp av flera tester, även manuella. Dessutom kontrollerar eleven med säkerhet produktens tillgänglighet med automatiserade tester och simuleringar samt manuella tester.

### Dokumentation

Din dokumentation ska utöver det i [Betyg C](#betyg-c) innehålla:

- Motivera varför du valt en specifik lösning.
- Lämna förslag på förbättringar av din kod.
- Lämna exempel på lösningar du valde att **inte** implementera
- Lämnna förslag på förbättringar av din UI/UX design eller reflektera över den.

# Sista inlämningstid

6 Februari kl. 23:59
