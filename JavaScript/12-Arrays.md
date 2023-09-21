# Arrays in JavaScript

Arrays in JavaScript are versatile and fundamental data structures that allow you to store and manipulate collections of data. They are ordered, indexed, and can hold various types of values, including other arrays, objects, and functions.
- An array is a collection of elements.
- Arrays in JavaScript are not a type on their own.
- Arrays are objects.

- ## Creating an Array -
  - We can create arrays in JavaScript using arrya literals (**[ ]**) or the **Array** constructor.
  ```js
  // Using array literals
  const fruits = ["apple", "banana", "cherry"];

  // Using the Array constructor
  const cars = new Array("Ford", "Toyota", "Honda");
  ```
  - We can also initialize an empty array using the following 2 ways.
  ```js
  // creating an empty array using array literals
  const fruits = [];

  //creating an empty array using Array constructor
  const cars = new Array();
  ```
  - Arrays in JavaScript can hold any value, even value of different types.
  ```js
  // Example
  const a = [1, "Raghav", ['a', 'b']];
  
  // type of 1 = number
  // type of "Raghav" = string
  // type of ['a', 'b'] = array object
  ```
  - JavaScript arrays can be multidimensional, meaning they can contain other arrays as elements, creating matrices or lists of lists.
  ```js
  // Array of arrays OR Multidimensional Array
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  ```
  - You can initialize a new array with a set of values using this syntax, which first initializes an array of 10 elements, and fills each element with the ``1`` number.
  ```js
  Array(10).fill(1);
  ```

- ## Accessing Elements of Array -
  - Array elements are accessed by their index, with the element having an index of 0.
  - we can use square brackets ``[]`` or the ``array[index]`` syntax to access elements.
  ```js
  // Accessing array elements
  const fruits = ["apple", "banana", "cherry"];

  console.log(fruits[0]); // "apple"
  console.log(fruits[1]); // "banana"
  console.log(fruits[2]); // "cherry"
  ```
  - we can access elements of multi-dimensional array.
  ```js
  // Accessing elements of multi-dimensional array
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  console.log(matrix[0][0]); // 1
  console.log(matrix[2][0]); // 7
  ```

- ## Modifying Arrays -
  - JavaScript arrays are mutable, meaning we can change their content after creation.
  - Common methods to modify arrays are:
    - **Adding Elements** :
      - **push()** : Adds elements to the end of the array.
      - **unshift()** : Adds elements to the beginning of the array.
    - **Removing Elements** :
      - **pop()** : Removes the last element and returns it.
      - **shift()** : Removes the first element and returns it.
    - **Splicing** :
      - **splice(startIndex, deleteCount, item1, item2, ...)** : Removes or replaces elements from the specified ``startIndex``.

- ## Determining Length of Array - 
  - We can determine the length of an array using the ``length`` property.
  ```js
  // Determining the length of an array
  const fruits = ["apple", "banana", "cherry"];

  console.log(fruits.length); // 3
  ```
  - Note that we can set the length of the array. If we assign a bigger number than the array's current capacity, nothing happens. If we assign a smaller number, the array is cut at that position.
  ```js
  // Example
  const fruits = ["apple", "banana", "cherry"];
  // fruits = ["apple", "banana", "cherry"]

  fruits.length = 2;
  // fruits = ["apple", "banana"]
  ```

- ## Iterating Through Arrays -
  - We can iterate through arrays using various loops like ``for``, ``for...of``, or ``forEach()``.
  ```js
  // Iterating through array
  const numbers = [1, 2, 3, 4, 5];

  // Using for loop
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }

  // Using for...of loop
  for (const num of numbers) {
    console.log(num);
  }

  // Using forEach() method
  numbers.forEach(function (num) {
    console.log(num);
  });
  ```

- ## Joining two or more arrays -
  - we can join multiple arrays by using ``concat()`` method or by using **spread** operator (``...``).
  ```js
  // joining two arrays
  const a = [1, 2];
  const b = [3, 4];

  // Using concat() method
  console.log(a.concat(b)); // [1, 2, 3, 4]

  // Using spread operator (...)
  console.log([...a, ...b]); // [1, 2, 3, 4]
  ```

