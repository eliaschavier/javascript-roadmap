/** 
 * JavaScript provides three ways to declare variables: var, let, and const. 
 * The choice between them affects scope, hoisting behavior, and whether the variable can be reassigned.
*/

/** 
 * VAR (The Old Way)
 * 
 * var was the original way to declare variables in JavaScript before ES6 (ES2015).
 * Scope: Function-scoped. If you declare a var inside a function, it's only accessible inside that function. 
 *        However, if you declare it inside a block (like an if statement or a for loop), it leaks outside that block into the surrounding function or global scope.
 * Hoisting: var variables are hoisted to the top of their scope and initialized with undefined. 
 *        This means you can actually reference a var variable before it's declared without throwing a ReferenceError (though its value will be undefined).
 * Reassignment & Redeclaration: You can both reassign and redeclare a var variable in the same scope without errors, which often leads to accidental bugs.
*/

var global = 'global'
console.log(global)  // Accessible

function example1() {
  console.log('\nExample 1: Variable Scope')
  var localVar = 'local'

  console.log(global)  // Accessible
  console.log(localVar)  // Accessible
}

example1()

function example2() {
  console.log('\nExample 2: Variable Shadowing')
  var global = 'shadowed'
  console.log(global)  // Accessible, but shadows the outer global 
}

example2()

function example3() {
  console.log('\nExample 3: Variable Initialization')

  console.log(globalVar); // undefined

  var globalVar = 'local-global'; // declaração já existe, valor ainda é undefined

  console.log(globalVar); // local-global

  // This occours because of hoisting, where the variable declaration is moved to the top of its scope, but the assignment remains in place.
  // Like:

  // var globalVar; // hoisted declaration
  // console.log(globalVar); // undefined
  // globalVar = 'local-global'; // assignment
}

example3()