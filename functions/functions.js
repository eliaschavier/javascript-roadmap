// =================================================================
//                            Functions
// =================================================================

// Functions is a block of code that we can reuse. It can take input parameters, perform operations, and return an output. 
// Functions help in organizing code, making it reusable, and improving readability.


// =================================================================
//                        Function Parameters
// =================================================================
{
  // Parameters are variables that are passed into a function to provide input values. 
  // They allow functions to be more flexible and reusable.

  // ================================
  //        Default Parameters
  // ================================

  // Default parameters allow us to specify default values for function parameters.
  // If no value (or undefined) is provided for a parameter, the default value will be used.

  function greet(name = "Guest") {
    return `Hello, ${name}!`;
  }

  console.log(greet());         // Output: Hello, Guest!
  console.log(greet("Alice"));  // Output: Hello, Alice!

  // ================================
  //        Rest Parameters
  // ================================

  // Rest parameters allow us to represent an indefinite number of arguments as an array.

  function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }

  console.log(sum(1, 2, 3));    // Output: 6
  console.log(sum(4, 5, 6, 7)); // Output: 22

  // Can be used to handle all remaining arguments passed to a function.

  function multiply(multiplier, ...numbers) {
    return numbers.map(num => num * multiplier);
  }

  console.log(multiply(2, 1, 2, 3)); // Output: [2, 4, 6]
  console.log(multiply(3, 4, 5));    // Output: [12, 15]
}


// =================================================================
//                        Arrow Functions
// =================================================================
{
  // Arrow functions are a concise way to write functions in JavaScript.
  // They have a shorter syntax compared to traditional function expressions and do not have their own 'this' context.

  const add = (a, b) => a + b;
  add(2, 3); // 5  

  const square = x => x * x;
  square(4); // 16

  const greet = () => "Hello!";
  greet(); // Hello!

  // Arrow functions are especially useful for callbacks and functional programming patterns.

  // ================================
  //        Returning Objects
  // ================================

  // When returning an object literal from an arrow function, we need to wrap the object in parentheses to avoid ambiguity with the function body.

  const createUser1 = (name, age) => ({ name, age });
  const createUser2 = (name, age) => { name, age };
  const createUser3 = (name, age) => { return { name: name, age: age } };

  console.log(createUser1("Alice", 30)); // { name: "Alice", age: 30 }
  console.log(createUser2("Bob", 25));   //  undefined (because the function body is treated as a block, not an object literal)
  console.log(createUser3("Charlie", 35)); // { name: "Charlie", age: 35 }


  // ================================
  //        Lexical 'this'
  // ================================

  // Arrow functions do not have their own 'this' context. Instead, they inherit 'this' from the surrounding scope (lexical scoping).
  // This makes them particularly useful in scenarios where we want to preserve the context of 'this'.

  function Person(name) {
    this.name = name;
    this.sayHello = () => {
      console.log(`Hello, my name is ${this.name}`);
    };
  }

  const person = new Person("Alice");
  person.sayHello();  // Hello, my name is Alice
}


// =================================================================
//        IIFEs (Immediately Invoked Function Expressions)
// =================================================================
{
  // It defines and executes a function immediately.

  (function () {
    console.log("Hello!");
  })();

  // An IIFE can return a value:

  const result = (function (a, b) {
    return a + b;
  })(2, 3);

  result; // 5

  // IIFEs can also use arrow functions.

  const value = (() => 42)();

  value; // 42
}

// =================================================================
//                       arguments Object
// =================================================================
{
  // The arguments object contains arguments passed to a function.
  // It is array-like, but it is not a real array.

  function show() {
    return arguments;
  }

  show(10, 20, 30);

  // ================================
  //             Accessing Arguments
  // ================================

  // Access arguments by index and check their count.

  function sum() {
    return arguments[0] + arguments[1];
  }

  sum(5, 8); // 13

  function count() {
    return arguments.length;
  }

  count("a", "b", "c"); // 3

  // ================================
  //         Arguments and Arrows
  // ================================

  // Arrow functions do not have their own arguments object.

  // const fn = () => arguments; // Depends on outer scope

  // ================================
  //        Arguments and Rest
  // ================================

  // Rest parameters create a real array and work with arrow functions.

  function collect(...args) {
    return args;
  }

  collect(1, 2, 3); // [1, 2, 3]

  // Rest can collect only the arguments after regular parameters.

  const rest = (first, ...args) => args;

  rest(1, 2, 3); // [2, 3]

}

