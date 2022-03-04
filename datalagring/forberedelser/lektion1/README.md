# Lektion 1

## MySQL

[CRUD Operationer](crud_mysql.sql)

## Övningar

Skapa en ny databas och spara den med namnet ”uppgifter”.

1. Skapa en tabell som du kallar för ”dator”. Följande kolumner skall finnas med, välj passande namn. Tänk ut vilka
   datatyper som passar bäst, varchar, int etc.
    - Artikelnummer
    - Fabrikat
    - Processortyp
    - HastighetGhz
    - RAM
    - Hårddiskstorlek

   Skriv SQL för att skapa tabellen. Mata in minst 3 poster i din tabell.

2. Skriv en SQL-fråga som hämtar alla datorer från tabellen ”datorer” som är av processortypen ”Intel”.

3. Skriv en SQL-fråga som visar datorer som har större RAM än 4 (GB).

4. Skapa en tabell för ”skivor”. Tabellen skall kunna användas av t.ex. en butik för CD, LP-skivor, så att all nödvändig
   information om varje skiva finns med.  
   Skapa själv kolumner för tabellen, och välj rätt datatyp. Man skall kunna hitta information om vad skivan heter, vad
   den kostar, när den är utgiven etc.  
   Minst 5 kolumner ska du skapa. Skriv SQL för att skapa tabellen. Mata in minst 3 poster i din tabell.

5. Skriv en SQL-fråga som visar alla skivor för en viss artist från tabellen ”skivor”.

6. Skriv en SQL-fråga som visar alla skivor för en viss artist som har givits ut senare än 2008 från tabellen ”skivor”.

7. Skriv en SQL-fråga som lägger till en ny skiva i tabellen ”skivor”. 
