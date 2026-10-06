// =================================================================
//                 Equality Operators - Exercises
// =================================================================


// 1. Loose vs Strict Equality
5 == "5";
5 === "5";


// 2. Boolean Coercion
true == 1;
true === 1;
"0" == false;
"0" === false;


// 3. null and undefined
null == undefined;
null === undefined;
null == 0;
undefined == 0;


// 4. Objects and References
const obj1 = { value: 10 };
const obj2 = { value: 10 };
const obj3 = obj1;

obj1 == obj2;
obj1 === obj2;
obj1 == obj3;
obj1 === obj3;


// 5. Object to Primitive
const obj = {
  valueOf() {
    return 10;
  }
};

obj == 10;
obj === 10;


// 6. Arrays and Loose Equality
// [] == false;
// [] === false;

// [1] == 1;
// [1] === 1;

// [1, 2] == "1,2";
// [1, 2] === "1,2";


// 7. Inequality
5 != "5";
5 !== "5";

true != 1;
true !== 1;


// 8. NaN
NaN == NaN;
NaN === NaN;
NaN != NaN;
NaN !== NaN;
Number.isNaN(NaN);


// 9. +0 and -0
+0 == -0;
+0 === -0;
Object.is(+0, -0);
Object.is(NaN, NaN);


// 10. Final Challenge
const value = {
  valueOf() {
    return 5;
  }
};

value == 5;
value === 5;
value != "5";
value !== "5";

// ==================================================================
//                             Solutions
// ==================================================================
{
  // 1

  // true
  // false


  // 2

  // true
  // false
  // true
  // false

  // 3

  // true
  // false
  // false
  // false

  // 4

  // false
  // false
  // true
  // true

  // 5

  // true
  // false

  // 6

  // true
  // false
  // true
  // false
  // true
  // false

  // 7

  // false
  // true
  // false
  // true

  // 8

  // false
  // false
  // true
  // true
  // true

  // 9

  // true
  // true
  // false
  // true

  // 10

  // true
  // false
  // false
  // true
}