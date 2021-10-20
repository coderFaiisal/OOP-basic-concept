// Encapsulation, one of the principles of Object-Oriented Programming is the key to achieve such goals.

// By definition Encapsulation in JavaScript is a process of binding the data with the functions which act upon the data. Encapsulation allows us to control and validate the data. In JavaScript, variables resemble data.

// Encapsulation means information hiding

class Tiger {
  #speed = 100;
  location = "Sundarban";
  constructor(name) {
    this.name = name;
    this.#speed = 125;
  }
  run() {
    console.log(
      `I am ${this.name}. I am running at ${this.#speed}mph. I live in ${
        this.location
      }`
    );
  }
}
const royal = new Tiger("Royal Bengal");
royal.name = "Pormanobic Bengal";
royal.location = "Borishal";

royal.run();
