// =================================================================
//                          Type Casting
// =================================================================

// Type casting is the process of converting a value from one type to another.

// There are two main forms:

// Type Conversion → explicit conversion requested by the developer/code.
// Type Coercion   → implicit conversion performed automatically by JavaScript.

// =================================================================
//                Type Conversion vs Type Coercion
// =================================================================

// Type Conversion
// The conversion is explicitly requested by the code.

const value = "42";

Number(value); // 42

const a = "42";
const b = 10;

Number(a) + b; // 52 


// Type Coercion
// JavaScript automatically converts a value to a compatible type when an operation requires it.

"42" - 10; // 32

// "42" is converted to a number to perform the arithmetic operation.

const x = "42";
const y = 10;

x - y; // 32


// =================================================================
//                    Implicit Type Casting
// =================================================================

// JavaScript can automatically convert values when an operation requires compatible types.

// The `+` operator is special because it can perform either numeric addition or string concatenation.

"10" + 5; // "105"
10 + "5"; // "105"

10 + 5; // 15


// Other arithmetic operators generally perform numeric coercion:

"10" - 5; // 5
"10" * 5; // 50
"10" / 5; // 2


// Boolean values can be coerced to numbers:

true + 5;  // 6
false + 5; // 5

// Because of:
// true → 1
// false → 0


// null and undefined behave differently in numeric coercion:

null + 5;      // 5
undefined + 5; // NaN

// Numeric coercion produces:
// null      → 0
// undefined → NaN

// The `+` operator with a string can result in concatenation:

null + "5";  // "null5"
true + "5";  // "true5"

// The values are converted to strings in this context.
//
// Important:
// Coercion depends on the operation and the types involved.
// A value does not have one universal conversion rule.



// =================================================================
//                    Explicit Type Casting
// =================================================================

// Values can be explicitly converted using built-in functions
// such as Number(), String() and Boolean().


// Number()

Number("123");      // 123
Number("3.14");     // 3.14
Number(true);       // 1
Number(false);      // 0
Number(null);       // 0
Number("");         // 0
Number(undefined);  // NaN
Number("123abc");   // NaN


// String()

String(42);         // "42"
String(true);       // "true"
String(null);       // "null"
String(undefined);  // "undefined"


// Boolean()

Boolean(1);         // true
Boolean(0);         // false

Boolean("hello");   // true
Boolean("");        // false

Boolean("false");   // true
Boolean("0");       // true

Boolean(null);      // false
Boolean(undefined); // false

// Any non-empty string is truthy,
// regardless of its content.