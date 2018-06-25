class Person {
    name: string;
    age?: number;

    constructor(_name: string, _age: number) {
        this.name = _name;
        this.age = _age;
    }
}

var person = new Person('Emiel', 29);

console.log(`Name: ${person.name}.`);