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