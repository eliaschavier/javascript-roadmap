
{
  // =================================================================
  //                         DOM APIs
  // =================================================================

  // DOM (Document Object Model)
  // The browser represents HTML as a tree of objects.
  // JavaScript can access, modify, create and remove these elements.
  // DOM APIs are Web APIs provided by the browser, not JavaScript
  // language features defined by ECMAScript.


  // ================================
  //          Selecting Elements
  // ================================

  // Selects an element by its ID.
  document.getElementById("title");

  // Selects the first element matching a CSS selector.
  document.querySelector("#title");
  document.querySelector(".description");
  document.querySelector("h1");

  // Selects all elements matching a CSS selector.
  // Returns a NodeList, not a regular Array.
  const elements = document.querySelectorAll(".item");

  // NodeLists support indexing, length and forEach().
  elements[0];
  elements.length;
  elements.forEach(element => console.log(element));

  // Convert a NodeList into a regular Array.
  const elementsArray = Array.from(elements);

  // Looping through collections:
  for (const element of elements) {
    console.log(element);
  }

  // for...in iterates over keys/properties.
  // for...of iterates over values.


  // ================================
  //       Reading and Modifying
  //              Content
  // ================================

  const title = document.querySelector("#title");

  // Reads or changes the rendered text.
  title.innerText = "Welcome!";

  // Reads or changes the text content of an element,
  // regardless of CSS rendering.
  title.textContent = "Welcome!";

  // Reads or changes the HTML inside an element.
  // The browser parses the HTML string.
  title.innerHTML = "<strong>Welcome!</strong>";

  // textContent treats HTML tags as plain text.
  title.textContent = "<strong>Welcome!</strong>";

  // Avoid inserting untrusted content with innerHTML.
  // It can introduce XSS vulnerabilities.
  // Prefer textContent for plain text.


  // ================================
  //              Events
  // ================================

  const button = document.getElementById("btn");
  const message = document.getElementById("message");

  // Registers a callback to execute when an event occurs.
  button.addEventListener("click", () => {
    message.innerText = "Button clicked!";
  });

  // Pass a function reference, not its execution.
  button.addEventListener("click", handleClick);

  // Executes immediately and passes the return value.
  // Usually incorrect when registering event listeners.
  button.addEventListener("click", handleClick());

  // Use an arrow function when passing arguments.
  button.addEventListener("click", () => {
    handleClick("Hello!");
  });


  // ================================
  //           Event Object
  // ================================

  button.addEventListener("click", (event) => {
    // Contains information and methods related to the event.
    console.log(event);
    console.log(event.type);   // "click"
    console.log(event.target); // Original event target
  });

  // target:
  // The element where the event originally occurred.

  // currentTarget:
  // The element whose listener is currently executing.


  // ================================
  //          Event Bubbling
  // ================================

  // Events can propagate from the target element
  // through its ancestors (from child to parent).

  const parent = document.getElementById("parent");
  const child = document.getElementById("child");

  parent.addEventListener("click", (event) => {
    console.log("Parent:", event.target.id);
    // "child" when the button is clicked.
  });

  child.addEventListener("click", (event) => {
    console.log("Child:", event.target.id);
    // "child"
  });

  // Event delegation:
  // Attach one listener to a parent and use event.target
  // to identify which child triggered the event.


  // ================================
  //        Event Control Methods
  // ================================

  // Prevents the browser's default behavior.
  // Example: prevent a form from submitting normally.
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  // Stops the event from propagating to other elements.
  child.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  // Stops propagation and prevents other listeners
  // on the same element from executing.
  child.addEventListener("click", (event) => {
    event.stopImmediatePropagation();
  });

  // Important:
  // preventDefault() does not stop event propagation.
  // stopPropagation() does not prevent default behavior.
}
