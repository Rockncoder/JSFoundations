"use strict";

// class must exist before usage
class Animal {
  constructor(name) {
    this.name = name;
    this.legs = 2;
  }

  showNameAndLegs() {
    console.info(`${this.name} has ${this.legs} legs.`);
  }
}

var myBird = new Animal("Bird");
myBird.showNameAndLegs();

class Mammal extends Animal {
  constructor(name, sound) {
    // calling the super class is mandatory, the constructor method is called
    super(name);
    this.legs = 4;
    this.says = sound;
  }
  speak() {
    console.info(`My ${this.name} says ${this.says}`);
  }
}

class Pet extends Animal {
  roar() {
    console.info("Roar");
  }

  constructor(name, trick) {
    super(name);
    this.trick = trick;
  }
}

var myCat = new Mammal("Cat", "meow");
myCat.showNameAndLegs();
myCat.speak();

var myDog = new Mammal("Dog", "woof");
myDog.showNameAndLegs();
myDog.speak();

var thunderCat = new Pet("thundercat", ()=>console.info('Bite other cat'));
thunderCat.showNameAndLegs();
thunderCat.trick();
var meowMix = new Pet("meowmix", ()=>console.info('hide somewhere safe'));
meowMix.showNameAndLegs();
meowMix.trick();
meowMix.trick = ()=>console.info('fidget and flinch');
meowMix.trick();


// lab: create a Pet class which extends animal. Think of at least one clever thing for it to do.
// remember that the parent's constructor must be called and all classes must have a constructor

