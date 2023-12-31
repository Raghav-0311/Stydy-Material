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

- ## .includes(substring) -
  - Checks if the string contains the specified substring.
  
  ```js
  // includes method

  let text = "I am learning JavaScript";
  let containsJS = text.includes("JavaScript"); // containsJS = true
  ```

- ## .endsWith(suffix) -
  - Checks if the string ends with the specified suffix.
  
  ```js
  // endsWith method

  let text = "Hello, Raghav";
  let endsWith = text.endsWith("Raghav"); // endsWith = true
  ```

- ## .indexOf(substring, startIndex) -
  - Returns the index of the first occurrence of the specified substring.
  
  ```js
  // indexOf method

  let text = "Hello, Raghav";
  let index = text.indexOf("Raghav"); // index = 7
  ```

- ## .lastIndexOf(substring, startIndex) -
  - Returns the index of the last occurrence of the specified substring.
  
  ```js
  // lastIndexOf method

  let text = "Hello, Raghav";
  let index = text.lastIndexOf("a"); // index = 11
  ```

- ## .length -
  - Returns the length of the string.
  
  ```js
  // length property

  let text = "Hello";
  let length = text.length; // length = 5
  ```

- ## .match(regex) -
  - Returns an array of matches based on a regular expression.
  
  ```js
  // match method

  let text = "Hello, world!";
  let matchedArray = text.match(/[A-Za-z]+/g); // matchedArray = ["Hello", "world"]
  ```

- ## .padEnd(targetLength, padString) -
  - Pads the end of the string with a specified character to reach a target length.
  
  ```js
  // padEnd method

  let text = "Raghav";
  let paddedText = text.padEnd(10, "!"); // paddedText = "Raghav!!!!"
  ```

- ## .padStart(targetLength, padString) -
  - Pads the start of the string with a specified character to reach a target length.
  
  ```js
  // padStart method

  let text = "Raghav";
  let paddedText = text.padStart(10, "!"); // paddedText = "!!!!Raghav"
  ```

- ## .repeat(count) -
  - Returns a new string with the original string repeated **count** times.
  
  ```js
  // repeat method

  let text = "ABC";
  let repeatedText = text.repeat(3); // repeatedText = "ABCABCABC"
  ```

- ## .replace(oldValue, newValue) -
  - Replace occurrences of **oldValue** with **newValue**.
  
  ```js
  // replace method

  let text = "Hello, world!";
  let newText = text.replace("world", "Raghav"); // newText = "Hello, Raghav!"
  ```

- ## .search(regex) -
  - Searches for a match based on a regular expression and returns the index.
  
  ```js
  // search method

  let text = "We are learning JavaScript!";
  let index = text.search(/Java(Script)?/); // index = 16
  ```

- ## .slice(startIndex, endIndex) -
  - Extracts a portion of the string from **startIndex** to **endIndex**. (i.e. startIndex to till endIndex(not included)).
  
  ```js
  // slice method

  let text = "Hello, Raghav!";
  let subText = text.slice(7, 13); // subText = "Raghav"
  ```

- ## .split(separator, limit) -
  - Splits the string into an array of substrings using the specified separator.
  
  ```js
  // split method

  let fruits = "apple, banana, orange";
  let fruitArray = fruits.split(", "); // fruitArray = ["apple", "banana", "orange"]
  ```

- ## .startsWith(prefix) -
  - Checks if the string starts with the specified prefix.
  
  ```js
  // startsWith method

  let text = "Hello, Raghav!";
  let startsWith = text.startsWith("Hello"); // startsWith = true
  ```

- ## .substr(startIndex, length) -
  - Returns a substring starting from **startIndex** with the specified **length**.
  
  ```js
  // substr method 

  let text = "Hello, Raghav!";
  let subText = text.substr(7, 6); // subText = "Raghav"
  ```

- ## .substring(startIndex, endIndex) -
  - Returns a substring between **startIndex** and **endIndex**.
  
  ```js
  // substring method

  let text = "Hello, Raghav!";
  let subText = text.substring(7, 13); // subText = "Raghav"
  ```

- ## .toLocaleLowerCase() -
  - Converts the string to lowercase using the host's current locale settings.
  
  ```js
  // toLocaleLowerCase method

  let text = "HeLLo, RaGHaV!";
  let lowerCaseText = text.toLocaleLowerCase(); // lowerCaseText = "hello, raghav!"
  ```

- ## .toLocaleUpperCase() -
  - Converts the string to uppercase using the host's current locale settings.
  
  ```js
  // toLocaleUpperCase method

  let text = "HeLLo, RaGHaV!";
  let upperCaseText = text.toLocaleUpperCase(); // upperCaseText = "HELLO, RAGHAV!"
  ```

- ## .toLocaleCase() -
  - Converts the string to lowercase.
  
  ```js
  // toLowerCase method

  let text = "HeLLo, RaGHaV!";
  let lowerCaseText = text.toLowerCase(); // lowerCaseText = "hello, raghav!"
  ```

- ## .toUpperCase() -
  - Converts the string to uppercase.
  
  ```js
  // toUpperCase method

  let text = "HeLLo, RaGHaV!";
  let upperCaseText = text.toUpperCase(); // upperCaseText = "HELLO, RAGHAV!"
  ```

- ## .trim() -
  - Removes whitespace characters from the beginning and end of the string.
  
  ```js
  // trim method

  let paddedText = "     Hello, Raghav!       ";
  let trimmedText = paddedText.trim(); // trimmedText = "Hello, Raghav!"
  ```

