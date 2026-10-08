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

    // Falsy values:
    false;
    0, -0;
    0n;
    "";
    null;
    undefined;
    NaN;

    // All other values are truthy, including:
    [];
    {};


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

  }
}