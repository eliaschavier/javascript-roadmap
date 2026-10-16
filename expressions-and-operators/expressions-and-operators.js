// =================================================================
//                      Expressions & Operators
// =================================================================

{
  // =================================================================
  //                      Conditional Operator
  // =================================================================

  {
    // Also known as the ternary operator (`? :`). Evaluates a condition and returns one of two expressions.

    // Syntax:
    // condition ? expressionIfTrue : expressionIfFalse

    const age = 20;
    const status = age >= 18 ? "Adult" : "Minor";
    // status === "Adult"

    // ================================
    //       Truthy & Falsy
    // ================================

    // The condition is evaluated in a boolean context.
    // If truthy, the expression before `:` is evaluated.
    // If falsy, the expression after `:` is evaluated.

    const value = 0;
    const result = value ? "Yes" : "No";
    // result === "No"

    // ================================
    //       Conditional Evaluation
    // ================================

    // Only the selected expression is evaluated. 
    // The unselected expression is not evaluated.

    const selected = true ? "Chosen" : someUndefinedVariable;
    // selected === "Chosen"; no ReferenceError is thrown.

    // ================================
    //       Nested Conditionals
    // ================================

    // Ternary operators can be nested to test multiple conditions.
    // Each condition is evaluated only when its branch is reached.
    // Excessive nesting can reduce readability.

    const n = 0;
    const numberType = n > 0 ? "Positive" : n < 0 ? "Negative" : "Zero";
    // numberType === "Zero"

    // ================================
    //       Expressions & Values
    // ================================

    // The ternary operator is an expression, so it produces a value.
    // It can be used in assignments, return statements, and other
    // expression contexts.

    const hasPermission = true;
    const message =
      age >= 18 || hasPermission
        ? "Allowed"
        : "Denied";
    // message === "Allowed"

    // Only the selected branch executes, including its side effects.
    let count = 0;
    const incremented = true ? ++count : ++count;
    // incremented === 1; count === 1

    // Prefer `if...else` when conditional logic becomes complex
    // or when readability would suffer from nested ternaries.
  }

  // =================================================================
  //                      Conditional Operator
  // =================================================================
  {
    // Also known as the ternary operator (`? :`).
    // Evaluates a condition and returns one of two expressions.

    // Syntax:
    // condition ? expressionIfTrue : expressionIfFalse

    const age = 20;
    const status = age >= 18 ? "Adult" : "Minor";
    // status === "Adult"

    // ================================
    //       Truthy & Falsy
    // ================================

    // The condition is evaluated in a boolean context.
    // If truthy, the expression before `:` is evaluated.
    // If falsy, the expression after `:` is evaluated.

    const value = 0;
    const result = value ? "Yes" : "No";
    // result === "No"

    // ================================
    //       Conditional Evaluation
    // ================================

    // Only the selected expression is evaluated.
    // The unselected expression is not evaluated.

    const selected = true
      ? "Chosen"
      : someUndefinedVariable;
    // selected === "Chosen"; no ReferenceError is thrown.

    // ================================
    //       Nested Conditionals
    // ================================

    // Ternary operators can be nested to test multiple conditions.
    // Each condition is evaluated only when its branch is reached.
    // Excessive nesting can reduce readability.

    const n = 0;
    const numberType =
      n > 0 ? "Positive" :
        n < 0 ? "Negative" :
          "Zero";
    // numberType === "Zero"

    // ================================
    //       Expressions & Values
    // ================================

    // The ternary operator is an expression, so it produces a value.
    // It can be used in assignments, return statements, and other
    // expression contexts.

    const hasPermission = true;
    const message =
      age >= 18 || hasPermission
        ? "Allowed"
        : "Denied";
    // message === "Allowed"

    // Only the selected branch executes, including its side effects.
    let count = 0;
    const incremented = true ? ++count : ++count;
    // incremented === 1; count === 1

    // Prefer `if...else` when conditional logic becomes complex
    // or when readability would suffer from nested ternaries.
  }

  // =================================================================
  //                         Unary Operators
  // =================================================================
  {
    // Unary operators operate on a single operand.

    // ================================
    //        Unary Plus & Minus
    // ================================

    // Unary plus (`+`) converts its operand to a Number.
    // Unary minus (`-`) converts its operand to a Number
    // and negates the resulting value.

    +"42";    // 42
    +true;    // 1
    +null;    // 0
    +"hello"; // NaN

    -5;       // -5
    -"5";     // -5

    // ================================
    //       Increment & Decrement
    // ================================

    // Prefix (`++x`, `--x`): modifies the variable first
    // and returns the updated value.
    // Postfix (`x++`, `x--`): returns the previous value
    // and then modifies the variable.

    let x = 5;
    const a = x++; // a = 5; x = 6
    const b = ++x; // x = 7; b = 7

    // Both prefix and postfix modify the variable.
    // The difference is the value returned by the expression.

    // Postfix returns the old value, then increments.
    // Prefix increments first, then returns the new value.


    // ================================
    //            Logical NOT
    // ================================

    // `!` converts its operand to a boolean and negates it.
    // `!!` is commonly used to convert a value to a boolean.

    !0;       // true
    !"hello"; // false
    !!"hello"; // true
    !!{};     // true

    // ================================
    //           Bitwise NOT
    // ================================

    // `~` performs bitwise NOT after converting its operand
    // to a 32-bit integer (for Number operands).
    // It flips the bits; for Number values, ~x is equivalent
    // to -(x + 1).

    ~5;  // -6
    ~0;  // -1

    // ================================
    //              typeof
    // ================================

    // Returns a string describing the operand's type.
    // It is not a complete way to identify every data structure.

    typeof 42;          // "number"
    typeof "hello";     // "string"
    typeof undefined;   // "undefined"
    typeof null;        // "object" (historical behavior)
    typeof [];          // "object"
    typeof NaN;         // "number"

    Array.isArray([]);  // true

    // ================================
    //              delete
    // ================================

    // Deletes an object's own property.
    // If successful, the property is removed.
    // Accessing the removed property usually returns undefined.
    // `delete` does not delete variables declared with let,
    // const, or var.

    const user = { name: "Elias", age: 25 };
    delete user.age;

    user.age;          // undefined
    "name" in user;    // true

    // ================================
    //               void
    // ================================

    // Evaluates an expression and always returns undefined.
    // The expression is evaluated, but its result is discarded.

    void 0;        // undefined
    void (2 + 3);  // undefined

    // Rarely needed in everyday modern JavaScript.

    // ================================
    //       Precedence & Parentheses
    // ================================

    // `-x ** 2` is a SyntaxError.
    // Parentheses make the intended operation explicit.

    const n = 3;

    -(n ** 2);   // -9
    (-n) ** 2;   // 9
  }

  // =================================================================
  //                       Assignment Operators
  // =================================================================
  {
    // Assignment operators assign values to variables or properties.
    // The assignment expression evaluates to the assigned value.

    // ================================
    //        Simple Assignment
    // ================================

    let x = 10;
    x = 20; // x is now 20

    // Assignment to an existing variable replaces its current value.
    // `const` prevents reassignment, but does not make objects immutable.

    // ================================
    //      Arithmetic Assignment
    // ================================

    let n = 10;

    n += 5;  // n = n + 5;   n is 15
    n -= 3;  // n = n - 3;   n is 12
    n *= 2;  // n = n * 2;   n is 24
    n /= 4;  // n = n / 4;   n is 6
    n %= 4;  // n = n % 4;   n is 2
    n **= 3; // n = n ** 3;  n is 8

    // `/= ` performs regular division, not integer division.

    // ================================
    //      Bitwise Assignment
    // ================================

    let bits = 5; // binary: 0101

    bits &= 3;  // bitwise AND assignment; bits is 1
    bits |= 4;  // bitwise OR assignment; bits is 5
    bits ^= 1;  // bitwise XOR assignment; bits is 4

    // Other bitwise assignment operators:
    // <<=, >>=, >>>=, and (for BigInt) shift/bitwise variants
    // supported by the language.

    // Bitwise operators on Number values use 32-bit integer
    // conversions. BigInt bitwise operations use BigInt values.

    // ================================
    //       Logical Assignment
    // ================================

    // `||= ` assigns only when the current value is falsy.
    let a = 0;
    a ||= 10; // a is 10

    // `&&= ` assigns only when the current value is truthy.
    let b = false;
    b &&= true; // b remains false

    // `??= ` assigns only when the current value is nullish
    // (null or undefined).
    let c = null;
    c ??= 20; // c is 20

    // These operators short-circuit:
    // if assignment is skipped, the right-hand expression
    // is not evaluated.

    // ================================
    //      Assignment & Strings
    // ================================

    let text = "Value: ";
    text += 42; // text is "Value: 42"

    // `+= ` uses the semantics of the ` + ` operator.
    // It may perform numeric addition or string concatenation.

    // ================================
    //       Assignment & Objects
    // ================================

    const user = { score: 1 };
    user.score += 4; // user.score is 5

    // `const` prevents rebinding `user`, not modifying its properties.

    // ================================
    //       Assignment Expressions
    // ================================

    let first;
    let second;

    first = second = 10;
    // Assignment is right-associative:
    // `second` becomes 10, then `first` becomes 10.

    // Compound assignments are not always interchangeable
    // with manually expanded expressions when the left-hand
    // side has getters, setters, or side effects.
  }

  // =================================================================
  //                      Comparison Operators
  // =================================================================
  {
    // Comparison operators compare values and return a boolean:
    // true or false.

    // ================================
    //        Strict Equality
    // ================================

    // `===` checks equality without type conversion.
    // `!==` checks strict inequality.

    5 === 5;   // true
    5 === "5"; // false
    5 !== "5"; // true

    // Prefer strict equality unless coercion is intentional.

    // ================================
    //       Loose Equality
    // ================================

    // `==` and `!=` may convert operand types before comparing.

    5 == "5";       // true
    0 == false;     // true
    "" == 0;        // true
    null == undefined; // true

    5 != "5"; // false

    // `null == undefined` is a special case.
    // They are not strictly equal:
    null === undefined; // false

    // Avoid relying on complicated coercion rules.

    // ================================
    //       Relational Operators
    // ================================

    // `<`, `>`, `<=`, and `>=` compare values.
    // When both operands are strings, comparison is lexicographic.
    // Otherwise, operands are generally converted to primitives
    // and compared numerically when applicable.

    3 < 5;        // true
    5 >= 5;       // true
    "20" < "3";   // true: lexicographic comparison
    "20" < 3;     // false: numeric comparison (20 < 3)

    // If a numeric comparison involves NaN, the relational
    // comparison evaluates to false.

    NaN < 1;  // false
    NaN >= 1; // false

    // ================================
    //              NaN
    // ================================

    // NaN is not equal to any value, including itself.

    NaN === NaN; // false
    NaN !== NaN; // true

    // Use Number.isNaN() to test specifically for NaN.
    Number.isNaN(NaN); // true

    // ================================
    //       Object Comparison
    // ================================

    // Objects are compared by identity, not by their contents.

    ({ x: 1 }) === ({ x: 1 }); // false

    const first = { x: 1 };
    const second = first;

    first === second; // true: same object reference

    // Arrays follow the same identity rules.
    // [1, 2] === [1, 2]; // false

    // ================================
    //            Object.is()
    // ================================

    // Object.is() uses SameValue comparison semantics.
    // Unlike `===`, it treats NaN as equal to itself
    // and distinguishes positive zero from negative zero.

    Object.is(NaN, NaN); // true
    Object.is(0, -0);    // false

    0 === -0;            // true
    NaN === NaN;         // false

    // Use Object.is() when these specific distinctions matter.
  }
}