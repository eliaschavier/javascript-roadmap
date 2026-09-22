/**
 * Primitive types:
 * 
 * string
 * number
 * bigint
 * boolean
 * undefined
 * symbol
*/

console.log(typeof "hello");           // "string"
console.log(typeof 42);                // "number"
console.log(typeof 42n);               // "bigint"
console.log(typeof true);              // "boolean"
console.log(typeof Symbol("id"));      // "symbol"
console.log(typeof undefined);         // "undefined"
console.log(typeof null);              // "object"

/** 
 * "hello"      primitive
 * 42           primitive
 * true         primitive
 * null         primitive
 * 
 * {}           object
 * []           object
 * () => {}     object
 * new Date()   object
*/

// ================
// Number
// ================

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


// ================
// BigInt
// ================

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


// ================
// Boolean
// ================

// Boolean → represents a logical value: true or false.

// true and false are boolean values, not numbers.
// In numeric contexts, they can be coerced to 1 and 0.

typeof true  // "boolean"
typeof false // "boolean"

true + true   // 2
true + false  // 1
false + false // 0


// ================
// Undefined
// ================

// undefined → value representing the absence of a defined value.

let c;
console.log(c); // undefined

function test() {}
console.log(test()); // undefined

const person = {};
console.log(person.name); // undefined

typeof undefined; // "undefined"


// ================
// Null
// ================

// null → explicitly represents an intentional absence of a value/object.

let user = null;

typeof null; // "object" — historical JavaScript quirk


// ================
// Symbol
// ================

// Symbol → primitive type used to create unique identifiers.

// Every Symbol() call creates a unique symbol,
// even when the description is the same.

const x = Symbol("id");
const y = Symbol("id");

x === y; // false

typeof x; // "symbol"