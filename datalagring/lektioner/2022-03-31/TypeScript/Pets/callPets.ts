import animal from "./animalClass";
import cat from "./catClass";
import dog from "./dogClass";

// Skapar en katt
// Katten i sin tur skapar en animal och tilldelar den ett namn 
// och ålder.
var petCat=new cat("cat",2);

// Skapar en hund
// Hunden i sin tur skapar en animal och tilldelar den ett namn
// och ålder.
var petDog = new dog("dog",3);

console.clear();
// Katten har tillgång till allt vad Animal har.
// Katten har inte tillgång till vad Hunden har.
petCat.hello();
petCat.meow();
DoYourStuff(petCat);
console.log();

// Hunden har tillgång till allt vad Animal har.
// Hunden har inte tillgång till vad katten har
petDog.hello();
petDog.bark();
DoYourStuff(petDog);

// Polymorfism är en klass som kan användas av olika klasser.
// Polymorfism betyder flera former av samma klass.
// Både katt och hund är animal så båda kommer in i metoden
function DoYourStuff(ani:animal)
{
    // Katten och hunden omvandlas temporärt till
    // ett djur som kan användas av metoden.
    // vi har tillgång till alla metoder som finns i animal.
    ani.sleep();
    ani.eat();
    ani.getOlder();

    // Vi frågar djuret om det är en katt eller en hund.
    if (ani instanceof cat) (ani as cat).meow();
    else if (ani instanceof dog) (ani as dog).bark();
}
