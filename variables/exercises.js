// =================================================================
//                          Exercises
// =================================================================


// 1. Hoisting + var
{
  console.log(a);

  var a = 10;

  console.log(a);
}

// 2. Temporal Dead Zone
{
  console.log(a);

  let a = 10;
}

// 3. Shadowing + TDZ
{
  let value = "global";

  function test() {
    console.log(value);

    let value = "local";
  }

  test();
}

// 4. var vs let + Closure
{
  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
  }

  for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 0);
  }
}


// ==================================================================
//                             Solutions
// ==================================================================

// 1. Hoisting + var

// undefined
// 10

// `var` declarations are hoisted, but the assignment happens where it appears in the code.

// 2. Temporal Dead Zone

// ReferenceError

// `let` is hoisted but remains in the Temporal Dead Zone until its initialization is reached.

// 3. Shadowing + TDZ

// ReferenceError

// The local `value` shadows the outer variable. Accessing it before initialization triggers the TDZ.

// 4. var vs let + Closure

// 3
// 3
// 3

// 0
// 1
// 2

// `var` uses one shared binding for the loop.`let` creates a separate binding for each iteration.
