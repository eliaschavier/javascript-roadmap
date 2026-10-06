// =================================================================
//                          Data Structures
// =================================================================

// A data structure is a way to organize, manage and store data in a way that allows efficient access and modification.
// JavaScript provides built-in data structures, such as objects, arrays, maps and sets.
// Other data structures, such as linked lists, stacks, queues, trees and graphs, can be implemented using JavaScript.

// =================================================================
//                        Structured Data
// =================================================================
{
  // Structured data refers to data organized in a defined, predictable and parseable format.
  // It represents information in a way that can be consistently read and processed by humans and software.
  // JSON is a widely used format for representing structured data, especially for data exchange between applications, APIs and configuration files.

  // ================================
  //              JSON
  // ================================

  // JSON (JavaScript Object Notation) is a text format used to represent structured data.
  // JSON is text (string), not a JavaScript object.

  const user = {
    name: "Elias",
    age: 25
  };

  const json = '{"name":"Elias","age":25}';

  typeof user; // "object"
  typeof json; // "string"

  // Property names must use double quotes.

  const validJSON = '{"name":"Elias"}';

  // Invalid JSON:
  // { name: "Elias" }

  // Strings must use double quotes.
  // Comments are not allowed.

  // JSON supports:
  // - string
  // - number
  // - boolean
  // - null
  // - object
  // - array

  // JSON does not have JavaScript-specific values such as:
  // - undefined
  // - Symbol
  // - BigInt
  // - Function


  // ================================
  //        JSON.stringify()
  // ================================

  // Converts a JavaScript value into a JSON string.

  const serialized = JSON.stringify(user);

  console.log(serialized); // '{"name":"Elias","age":25}'

  // JavaScript value → JSON string


  // stringify() behavior for different types:
  // undefined, functions and Symbols:

  // Inside objects → properties are omitted.
  // Inside arrays → values become null.
  // As the root value → returns undefined.

  JSON.stringify({ value: undefined }); // "{}"

  JSON.stringify([undefined]); // "[null]"

  JSON.stringify(undefined); // undefined

  // BigInt cannot be serialized by default.

  JSON.stringify(10n); // TypeError

  // Circular references also cause TypeError.

  const obj = {};
  obj.self = obj;

  JSON.stringify(obj); // TypeError


  // ================================
  //          JSON.parse()
  // ================================

  // Converts a valid JSON string into a JavaScript value.

  const parsed = JSON.parse(serialized);

  console.log(parsed); // { name: "Elias", age: 25 }

  // JSON string → JavaScript value

  // The parsed object is a new object with a different identity.

  parsed === user; // false


  // parse() behavior:
  // JSON.parse() requires valid JSON.

  // Invalid JSON → SyntaxError.

  JSON.parse('{"name":"Elias"}'); // { name: "Elias" }

  JSON.parse('[1, 2, 3]'); // [1, 2, 3]

  JSON.parse('"Elias"'); // "Elias"

  JSON.parse('null'); // null

  JSON.parse('undefined'); // SyntaxError

  JSON.parse('{name:"Elias"}'); // SyntaxError
}


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

  // ================================
  //              Array
  // ================================
  {
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

    // `length` can be changed manually.

    fruits.length = 2;

    console.log(fruits); // ["apple", "banana"]


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


    // Iterating over Sparse Arrays

    // `for...in` iterates over existing properties/indexes.
    // Empty slots (holes) are skipped.

    
    const sparse = [];
    sparse[2] = "hello";

    for (let index in sparse) {
      console.log(index);
    }

    // 2


    // `for...of` iterates over the values of the sequence.
    // It follows the array's length, so holes produce `undefined`.

    for (let value of sparse) {
      console.log(value);
    }

    // undefined
    // undefined
    // "hello"


    // Important:
    // `arr[0]` can return `undefined` even when index 0 does not exist.
    // `0 in arr` can therefore be false.
    //
    // `for...in` checks existing indexes → holes are skipped.
    // `for...of` reads the sequence → holes produce `undefined`.


    // References

    const array1 = [1, 2, 3];
    const array2 = array1;

    array2.push(4);

    console.log(array1); // [1, 2, 3, 4]
    console.log(array2); // [1, 2, 3, 4]

    // Both variables reference the same Array.


    // Shallow Copy

    const original = [1, 2, 3];
    const copy = [...original];

    copy.push(4);

    console.log(original); // [1, 2, 3]
    console.log(copy);     // [1, 2, 3, 4]

    // Spread creates a new Array with the same element references.
    // It performs a shallow copy.


    // Common Array Methods

    const values = [1, 2, 3, 4];

    values.map(x => x * 2);
    // [2, 4, 6]
    // Returns a new Array.

    values.filter(x => x > 2);
    // [3, 4]
    // Returns a new Array.

    values.find(x => x > 2);
    // 3
    // Returns the first matching element.

    values.some(x => x > 3);
    // true
    // Checks whether at least one element matches.

    values.every(x => x > 0);
    // true
    // Checks whether all elements match.

    values.forEach(x => console.log(x));
    // Executes a function for each element.
    // Returns undefined.

    values.reduce((sum, x) => sum + x, 0);
    // 10
    // Reduces the elements to a single result.


    // Mutating Methods

    const items = [1, 2, 3];

    items.push(4);
    // [1, 2, 3, 4]
    // Returns the new length.

    items.pop();
    // [1, 2, 3]
    // Returns the removed element.

    // Some Array methods modify the original Array,
    // while others return a new value or Array.
  }


  // ================================
  //            Typed Array
  // ================================
  {
    // Typed Arrays are structures used to store numeric values with a specific type and bit width.
    // They are used to work with binary data and memory, like when interacting with files, network protocols, or WebGL.

    // Unlike regular Arrays:
    // - They have a fixed length.
    // - They store numeric values using a specific representation.
    // - They are especially useful for binary data.

    // Examples:
    // Int8Array, Uint8Array, Int16Array, Uint16Array,
    // Int32Array, Uint32Array, Float32Array, Float64Array,
    // BigInt64Array and BigUint64Array.

    // Int  → signed integer
    // Uint → unsigned integer
    // Float → floating-point number
    // The number represents the number of bits per element.

    // Uint8 → unsigned 8-bit integer
    // 8 bits = 1 byte
    // Range: 0 to 255.

    const numbers = new Uint8Array([10, 20, 30]);

    console.log(numbers[0]); // 10
    console.log(numbers.length); // 3

    // ================================
    //          ArrayBuffer
    // ================================

    // ArrayBuffer represents a region of raw memory. It does not interpret the data by itself.

    const buffer = new ArrayBuffer(8);

    // Typed Arrays create a "view" over the buffer, allowing the data to be interpreted as specific types.

    const bytes = new Uint8Array(buffer);

    bytes[0] = 255;

    console.log(bytes[0]); // 255

    // The same ArrayBuffer can have multiple views.

    const buffer2 = new ArrayBuffer(2);

    const uint = new Uint8Array(buffer2);
    const int = new Int8Array(buffer2);

    uint[0] = 255;

    console.log(uint[0]); // 255
    console.log(int[0]);  // -1

    // The bits are the same. The view type determines how they are interpreted.

    // Mental model:
    // ArrayBuffer = raw memory / raw data
    // Typed Array = a way to interpret that memory

    // ================================
    //      Numeric Representation
    // ================================

    // Uint8Array → 0 to 255
    // Int8Array  → -128 to 127

    const buffer3 = new ArrayBuffer(2);

    const uint8 = new Uint8Array(buffer3);
    const int8 = new Int8Array(buffer3);

    uint8[0] = 128;
    uint8[1] = 255;

    console.log(uint8[0]); // 128
    console.log(uint8[1]); // 255

    console.log(int8[0]); // -128
    console.log(int8[1]); // -1

    // The same sequence of bits can represent different values depending on the type used to interpret them.

    // ================================
    //     Values Outside the Range
    // ================================

    // Typed Arrays have a range determined by their type.
    // Integer values outside that range are converted to the representation supported by the type.

    const values = new Uint8Array([0, 100, 255, 256, 300, -10]);

    console.log(values); // [0, 100, 255, 0, 44, 246]

    // ================================
    //            Use Cases
    // ================================

    // Typed Arrays are mainly used when working with binary data or lower-level memory representations.

    // Examples:
    // - files
    // - images
    // - audio and video
    // - network data
    // - cryptography
    // - WebGL / WebGPU
    // - binary file formats

    // Example: reading a file as binary data

    const bufferFromFile = await file.arrayBuffer();
    const fileBytes = new Uint8Array(bufferFromFile);

    // Each position now represents one byte of the file.

    // ================================
    //            Important
    // ================================

    // Typed Arrays are not regular Arrays.

    // typeof new Uint8Array() === "object"

    // They have familiar features such as indexing and length,
    // but they follow different rules and have a fixed length.

    // Typed Arrays do not support methods that change their length,
    // such as push().

    // The size of a Typed Array is fixed when it is created.
  }
}