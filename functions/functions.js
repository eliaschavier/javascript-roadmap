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

// =================================================================
//                    Scope & Function Stack
// =================================================================
{
  // ================================
  //             Scope
  // ================================

  // Global variables can be accessed inside functions.

  const globalValue = 10;

  function example() {
    console.log(globalValue);
  }

  // Function-scoped variables cannot be accessed outside their function.

  function test() {
    const localValue = 20;
  }

  // console.log(localValue); // ReferenceError

  // ================================
  //          Block Scope
  // ================================

  // let and const are block-scoped.
  // var is function-scoped.

  if (true) {
    let a = 10;
    var b = 20;
  }

  // console.log(a); // ReferenceError
  console.log(b); // 20

  // ================================
  //        Lexical Scope
  // ================================

  // Inner functions can access variables from outer scopes.

  function outer() {
    const message = "Hello";

    function inner() {
      console.log(message);
    }

    inner();
  }

  outer(); // "Hello"

  // ================================
  //           Shadowing
  // ================================

  // An inner variable can shadow an outer variable.

  const value = 10;

  function show() {
    const value = 20;
    console.log(value); // 20
  }

  show();
  console.log(value); // 10

  // ================================
  //            Hoisting
  // ================================

  // var declarations are hoisted and initialized with undefined.
  // let and const are hoisted but remain in the Temporal Dead Zone.

  // console.log(a); // undefined
  // var a = 10;

  // console.log(b); // ReferenceError
  // let b = 20;

  // ================================
  //           Call Stack
  // ================================

  // The Call Stack tracks function execution.
  // It follows LIFO: Last In, First Out.

  function first() {
    second();
    console.log("First");
  }

  function second() {
    console.log("Second");
  }

  first(); // "Second", "First"

  // ================================
  //           Recursion
  // ================================

  // Recursion occurs when a function calls itself.
  // A base case stops further recursive calls.

  function count(n) {
    if (n === 0) return;

    console.log(n);
    count(n - 1);
    console.log(n);
  }

  count(3); // 3, 2, 1, 1, 2, 3

}

// =================================================================
//                       Lexical Scoping
// =================================================================
{

  // Scope is determined by where a function is defined, not where it is called.

  // ================================
  //          Outer Scope
  // ================================

  // Inner functions can access variables from outer scopes.

  function outer() {
    const message = "Hello";

    function inner() {
      console.log(message);
    }

    inner();
  }

  outer(); // "Hello"

  // ================================
  //        Definition vs Call
  // ================================

  // A function uses the scope where it was defined.

  const value = "global";

  function inner() {
    console.log(value);
  }

  function outer() {
    const value = "local";
    inner();
  }

  outer(); // "global"

  // ================================
  //        Nested Functions
  // ================================

  // A function defined inside another can access its local variables.

  function first() {
    const color = "red";

    function second() {
      console.log(color);
    }

    second();
  }

  first(); // "red"

}

// =================================================================
//                           Closures
// =================================================================
{
  // A closure retains access to its lexical environment, even after the outer function has finished executing.

  function outer() {
    const message = "Hello";

    return function inner() {
      return message;
    };
  }

  const greet = outer();

  greet(); // "Hello"

  // ================================
  //         Preserving State
  // ================================

  // Closures can preserve variables between function calls.

  function createCounter() {
    let count = 0;

    return function () {
      return ++count;
    };
  }

  const counter = createCounter();

  counter(); // 1
  counter(); // 2
  counter(); // 3

  // ================================
  //       Independent Closures
  // ================================

  // Each function call creates a separate lexical environment.

  const counterA = createCounter();
  const counterB = createCounter();

  counterA(); // 1
  counterA(); // 2
  counterB(); // 1

  // ================================
  //       Shared Environment
  // ================================

  // Functions created in the same scope can share variables.

  function createFunctions() {
    let value = 0;

    return {
      increment: () => ++value,
      getValue: () => value
    };
  }

  const functions = createFunctions();

  functions.increment();
  functions.getValue(); // 1

}

// =================================================================
//                       Built-in Functions
// =================================================================
{
  // ================================
  //       Number Conversion
  // ================================

  // parseInt() extracts the integer part.
  parseInt("15.9px"); // 15
  parseInt("25px");   // 25
  parseInt("px25");   // NaN

  // parseFloat() extracts a floating-point number.
  parseFloat("15.9px"); // 15.9

  // The second argument defines the numeric base (radix).
  parseInt("101", 2); // 5

  // ================================
  //       Type Checking
  // ================================

  // Global functions convert values before checking.
  isNaN("hello");  // true
  isNaN("123");    // false
  isFinite("100"); // true

  // Number methods do not perform type coercion.
  Number.isNaN("hello");   // false
  Number.isNaN(NaN);      // true
  Number.isFinite("100"); // false
  Number.isFinite(100);   // true

  // ================================
  //        Timers
  // ================================

  // setTimeout() schedules a callback after a delay.
  const timeout = setTimeout(() => {
    console.log("Executed!");
  }, 2000);

  // Cancel a scheduled timeout.
  clearTimeout(timeout);

  // setInterval() repeats a callback at intervals.
  let count = 0;

  const interval = setInterval(() => {
    count++;

    if (count === 3) {
      clearInterval(interval);
    }
  }, 1000);

  // A zero delay does not mean immediate execution.
  // Synchronous code runs before the scheduled callback.

  // ================================
  //         URI Encoding
  // ================================

  // encodeURIComponent() encodes a URL component.
  const value = "hello world & coffee";
  const encoded = encodeURIComponent(value);

  // "hello%20world%20%26%20coffee"
  console.log(encoded);

  // Decode an encoded URI component.
  decodeURIComponent(encoded); // "hello world & coffee"

  // encodeURI() preserves URL structural characters.
  // encodeURIComponent() encodes them as part of a value.
  encodeURI("hello world & coffee");
  encodeURIComponent("hello world & coffee");

  // ================================
  //           eval()
  // ================================

  // eval() executes JavaScript code from a string.
  eval("10 + 20 * 2"); // 50

  // Avoid eval() with untrusted input.
  // It can execute malicious JavaScript code.

  // ================================
  //       Structured Clone
  // ================================

  // structuredClone() creates a deep independent copy.
  const original = {
    name: "Elias",
    date: new Date(),
    hobbies: ["skate", "photography"],
    scores: new Map([["level", 10]])
  };

  const copy = structuredClone(original);

  copy.hobbies.push("music");

  console.log(original.hobbies);
  // ["skate", "photography"]

  console.log(copy.hobbies);
  // ["skate", "photography", "music"]

  // Supports Date, Map, Set and circular references.
  // Does not support cloning functions or every object type.
}
