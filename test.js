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
