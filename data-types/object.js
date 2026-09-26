
// =================================================================
//                             Object
// =================================================================
{
  // Object → collection of properties, each defined by a key and a value.

  const user = {
    name: "Elias",
    age: 25
  };

  console.log(user.name);    // "Elias"
  console.log(user["age"]);  // 25


  // Object References
  // Variables store references to objects, not the object itself.

  const obj1 = { value: 10 };
  const obj2 = obj1;

  obj2.value = 20;

  console.log(obj1.value); // 20
  console.log(obj2.value); // 20

  console.log(obj1 === obj2); // true

  // Different objects have different identities,
  // even when they contain the same values.

  const obj3 = { value: 10 };
  const obj4 = { value: 10 };

  console.log(obj3 === obj4); // false


  // const + Object
  // const prevents reassignment of the reference,
  // but does not prevent mutation of the object.

  const personObj = {
    name: "Elias",
    age: 25
  };

  personObj.age = 26; // OK

  // person = {};  // TypeError ❌


  // Shallow Copy
  // Creates a new object, copying the properties from the original at the first level*

  const original = {
    name: "Elias",
    age: 25
  };

  const copy = { ...original };

  console.log(original === copy); // false


  //* Nested objects still are not copied and share their reference.

  const original1 = {
    name: "Elias",
    address: {
      city: "Juazeiro"
    }
  };

  const copy2 = { ...original1 };

  console.log(original1 === copy2);             // false
  console.log(original1.address === copy2.address); // true

  copy2.address.city = "Crato";

  console.log(original1.address.city); // "Crato"

  // Spread creates a shallow copy:
  // the outer object is new, but nested objects are not cloned.
}

// =================================================================  
//                    Primitive Values & Methods
// =================================================================
{
  // Primitive values can access methods and properties
  // through temporary boxing via their corresponding wrapper/prototype.

  // "hello".toUpperCase()
  // → conceptually similar to:
  // new String("hello").toUpperCase()

  // 10.2.toFixed(2)
  // → conceptually similar to:
  // new Number(10.2).toFixed(2)

  // The primitive itself remains a primitive:

  typeof "hello"; // "string"
  typeof 10.2;    // "number"
  typeof true;    // "boolean"
}

// =================================================================
//                        Object Prototype
// =================================================================
{
  // Every object has an internal [[Prototype]] reference
  // that points to another object (or null).

  const user = {
    name: "Elias"
  };

  // Object literals normally have Object.prototype in their prototype chain.

  // Properties can be found through the prototype chain.
  // If a property is not found directly on the object, JavaScript searches its prototype, then the prototype's prototype, etc.

  // Example:

  user.toString();

  // "toString" is not defined directly on user,
  // but it is found in Object.prototype.

  // Prototype chain:
  //
  // user
  //  ↓ [[Prototype]]
  // Object.prototype
  //  ↓ [[Prototype]]
  // null


  // Own Properties vs Prototype Properties

  // A property defined directly on an object is an own property.

  user.name; // "Elias"

  // "toString" is accessible, but is not an own property.

  user.hasOwnProperty("name");      // true
  user.hasOwnProperty("toString");  // false


  // hasOwnProperty()

  // Checks whether a property belongs directly to the object.
  // It does NOT search the prototype chain.

  user.hasOwnProperty("name");      // true
  user.hasOwnProperty("toString");  // false


  // 'in' Operator

  // Checks whether a property exists on the object
  // OR anywhere in its prototype chain.

  "name" in user;           // true
  "toString" in user;       // true
  "banana" in user;         // false


  // `in` checks property keys, not values.

  const fruits = ["apple", "banana"];

  0 in fruits;              // true
  "banana" in fruits;       // false

  fruits.includes("banana"); // true
}

