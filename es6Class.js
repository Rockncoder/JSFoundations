"use strict";

// class must exist before usage
class Animal {
  constructor(name){
    this.name = name;
    this.legs = 2;
  }
  showNameAndLegs(){
    console.info(`${this.name} has ${this.legs} legs.`);
  }
}

var myAnimal = new Animal("Bird");
myAnimal.showNameAndLegs();

class Mammal extends Animal {
  constructor(name, sound){
    // calling the super class is mandatory, the constructor method is called
    super(name);
    this.legs = 4;
    this.says = sound;
  }

  speak(){
    console.info(`My ${this.name} says ${this.says}`);
  }
}

var myCat = new Mammal("Cat", "meow");
myCat.showNameAndLegs();
myCat.speak();

var myDog = new Mammal("Dog", "woof");
myDog.showNameAndLegs();
myDog.speak();

