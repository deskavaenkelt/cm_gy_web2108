class Heather
{
    name: string;
    age: number;
    era: string;
    quote:string;
    constructor()
    {
        this.name="Alessa Guillespie";
        this.age=5;
        this.era="Silent Hill 1";
        this.quote="Daddy, help me! Daddy, where are you?";
    }

    public Hello()
    {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I live in the era of ${this.era}`);
        console.log(`- ${this.quote}`);
        console.log("");
    }
}
console.clear();
var heather = new Heather();
heather.Hello();

heather.name="Heather Morris";
heather.age=18;
heather.era="Silent Hill 3";
heather.quote="My father is dead! He's murdered! Get out! This is all your fault!";
heather.Hello();

heather.name="Cheryl Mason";
heather.age=25;
heather.era="Silent Hill: Shattered Memories";
heather.quote="Why did you have to die? It wasn't my fault. Someone has to take the blame.";
heather.Hello();
