// =================================================================
//                          Exercises
// =================================================================


// 1. Own property vs prototype property
{
  const user = {
    name: "Elias"
  };

  console.log(user.hasOwnProperty("name"));
  console.log(user.hasOwnProperty("toString"));
  console.log("toString" in user);
}

// 2. `in` checks keys, not values
{
  const fruits = ["apple", "banana"];

  console.log(0 in fruits);
  console.log("banana" in fruits);
  console.log(fruits.includes("banana"));
}

// 3. Prototypal inheritance
{
  const animal = {
    speak() {
      console.log("Some sound");
    }
  };

  const dog = Object.create(animal);

  dog.name = "Rex";

  console.log(dog.hasOwnProperty("name"));
  console.log(dog.hasOwnProperty("speak"));
  console.log("speak" in dog);
  console.log(Object.getPrototypeOf(dog) === animal);
}

// 4. Property shadowing
{
  const animal = {
    speak() {
      console.log("Some sound");
    }
  };

  const dog = Object.create(animal);

  dog.speak = () => console.log("Woof!");

  dog.speak();
  animal.speak();

  console.log(dog.hasOwnProperty("speak"));
}


// ==================================================================
//                             Solutions
// ==================================================================

// 1. Own property vs prototype property

// true
// false
// true

// `hasOwnProperty()` checks only own properties.
// `in` also searches the prototype chain.



// 2. `in` checks keys, not values

// true
// false
// true

// `in` checks whether a property key exists.
// It does not check whether a value exists in the array.
//
// `includes()` checks for a value.



// 3. Prototypal inheritance

// true
// false
// true
// true

// `dog` inherits from `animal` through its [[Prototype]].
// `speak` is inherited, while `name` is an own property.



// 4. Property shadowing

// "Woof!"
// "Some sound"
// true

// The own `speak` property takes precedence over
// the inherited `speak` property.
//
// The original property on `animal` remains unchanged.