// 👇 COMPLETE YOUR WORK BELOW 👇
/* ❗❗ NOTE: PLEASE USE INDIVIDUAL KEYS FOR YOUR CONSTRUCTOR PARAMETERS, NOT OBJECTS. THE TESTS WILL NOT PASS WITH OBJECTS. ❗❗  */

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + .eat() should recieve a string as a parameter and take some type of edible as an argument
        + When eating an edible, it should be pushed into the `stomach` array.
        + The `eat` method should have no effect if there are 10 items in the `stomach` array.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` array should be empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function(someFood) {
  if(this.stomach.length < 10){
    this.stomach.push(someFood)
    return `${this.name} just ate ${this.stomach}!`
  } else {
    return `${this.name} is full!!`
  }
}

Person.prototype.poop = function () {
    return this.stomach = [];
  }

Person.prototype.toString = function() {
  return `${this.name}, ${this.age}`
}

const notAlien = new Person("notAlien", 23)
console.log(notAlien)
console.log(notAlien.eat(["steakk", "noodle", "cofi", "bb-qt?"]))
console.log(notAlien.toString())


/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method
      + should take 'gallons' as an parameter which will take number of gallons as an argument
      + should add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function(gallons) {
  if(typeof gallons === 'string') {
    return `that's not a number!`;
  } else if (typeof gallons === 'number') {
    return this.tank += gallons;
  }
}

Car.prototype.drive = function(distance) {
  let availMiles = this.tank * this.milesPerGallon

  if(typeof distance === 'string') {
    return `that's not a number!`;
  } else if(typeof distance === 'number') {
    
    if(distance < availMiles) {
      this.tank = (this.tank - (distance / this.milesPerGallon)).toFixed(2)
      this.odometer += distance;
      return `${this.model} has ${this.tank} gallons left, and ${this.odometer} on the odometer`;
      
    } else if(distance > availMiles) {
      let remain = availMiles - distance
      this.tank -= (remain/this.milesPerGallon)
      this.odometer += distance + remain;
      return `I ran out of fuel at ${this.odometer} on the odometer`
    } else {
      return console.log('helloooooo????')
    }
  } 
}

const mit = new Car("Mitsubishi", 30)
console.log(mit)
console.log(mit.fill(1))
console.log(mit.drive(120))

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies also have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

function Baby(name, age, favoriteToy) {
  Person.call(this, name, age)
  this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype)

Baby.prototype.play = function() {
  return `Playing with ${this.favoriteToy}`
}

const notAlienBaby = new Baby("Galexi", 500, "star bobble")

// console.log(notAlienBaby)
// console.log(notAlienBaby.play())

/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. Global, windows/console context:
      This is where, the "this" keyword is not within another object,
      other than the global object, which on browser is the window/console.
  2. Implicit Binding: 
      This is when the "this" keyword is mentioned within an object. Therefore, when
      "this" is used, it refers back to the object that contains it (if a method, ex .forEach(), is called
      after an object's name, the objects name is what "this" refers to)
  3. New Binding: 
      This is when a constructor function is used. A constructor function is a function that is a template for an object,
      and all the arguments that are input, are attatched to the object, and a new object is output. The "this" keyword in this instance
      refers to the object that is being created. If an object that is going through a constructor function is assigned to a variable, that
      variable can be used outside of the object, to refer to it's methods that are linked. However, inside the object that is being created,
      "this" can be used in place of the name of the object, and all properties that follow "this" will link to the object's properties being accessed.
  4. Explicit Binding: 
      This is when the methods (".bind", ".call", and ".apply") are used, although ".apply" is not as common and can do about the same things that 
      ".call" does, so ".call" is more generally used. Explicit Binding in the case of these methods are used for binding two functions together.
      This is where one function can INHERIT the properties and values of another function, without having to copy and paste, also, without adding 
      new properties to the original function. So, when using "this", if you want to link originalFunction to newFunction, inside newFunction, you
      can use the ".call" method (originalFunction.call(this, newParamName)). This will link what is inside the call() parentheses, to what comes before
      the "." and have the information that the originalFunction contains, into the newFunction.
*/

///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}
