MVC

    Route --> Controller ---> Model/db ---> Controller ---> View

User kommer till webbsidan:
    * Route skickar användaren till en controller
    * Controller observerar vad som ska hända ?id=45 => visa objekt 45
    * Model hämtar data från databasen
    * Skickar informationen vidare till view

Controllern - backend
View - backend och skickas vidare till frontend
        visas upp för användaren

----------------------------------------------------------------------------------------------------------------
Microsoft MVC / .net
    - Model - skapar objekt i databasen
    - View - skapar HTML-sida
    - Controller - skapar en funktion som skickar informationen till view

    [Route(/user)]
    Controller (som faktiskt har sina routes på plats)
        functioner(metoder)
        anropar databasen vid behov
        Anropar vy
            Generear HTML-sida
            Skickar tillbaka till controller
        skickar tillbaka till frontend

----------------------------------------------------------------------------------------------------------------
Flux (React)
    Fungerar som MVC men föredrar att vyn anropar databas/model

----------------------------------------------------------------------------------------------------------------
Vanlig uppbyggnad av server
+ .net backend
+ react frontend

alt.

node backend
react frontend

alt.
Allt i react.