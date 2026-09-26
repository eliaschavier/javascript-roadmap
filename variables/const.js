/** 
 * JavaScript provides three ways to declare variables: var, let, and const. 
 * The choice between them affects scope, hoisting behavior, and whether the variable can be reassigned.
*/

/**
 * CONST (The Constant)
 * 
 * const stands for "constant". Like let, it was introduced in ES6.
 * Scope: Block-scoped (just like let).
 * Hoisting: Hoisted without initialization (has a Temporal Dead Zone just like let).
 * Reassignment & Redeclaration: You cannot reassign or redeclare a const variable.
 * 
 * ⚠️ Important Note: const means the variable identifier cannot be reassigned. However, if the value is an object or an array, its contents (properties or elements) can still be mutated!
 *
 */

const globalConst = 'global'
console.log(globalConst)  // Accessible

function example1() {
  console.log('\nExample 1: Variable Scope')
  const localConst = 'local'

  console.log(globalConst)  // Accessible
  console.log(localConst)  // Accessible
}

example1()

function example2() {
  console.log('\nExample 2: Variable Shadowing')
  const globalConst = 'shadowed'
  console.log(globalConst)  // Accessible, but shadows the outer global 
}

example2()

function example3() {
  console.log('\nExample 3: Variable Initialization')

  try {
    console.log(globalConst); // ReferenceError: Cannot access 'globalConst' before initialization
  } catch (error) {
    console.error(error.message);
  }
  
  const globalConst = 'local-global'; // declaração já existe, valor ainda é undefined

  console.log(globalConst); // local-global
}

example3()

function example4() {
  console.log('\nExample 4: Mutating Objects and Arrays')

  const myObject = { key: 'value' };
  const myArray = [1, 2, 3];

  console.log(myObject); // { key: 'value' }
  console.log(myArray); // [1, 2, 3]

  // Mutating the object
  myObject.key = 'new value';
  console.log(myObject); // { key: 'new value' }

  // Mutating the array
  myArray.push(4);
  console.log(myArray); // [1, 2, 3, 4]

  // Attempting to reassign the const variable will throw an error
  try {
    myObject = { newKey: 'newValue' }; // TypeError: Assignment to constant variable.
  } catch (error) {
    console.error(error.message);
  }

  try {
    myArray = [5, 6, 7]; // TypeError: Assignment to constant variable.
  } catch (error) {
    console.error(error.message);
  }
}

example4()