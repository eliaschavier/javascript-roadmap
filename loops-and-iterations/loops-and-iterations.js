// =================================================================
//                    Loops and Iterations
// =================================================================

// Loops allow a block of code to be executed repeatedly while a condition or iteration rule is satisfied.

// Main loop structures:

// for
// while
// do...while
// for...in
// for...of


// =================================================================
//                            for
// =================================================================

// `for` is commonly used when the loop has an initialization, a condition and an update.

for (let i = 0; i < 3; i++) {
  console.log(i);
}

// 0
// 1
// 2

// Execution:

// 1. initialization  → let i = 0
// 2. condition       → i < 3
// 3. execute block
// 4. update          → i++
// 5. repeat from step 2


// =================================================================
//                           while
// =================================================================

// `while` executes the block while the condition is true. The condition is checked before each iteration.

let i = 0;

while (i < 3) {
  console.log(i);
  i++;
}

// 0
// 1
// 2

// If the condition is false initially, the block is never executed.
// If the condition never becomes false, the loop becomes infinite.


// =================================================================
//                         do...while
// =================================================================

// `do...while` executes the block before checking the condition.
// Therefore, the block always executes at least once.

let j = 10;

do {
  console.log(j);
  j++;
} while (j < 3);

// 10


// =================================================================
//                             break
// =================================================================

// `break` immediately terminates the loop.

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }

  console.log(i);
}

// 0
// 1
// 2


// =================================================================
//                             continue
// =================================================================

// `continue` skips the current iteration and continues with the next one.

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }

  console.log(i);
}

// 0
// 1
// 3
// 4


// =================================================================
//                             for...in
// =================================================================

// `for...in` iterates over enumerable property keys.
// It is commonly used with objects.

const user = {
  name: "Elias",
  age: 25
};

for (const key in user) {
  console.log(key);
}

// name
// age

// With arrays, `for...in` iterates over existing indexes, so holes in sparse arrays are skipped.

const sparse = [];
sparse[2] = "hello";

for (const index in sparse) {
  console.log(index);
}

// 2


// =================================================================
//                         for...of
// =================================================================

// `for...of` iterates over the values of an iterable.

const fruits = ["apple", "banana", "orange"];

for (const fruit of fruits) {
  console.log(fruit);
}

// apple
// banana
// orange

// Unlike `for...in`, `for...of` works with values rather than keys.

// Sparse arrays:

const values = [];
values[2] = "hello";

for (const value of values) {
  console.log(value);
}

// undefined
// undefined
// hello


// =================================================================
//                    for...in vs for...of
// =================================================================

// `for...in` → property keys
// `for...of` → iterable values

const numbers = [10, 20, 30];

for (const index in numbers) {
  console.log(index);
}

// 0
// 1
// 2

for (const value of numbers) {
  console.log(value);
}

// 10
// 20
// 30


// =================================================================
//                          Infinite Loops
// =================================================================

// A loop becomes infinite when its termination condition
// is never reached.

let counter = 0;

while (counter < 3) {
  counter++;
}

// Always ensure that the loop can eventually terminate.