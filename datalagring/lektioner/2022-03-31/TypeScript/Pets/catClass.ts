import animalClass from './animalClass'

class cat extends animalClass
{
    constructor(name: string, age: number)
    {
        super(name, age);
    }

    meow()
    {
        console.log(`${this.name} is meowing`);
    }
}

export default cat;