// =================================================================
//                          Data Structures
// =================================================================

// A data structure is a way to organize, manage and store data for efficient access and modification.

// JavaScript provides built-in data structures, such as arrays and objects.
// Non-built-in data structures are not provided directly by the language and must be implemented when needed.


// =================================================================
//                        Keyed Collections
// =================================================================
{
  // Collections designed for storing and organizing values, including key-value associations.

  // ================================
  //               Map
  // ================================

  // A Map is a collection of key-value pairs.
  // Keys can be values of any type.

  const map = new Map();

  const key1 = { id: 1 };

  map.set("name", "Elias");
  map.set(true, "yes");
  map.set(42, "answer");
  map.set(key1, "object key");
  map.set({ id: 1 }, "object key");

  map.get("name");      // "Elias"
  map.get(true);        // "yes"
  map.get(42);          // "answer"
  map.get(key1);        // "object key"
  map.get({ id: 1 });   // undefined — different object reference

  // Common methods:

  map.has("name");       // returns true if the key exists
  map.delete("name");   // removes the entry with key "name"
  map.size;             // number of entries

  // Map maintains strong references to its keys and values.
  //
  // Therefore, an object used as a key remains reachable through the Map while that entry exists.


  // ================================
  //            WeakMap
  // ================================

  // Similar to Map, but designed for object keys and weak references.
  // Keys must be objects (or non-registered Symbols).
  // Values can be of any type.

  const weakMap = new WeakMap();

  let user = {
    name: "Elias"
  };

  weakMap.set(user, "some data");

  weakMap.get(user); // "some data"

  // The references to keys in a WeakMap are weak.

  // A weak reference means that the reference does not prevent the object
  // from being garbage collected when there are no other strong references.

  // If `user` becomes null and no other strong reference exists:

  user = null;

  // The object becomes eligible for garbage collection.
  // The exact moment of collection is determined by the runtime.

  // WeakMap is useful when data should be associated with an object
  // without keeping that object alive.

  // Example: storing metadata associated with an object.

  const metadata = new WeakMap();

  function processUser(user) {
    metadata.set(user, {
      processed: true
    });
  }


  // ================================
  //          Map vs WeakMap
  // ================================

  // Map
  // → keys can be any type
  // → strong references
  // → iterable
  // → has `.size`
  // → has `keys()`, `values()` and `entries()`

  // WeakMap
  // → keys must be objects (or non-registered Symbols)
  // → weak references to keys
  // → not iterable

  // The values in a WeakMap are not weak.
  // The weak reference behavior applies to the keys.


  // ================================
  //               Set
  // ================================

  // A Set is a collection of unique values.

  // Unlike an Array, a Set does not provide indexed access.
  // It preserves insertion order and allows iteration.

  const set = new Set();

  set.add("Elias");
  set.add("Maria");
  set.add("Elias");

  console.log(set); // Set(2) { "Elias", "Maria" }

  // Duplicate values are ignored.


  // Common methods:

  set.has("Elias"); // true

  set.delete("Elias");

  set.has("Elias"); // false

  set.size; // number of values


  // Set can store values of any type.

  const values = new Set();

  values.add("hello");
  values.add(42);
  values.add(true);
  values.add({ name: "Elias" });


  // Set Iteration

  // Set does not provide access by index:

  set[0]; // undefined

  // Instead, values can be accessed through iteration.

  for (const value of set) {
    console.log(value);
  }

  // `for...of` uses the Set's iterator internally.
  //
  // An iterator allows a collection to be traversed one value at a time
  // using `next()`.

  const iterator = set.values();

  iterator.next();
  // { value: ..., done: false }

  iterator.next();
  // { value: ..., done: false }

  iterator.next();
  // { value: undefined, done: true }


  // Set implements the iterable protocol.

  set[Symbol.iterator]();


  // For Set, `values` is also the default iterator method.

  set.values === set[Symbol.iterator]; // true


  // ================================
  //              WeakSet
  // ================================

  // WeakSet is similar to Set, but uses weak references.
  // It is designed for objects that should be tracked without keeping
  // them alive in memory.
  //
  // WeakSet only accepts objects as values
  // (and non-registered Symbols as an advanced exception).

  const weakSet = new WeakSet();

  let userA = {
    name: "Elias"
  };

  weakSet.add(userA);

  weakSet.has(userA); // true


  // The reference from WeakSet to the object is weak.

  // If `userA` is the last strong reference:

  userA = null;

  // The object becomes eligible for garbage collection.
  // WeakSet does not prevent the object from being collected.


  // WeakSet is mainly useful for tracking whether an object belongs
  // to a set without extending its lifetime.

  // Example:
  // tracking objects that have already been processed.

  const processed = new WeakSet();

  function processUser(user) {
    if (processed.has(user)) {
      return;
    }

    processed.add(user);

    // process user...
  }


  // WeakSet cannot be iterated.

  // There is no:
  // - for...of
  // - values()
  // - keys()
  // - entries()
  // - size

  // This is related to weak references: objects may become eligible
  // for garbage collection independently of the WeakSet.
  //
  // Therefore, the contents cannot be reliably enumerated.


  // ==================================
  //  Map vs WeakMap vs Set vs WeakSet
  // ==================================
  //
  // Map
  // → key-value associations
  // → keys can be any type
  // → values can be any type
  // → strong references
  // → iterable
  //
  // Use when:
  // "I need to associate a key with a value."
  //
  //
  // WeakMap
  // → key-value associations
  // → keys must be objects (or non-registered Symbols)
  // → values can be any type
  // → weak references to keys
  // → not iterable
  //
  // Use when:
  // "I need to associate data with an object without
  // keeping that object alive."
  //
  //
  // Set
  // → collection of unique values
  // → values can be any type
  // → strong references
  // → preserves insertion order
  // → iterable
  // → no indexed access
  //
  // Use when:
  // "I need a collection of unique values and mainly care
  // whether a value exists."
  //
  //
  // WeakSet
  // → collection of unique objects
  // → weak references
  // → not iterable
  // → no size
  //
  // Use when:
  // "I need to track objects without keeping them alive."
}


// =================================================================
//                       Indexed Collections
// =================================================================
{
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

  // `length` is one greater than the highest array index,
  // even when there are empty slots.

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