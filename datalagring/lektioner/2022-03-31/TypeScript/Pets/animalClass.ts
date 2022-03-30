class animal
{
    name:string;
    age:number;

    constructor(name, age)
    {
        this.name=name;
        this.age=age;
    }

    public hello()
    {   
        console.log(`${this.name} is saying hello`);
    }

    public eat()
    {
        console.log(`${this.name} is eating`);
    }

    public sleep()
    {
        console.log(`${this.name} is sleeping`);
    }

    public getOlder()
    {
        this.age++;
        console.log(`${this.name} is now ${this.age} years old`);
    }
}

export default animal;