// =================================================================
//              Loops and Iterations - Exercises
// =================================================================


// 1. for
for (let i = 0; i < 4; i++) {
  console.log(i);
}


// 2. while
let i = 3;

while (i > 0) {
  console.log(i);
  i--;
}


// 3. do...while
let value = 5;

do {
  console.log(value);
  value++;
} while (value < 5);


// 4. break
for (let i = 0; i < 10; i++) {
  if (i === 4) {
    break;
  }

  console.log(i);
}


// 5. continue
for (let i = 0; i < 6; i++) {
  if (i % 2 === 0) {
    continue;
  }

  console.log(i);
}


// 6. for...in
const user = {
  name: "Elias",
  age: 25,
  active: true
};

for (const key in user) {
  console.log(key);
}


// 7. for...of
const numbers = [10, 20, 30];

for (const value of numbers) {
  console.log(value);
}


// 8. Sparse Array + for...in
const sparse = [];
sparse[1] = "hello";
sparse[4] = "world";

for (const index in sparse) {
  console.log(index);
}


// 9. Sparse Array + for...of
const values = [];
values[1] = "hello";
values[4] = "world";

for (const value of values) {
  console.log(value);
}


// 10. break + continue
for (let i = 0; i < 10; i++) {
  if (i === 2) {
    continue;
  }

  if (i === 6) {
    break;
  }

  console.log(i);
}


// 11. Nested loops
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    console.log(i, j);
  }
}


// 12. Final Challenge
let count = 0;

while (count < 5) {
  count++;

  if (count === 2) {
    continue;
  }

  if (count === 4) {
    break;
  }

  console.log(count);
}


// ==================================================================
//                             Solutions
// ==================================================================
{
  // 1:

  0
  1
  2
  3

  // 2:

  3
  2
  1

  // 3:

  5

  // 4:

  0
  1
  2
  3

  // 5:

  1
  3
  5

  // 6:

  "name"
  "age"
  "active"

  // 7:

  10
  20
  30

  // 8:

  1
  4

  // 9:

  undefined
  "hello"
  undefined
  undefined
  "world"

  // 10:

  0
  1
  3
  4
  5

  // 11:

  0, 0 
  0, 1
  1, 0
  1, 1
  2, 0
  2, 1

  // 12:

  1
  3
}