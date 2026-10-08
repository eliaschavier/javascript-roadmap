// =================================================================
//                          Exercises
// =================================================================

// ================================
//            if...else
// ================================
{
  // 1
  {
    const age = 20;

    if (age >= 18) {
      console.log("A");
    } else {
      console.log("B");
    }
  }

  // 2
  {
    const value = 10;

    if (value > 10) {
      console.log("A");
    } else if (value === 10) {
      console.log("B");
    } else {
      console.log("C");
    }
  }

  // 3
  {
    const x = 0;

    if (x) {
      console.log("truthy");
    } else {
      console.log("falsy");
    }
  }

  // 4
  {
    const name = "";

    if (name) {
      console.log("has name");
    } else {
      console.log("empty");
    }
  }

  // 5
  {
    if ([]) {
      console.log("A");
    } else {
      console.log("B");
    }
  }

  // 6
  {
    if ({}) {
      console.log("A");
    } else {
      console.log("B");
    }
  }

  // 7
  {
    const score = 85;

    if (score >= 90) {
      console.log("A");
    } else if (score >= 70) {
      console.log("B");
    } else if (score >= 50) {
      console.log("C");
    } else {
      console.log("F");
    }
  }

  // 8
  {
    const value = 15;

    if (value > 10) {
      console.log("A");
    }

    if (value > 5) {
      console.log("B");
    } else {
      console.log("C");
    }
  }

  // 9
  {
    const age = 20;
    const hasTicket = false;

    if (age >= 18 && hasTicket) {
      console.log("A");
    } else {
      console.log("B");
    }
  }

  // 10
  {
    const x = 10;

    if (x > 5) {
      if (x < 15) {
        console.log("A");
      } else {
        console.log("B");
      }
    }
  }

  // 11
  {
    const value = 0;

    if (value) {
      console.log("A");
    } else if (!value) {
      console.log("B");
    } else {
      console.log("C");
    }
  }

  // 12
  {
    const age = 17;
    const authorized = true;

    if (age >= 18) {
      console.log("A");
    } else if (authorized) {
      console.log("B");
    } else {
      console.log("C");
    }
  }

  // 13
  {
    if (true)
      if (false)
        console.log("A");
      else
        console.log("B");
  }
}

// ================================
//              switch
// ================================
{
  // 14
  {
    const value = 2;

    switch (value) {
      case 1:
        console.log("A");
        break;
      case 2:
        console.log("B");
        break;
      case 3:
        console.log("C");
        break;
      default:
        console.log("D");
    }
  }

  // 15
  {
    const value = 5;

    switch (value) {
      case 1:
        console.log("A");
        break;
      case 2:
        console.log("B");
        break;
      default:
        console.log("D");
    }
  }

  // 16
  {
    const value = 1;

    switch (value) {
      case 1:
        console.log("A");
      case 2:
        console.log("B");
      case 3:
        console.log("C");
        break;
    }
  }

  // 17
  {
    const day = "Saturday";

    switch (day) {
      case "Saturday":
      case "Sunday":
        console.log("Weekend");
        break;
      default:
        console.log("Weekday");
    }
  }

  // 18
  {
    const value = "1";

    switch (value) {
      case 1:
        console.log("number");
        break;
      case "1":
        console.log("string");
        break;
      default:
        console.log("other");
    }
  }
}

// ================================
// try...catch
// ================================
{
  // 19
  try {
    console.log("A");
  } catch (error) {
    console.log("B");
  }

  // 20
  try {
    console.log("A");
    throw new Error("Oops");
    console.log("B");
  } catch (error) {
    console.log("C");
  }

  // 21
  try {
    throw new Error("Oops");
  } catch (error) {
    console.log(error.message);
  }

  // 22
  try {
    console.log("A");
  } catch (error) {
    console.log("B");
  } finally {
    console.log("C");
  }

  // 23
  try {
    throw new Error("Oops");
  } catch (error) {
    console.log("A");
  } finally {
    console.log("B");
  }

  // 24
  function test() {
    throw new Error("Oops");
  }

  try {
    test();
  } catch (error) {
    console.log("Caught");
  }

  // 25
  try {
    throw new Error("Oops");
  } finally {
    console.log("Finally");
  }

  // 26
  try {
    throw new TypeError("Invalid type");
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }

  // 27
  try {
    throw 404;
  } catch (error) {
    console.log(error);
  }

  // 28
  try {
    throw new Error("Oops");
  } catch (error) {
    console.log("Caught");
  }
  console.log("Continued");

  // 29
  try {
    throw new Error("Oops");
  } catch (error) {
    console.log("Caught");
    throw error;
  }
  console.log("Continued");

  // 30
  function test() {
    try {
      return "A";
    } finally {
      console.log("B");
    }
  }
  console.log(test());

  // 31
  function test() {
    try {
      return "A";
    } finally {
      return "B";
    }
  }
  console.log(test());

  // 32
  try {
    setTimeout(() => {
      throw new Error("Oops");
    }, 0);
  } catch (error) {
    console.log("Caught");
  }
  console.log("End");
}

// ==================================================================
//                             Solutions
// ==================================================================
{
  // 1
  "A"

  // 2
  "B"

  // 3
  "truthy"

  // 4
  "empty"

  // 5
  "A"

  // 6
  "A"

  // 7 
  "B"

  // 8
  "A"
  "B"

  // 9
  "B"

  // 10
  "A"

  // 11
  "B"

  // 12 
  "B"

  // 13
  "B"

  // 14
  "B"

  // 15
  "D"

  // 16
  "A"
  "B"
  "C"

  // 17
  "Weekend"

  // 18
  "string"

  // 19
  "A"

  // 20
  "A"
  "C"

  // 21
  "Oops"

  // 22
  "A"
  "C"

  // 23
  "A"
  "B"

  // 24
  "Caught"

  // 25
  "Finally"
}