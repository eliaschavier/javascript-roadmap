/** 
 * JavaScript provides three ways to declare variables: var, let, and const. 
 * The choice between them affects scope, hoisting behavior, and whether the variable can be reassigned.
*/ 
 
/** 
 * LET (The Modern Variable)
 * 
 * let was introduced in ES6 to fix the scoping issues of var.
 * Scope: Block-scoped. It is only accessible within the nearest set of curly braces {} (like loops, conditionals, or standalone blocks).
 * Hoisting: let variables are hoisted, but not initialized. Accessing them before the line of declaration results in a ReferenceError (this zone is known as the Temporal Dead Zone).
 * Reassignment & Redeclaration: You can reassign a let variable, but you cannot redeclare it in the same scope.
 * 
*/

let globalLet = 'global'
console.log(globalLet)  // Accessible

function example1() {
  console.log('\nExample 1: Variable Scope')
  let localLet = 'local'

  console.log(globalLet)  // Accessible
  console.log(localLet)  // Accessible
}

example1()

function example2() {
  console.log('\nExample 2: Variable Shadowing')
  let globalLet = 'shadowed'
  console.log(globalLet)  // Accessible, but shadows the outer global 
}

example2()

function example3() {
  console.log('\nExample 3: Variable Initialization')

  try {
    console.log(globalLet); // ReferenceError: Cannot access 'globalLet' before initialization
  } catch (error) {
    console.error(error.message);
  }
  
  let globalLet = 'local-global'; // declaração já existe, valor ainda é undefined

  console.log(globalLet); // local-global
}

example3()