// source: https://github.com/ArastoSahbaei/practices/blob/master/Foundation/06-Functions.js

function fun1() {

    /*
        Make a "sayHi" method. Call it twice

            sayHi ()
            sayHi ()
        This should be printed:
            --------
            -------- WELCOME
            --------
            --------
            -------- WELCOME
            --------
    */
}

function fun2() {

    /*
        Similar to before but do a method sayHiTo() that takes a name as an input parameter.
            Ex sayHiTo ("Oscar") will print:
            --------
            -------- WELCOME OSCAR
            --------
    */
}

function fun3() {

    /*
        Make a method "adult" with two parameters "name" and "age". Call it three times

            adult("Peter", 16);
            adult("Lisa", 26);
            adult("Ragnar", 15);
        This should be printed:
            Note! Peter is not an adult!
            Lisa is an adult
            Note! Ragnar is not an adult!
    */

}

function fun4() {

    /*
    Create a method "printVAT" that takes "price" as the input parameter.

    If you e.g. the method is called as follows:
         printVAT(1000)
     ...this is how it should be printed:
         The VAT for the product is 250kr
    */
}

// -------- EXTRA UPPGIFTER -----------------------------------------


function extraFun1() {

    /*
    Create a method "recipe" with a parameter "recipeName" and "ingredients". Call it:

         recipe("Apple Cake", ["Apple", "Flour", "Cinnamon"]);
         recipe("Rotmos", ["Potatoes", "Turnip"]);
     This should be printed:
         TO MAKE APPLE YOU NEED:
         * APPLE
         * FLOUR
         * CINNAMON
         TO MAKE ROTMOS YOU NEED:
         * POTATOES
         * TURNIP

    */
}

function extraFun2() {

    /*
     In Sweden, there are three VAT rates: 25%, 12% and 6%. See here:
     https://www.verksamt.se/starta/skatter-och-avgifter/moms/olika-momssatser
     Write a method "writeOutMoms" that calculates VAT on a product based on the type of product it is
     These calls:
         writeVAT("newspaper", 1000);
         writeVAT("restaurant visit", 1000);
         writeVAT("flight", 1000);
         writeVAT("falafel", 1000);
         writeVAT("hipster beer", 1000);
     Should give the answers:
         The VAT for a newspaper that costs SEK 1000 is SEK 60
         The VAT for a restaurant visit that costs SEK 1000 is SEK 120
         The VAT for a flight that costs SEK 1000 is SEK 60
         The VAT for a falafel that costs SEK 1000 is SEK 250
         The VAT for a hipster beer that costs SEK 1000 is SEK 250
    */

}

function extraFun3() {

    /*
        Sorry, no translation :)
        Modifiera "skrivUtMoms" så funktionen tar hänsyn till om ordet innan ska vara "en" eller "ett":
            Momsen för en tidning som kostar 1000kr är 60kr
            Momsen för ett restaurangbesök som kostar 1000kr är 120kr
            Momsen för ett flyg som kostar 1000kr är 60kr
            Momsen för en falafel som kostar 1000kr är 250kr
            Momsen för en hipsteröl som kostar 1000kr är 250kr
        Tips: skriv en ny metod:
            function enEtt(word) {
            }
        ...som utifrån ord returnerar "en" eller "ett" (eller "en/ett" om ordet inte finns i ordlistan)
    */
}

function extraFun4() {
    /*
     Rewrite the enEtt-method above but use "Set":
        let xxx = new Set()
     */
}
