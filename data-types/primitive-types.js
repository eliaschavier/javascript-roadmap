// =================================================================
//                          Primitive Types
// =================================================================

/**
 * string
 * number
 * bigint
 * boolean
 * undefined
 * symbol
 * null
*/

/** 
 * "hello"       string 
 * 42            number
 * 42n           bigint
 * true          boolean
 * undefined     undefined
 * Symbol("id")  symbol
 * null          null       (but typeof shows "object")
 * 
 * {}            object
 * []            object
 * () => {}      object    (but typeof shows "function")
 * new Date()    object
 * 
*/

// =================================================================
//                             String
// =================================================================

// String → represents a sequence of text characters.

const myName = "Elias";
typeof myName; // "string"

// Strings can be accessed by index and have a length, but they are not Arrays.

myName[0];      // "E"
myName.length;  // 5

Array.isArray(myName); // false

// Strings are primitive values, but they can access methods

myName.toUpperCase(); // "ELIAS"
myName.toLowerCase(); // "elias"
myName.includes("E"); // true
myName.slice(0, 3);    // "Eli"


// =================================================================
//                              Number
// =================================================================

// Number → represents both integer and floating-point numbers.
// Number uses IEEE 754 double-precision floating-point representation.


// NaN → special number value representing an invalid/indeterminate numeric result.
// Infinity → special number value representing infinity.

console.log(typeof NaN);               // "number"
console.log(typeof Infinity);          // "number"

console.log(0 / 0);                    // NaN
console.log(Math.sqrt(-1));            // NaN
console.log(Number("abc"));            // NaN

console.log(10 / 0);                   // Infinity
console.log(-10 / 0);                  // -Infinity


// =================================================================
//                              BigInt
// =================================================================

// BigInt → represents integers with arbitrary precision.
// A different numeric type designed for exact integer arithmetic.

const a = 10;   // number
const b = 10n;  // bigint

console.log(typeof a); // "number"  ✅
console.log(typeof b); // "bigint"  ✅

console.log(a + b);    // TypeError ❌

// BigInt can represent integers beyond Number's safe integer limit.

console.log(9007199254740993);   // 9007199254740992
console.log(9007199254740993n);  // 9007199254740993n


// =================================================================
//                              Boolean
// =================================================================

// Boolean → represents a logical value: true or false.

// true and false are boolean values, not numbers.
// In numeric contexts, they can be coerced to 1 and 0.

typeof true  // "boolean"
typeof false // "boolean"

true + true   // 2
true + false  // 1
false + false // 0


// =================================================================
//                             Undefined
// =================================================================

// undefined → value representing the absence of a defined value.

let c;
console.log(c); // undefined

function test() { }
console.log(test()); // undefined

const person = {};
console.log(person.name); // undefined

typeof undefined; // "undefined"


// =================================================================
//                             Null
// =================================================================

// null → explicitly represents an intentional absence of a value/object.

let user1 = null;

typeof null; // "object" — historical JavaScript quirk


// =================================================================
//                             Symbol
// =================================================================

// Symbol → primitive type used to create unique identifiers.

// Every Symbol() call creates a unique symbol,
// even when the description is the same.

const x = Symbol("id");
const y = Symbol("id");

x === y; // false

typeof x; // "symbol"

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