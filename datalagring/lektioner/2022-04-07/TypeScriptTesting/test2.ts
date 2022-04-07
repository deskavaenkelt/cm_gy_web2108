// Ett interface innehåller en mall på hur en klass ska se ut, vad den ska innehålla.
// den innehåller ingen logik, bara strukturen.
// Interface är en klass som inte kan skapas utan att
// den har en klass som den ska implementera.
// Därför kan flera interfaces sammanfogas i en klass
interface duck {
    name: string;
    quack();
}

// Ett interface innehåller en mall på hur en klass ska se ut, vad den ska innehålla.
// den innehåller ingen logik, bara strukturen.
interface beaver {
    name: string;
    growl();
}

// En class kan ärvas och byggas ut av andra klasser. Då ändras inte huvudklassen, så man
// behåller kompatibiliteten i projektet men kan ändå lägga till nya funktioner.
class hairyMamal {
    isHairy: boolean;
    toString() { let retVal =  this.isHairy
        ?'this mamal is hairy!!!'
        :'this critter is bald!'
        return retVal;  
  }
}

// Vi kan inte ärva (extend) två klasser! 
// Men vi kan implementera (implements) många interfaces.
class platypus extends hairyMamal implements duck, beaver {
    growl() { // beaver function
        console.log('Grrrrrrr');
    }
    quack() {  // duck function
        console.log('Quack');
    }
    name: string;
    constructor(name: string) {
        super(); // aktiverar moderklassen
        this.name = name; // Sätter namnet på djuret
        this.isHairy = true; // Sätter djuret som skal ha hår
    }

    // Standard sätt att skriva ut innehållet i classen.
    toString() {
        let retVal = this.name + ' is a platypus and ';
        retVal += super.toString();
        return retVal;
    }
}

// Då Platypus är en klass som ärver från en annan klass, 
// så kan vi skapa en instans av den även om variabeln är
// av typen hairyMamal.
let pl: hairyMamal = new platypus('Duckie');
console.log(pl.toString());