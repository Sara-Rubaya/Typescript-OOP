"use strict";
//oop - class >>> object
Object.defineProperty(exports, "__esModule", { value: true });
// class Animal {
//   name: string;
//   species: string;
//   sound: string;
//   constructor(name: string, species: string, sound: string) {
//     this.name = name;
//     this.species = species;
//     this.sound = sound;
//   }
//   makeSound() {
//     console.log(`${this.name} is making  sound: ${this.sound}`);
//   }
// }
//patrameter properties
class Animal {
    name;
    species;
    sound;
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`${this.name} is making  sound: ${this.sound}`);
    }
}
const dog = new Animal("dogesh bhai", "dog", "Ghew ghew");
// const cat = new Animal("Cat bhai", "Cat", "mewa meaw");
dog.makeSound();
// function add (num1: number,num2:number){
// }
// add (2,3)
//# sourceMappingURL=class.js.map