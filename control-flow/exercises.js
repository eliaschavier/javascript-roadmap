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

// ==================================================================
//                             Solutions
// ==================================================================

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