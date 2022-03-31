class person
{
    name: string;
    age: number;
    email: string;
    phone: string;
    address: string;
    dob: Date;
    constructor(name, age, email, phone, address)
    {
        this.name = name;
        this.age = age;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }

    public CheckIfEmailIsValid()
    {
        return this.email.indexOf("@") > 2;
    }

    public CalculateAge()
    {
        this.age = new Date().getFullYear() - this.dob.getFullYear();
    }
}

class student extends person
{
    courses: string[];
    grades: number[];
    constructor(name, age, email, phone, address, courses, grades)
    {
        super(name, age, email, phone, address);
        this.courses = courses;
        this.grades = grades;
    }
}

class teacher extends person
{
    courses: string[];
    constructor(name, age, email, phone, address, courses)
    {
        super(name, age, email, phone, address);
        this.courses = courses;
    }
}

class friend extends person
{
    spouse:string;
    pet: string;
    constructor(name, age, email, phone, address, spouse, pet)
    {
        super(name, age, email, phone, address);
        this.spouse = spouse;
        this.pet = pet;
    }
}

/*
let people = [ 
    new student("John", 23, "","","", ["Math", "English"], [10, 9]), 
    new teacher("Jane", 25, "","","", ["Math"]), 
    new friend("Bob", 30, "","","", "Jane", "cat")
];
*/
export default
{
    person,
    student,
    teacher,
    friend,
}