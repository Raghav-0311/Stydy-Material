# Conditionals in JavaScript -

Conditional Statements in JavaScript are used to make decisions in your code based on certain conditions. They allow your program to execute different blocks of code depending on whether a given condition is true or false. There are four main conditional statements in JavaScript.

> Conditional statements help control the flow of your program and enable you to handle different scenarios based on different conditions. They are essential for writing dynamic and responsive code.

- ## If Statement -
  - The **if** statement allows you to execute a block of code if a specified condition is true.
  - If you need to execute only one statement inside an if statement than block definition is optional [i.e. {}].
  - If you need to execute more than one statement inside an if statement than block definition is must [i.e. {}].
  
  ```js
  // The if Statement
  let age = 18;

  if (age >= 18) {
    console.log("You are an adult");
  }
  ```

- ## If-Else Statement -
  - In an if-else statement their are two blocks one is for **if block** and other is for **else block**.
  - Conditions are checked only in if block.
  - If block will only executes whenever the defined condition evaluates to true.
  - if defined condition evaluates to false then else block will executes.
  
  ```js
  // The if-else statement
  let age = 18;

  if (age >= 18) {
    console.log("You are an adult");
  } else {
    console.log("You are a minor");
  }
  ```
  > Note if-else statement only single block will be executed either it was if block or an else block.

- ## if-else if statement -
  - In if-else if ladder their are three main blocks. **if block**, **else if block**, and **else block**.
  - if block is where the initial condition was checked. and it will only execute if that condition evaluates to true.
  - else if block can be of n number depending on the number of conditions we want to check. In every else if block you can check a different conditions, and if that condition evaluates to true than its corresponding block we be executed.
  - if no condition evaluates to true, than else block will be executed.
  
  ```js
  // The if-else if ladder
  let score = 85;

  if (score >= 90) {
    console.log("You got an A"); // executes if, if condition is true
  } else if (score >= 80) {
    console.log("You got a B"); // executes if, this else if condition is true
  } else if (score >= 70) {
    console.log("You got a C"); // executes if, this else if condition is true
  } else {
    console.log("You need to improve"); // executes if none is true
  }
  ```

- ## Switch Statement -
  - The **switch** statement is also used to check multiple conditions and based on these conditions we will execute different code blocks.
  - condition is checked in switch statement initial ().
  - each conditional check is defined using case value:
  - every case must have a break; statement in the end to break the flow of control.
  - if no conditon is true then default case will execute.
  - default case doesn't contain a break; statement.
  
  ```js
  // The Switch Statement
  let dayOfWeek = "Monday";

  switch (dayOfWeek) {
    case "Monday":
        console.log("It's the start of the week.");
        break;
    case "Friday":
        console.log("TGIF!");
        break;
    default:
        console.log("It's a regular day.");
  }
  ```