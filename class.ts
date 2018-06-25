class Person {
    firstname: string;
    lastname: string;
    age?: number;

    constructor(_firstname: string, _lastname: string, _age: number) {
        this.firstname = _firstname;
        this.lastname = _lastname;
        this.age = _age;
    }

    get fullname() {
        return `${this.firstname} ${this.lastname}`
    }
}

var person = new Person('Emiel', 'Kwakkel', 29);

console.log(`Name: ${person.fullname}.`);