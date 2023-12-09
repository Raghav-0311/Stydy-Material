# Types in JavaSctipt

Certainly! in JavaScript, data types can be categorized into two main groups:
1. **Primitive Types** - 
   - Primitive types are basic data types that represent single values.
   - They are immutable, meaning their values cannot be changed after they are created.
   - There are six primitive data types in JavaScript:
     - **Number** - Represents numeric values, including integers and floating-point numbers.
     - **String** - Represents sequences of characters, such as text.
     - **Boolean** - Represents true or false values.
     - **Undefined** - Represents a variable that has been declared but hasn't been assigned a value.
     - **Null** - Represents an intentional absence of value.
     - **Symbol** [ES6 and later] - Represents a unique and immutable value often used as object property keys.
  ```js
  // Number Data Type
  let age = 25;
  let temp = -10.5;

  // String Data Type
  let name = "Raghav";
  let message = "Welcome to the world of JavaScript";

  // Boolean Data Type
  let isStudent = true;
  let hasPermission = false;

  // Undefined Data Type
  let unInitializedVariable;

  // Null Data Type
  let noValue = null;

  // Symbol Data Type
  let uniqueKey = Symbol('description');
  ```

> When you work with primitive types, you are dealing with the actual value itself.

2. **Non-Primitive Types** or **Reference Types** -
   - Non-primitive types are more complex data types that can hold multiple values and are stored by reference.
   - They are mutable, meaning their values can be changed after they are created.
   - Non-primitive types includes:
     - **Object** - Represents a collection of key-value pairs. objects can contain various types of data and functions.
     - **Array** - A specialized type of object that holds an ordered collection of values.
     - **Function** - A callable object that can contain a block of code.
     - **Date** - Represents dates and times.
     - **RegExp** - Represents regular expressions for pattern matching. 
  ```js
  // Object Data Type
  let person = {
    firstName : "Raghav",
    lastName : "Kashyap",
    score : 9.2
  };

  // Array Data Type
  let nums = [1, 2, 3, 4, 5];
  let fruits = ["apple", "banana", "orange"];

  // Function Data Type
  function greet(name) {
    console.log(`Hello, ${name}`);
  }
  greet(Raghav); // calling greet function object

  // Date Data Type
  let currentDate = new Date();

  // RegExp Data Type
  let pattern = /abc[a-z]/;
  ```

  > Non-primitive types are references to objects in memory.

  > Understanding the distinction between **Primitive** and **Non-Primitive** types is important because it affects how values are stored, compared, and passed around in JavaScript.