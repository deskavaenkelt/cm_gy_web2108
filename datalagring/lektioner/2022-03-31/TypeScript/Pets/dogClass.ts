import animalClass from './animalClass';

class dog extends animalClass
{
    constructor(name: string, age: number)
    {
        super(name, age);
    }

    bark()
    {
        console.log(`${this.name} is barking`);
    }
}

export default dog;