- ## .valueOf() -
  - Returns the primitive value of the string object.
  
  ```js
  // valueOf method

  let text = new String("Hello");
  let primitiveValue = text.valueOf(); // primitiveValue = "Hello"
  ```

# Basic String Related DSA Problems -

1. ### Write a function to find the length of a given string without using the built-in ``length`` property.
   
   ```js
   function findStringLength(str) {
    let count = 0;
    for (let char of str) {
        count++;
    }
    return count;
   }

   let strLength = findStringLength("hello");

   console.log(`Length of this string = ${strLength}`);
   ```
   **Output -**
   ```
   Length of this string = 5
   ```
   ---

2. ### Implement a function to reverse a given string.
   
   ```js
   function revString(str) {
    return str.split("").reverse().join("");
   }

   let reverseStr = revString("Hello");

   console.log(`Reverse string = ${reverseStr}`);
   ```
   **Output -**
   ```
   Reverse string = olleH
   ```
   ---

3. ### Write a function to check if a given string is a palindrome or not.
   
   ```js
   let givenStr = "civic";

   function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
   }

   if (isPalindrome(givenStr)) {
    console.log(`Palindrome String`);
   } else {
    console.log(`Not a Palindrome String`);
   }
   ```
   **Output -**
   ```
   Palindrome String
   ```
   ---

4. ### Create a function to count the number of occurrences of a specific chatacter in a string.
   ```js
   function countOccurrences(str, char) {
    let count = 0;
    for(let c of str) {
        if(c === char) {
            count++;
        }
    }
    return count;
   }

   let repeatNumber = countOccurrences("raghav", "a");
   
   console.log(`Given character repeated ${repeatNumber} times.`);
   ```
   **Output -**
   ```
   Given character repeated 2 times.
   ```
   ---

5. ### Implement a function that capitalizes the first letter of each world in a sentence.
   ```js
   // RegEx approach
   function capitalizeWords(str) {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
   }
   let message = "my name is raghav";
   
   let capStr = capitalizeWords(message);
   
   console.log(`${capStr}`);
   ```
   **Alternate Approach -**
   ```js
   function capitalizeWords(str) {
    let capitalized = "";
    let capitalizeNext = true;

    for (let i = 0; i < str.length; i++) {
        if (capitalizeNext && str[i] !== " ") {
            capitalized += str[i].toUpperCase();
            capitalizeNext = false;
        } else {
            capitalized += str[i].toLowerCase();
        }

        if (str[i] === " ") {
            capitalizeNext = true;
        }
    }
    return capitalized;
   }

   let message = "my name is raghav";
   
   let capStr = capitalizeWords(message);
   
   console.log(`${capStr}`);
   ```
   **Output -**
   ```
   My Name Is Raghav
   ```
   ---

6. ### Write a function to remove all whitespace characters from a string.
   ```js
   // RegEx approach
   function removeWhitespace(str) {
    return str.replace(/\s/g, "");
   }

   let message = "my name is raghav";

   let resStr = removeWhitespace(message);

   console.log(`${resStr}`);
   ```
   **Alternate Approach -**
   ```js
   function removeWhitespace(str) {
    let noWhitespace = "";
    for (let i = 0; i < str.length; i++) {
      if (
        str[i] !== " " &&
        str[i] !== "\t" &&
        str[i] !== "\n" &&
        str[i] !== "\r"
        ) {
        noWhitespace += str[i];
      }
    }
    return noWhitespace;
   }
   
   let message = "my name is raghav";
   
   let resStr = removeWhitespace(message);
   
   console.log(`${resStr}`);
   ```
   **Output -**
   ```
   mynameisraghav
   ```
   ---

7. ### Implement a function to find the index of the first occurence of a substring in a given string.
   ```js
   function indexOfSubstring(str, sub) {
    return str.indexOf(sub);
   }

   let message = "my name is raghav";
   let name = "raghav";

   let index = indexOfSubstring(message, name);

   console.log(`Index of \"${name}\" is ${index} in \"${message}\"`);
   ```
   **Alternate Approach -**
   ```js
   function indexOfSubstring(str, sub) {
    for (let i = 0; i <= str.length - sub.length; i++) {
      let j;
      for (j = 0; j < sub.length; j++) {
        if (str[i + j] !== sub[j]) {
          break;
        }
      }
      if (j === sub.length) {
        return i;
      }
    }
    return -1;
   }
   
   let message = "my name is raghav";
   let name = "raghav";
   
   let index = indexOfSubstring(message, name);
   
   console.log(`Index of \"${name}\" is ${index} in \"${message}\"`);
   ```
   **Output -**
   ```
   Index of "raghav" is 11 in "my name is raghav"
   ```
   ---

8. ### Create a function to remove all occurrences of a specific character from a string.
   ```js
   function removeCharOccurences(str, char) {
    return str.split(char).join("");
   }

   let word = "Raghav";
   let character = 'a';

   let newStr = removeCharOccurences(word, character);

   console.log(`After removing all ${character}'s from ${word} it becomes ${newStr}`);
   ```
   **Alternate Approach -**
   ```js
   function removeCharOccurences(str, char) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== char) {
        newStr += str[i];
      }
    }
    return newStr;
   }

   let word = "Raghav";
   let character = 'a';

   let newStr = removeCharOccurences(word, character);

   console.log(`After removing all ${character}'s from ${word} it becomes ${newStr}`);
   ```
   **Output -**
   ```
   After removing all a's from Raghav it becomes Rghv
   ```
   ---