// =================================================================
//                        Prototypal Inheritance
// =================================================================
{

  // An object can have another object as its [[Prototype]].
  // It does not copy the prototype's properties.
  // It keeps a relationship with it and can access its properties through the prototype chain.

  const animal = {
    speak() {
      console.log("Some sound");
    }
  };

  const dog = Object.create(animal);

  dog.name = "Rex";

  dog.speak(); // "Some sound"

  // Property lookup follows the prototype chain:
  //
  // dog → animal → ... → null


  // Own vs inherited properties:

  dog.hasOwnProperty("name");  // true
  dog.hasOwnProperty("speak"); // false
  "speak" in dog;              // true


  // An own property takes precedence over an inherited property.
  // This is called property shadowing.

  dog.speak = () => console.log("Woof!");

  dog.speak(); // "Woof!"


  // Object.create() creates a new object with the given object
  // as its prototype.

  Object.getPrototypeOf(dog) === animal; // true

  // JavaScript's `class` syntax is built on top of prototypes.
}

// =================================================================
//                          Built-in Objects
// =================================================================
{
  // Objects and functions natively provided by the JavaScript language, offering common functionality.

  // Examples:
  // Object, Array, Number, String, Boolean; Math, Date, JSON, ...

  // They can have different natures:
  typeof Object; // "function"
  typeof Array;  // "function"
  typeof Math;   // "object"

  // Functions are objects in JavaScript, but typeof functions returns the special value "function".

  // ================================
  //              Object
  // ================================
  {
    // Object is a built-in function that can also be used as a constructor.
    // It has a .prototype property:

    Object.prototype;

    // Object.prototype is the prototype commonly used by ordinary objects
    // created with object literals or with Object() / new Object().

    // Different ways of creating an ordinary object:

    const obj1 = {};
    const obj2 = Object();
    const obj3 = new Object();

    // All three normally have Object.prototype in their prototype chain:

    Object.getPrototypeOf(obj1) === Object.prototype; // true
    Object.getPrototypeOf(obj2) === Object.prototype; // true
    Object.getPrototypeOf(obj3) === Object.prototype; // true

    // {} and Object() / new Object() use different syntax/mechanisms.
    //
    // {} always creates a new ordinary object.
    // Object() can be called as a function.
    // new Object() invokes Object as a constructor.
    //
    // Object() and new Object() can also behave differently when given
    // values as arguments.

    // Each expression creates a different object:

    obj1 === obj2; // false
    obj2 === obj3; // false
    obj1 === obj3; // false


    // Object.prototype itself has no prototype:

    Object.getPrototypeOf(Object.prototype); // null


    // Object keys / values / entries

    // Object.keys(obj) → returns an array of the object's own enumerable property names (keys).
    // Object.values(obj) → returns an array of the object's own enumerable property values.
    // Object.entries(obj) → returns an array of the object's own enumerable [key, value] pairs.

    const user = {
      name: "Elias",
      age: 25
    };

    Object.keys(user);
    // ["name", "age"]

    Object.values(user);
    // ["Elias", 25]

    Object.entries(user);
    // [["name", "Elias"], ["age", 25]]


    // Own vs Prototype Properties

    Object.prototype.country = "Brazil";

    Object.keys(user);
    // ["name", "age"]

    Object.entries(user);
    // [["name", "Elias"], ["age", 25]]

    "country" in user;
    // true → searches the prototype chain too.

    user.hasOwnProperty("country");
    // false → country is not an own property.

    // Object.keys(), Object.values() and Object.entries() only consider own enumerable properties.
    // The `in` operator also searches the prototype chain.
  }


  // ================================
  //              Array
  // ================================
  {
    // Arrays are objects used to store ordered collections of values.

    // typeof [] === "object"

    // - Indexes start at 0.
    // - `length` represents the highest index + 1.
    // - Accessing a nonexistent index returns `undefined`.
    // - Arrays can be sparse (contain empty slots).
    //
    // Array.isArray([]) === true
    //
    // Arrays inherit from Array.prototype.

  }
}