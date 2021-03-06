class Heather {
    name: string;
    age: number;
    era: string;
    quote: string;
    constructor() {
        this.name = "Alessa Guillespie";
        this.age = 5;
        this.era = "Silent Hill 1";
        this.quote = "Daddy, help me! Daddy, where are you?";
    }

    public Hello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I live in the era of ${this.era}`);
        console.log(`- ${this.quote}`);
        console.log("");
    }
}
console.clear();

let heatherSH = new Heather(); // Instansiera klassen
let heatherSH3 = new Heather(); // Instansiera klassen
let heatherSHSM = new Heather(); // Instansiera klassen

heatherSH3.name = "Heather Morris";
heatherSH3.age = 18;
heatherSH3.era = "Silent Hill 3";
heatherSH3.quote = "My father is dead! He's murdered! Get out! This is all your fault!";

heatherSHSM.name = "Cheryl Mason";
heatherSHSM.age = 25;
heatherSHSM.era = "Silent Hill: Shattered Memories";
heatherSHSM.quote = "Why did you have to die? It wasn't my fault. Someone has to take the blame.";

heatherSH.Hello();
heatherSH3.Hello();
heatherSHSM.Hello();
