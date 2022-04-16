// Clean code regler!
// Inga magiska tal, inte enbart 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
// Använd const eller enum
// Skapa funktioner till allt!
// Allt i en for-loop eller if-sats kan brytas ut till en funktion
// Funktionsnamnet ska beskrivas vad funktionen gör och vad den returnerar
// Funktionsnamnet ska vara enkel och intuitivt
// Funktionsnamnet ska vara kort och enkelt för användaren
// Funktionen ska enbart göra det namnet säger
// Variabelnamn ska beskriva vad variabeln innehåller
// while är oftast snyggare än for
// foreach är oftast snyggare än for

// GetName säger inte mycket om funktionens användning
// GetMonthName förklarar vad funktionen gör och vad den returnerar
function getMonthName(value: number) {
    switch (value) {
        case 1: return 'Januari';
        case 2: return 'Februari';
        case 3: return 'Mars';
        case 4: return 'April';
        case 5: return 'Maj';
        case 6: return 'Juni';
        case 7: return 'Juli';
        case 8: return 'Augusti';
        case 9: return 'September';
        case 10: return 'Oktober';
        case 11: return 'November';
        case 12: return 'December';
        default: return 'Okänd månad';
    }
}

const months = 12;

// forsatser är inte snygga och dåligt deklarerade variabler
// gör det inte bättre
for (let m = 1; m <= months; m++) {
    console.log(getMonthName(m));
}

// While är lättare att läsa och bra namn på variabler gör allt
// enklare
let currentMonth = 0;
while (currentMonth++ < months) {
    console.log(getMonthName(currentMonth));
}

// Siffror gör alltid koden förvirrande
currentMonth=5;
let monthName=getMonthName(6);

// Alltid enklare att ha en siffra som motsvarar ett värde, än att
// jämföra mot en sträng
// (Ungefär som vi håller koll på ID för att peka mot det som finns i databasen)
if (currentMonth == 5) { console.log('Vår, nästan sommar'); }

// Att arbeta med strängar kräver att man är redo att kolla alternativa stilar
// som strängen har
if (monthName.toLocaleLowerCase().trim() ==='juni') { console.log('Sommar!'); }

// Enums gör koden snyggare!
enum month {
    Januari = 1,
    Februari,
    Mars,
    April,
    Maj,
    Juni,
    Juli,
    Augusti,
    September,
    Oktober,
    November,
    December
}

// Även om vi skulle vilja mata in månadsnamnet på vår variabel så fungerar
// inte det.
// month='oktober'; <--- detta fungerar inte för att variabeln är typad till siffra
// --------- snyggaste sättet -------------

// Enums omvandlas automagiskt till siffror
currentMonth = month.Oktober; // blir 10
console.log(getMonthName(currentMonth)); // Oktober

// Vi kan använda enums i if-satser!!! Yay!
if (currentMonth == month.December) { console.log('Jul!!!'); }

// ----------------------------------------
// Ochså ett sätt att använda sig av enums
// fortfarande snyggare än med siffror
console.log(getMonthName(month.Juni));
