run `tsc -w -p .` to start watching file
run `node [file]` in dist folder to view results

# Typescript demo
## Class
```typescript
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
```

## Inheritance
```typescript
class Animal {
    constructor(public name: string) {}

    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}.`)
    }
}

class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(distanceInMeters = 45) {
        console.log('Galloping...');
        super.move(distanceInMeters);
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(distanceInMeters = 10) {
        console.log('Galloping...');
        super.move(distanceInMeters);
    }
}

let horse = new Horse('Sam');
let dog = new Dog('Doggy the dog');

horse.move();
dog.move(12);
```

## Interface
```typescript
interface Person {
    name: string;
    age?: number;
    sayHi();
}

class Female implements Person {
    public name: string;

    constructor(_name: string) {
        this.name = _name;
    }

    sayHi() {
        return `${this.name} is saying hi! Her age is secret`;
    }
}

class Male implements Person {
    public name: string;
    public age: number;

    constructor(_name: string, _age: number) {
        this.name = _name;
        this.age = _age;
    }

    sayHi() {
        return `${this.name} is saying hi! His age is ${this.age}`;
    }
}

var persons: Person[] = [];

persons.push(
    new Male('Emiel', 29),
    new Female('Alice'),
    new Male('Piet', 30)
)

persons.forEach(
    (person) => console.log(person.sayHi())
);
```
