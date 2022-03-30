import animal from "./animalClass";
import cat from "./catClass";
import dog from "./dogClass";

var petCat=new cat("cat",2);
var petDog = new dog("dog",3);

console.clear();
petCat.hello();
petCat.meow();
DoYourStuff(petCat);
console.log();
petDog.hello();
petDog.bark();
DoYourStuff(petDog);

function DoYourStuff(ani:animal)
{
    ani.sleep();
    ani.eat();
    ani.getOlder();
}
