// =================================================================
//                          Exercises
// =================================================================


// 1. Object
{
  const user1 = {
    name: "Elias",
    address: {
      city: "Juazeiro"
    }
  };

  const user2 = { ...user1 };

  user2.name = "John";
  user2.address.city = "Crato";

  console.log(user1.name);
  console.log(user1.address.city);
  console.log(user1 === user2);
  console.log(user1.address === user2.address);
}


// 2. JSON
{
  const data = {
    name: "Elias",
    age: 25,
    active: true,
    extra: undefined
  };

  const json = JSON.stringify(data);

  console.log(typeof json);
  console.log(json);

  const parsed = JSON.parse(json);

  console.log(parsed === data);
  console.log(parsed.extra);
}


// 3. Map
{
  const map = new Map();

  const key1 = { id: 1 };
  const key2 = { id: 1 };

  map.set(key1, "first");
  map.set(key2, "second");

  console.log(map.size);
  console.log(map.get(key1));
  console.log(map.get({ id: 1 }));
}


// 4. Set
{
  const values = new Set();

  values.add(1);
  values.add(2);
  values.add(1);
  values.add("1");

  console.log(values.size);
  console.log(values.has(1));
  console.log(values.has("1"));
}


// 5. Typed arrays
{
  const buffer = new ArrayBuffer(2);

  const uint = new Uint8Array(buffer);
  const int = new Int8Array(buffer);

  uint[0] = 255;
  uint[1] = 128;

  console.log(uint[0]);
  console.log(uint[1]);
  console.log(int[0]);
  console.log(int[1]);
}


// 6. Array
{
  const numbers = [1, 2, 3, 4];

  const result = numbers
    .filter(x => x % 2 === 0)
    .map(x => x * 10);

  console.log(result);
  console.log(numbers);
}


// 7 Array
{
  const arr = [];

  arr[2] = "hello";

  console.log(arr.length);
  console.log(arr[0]);
  console.log(0 in arr);
  console.log(2 in arr);
}


// 8. WeakMap
{
  // Explain:
  //
  // What is the fundamental difference between Map and WeakMap?
  // Why does WeakMap not provide:
  // 
  // weakMap.size
  // weakMap.keys()
  // weakMap.values()

}




// ==================================================================
//                             Solutions
// ==================================================================
{
  // 1

  // "Elias"
  // "Crato"
  // false
  // true


  // 2

  // "string"
  // '{"name":"Elias","age":25,"active":true}'
  // false
  // undefined


  // 3

  // 2
  // "first"
  // undefined


  // 4

  // 3
  // true
  // true


  // 5

  // 255
  // 128
  // -1
  // -128


  // 6

  // [20, 40]
  // [1, 2, 3, 4]


  // 7

  // 3
  // undefined (empty? = undefined)
  // false
  // true


  // 8

  // 8.1 

  // WeakMap only accepts objects and maintains weak references to its keys.
  // If the WeakMap is the only remaining reference to a key object, that object can become eligible for garbage collection.

  // 8.2

  // Because the reference is weak, the WeakMap cannot provide reliable information about which keys currently exist.
  // Therefore, WeakMap does not provide size, keys(), values()
  // This prevents observing its contents through enumeration.
}