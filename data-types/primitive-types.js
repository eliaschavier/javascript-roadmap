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
