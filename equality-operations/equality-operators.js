// =================================================================
//                     Equality Operators
// =================================================================

// JavaScript provides four equality operators:

//  ==   - loose equality
//  ===  - strict equality
//  !=   - loose inequality
//  !==  - strict inequality


// =================================================================
//                    Loose Equality (==)
// =================================================================

// `==` compares values after applying type coercion when necessary.

5 == "5";        // true
true == 1;       // true
"" == 0;         // true
"0" == false;    // true

// `==` does NOT always convert everything to a number. The conversion depends on the values being compared.

// Special case:
// null and undefined are loosely equal to each other.

null == undefined; // true

// But they are not loosely equal to other falsy values.

null == 0;       // false
null == "";      // false
null == false;   // false

undefined == 0;  // false
undefined == ""; // false
undefined == false; // false


// =================================================================
//                   Strict Equality (===)
// =================================================================

// `===` compares values without type coercion. The types must match.

5 === 5;     // true
5 === "5";   // false
true === 1;  // false
null === undefined; // false

// For objects, arrays and functions, the equality is based on reference.

const a = { value: 10 };
const b = { value: 10 };
const c = a;

a === b; // false
a === c; // true


// =================================================================
//                 Objects and Loose Equality
// =================================================================

// When an object is compared with a primitive using `==`, JavaScript can convert the object to a primitive value.

const obj = {
  valueOf() {
    return 10;
  }
};

obj == 10;   // true
obj === 10;  // false

// Arrays can also be converted to primitive values.

[] == false;       // true
[1] == 1;          // true
[1, 2] == "1,2";   // true

// The array is converted to a primitive string value first.

// []     → ""
// [1]    → "1"
// [1, 2] → "1,2"


// =================================================================
//                   Inequality Operators
// =================================================================

// `!=` is the negation of `==`.
// `!==` is the negation of `===`.

5 != "5";    // false
5 !== "5";   // true

true != 1;   // false
true !== 1;  // true

null != undefined;  // false
null !== undefined; // true


// =================================================================
//                     NaN and Equality
// =================================================================

// NaN is not equal to itself.

NaN == NaN;  // false
NaN === NaN; // false

NaN != NaN;  // true
NaN !== NaN; // true

// Use Number.isNaN() to check for NaN.

Number.isNaN(NaN); // true


// =================================================================
//                  +0 and -0
// =================================================================

// JavaScript has both +0 and -0.

+0 === -0; // true
+0 == -0;  // true

// Object.is() distinguishes them.

Object.is(+0, -0); // false
Object.is(NaN, NaN); // true


// =================================================================
//                        Best Practice
// =================================================================

// Prefer `===` and `!==` for predictable comparisons.
//
// `==` and `!=` are useful to understand,
// but their implicit conversions can produce surprising results.