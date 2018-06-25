In this course we'll look into working with Typescript

Run `npm install typescript -g` to install typescript globally

run `tsc -w -p .` to start watching file
run `node [file]` in dist folder to view results

# Typescript demo
## Class
First we are going to describe Person as an object holding the name and age properties.

```typescript
class Person {
    firstname: string;
    lastname: string;
    age?: number; // not required

    constructor(_firstname: string, _lastname:string, _age: number) {
        this.firstname = _firstname;
        this.lastname = _lastname;
        this.age = _age;
    }
}
```
We can now use the Person class to create a new person.

```typescript
var person = new Person('Emiel', 'Kwakkel', 29);

console.log(`Name: ${person.firstname}.`);
```

Adding getters and setters are simple to implement. A getter is basically a function that can be accessed as a property. 

Add the following function to the Person class.

```typescript
get name() {
    return `${this.firstname} ${this.lastname}`;
}
```

This will allow you to access the name as a property.
```typescript
console.log(`Name: ${person.name}.`);
```

Adding a setter is just as simple.

```typescript
set firstname(firstname: string) {
    this.firstname = firstname;
}
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
