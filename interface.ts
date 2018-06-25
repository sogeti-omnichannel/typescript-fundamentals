interface Person {
    name: string;
    age?: number;
    sayHi();
}

class Female implements Person {
    name: string;

    constructor(_name: string) {
        this.name = _name;
    }

    sayHi() {
        return `Hi I'm ${this.name}. I'm not telling you how old I'm.`;
    }
}

class Male implements Person {
    name: string;
    age: number;

    constructor(_name: string, _age?: number) {
        this.name = _name;
        this.age = _age;
    }

    sayHi() {
        return `Hi I'm ${this.name}. I'm ${this.age} years old`;
    }
}

var persons: Person[] = [];

persons.push(
    new Female('Alice'),
    new Male('Pietje', 20)
)

persons.forEach(
    person => console.log(person.age)
)