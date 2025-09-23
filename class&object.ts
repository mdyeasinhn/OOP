// class and object

class Animal {
    // name: string;
    // species: string;
    // sound: string;

    
    // parmeter properties
    constructor(public name: string, public species: string, public sound: string) {
        // this.name = name;
        // this.species = species;
        // this.sound = sound;
    };
    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`)
    }
}
const dog = new Animal("Tommy", "Dog", "Ghew Ghew");

dog.makeSound();

