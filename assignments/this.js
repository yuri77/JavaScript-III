/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. window binding - bind to the window scope
 * 2. implicit binding - when a method is called, this binds to the left of the '.'
 * 3. explicit binding - function binds to another object. function binding method (.apply, .bind,.call) needs to be used
 * 4. new binding - inheritance/ prototype binding
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
function forest(tree) {
  console.log(this);
  return tree;
}

forest("maple");

// Principle 2

// code example for Implicit Binding

const snowWhite = {
  name: "snow white",
  live: "the forest",
  greeting: function(name) {
    console.log(
      `Hello ${name}, my name is ${this.name} and I live in ${this.live}.`
    );
  }
};

snowWhite.greeting("Hobbit");

// Principle 3

// code example for New Binding

function CordialPerson(greeter) {
  this.greeting = "Hello";
  this.greeter = greeter;
  this.speak = function() {
    console.log(this.greeting + " " + this.greeter);
    console.log(this);
  };
}

const jerry = new CordialPerson("Newman");
const newman = new CordialPerson("Jerry");

jerry.speak();
newman.speak();

//jerry.speak.call(newman); explicit binding example to newman

// Principle 4

// code example for Explicit Binding

const person = {
  name: "Naruto",
  live: "Konoha"
};

function greetings() {
  console.log(`Hello my name is ${this.name} and I live in ${this.live}`);
}

greetings.call(person);
