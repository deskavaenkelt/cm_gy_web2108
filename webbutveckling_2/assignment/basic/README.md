# Kompletteringsuppgift Programmering 1

## Innehåll

- [Inledning](#inledning)
    - [Bakgrund](#bakgrund)
    - [Frågeställningen](#frgestllningen)
    - [Mål](#ml)
    - [Avgränsning](#avgrnsning)
    - [Syfte](#syfte)
    - [Vad ska ni leverera?](#vad-ska-ni-leverera)
- [Projekt Uppgift](#projekt-uppgift)
    - [Lägg till biljetter i kundkorgen](#lgg-till-biljetter-i-kundkorgen)
- [Betygskrav](#betygskrav)
    - [Betyg E](#betyg-e)
- [Sista inlämningstid](#sista-inlmningstid)

# Inledning

## Bakgrund

Ni är nu i slutet på kursen Webbutveckling 2

## Frågeställningen

Hur kan vi göra en statisk kundkorg som uppdateras **i React**.

## Mål

I detta projekt ska ni göra en enkel SPA baserat på att man vill boka biobiljetter för barn/ordinarie/pensionär.
Man ska kunna uppdatera antalet biljetter samt att om totalsumman är över 500kr, så bjuder vi på Popcorn.

## Avgränsning

#### Ni ska använda:

- React

#### Ni får använda följande npm-paket:

- `react-router-dom@6`
- `tachyons`
- `axios`

#### Dvs ingen:

- Vanilla HTML, CSS eller JavaScript
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

- Öka och minska antalet biljetter per kategori
- Visa antalet biljetter man har i kundkorgen
- Visa totalsumman för varje biljettyp
- Visa totalkostnad för besöket
- Visa hur många fria Popcorn man får med i besöket, om totalsumman är under 500kr visa hur långt det är kvar till fri popcorn.

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

## Lägg till biljetter i kundkorgen

Exempel från filmstaden på hur det kan se ut:

![](img/1.png)

Tänk på att filmstaden har funktioner som ni inte ska/behöver ha med ha med och vise versa.

### Funktioner som ska finnas

1. När användaren ändrar antalet biljetter så ska alla uträkningar uppdateras med en gång.

2. Använd er av Filmstadens prissättning.

3. Det ska inte vara möjligt att skriva in felaktiga värden så som negativa värden i "antalet boxarna".

4. Om ordern är på mer än 500kr (eller lika med) så ska det ingå popcorn. Om summan för fri popcorn inte uppnåtts så visa
  hur långt (skillnaden) det är kvar till fri popcorn:

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

Gör en enkel dokumentation på ditt arbete, _till exempel_:

- Beskriv lite olika lösningar du gjort.
- Beskriv något som var besvärligt att få till.
- Beskriv om du fått byta lösning och varför i sådana fall.
- Använd korrekta begrepp och syntax i dina beskrivningar.

-  I utvärderingen diskuterar eleven översiktligt hur det egna gränssnittet förhåller sig till generella principer för hur en god användarupplevelse skapas.

#### Webbplatsen skall fungera

# Sista inlämningstid

6 Februari kl. 23:59
