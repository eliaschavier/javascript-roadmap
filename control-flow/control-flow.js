// =================================================================
//                           Control Flow
// =================================================================
{

  // =================================================================
  //                    Conditional Statements
  // =================================================================
  {
    // ================================
    //          Truthy & Falsy
    // ================================

    // When a value is used in a boolean context, JavaScript evaluates it as truthy or falsy (ToBoolean).

    // Falsy values: false, 0, -0, 0n, "", null, undefined, NaN
    // Truthy examples: [], {}, "0", "false", 42, -42, Infinity, -Infinity


    // ================================
    //            if...else
    // ================================

    // Executes a block of code if a condition is truthy.

    // `else if` allows additional conditions.
    // `else` executes when all previous conditions are falsy.

    if (condition) {
      // ...
    } else if (anotherCondition) {
      // ...
    } else {
      // ...
    }

    // Conditions are evaluated from top to bottom. 
    // In an if...else if...else chain, only the first truthy condition is executed.

    // Braces `{}` are optional for a single statement, but recommended for readability and safety.

    if (condition) console.log("A");


    // ================================
    //            switch
    // ================================

    // Selects a block of code based on the value of an expression.

    switch (expression) {
      case value1:
        // ...
        break;

      case value2:
        // ...
        break;

      default:
      // ...
    }

    // `case` values are compared strictly (`===`).
    // `break` exits the switch.
    // `default` executes when no case matches.

    // Without `break`, execution continues into subsequent cases (fall-through).
    // Multiple cases can share the same block through intentional fall-through.

    // All `case` clauses share the same lexical scope.
    // Use braces `{}` to create separate scopes when needed, especially for `let` and `const` declarations.

    switch (expression) {
      case 1: {
        let result = "One";
        break;
      }

      case 2: {
        let result = "Two"; // Without braces, this would conflict with the previous `result`.
        break;
      }
    }

    // `NaN` never matches `case NaN`, because NaN === NaN is false.
  }


  // =================================================================
  //                      Exceptional Handling
  // =================================================================
  {
    // ================================
    //             try...catch
    // ================================

    // Contains code that may throw an error.

    // If an error is thrown, execution skips the rest of `try` and moves to the corresponding `catch`.
    // If no error is thrown, `catch` is skipped.

    try {
      // Code that may throw an error
    } catch (error) {
      // Handles the error
    }

    // The catch binding is optional when the error object isn't needed.

    try {
      riskyOperation();
    } catch {
      console.log("An error occurred");
    }

    // ================================
    //          The Error Object
    // ================================

    Error             // represents an error and provides useful information.
      `error.name`      // the error type/name.
      `error.message`   // the error message.
      `error.stack`     // usually provides the stack trace.

    // Common built-in error types:
    Error, TypeError, ReferenceError, SyntaxError, RangeError


    // ================================
    //              throw
    // ================================

    // Raises an exception and interrupts normal execution.

    // JavaScript allows throwing any value, but using an Error
    // object is recommended for consistent error information.

    throw new Error("Something went wrong");

    // Examples of specific error types:

    throw new TypeError("Invalid type");
    throw new RangeError("Value out of range");


    // ================================
    //         Error Propagation
    // ================================

    // If an error is not handled where it occurs, it propagates up the call stack until a matching `catch` handles it.
    // If no matching `catch` handles it, the error is uncaught. Catching an error stops its propagation unless it is rethrown.

    try {
      // Code that may throw
    } catch (error) {
      console.log(error.message);
      // Use `throw error` to rethrow the caught error.
    }

    // Normal execution continues after the try/catch if the error was handled and not rethrown.


    // ================================
    //              finally
    // ================================

    // Runs after `try` and `catch`, whether an error occurred or not; it is commonly used for cleanup.

    try {
      // Code that may throw
    } catch (error) {
      // Handle the error
    } finally {
      // Runs regardless of whether an error occurred
    }

    // `finally` does not catch or suppress errors by itself.
    // If no `catch` handles the error, it continues propagating after `finally` finishes executing.

    try {
      throw new Error("Oops");
    } finally {
      console.log("Cleanup");
    }

    // Logs "Cleanup", then the error continues propagating.

    // `finally` also runs when `try` or `catch` returns or throws.
    // A `return` or `throw` inside `finally` can override an earlier return or error, potentially hiding the original outcome.
    // Avoid control-flow statements like `return` or `throw` in `finally` unless overriding the outcome is intentional.

    // ================================
    //      Synchronous vs. Async
    // ================================

    // A regular `try...catch` catches synchronous errors thrown while execution is inside its `try` block.
    // It does not catch errors thrown later in callbacks scheduled by mechanisms such as `setTimeout`, after the block has ended.
    // Promise rejections and `async/await` have their own error-handling patterns, covered in Asynchronous JavaScript.
  }
}