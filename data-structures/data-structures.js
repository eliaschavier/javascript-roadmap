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

    // Object

    const user = {
      name: "Elias",
      age: 25
    };

    user.name;      // "Elias"
    user["name"];   // "Elias"

    // Object properties are accessed using their keys.

    // Object keys are strings or Symbols.

    const obj = {};

    obj[123] = "hello";

    Object.keys(obj); // ["123"]


    // Map

    // Map is a collection of key-value pairs.
    // Unlike Object, Map can use values of any type as keys.

    const map = new Map();

    map.set("name", "Elias");
    map.set(true, "yes");
    map.set(42, "answer");

    map.get("name"); // "Elias"
    map.get(true);   // "yes"
    map.get(42);     // "answer"

    // Keys can be strings, numbers, booleans, objects, etc.

    // Map methods

    map.has("name"); // true

    map.delete("name");

    map.has("name"); // false

    map.size; // number of entries


    // WeakMap

    // WeakMap is similar to Map, but its keys must be objects
    // and its references to those objects are weak.
    //
    // Weak references do not prevent the object from being
    // garbage collected when it is no longer strongly referenced.

    const weakMap = new WeakMap();

    const userObject = {};

    weakMap.set(userObject, "some data");

    weakMap.get(userObject); // "some data"


    // Keyed Collections
    //
    // Object  → string / Symbol keys
    // Map     → keys can be values of any type
    // WeakMap → object keys + weak references
  }

  // =================================================================
  //                    Indexed Collections
  // =================================================================

  // Collections where elements are accessed using numeric indexes.

  // Array

  const fruits = ["apple", "banana", "orange"];

  fruits[0]; // "apple"
  fruits[1]; // "banana"
  fruits[2]; // "orange"

  // Indexes start at 0.

  // Arrays are objects:
  typeof fruits; // "object"

  Array.isArray(fruits); // true


  // `length`

  // `length` represents the array's length.

  fruits.length; // 3

  // The last index is usually:
  // length - 1

  fruits[fruits.length - 1]; // "orange"


  // Array Prototype

  // Arrays inherit methods from Array.prototype.

  fruits.push("grape");
  fruits.pop();


  // Sparse Arrays

  // Arrays can contain empty slots (holes).

  const numbers = [];

  numbers[0] = 10;
  numbers[5] = 50;

  console.log(numbers.length); // 6

  // The array contains empty slots between index 0 and 5:
  //
  // 0 → 10
  // 1 → empty
  // 2 → empty
  // 3 → empty
  // 4 → empty
  // 5 → 50

  // These are holes, not explicitly stored `undefined` values.

  numbers[1]; // undefined

  // However, index 1 does not actually exist in the array:

  1 in numbers; // false
  0 in numbers; // true
}