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
    // <<=, >>=, >>>=, and (for BigInt) shift/bitwise variants supported by the language.

    // Bitwise operators on Number values use 32-bit integer conversions. BigInt bitwise operations use BigInt values.

    // ================================
    //       Logical Assignment
    // ================================

    // `||= ` assigns only when the current value is falsy.
    let a = 0;
    a ||= 10; // a is 10

    // `&&= ` assigns only when the current value is truthy.
    let b = false;
    b &&= true; // b remains false

    // `??= ` assigns only when the current value is nullish (null or undefined).
    let c = null;
    c ??= 20; // c is 20

    // These operators short-circuit:
    // if assignment is skipped, the right-hand expression is not evaluated.

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

    // Compound assignments are not always interchangeable with manually expanded expressions when the left-hand side has getters, setters, or side effects.
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

    5 == "5";          // true
    0 == false;        // true
    "" == 0;           // true
    null == undefined; // true

    5 != "5"; // false

    // `null == undefined` is a special case.
    // They are not strictly equal:

    null === undefined; // false

    // Important special cases:
    // `null` is loosely equal to `undefined`, but not to 0, false, or an empty string.

    null == 0;         // false
    undefined == 0;    // false
    null == false;     // false
    null == "";        // false

    // Falsy values are not necessarily equal to false.
    Boolean(null);      // false
    Boolean(undefined); // false
    null === false;     // false

    // Avoid relying on complicated coercion rules.

    // ================================
    //       Relational Operators
    // ================================

    // `<`, `>`, `<=`, and `>=` compare values.
    // When both operands are strings, comparison is lexicographic.
    // Otherwise, values are converted to primitives and compared according to the relational comparison rules.

    3 < 5;       // true
    5 >= 5;      // true

    "20" < "3";  // true: lexicographic comparison
    "20" < 3;    // false: numeric comparison (20 < 3)

    // Lexicographic comparison compares strings character by character, using their UTF-16 code units.

    "8" < "12";  // false: compares "8" with "1" first
    "8" < 12;    // true: numeric comparison

    // In relational comparisons, `null` is converted to 0. This differs from loose equality.

    null >= 0; // true
    null > 0;  // false
    null == 0; // false

    // `undefined` becomes NaN in numeric relational comparisons.
    // Therefore, these comparisons are false.

    undefined < 0;  // false
    undefined >= 0; // false

    // If a relational comparison involves NaN, it evaluates
    // to false, including <= and >=.

    NaN < 1;  // false
    NaN > 1;  // false
    NaN <= 1; // false
    NaN >= 1; // false

    // ================================
    //              NaN
    // ================================

    // NaN is not equal to any value, including itself,
    // when using `==` or `===`.

    NaN == NaN;  // false
    NaN === NaN; // false
    NaN != NaN;  // true
    NaN !== NaN; // true

    // All relational comparisons involving NaN are false.

    NaN < 0;  // false
    NaN > 0;  // false
    NaN <= 0; // false
    NaN >= 0; // false

    // Use Number.isNaN() to check whether a value is NaN.
    // It does not convert the value before checking.

    Number.isNaN(NaN);   // true
    Number.isNaN("abc"); // false

    // ================================
    //       Object Comparison
    // ================================

    // Objects are compared by identity, not by their contents.
    // Two different objects are not equal, even if their properties contain the same values.

    ({ x: 1 }) === ({ x: 1 }); // false

    const first = { x: 1 };
    const second = first;

    first === second; // true: same object reference

    // Arrays follow the same identity rules.

    // [1, 2] === [1, 2]; // false

    const arrayA = [1, 2];
    const arrayB = arrayA;

    arrayA === arrayB; // true: same array reference

    // ================================
    //            Object.is()
    // ================================

    // Object.is() uses SameValue comparison semantics.
    // Unlike `===`, it treats NaN as equal to itself
    // and distinguishes positive zero from negative zero.

    Object.is(NaN, NaN); // true
    NaN === NaN;         // false

    Object.is(0, -0);    // false
    0 === -0;            // true

    // For ordinary values, they generally behave alike.

    Object.is(5, 5); // true
    5 === 5;         // true

    // Use Object.is() when these specific distinctions matter.
  }

  // =================================================================
  //                      Arithmetic Operators
  // =================================================================
  {
    // Arithmetic operators perform mathematical operations on numeric values.

    // ================================
    //       Basic Arithmetic
    // ================================

    // Addition
    10 + 5; // 15

    // Subtraction
    10 - 5; // 5

    // Multiplication
    10 * 5; // 50

    // Division
    10 / 4; // 2.5

    // Remainder: returns the remainder of division.
    10 % 4; // 2

    // Exponentiation
    2 ** 3; // 8

    // ================================
    //       Remainder Operator (%)
    // ================================

    // The remainder has the same sign as the dividend
    // (the left operand), or is zero.

    7 % 2;   // 1
    8 % 2;   // 0
    -7 % 2;  // -1
    7 % -2;  // 1
    -7 % -2; // -1

    // `%` is a remainder operator, not mathematical modulo.
    // For negative numbers, the result may be negative.

    // ================================
    //       Operator Precedence
    // ================================

    // Multiplication, division, and remainder have higher
    // precedence than addition and subtraction.

    2 + 3 * 4;   // 14
    (2 + 3) * 4; // 20

    // Exponentiation has higher precedence than multiplication.
    2 ** 3 * 2; // 16

    // Exponentiation is right-associative.
    2 ** 3 ** 2;   // 512
    2 ** (3 ** 2); // 512
    (2 ** 3) ** 2; // 64

    // Use parentheses when the intended order is unclear.

    // ================================
    //       Type Coercion
    // ================================

    // The `+` operator performs addition or string concatenation.
    // If string concatenation occurs, operands are converted
    // to strings as needed.

    10 + 2;    // 12
    "10" + 2;  // "102"
    10 + "2";  // "102"
    "10" + "2"; // "102"

    // The `-`, `*`, and `/` operators perform numeric operations.
    // Numeric strings are converted to numbers when possible.

    "10" - 2; // 8
    "10" * 2; // 20
    "10" / 2; // 5

    // If conversion to a valid number fails, the result is NaN.

    "hello" - 2; // NaN
    "hello" * 2; // NaN
    "hello" / 2; // NaN

    // Operations are evaluated according to precedence
    // and associativity. Each operation produces a value
    // that is used by the next operation.

    10 + "5" - 2; // 103
    // First: 10 + "5" -> "105"
    // Then: "105" - 2 -> 103

    10 - "5" + "2"; // "52"
    // First: 10 - "5" -> 5
    // Then: 5 + "2" -> "52"

    // ================================
    //       Infinity and NaN
    // ================================

    // Division by zero may produce Infinity or -Infinity.

    1 / 0;  // Infinity
    -1 / 0; // -Infinity

    // Zero divided by zero produces NaN.
    0 / 0; // NaN

    // Remainder with a zero divisor produces NaN.
    5 % 0;  // NaN
    -5 % 0; // NaN

    // NaN means "Not a Number".
    // It propagates through most arithmetic operations.

    NaN + 1; // NaN
    NaN * 2; // NaN

    // Check for NaN with Number.isNaN().
    Number.isNaN(NaN);   // true
    Number.isNaN("hello"); // false

    // Infinity is a special numeric value, not an error.
    Infinity + 1; // Infinity
    Infinity - Infinity; // NaN

    // ================================
    //       Increment and Decrement
    // ================================

    // These operators were covered under Unary Operators.
    // Prefix modifies the variable first and returns the new value.
    // Postfix returns the old value and then modifies the variable.

    let x = 5;

    x++; // expression value: 5; x becomes 6
    ++x; // expression value: 7; x becomes 7

    x--; // expression value: 7; x becomes 6
    --x; // expression value: 5; x becomes 5

    // Increment and decrement require a valid assignable operand.
    // They are commonly used with numeric variables.

    // ================================
    //       Arithmetic Assignment
    // ================================

    // Compound assignment operators combine an operation
    // with assignment.

    let score = 10;

    score += 5; // score = score + 5 -> 15
    score -= 3; // score = score - 3 -> 12
    score *= 2; // score = score * 2 -> 24
    score /= 4; // score = score / 4 -> 6
    score %= 4; // score = score % 4 -> 2
    score **= 3; // score = score ** 3 -> 8

    // Note: `+=` follows the same addition/concatenation rules
    // as `+`. The other arithmetic assignments perform
    // their corresponding operations.
  }


  // =================================================================
  //                      Bitwise Operators
  // =================================================================
  {
    // Bitwise operators perform operations on the binary representations of numbers. 
    // They operate on individual bits and return a Number.

    // JavaScript converts Number operands to 32-bit integers for bitwise operations. 
    // The result is also a 32-bit integer value represented as a JavaScript Number.

    // Binary Representation
    // A bit is a binary digit: 0 or 1.
    // Each bit position represents a power of 2.
    //
    // Decimal 5 = Binary 0101
    // Decimal 3 = Binary 0011
    //
    // Bitwise operators compare corresponding bit positions and
    // produce a new binary result.

    // ================================
    //         Bitwise AND (&)
    // ================================

    // A result bit is 1 only when BOTH corresponding bits are 1.

    5 & 3; // 1
    // 0101
    // 0011
    // ----
    // 0001 = 1

    5 & 1; // 1
    5 & 2; // 0
    7 & 3; // 3

    // ================================
    //          Bitwise OR (|)
    // ================================

    // A result bit is 1 when AT LEAST ONE corresponding bit is 1.

    5 | 3; // 7
    // 0101
    // 0011
    // ----
    // 0111 = 7

    5 | 1; // 5
    5 | 2; // 7

    // ================================
    //         Bitwise XOR (^)
    // ================================

    // XOR means exclusive OR.
    // A result bit is 1 when the corresponding bits are DIFFERENT.

    5 ^ 3; // 6
    // 0101
    // 0011
    // ----
    // 0110 = 6

    5 ^ 1; // 4
    5 ^ 5; // 0

    // ================================
    //          Bitwise NOT (~)
    // ================================

    // 'NOT' inverts every bit: 0 becomes 1, and 1 becomes 0.
    // For JavaScript Number operands, the operation uses 32-bit
    // integer representations.
    //
    // The result follows this identity:
    ~x === -x - 1;

    ~5;  // -6
    ~3;  // -4
    ~0;  // -1
    ~-1; // 0
    ~-5; // 4

    // ================================
    //          Left Shift (<<)
    // ================================

    // Shifts bits to the left.
    // Zeros fill the empty positions on the right.
    // For suitable integer values, shifting left by one position
    // is equivalent to multiplying by 2.

    5 << 1; // 10
    3 << 1; // 6
    5 << 2; // 20

    // ================================
    //      Signed Right Shift (>>)
    // ================================

    // Shifts bits to the right.
    // The leftmost positions are filled with copies of the sign bit, preserving the sign of the 32-bit integer result.
    // For ordinary integer values, shifting right by one position is similar to dividing by 2 and rounding down.

    20 >> 2;  // 5
    16 >> 2;  // 4
    8 >> 1;   // 4
    -8 >> 1;  // -4

    // ================================
    //    Unsigned Right Shift (>>>)
    // ================================

    // Shifts bits to the right and fills empty positions on the left
    // with zeros, without preserving a negative sign.
    // The result is interpreted as an unsigned 32-bit integer.

    8 >>> 1;  // 4
    -8 >>> 1; // 2147483644

    // For non-negative integers, >> and >>> often produce the same result. 
    // For negative integers, their results can differ.
    // BigInt does not support the >>> operator.

    // ================================
    //        Bitwise Assignment
    // ================================

    // These operators perform a bitwise operation and assign
    // the result back to the variable.

    let flags = 5; // 0101

    flags &= 3; // Same as flags = flags & 3; -> 1
    flags |= 2; // Same as flags = flags | 2; -> 3
    flags ^= 1; // Same as flags = flags ^ 1; -> 2

    // ================================
    //            Bit Masks
    // ================================

    // Bit masks use individual bits to represent flags, permissions or options.
    // Powers of 2 allow each flag to use a separate bit.

    const READ = 1;   // 001
    const WRITE = 2;  // 010
    const DELETE = 4; // 100

    const permissions = READ | DELETE; // 5 (101)

    permissions & READ;   // 1: READ is enabled
    permissions & WRITE;  // 0: WRITE is not enabled
    permissions & DELETE; // 4: DELETE is enabled

    if ((permissions & READ) !== 0) {
      console.log("Can read");
    }

    // ================================
    //    Number-to-32-bit Conversion
    // ================================

    // Bitwise operations convert Number operands to 32-bit integers.
    // Fractions are truncated toward zero before the operation.
    // Values outside the signed 32-bit range wrap around.

    5.9 | 0;       // 5
    -5.9 | 0;      // -5
    (2 ** 32) | 0; // 0
    (2 ** 31) | 0; // -2147483648

    // Shift counts use only the lowest 5 bits of the shift amount.
    // Therefore, for Number operands, the effective shift count
    // is between 0 and 31.

    1 << 32; // 1, because the effective shift count is 0

    // Avoid using bitwise operators for general-purpose arithmetic
    // with large numbers or values requiring decimal precision.
  }

  // =================================================================
  //                      Logical Operators 
  // =================================================================
  {
    // Logical operators evaluate expressions using truthiness and return values or booleans, depending on the operator.

    // ================================
    //          Logical AND (&&)
    // ================================

    // Returns the first falsy operand, or the last operand
    // if all operands are truthy.

    true && true;   // true
    true && false;  // false
    "JS" && 42;     // 42
    0 && 42;        // 0

    // ================================
    //           Logical OR (||)
    // ================================

    // Returns the first truthy operand, or the last operand
    // if all operands are falsy.

    false || true;   // true
    10 || 20;        // 10
    0 || 20;         // 20
    "" || "default"; // "default"

    // ================================
    //          Logical NOT (!)
    // ================================

    // Converts the operand to a boolean and inverts it.
    // Always returns a boolean.

    !true;     // false
    !false;    // true
    !0;        // true
    !"hello";  // false

    // ================================
    //        Boolean Conversion (!!)
    // ================================

    // Double NOT converts a value to a boolean based on truthiness.

    !!0;        // false
    !!"hello";  // true
    !![];       // true
    !!null;     // false

    // ================================
    //         Truthy and Falsy
    // ================================

    // Falsy values include:
    // false, 0, -0, 0n, "", null, undefined, NaN.
    //
    // All other values are truthy, including:
    // "0", "false", [], {}.
    //
    // Empty arrays and objects are truthy in JavaScript.

    // ================================
    //      Short-Circuit Evaluation
    // ================================

    // && skips the right operand if the left operand is falsy.
    // || skips the right operand if the left operand is truthy.
    //
    // This can prevent unnecessary function calls or assignments.

    let count = 0;

    false && (count = 10);
    true || (count = 20);

    console.log(count); // 0

    // ================================
    //      Nullish Coalescing (??)
    // ================================

    // Returns the right operand only when the left operand
    // is null or undefined.
    //
    // Unlike ||, it preserves other falsy values such as
    // 0, false, and "".

    0 || 10;        // 10
    0 ?? 10;        // 0

    false || true;  // true
    false ?? true;  // false

    null ?? "default";      // "default"
    undefined ?? "default"; // "default"

    // ================================
    //       Operator Precedence
    // ================================

    // ! has higher precedence than &&.
    // && has higher precedence than ||.
    // Parentheses can change the evaluation order.

    true || false && false;    // true
    (true || false) && false;  // false

    // ================================
    //          Common Uses
    // ================================

    // Use || when any falsy value should trigger a default.
    // Use ?? when only null or undefined should trigger a default.
    // Use && for conditional execution.

    const username = inputName ?? "Guest";
    isLoggedIn && showDashboard();
  }

  // =================================================================
  //                       BigInt Operators
  // =================================================================
  {
    // BigInt represents integers with arbitrary precision.
    // Use the `n` suffix or the BigInt() function to create a BigInt.

    const a = 123n;
    const b = BigInt("123");

    // ================================
    //       Arithmetic Operators
    // ================================

    // BigInt supports addition, subtraction, multiplication,
    // division, remainder, and exponentiation.

    10n + 5n; // 15n
    10n - 5n; // 5n
    10n * 5n; // 50n
    10n / 3n; // 3n
    10n % 3n; // 1n
    2n ** 3n; // 8n

    // Division truncates the fractional part toward zero.
    // It does not round the result.

    -10n / 3n; // -3n
    10n / 3n;  // 3n

    // BigInt does not support negative exponents.

    2n ** -1n; // RangeError
    2 ** -1; // 0.5 (Number)

    // ================================
    //       Type Compatibility
    // ================================

    // BigInt and Number cannot be mixed in arithmetic operations.
    // Convert explicitly when combining the two types.

    10n + 5n; // 15n
    10 + 5;   // 15
    10n + 5;  // TypeError

    10n + BigInt(5); // 15n
    Number(10n) + 5; // 15

    // Converting a large BigInt to Number may lose precision.

    // ================================
    //       Comparison Operators
    // ================================

    // BigInt and Number can be compared.
    // Loose equality allows comparison across these types.
    // Strict equality requires the same type.

    5n == 5;  // true
    5n === 5; // false
    5n > 4;   // true
    5n < 6;   // true

    // ================================
    //       Increment and Decrement
    // ================================

    // Increment and decrement work with BigInt variables. 
    // The variable must be reassignable.

    let count = 5n;

    count++; // count becomes 6n
    count--; // count becomes 5n

    // Prefix returns the updated value.
    // Postfix returns the previous value.

    let x = 5n;

    ++x; // expression value: 6n; x becomes 6n
    x++; // expression value: 6n; x becomes 7n

    // ================================
    //          Bitwise Operators
    // ================================

    // BigInt supports bitwise operations without converting
    // operands to 32-bit integers.

    5n & 3n;  // 1n
    5n | 3n;  // 7n
    5n ^ 3n;  // 6n
    ~5n;      // -6n

    // Left and signed right shifts are supported.

    5n << 1n; // 10n
    9n >> 1n; // 4n

    // Unsigned right shift is not supported for BigInt.

    9n >>> 1n; // TypeError

    // ================================
    //        Division by Zero
    // ================================

    // BigInt division or remainder by zero throws a RangeError.
    // Unlike Number, it does not produce Infinity or NaN.

    10n / 0n; // RangeError
    10n % 0n; // RangeError

    // ================================
    //         Important Notes
    // ================================

    // BigInt represents integers only; it has no fractional values.
    // BigInt arithmetic preserves integer precision for large values.
    // Use BigInt when integers may exceed Number's safe integer range.
    // BigInt cannot be used directly with Math methods expecting Number.
    // JSON.stringify() does not serialize BigInt by default.

    // Number.MAX_SAFE_INTEGER; // 9007199254740991
    // 9007199254740992n + 1n;  // 9007199254740993n
  }

}