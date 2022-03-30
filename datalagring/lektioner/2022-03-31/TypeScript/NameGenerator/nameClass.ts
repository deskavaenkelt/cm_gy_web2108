class NameGenerator {
    // Uses an array of strings to generate a random name
    names:Array<string>;

    // Takes an array of strings and assigns it to the names property
    constructor(names:Array<string>) {
        this.names = names;
    }

    // Returns a random name from the names array
    getName() {
        return this.names[Math.floor(Math.random() * this.names.length)];
    }
}

export default NameGenerator;