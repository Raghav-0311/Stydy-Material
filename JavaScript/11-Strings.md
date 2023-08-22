# Strings in JavaScript

In JavaScript, Strings are sequences of characters, such as text. They are one of the most fundamental data types and come with a variety of built-in methods that allow you to manipulate and work with strings.

- ## Creating Strings -
  - Strings can be created using **single quotes (' ')**, **double quotes (" ")**,  **backticks (\` `)**, or as an object using **new** keyword.
  
  ```js
  // Creating / Initializing Strings

  let singQuotes = 'Hello, Everyone';
  let doubleQuotes = "I am learnig JavaScript";
  let backticks = `For Full Stack Development`;
  let strObj = new String("Raghav Kashyap"); // not prefered -- because new keyword complicates the code and slows down execution speed, also string object can produce unexpected results.

  // Example
  let x = "Raghav";
  let y = new String("Raghav");

  console.log(x == y); // true
  console.log(x === y); // false

  // JavaScript objects cannot be compared. so never create strings as object
  // Example
  let a = new String("Hello");
  let b = new String("Hello");

  console.log(a === b); // false
  ```

- ## String Length -
  - Length of a string can be determined using **length** property.
  
  ```js
  // String Length

  let text = "Hello, Everyone";
  let length = text.length; // length = 15

  console.log(`Length = ${length}`); 
  ```

- ## Accessing Characters -
  - Individual characters in a string can be accessed using bracket notation with an index.
  
  ```js
  // Accessing Characters

  let message = "Hello";
  let firstChar = message[0]; // firstChar = 'H'

  console.log(`First Character of message = ${firstChar}`);
  ```

- ## Escape Characters -
  - Escape caracters are used to avoid compiler read problems such as - 
  ```
  let text = "My name is "Raghav Kashyap" from Himachal Pradesh";
  ```
  - Here compiler will chop the string to "My name is"
  - To avoid these type of problems we use escape characters
  
  |Code        |Result                   |Description              |
  |------------|-------------------------|-------------------------|
  |\\'         |'                        |Single quote             |
  |\\"         |"                        |Double quote             |
  |\\\         |\                        |Backslash                |
  |\\b         |**Backspace**            |Backspace                |
  |\\f         |**Form Feed**            |Form Feed                |
  |\\n         |**New Line**             |New Line                 |
  |\\r         |**Carriage Return**      |Carriage Return          |
  |\\t         |**Horizontal Tabulator** |Horizontal Tabulator     |
  |\\v         |**Vertical Tabulator**   |Vertical Tabulator       |

  ```js
  // Escape Characters

  let text = 'It\'s alright.';
  let textTwo = "The character \\ is called backslash";
  let textThree = "First line \n Second line";
  ```

# String Methods -

- ## .charAt(index) -
  - Returns the character at the specified index in the string.
  
  ```js
  // charAt method

  let name = "Raghav";
  let fifthChar = name.charAt(4); // fifthChar = 'a'
  ```

- ## .charCodeAt(index) -
  - Returns the Unicode value of the character at the specified index.
  
  ```js
  // charCodeAt method

  let text = "Hello";
  let unicode = text.charCodeAt(0); // unicode = 72 || because text[0] = 'H' and unicode value of H is 72.
  ```

- ## .concat(str1, str2, ...) -
  - Concatenates one or more strings.
  
  ```js
  // concat method

  let firstName = "Raghav";
  let lastName = "Kashyap";
  let fullName = firstName.concat(" ", lastName); // fullName = "Raghav Kashyap"
  ```
