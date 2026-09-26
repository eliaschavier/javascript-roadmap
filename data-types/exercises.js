// =================================================================
//                          Exercises
// =================================================================


// 1. NaN
{
  console.log(typeof NaN);
  console.log(NaN === NaN);
  console.log(Number.isNaN(NaN));
}

// 2. Floating-point precision
{
  console.log(0.1 + 0.2);
  console.log(0.1 + 0.2 === 0.3);
}

// 3. Safe integers
{
  console.log(Number.MAX_SAFE_INTEGER + 1);
  console.log(Number.MAX_SAFE_INTEGER + 2);
}

// 4. Number vs BigInt
{
  const number = 10;
  const bigInt = 10n;

  console.log(typeof number);
  console.log(typeof bigInt);

  console.log(number + bigInt);
}

// 5. null vs undefined
{
  console.log(typeof null);
  console.log(typeof undefined);

  console.log(null + 10);
  console.log(undefined + 10);
}

// 6. Symbol identity
{
  const a = Symbol("id");
  const b = Symbol("id");

  console.log(a === b);
}

// 7. Primitive vs wrapper object
{
  const a = "hello";
  const b = new String("hello");

  console.log(typeof a);
  console.log(typeof b);

  console.log(a === b);
}


// ==================================================================
//                             Solutions
// ==================================================================
{
// 1. NaN

// "number"
// false
// true

// `NaN` belongs to the Number type, but it is not equal to itself.
// `Number.isNaN()` can be used to explicitly check for NaN.



// 2. Floating-point precision

// 0.30000000000000004
// false

// JavaScript numbers use IEEE 754 floating-point representation,
// which cannot represent some decimal fractions exactly.



// 3. Safe integers

// 9007199254740992
// 9007199254740992

// Numbers cannot represent every integer precisely beyond Number.MAX_SAFE_INTEGER.



// 4. Number vs BigInt

// "number"
// "bigint"
// TypeError

// Number and BigInt are different types and cannot be
// directly mixed in arithmetic operations.



// 5. null vs undefined

// "object"
// "undefined"
// 10
// NaN

// `typeof null === "object"` is a historical JavaScript quirk.
// `null` represents an explicit absence, while `undefined`
// represents an unassigned or missing value.



// 6. Symbol identity

// false

// Every Symbol() call creates a unique Symbol.
// The description does not determine its identity.



// 7. Primitive vs wrapper object

// "string"
// "object"
// false

// A string literal creates a primitive string.
// `new String()` creates a String wrapper object.
}