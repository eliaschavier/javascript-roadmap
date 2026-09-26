
// =================================================================
//                             Object
// =================================================================

// Object → collection of properties, each defined by a key and a value.

const user = {
  name: "Elias",
  age: 25
};

console.log(user.name);    // "Elias"
console.log(user["age"]);  // 25


// Object References
// Variables store references to objects, not the object itself.

const obj1 = { value: 10 };
const obj2 = obj1;

obj2.value = 20;

console.log(obj1.value); // 20
console.log(obj2.value); // 20

console.log(obj1 === obj2); // true

// Different objects have different identities,
// even when they contain the same values.

const obj3 = { value: 10 };
const obj4 = { value: 10 };

console.log(obj3 === obj4); // false


// const + Object
// const prevents reassignment of the reference,
// but does not prevent mutation of the object.

const personObj = {
  name: "Elias",
  age: 25
};

personObj.age = 26; // OK

// person = {};  // TypeError ❌


// Shallow Copy
// Creates a new object, copying the properties from the original at the first level*

const original = {
  name: "Elias",
  age: 25
};

const copy = { ...original };

console.log(original === copy); // false


//* Nested objects still are not copied and share their reference.

const original1 = {
  name: "Elias",
  address: {
    city: "Juazeiro"
  }
};

const copy2 = { ...original1 };

console.log(original1 === copy2);             // false
console.log(original1.address === copy2.address); // true

copy2.address.city = "Crato";

console.log(original1.address.city); // "Crato"

// Spread creates a shallow copy:
// the outer object is new, but nested objects are not cloned.

// =================================================================  
//                    Primitive Values & Methods
// =================================================================

// Primitive values can access methods and properties
// through temporary boxing via their corresponding wrapper/prototype.

// "hello".toUpperCase()
// → conceptually similar to:
// new String("hello").toUpperCase()

// 10.2.toFixed(2)
// → conceptually similar to:
// new Number(10.2).toFixed(2)

// The primitive itself remains a primitive:

typeof "hello"; // "string"
typeof 10.2;    // "number"
typeof true;    // "boolean"

// =================================================================
//                        Object Prototype
// =================================================================

// Every object has an internal [[Prototype]] reference
// that points to another object (or null).

const user1 = {
  name: "Elias"
};

// Object literals normally have Object.prototype in their prototype chain.

// Properties can be found through the prototype chain.
// If a property is not found directly on the object, JavaScript searches its prototype, then the prototype's prototype, etc.

// Example:

user1.toString();

// "toString" is not defined directly on user1,
// but it is found in Object.prototype.

// Prototype chain:
//
// user1
//  ↓ [[Prototype]]
// Object.prototype
//  ↓ [[Prototype]]
// null


// Own Properties vs Prototype Properties

// A property defined directly on an object is an own property.

user1.name; // "Elias"

// "toString" is accessible, but is not an own property.

user1.hasOwnProperty("name");      // true
user1.hasOwnProperty("toString");  // false


// hasOwnProperty()

// Checks whether a property belongs directly to the object.
// It does NOT search the prototype chain.

user1.hasOwnProperty("name");      // true
user1.hasOwnProperty("toString");  // false


// 'in' Operator

// Checks whether a property exists on the object
// OR anywhere in its prototype chain.

"name" in user1;           // true
"toString" in user1;       // true
"banana" in user1;         // false


// `in` checks property keys, not values.

const fruits = ["apple", "banana"];

0 in fruits;              // true
"banana" in fruits;       // false

fruits.includes("banana"); // true


// =================================================================
//                        Prototypal Inheritance
// =================================================================

// An object can have another object as its [[Prototype]].
// It does not copy the prototype's properties.
// It keeps a relationship with it and can access its properties through the prototype chain.

const animal = {
  speak() {
    console.log("Some sound");
  }
};

const dog = Object.create(animal);

dog.name = "Rex";

dog.speak(); // "Some sound"

// Property lookup follows the prototype chain:
//
// dog → animal → ... → null


// Own vs inherited properties:

dog.hasOwnProperty("name");  // true
dog.hasOwnProperty("speak"); // false
"speak" in dog;              // true


// An own property takes precedence over an inherited property.
// This is called property shadowing.

dog.speak = () => console.log("Woof!");

dog.speak(); // "Woof!"


// Object.create() creates a new object with the given object
// as its prototype.

Object.getPrototypeOf(dog) === animal; // true

// JavaScript's `class` syntax is built on top of prototypes.
