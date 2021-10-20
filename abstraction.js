// An abstraction is a way of hiding the implementation details and showing only the functionality to the users. In other words, it ignores the irrelevant details and shows only the required one.

class Animal {
  constructor() {}
  talk() {
    throw new Error("You must implement talk method");
  }
}

class Cat extends Animal {
  talk() {
    console.log("meow meow");
  }
}
class Dog extends Animal {
  talks() {
    console.log("bark bark");
  }
  talk() {
    this.talks();
  }
}
const myCat = new Cat();
myCat.talk();
const myDog = new Dog();
myDog.talk();
