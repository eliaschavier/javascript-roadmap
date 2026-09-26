// =================================================================
//                          Built-in Objects
// =================================================================

// Objects and functions natively provided by the JavaScript language, offering common functionality.

// Examples:
// Object, Array, Number, String, Boolean; Math, Date, JSON, ...

// They can have different natures:
typeof Object; // "function"
typeof Array;  // "function"
typeof Math;   // "object"

// Functions are objects in JavaScript, but typeof functions returns the special value "function".

// ================================
//              Object
// ================================
{
  // Object is a built-in function that can also be used as a constructor.
  // It has a .prototype property:

  Object.prototype;

  // Object.prototype is the prototype commonly used by ordinary objects
  // created with object literals or with Object() / new Object().

  // Different ways of creating an ordinary object:

  const obj1 = {};
  const obj2 = Object();
  const obj3 = new Object();

  // All three normally have Object.prototype in their prototype chain:

  Object.getPrototypeOf(obj1) === Object.prototype; // true
  Object.getPrototypeOf(obj2) === Object.prototype; // true
  Object.getPrototypeOf(obj3) === Object.prototype; // true

  // {} and Object() / new Object() use different syntax/mechanisms.
  //
  // {} always creates a new ordinary object.
  // Object() can be called as a function.
  // new Object() invokes Object as a constructor.
  //
  // Object() and new Object() can also behave differently when given
  // values as arguments.

  // Each expression creates a different object:

  obj1 === obj2; // false
  obj2 === obj3; // false
  obj1 === obj3; // false


  // Object.prototype itself has no prototype:

  Object.getPrototypeOf(Object.prototype); // null


  // Object keys / values / entries

  // Object.keys(obj) → returns an array of the object's own enumerable property names (keys).
  // Object.values(obj) → returns an array of the object's own enumerable property values.
  // Object.entries(obj) → returns an array of the object's own enumerable [key, value] pairs.

  const user = {
    name: "Elias",
    age: 25
  };

  Object.keys(user);
  // ["name", "age"]

  Object.values(user);
  // ["Elias", 25]

  Object.entries(user);
  // [["name", "Elias"], ["age", 25]]


  // Own vs Prototype Properties

  Object.prototype.country = "Brazil";

  Object.keys(user);
  // ["name", "age"]

  Object.entries(user);
  // [["name", "Elias"], ["age", 25]]

  "country" in user;
  // true → searches the prototype chain too.

  user.hasOwnProperty("country");
  // false → country is not an own property.

  // Object.keys(), Object.values() and Object.entries() only consider own enumerable properties.
  // The `in` operator also searches the prototype chain.
}

// ================================
//              Array
// ================================
{
  // Arrays are objects used to store ordered collections of values.

  typeof [] === "object"; // true

  // - Indexes start at 0.
  // - `length` represents the highest index + 1.
  // - Accessing a nonexistent index returns `undefined`.
  // - Arrays can be sparse (contain empty slots).

  Array.isArray([]) === true

  // Arrays inherit from Array.prototype.
}

// ================================
//              Number
// ================================
{
  // Represents numeric values using IEEE 754 double-precision.

  Number.isNaN(value)
  Number.isFinite(value)
  Number.isInteger(value)

  Number.MAX_SAFE_INTEGER

  // Important distinction: `number` vs `Number`
  // `number` is the primitive type.
  // `Number` is the built-in object/function that provides utility methods and constants.
}

// ================================
//              String
// ================================
{
  // Built-in object for working with strings.

  "hello".length
  "hello".toUpperCase()
  "hello".includes("ell")

  // String is a built-in object/function related to string values.
}

// ================================
//              Boolean
// ================================
{
  // Built-in object related to boolean values.
  
  // Boolean(value) converts a value to true or false.

  Boolean(1);       // true
  Boolean(0);       // false
  Boolean("");      // false
  Boolean("hello"); // true
}

// ===============================
//              Math
// ===============================
{
  // Built-in object with mathematical constants and functions.

  Math.round()   // rounds to the nearest integer
  Math.floor()   // rounds down to the nearest integer
  Math.ceil()    // rounds up to the nearest integer
  Math.random()  // returns a pseudo-random number between 0 (inclusive) and 1 (exclusive)
  Math.max()     // returns the largest of zero or more numbers
  Math.min()     // returns the smallest of zero or more numbers
  Math.abs()     // returns the absolute value of a number

  Math.PI        // 3.141592653589793
}

// ================================
//              Date
// ================================
{
  // Used to represent dates and times.
  
  new Date()

  const date = new Date();
  date.getFullYear();
}

// ================================
//              JSON
// ================================
{
  // Used to convert between JavaScript values and JSON text.

  JSON.stringify(value); // JavaScript → JSON string
  JSON.parse(text);      // JSON string → JavaScript

  // JSON is a text format, not a JavaScript object.

  const user = { name: "Elias" };

  const json = JSON.stringify(user); // '{"name":"Elias"}'

  const obj = JSON.parse(json); // { name: "Elias" }
}

// ===============================
//              Map
// ===============================
{
  // Collection of key-value pairs.
  // Keys can be values of any type.

  const map = new Map();

  map.set("name", "Elias");
  map.set(1, "one");

  map.get("name"); // "Elias"
}

// ===============================
//              Set
// ===============================
{
  // Collection of unique values.

  const set = new Set();

  set.add("apple");
  set.add("banana");
  set.add("apple");

  set.size; // 2
  set.has("banana"); // true
}

// ===============================
//        WeakMap / WeakSet
// ===============================
{
  // Similar to Map / Set, but their references to objects
  // do not prevent garbage collection.
  
  // Mainly useful for specific memory-management patterns.

  const weakMap = new WeakMap();
  const weakSet = new WeakSet();
}

// ===============================
//             RegExp
// ===============================
{
  // Used to work with patterns in text.
  
  // Commonly used for searching, extracting and validating strings.

  const pattern = /\d/;

  pattern.test("abc");    // false
  pattern.test("abc123"); // true
}

// ===============================
//              Error
// ===============================
{
  // Built-in objects used to represent errors.

  // Common error types include:
  // TypeError, ReferenceError, RangeError, ...

  const error = new Error("Something went wrong");

  error.message; // "Something went wrong"
}

// ===============================
//             Promise
// ===============================
{
  // Represents the eventual result of an asynchronous operation.

  // A Promise can be:
  // - pending
  // - fulfilled
  // - rejected

  const promise = Promise.resolve("Done");

  promise.then(value => {
    console.log(value); // "Done"
  });
}