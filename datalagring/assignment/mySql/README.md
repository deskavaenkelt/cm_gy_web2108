# Inlämningsuppgift MySQL

## Uppgift

Skapa 3 tabeller:

- Författare
- Bok
- Kategori

__Författare ska innehålla kolumnerna__

- id
- namn

__Bok ska innehålla kolumnerna__

- id
- titel
- författare
- beskrivning
- år
- pris
- kategori

__Kategori ska innehålla kolumnerna__

- id
- namn

## Att göra

Skapa en ny databas med tabellerna bok, kategori och författare.

Fyll tabellerna med lite relevant data.

Skriv SQL-frågor som visar t ex:
- Böcker tillsammans med kategori
- Böcker tillsammans med kategori och författare.
- Böcker för en viss kategori
- Samtliga kategorier (även dem som inte har en koppling till någon bok) tillsammans med de böcker som har koppling till kategori
- Samtliga böcker (även dem som inte har en koppling till någon kategori) tillsammans med de kategorier som har koppling till bok
- Radera någon rad i bok-tabellen-Radera någon rad i kategori
- tabellen(Håll koll på hur kopplingarna är i mellantabellen och i vilken ordning man behöver radera i tabellerna för referensintegritet)

__Samtliga CRUD operationer ska finnas med!__

## Inlämningsinstruktioner

Lämna in ditt arbete i en komplett `mysql_assignment.sql` fil.

## Deadline

10 Oktober 2021 kl. 23:59

Redovisning/demonstration veckan efter deadline.