- ## Finding Element in Array -
  - Finding an element is an array in JavaScript can be accomplished using various methods, depending on what you need to do.
  - Some common approaches are :
    - **Using ``indexOf()``** :
      - The ``indexOf()`` method returns the first index at which a given element can be found in the array.
      - It will return -1 if that element was not present.
    ```js
    // finding element in array using indexOf() method
    const fruits = ["apple", "banana", "cherry"];

    console.log(fruits.indexOf("banana")); // 1
    ```
    - **Using ``includes()``** :
      - The ``includes()`` method checks if an element is present in the array and returns a boolean value (**true** if found, **false** otherwise).
    ```js
    // finding element in array using includes() method
    const fruits = ["apple", "banana", "cherry"];

    console.log(fruits.includes("banana")); // true
    ```
    - **Using ``find()``** :
      - The ``find()`` method returns the first element in the array that satisfies a provided testing function.
    ```js
    // finding element in array using find() method
    const numbers = [1, 2, 3, 4, 5];
    const isEven = num => num % 2 === 0;

    console.log(numbers.find(isEven)); // 2
    ```
    - **Using ``findIndex()``** :
      - The ``findIndex()`` method returns the index of the first element in the array that satisfies a provided testing function.
    ```js
    // finding element in array using findIndex() method
    const numbers = [1, 2, 3, 4, 5];
    const isEven = num => num % 2 === 0;

    console.log(numbers.findIndex(isEven)); // 1
    ```
    - **Using ``loop`` (any)** :
      - We can use any loop to iterate through the array and find an element.
    ```js
    // finding element in array using for loop
    const fruits = ["apple", "banana", "cherry"];
    const target = "banana";

    let foundIndex = -1;
    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i] === target) {
            foundIndex = i;
            break;
        }
    }

    console.log(fruits[foundIndex]); // "banana"
    ```
    - **Using ``filter()``** :
      - The ``filter()`` method can be used to create a new array containing all elements that match a given condition.
    ```js
    // finding element in array using filter() method
    const numbers = [1, 2, 3, 4, 5];
    const isEven = num => num % 2 === 0;

    const evenNumbers = numbers.filter(isEven); //evenNumbers = [2, 4]
    ```

    > Choose the method that best suits your specific use case. If you need to find a single element, ``indexOf()``, ``includes()``, ``find()``, or ``findIndex()`` are typically more suitable. If you need to find multiple elements, ``filter()`` is a good choice. If you need more advanced searching or want to find all occurrences, you may need to write a custom loop or use additional methods like ``reduce()``.

<br />

# Array Methods and Properties
- ## map() method -
  - The **map()** method in JavaScript is a built-in-array method used to create a new array by applying a provided function to each element in the original array.
  - It doesn't modify the original array but instead generates a new array with the results of calling the provided function on each element.
  - The new array will have the same length as the original array.
  - **Basic syntax of the map() method** -
  ```js
  const newArray = originalArray.map(callback(element, index, array), thisArg);
  ```
  - **callback** - The function to execute on each element of the array.
    - **element** - The current element being processed.
    - **index** ( ``optional`` ) - The index of the current element being processed.
    - **array** ( ``optional`` ) - The array that **map()** was called upon.
  - **thisArg** ( ``optional`` ) - Value to use as **this** when executing the callback.
  - **Example 1 : Doubling Array Elements -**
    ```js
    const numbers = [1, 2, 3, 4, 5];

    const doubledNumbers = numbers.map(function(number) {
      return number * 2;
    });

    console.log(doubledNumbers); // [2, 4, 6, 8, 10]
    ```
    - In this example, the **map()** method applies the provided callback function to each element in the **numbers** array, doubling each element and creating a new array ( **doubleNumbers** ) with the results.
  - **Example 2 : Converting Strings to Uppercase -**
    ```js
    const fruits = ['apple', 'banana', 'cherry'];

    const uppercasedFruits = fruits.map(function(fruit) {
      return fruit.toUpperCase();
    });

    console.log(uppercasedFruits); //['APPLE', 'BANANA', 'CHERRY']
    ```
    - Here, the **map()** method transforms each string in the **fruits** array to uppercase and stores the results in a new array.
  - **Example 3 : Squaring Each Number (Using Arrow Function) -**
    ```js
    const numbers = [1, 2, 3, 4, 5];

    const squaredNumbers = numbers.map(number => number ** 2);

    console.log(squaredNumbers); // [1, 4, 9, 16, 25]
    ```
    - With ES6 arrow functions, the code can become more concise.
    - Arrow functions make the code cleaner and easier to read, especially for simple transformations.
  - **Example 4 : Mapping with an External Function -**
    ```js
    function addTwo(number) {
      return number + 2;
    }

    const numbers = [1, 2, 3, 4, 5];

    const result = numbers.map(addTwo);

    console.log(result); // [3, 4, 5, 6, 7]
    ```
    - You can also use a named function as the callback.
    - In this case, the **addTwo** function is defined separately, and **map()** applies it to each element in the array.