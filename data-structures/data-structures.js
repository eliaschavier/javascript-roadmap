// =================================================================
//                          Data Structures
// =================================================================

// A data structure is a way to organize, manage and store data for efficient access and modification.

// JavaScript provides built-in data structures, such as arrays and objects.
// Non-built-in data structures are not provided directly by the language and must be implemented when needed.
{

  // =================================================================
  //                        Keyed Collections
  // =================================================================
  {
    // Collections that organize data using keys.

    // Object → properties with string or Symbol keys.
    // Map    → key-value pairs; keys can be values of any type.
    // WeakMap → key-value pairs with object keys and weak references.


    // Map

    const map = new Map();

    map.set("key", "value");
    map.set(1, "one");
    map.set(true, "Elias");
    map.set(false, "");

    map.get("key"); // "value"
    map.get(1);     // "one"
    map.get(true);  // "Elias"
    map.get(false); // ""

    // Map keys can be values of different types: 
    // strings, numbers, booleans, objects, etc.
  }


}