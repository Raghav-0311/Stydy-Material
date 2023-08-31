/*
let a = 10;
let b = 20;
let c = a + b;
console.log(`output = ${c}`); // output = 30
*/

// let x = false;
// let y = true;

// console.log(x && y);

// let text = "Hello, Everyone";
// let length = text.length;
// console.log(`length = ${length}`);

// ***** STRING DSA PROBLEMS*****

// LENGTH OF A STRING WITHOUT USING length PROPERTY
/*
function findStringLength(str) {
  let count = 0;
  for (let char of str) {
    count++;
  }
  return count;
}

let strLength = findStringLength("hello");

console.log(`Length of this string = ${strLength}`);
*/

// REVERSE A STRING
/*
function revString(str) {
  return str.split("").reverse().join("");
}

let reverseStr = revString("Hello world");

console.log(`Reverse string = ${reverseStr}`);
*/

// PALINDROME STRING
/*
let givenStr = "civil";

function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

if (isPalindrome(givenStr)) {
  console.log(`Palindrome String`);
} else {
  console.log(`Not a Palindrome String`);
}
*/

// COUNT REPEATED CHARACTERS
/*
function countOccurrences(str, char) {
  let count = 0;
  for (let c of str) {
    if (c === char) {
      count++;
    }
  }
  return count;
}

let repeatNumber = countOccurrences("raghav", "a");

console.log(`Given character repeated ${repeatNumber} times.`);
*/

// CAPITALIZE FIRST CHARACTER
// RegEx approach
/*
function capitalizeWords(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

let message = "my name is raghav";

let capStr = capitalizeWords(message);

console.log(`${capStr}`);
*/

//Alternate approach
/*
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
*/

// Write a function to remove all whitespace characters from a string.
// RegEx approach
/*
function removeWhitespace(str) {
  return str.replace(/\s/g, "");
}

let message = "my name is raghav";

let resStr = removeWhitespace(message);

console.log(`${resStr}`);
*/
// Alternate approach
/*
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
*/

//Implement a function to find the index of the first occurence of a substring in a given string.
/*
function indexOfSubstring(str, sub) {
  return str.indexOf(sub);
}

let message = "my name is raghav";
let name = "raghav";

let index = indexOfSubstring(message, name);

console.log(`Index of \"${name}\" is ${index} in \"${message}\"`);
*/
// Alternate Approach
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
