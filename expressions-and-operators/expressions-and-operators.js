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

    // Increment and decrement require a valid assignment target.
    // They are commonly used with variables, not arbitrary values.

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
}