// The static keyword defines a static method or property for a class, or a class static initialization block (see the link for more information about this usage). Neither static methods nor static properties can be called on instances of the class. Instead, they're called on the class itself.

// Static methods are often utility functions, such as functions to create or clone objects, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.

class Animal {
  static category = "Dog";
  location = "Khulna";
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
  static compare(animal1, animal2) {
    if (animal1.speed > animal2.speed) {
      return `${animal1.name} is Faster`;
    }
    return `${animal2.name} is Faster`;
  }
}
const myRat = new Animal("rat", 12);
const myDog = new Animal("dog", 50);
// console.log(myRat.category)
// console.log(myRat.location)
// console.log(Animal.category)
// console.log(Animal.location)
console.log(Animal.compare(myRat, myDog));
