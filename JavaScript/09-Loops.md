# Loops in JavaScript

Loops in JavaScript are used to repeatedly execute a block of code as long as a specific condition is met. They helps you avoid writing repetitive code and make your programs more efficient.

- ## For loop -
  - for loop consists of three expressions -
    - The Initializer [eg - let i = 1;]
    - The Conditional Checker [eg - i <= 5;]
    - The Counter / Modifier [eg - i++]
  - The initializer is where where we initialize our first iteration value, also it will only execute once dring the loop process.
  - The Conditional Cheker is where we check for a certain condition, if that condition is true the control will enter inside the loop block, else it will skip the loop block.
  - The Counter or Modifier is where we modify our iteration value. This is usefull to limit the number of iterations as we are continuesly modifying the counter.
  - #### Syntax -
    ```js
    for (Initializer; Conditional Checker; Modifier) {
        // CODE BLOCK
    }
    ```
    > It is important to modify the counter, if it is not done the loop will get executed for infinite number of iterations. which leads to certain errors and program crashes.

    ```js
    // the for loop
    let totalNum = 10;

    for (let i = 1; i <= totalNum; i++) {
        console.log(`Iteration Number = ${i}`);
    }
    ```

  -   ## For...Of Loop -
      -   the for...of loop is the simplified version of the for loop.
      -   this loop is realy helpful while extractinig values form a list or an array.

        ```js
        // the for...of loop
        const list = ['a', 'b', 'c', 'd', 'e'];

        for (const value of list) {
            console.log(value);
        }
        ```

- ## While Loop - 
  - While loop is also known as "entry control loop" as we can only specify the conditional checker at the starting of the loop.
  - In while loop we need to initialize iteration initial value befor and outside the loop body.
  - Also we need to se a modifier for that iteration value inside the loop body.
  - #### Syntax -
    ```js
    Initializer;

    while (Conditional Checker) {
        // Code Block
        Modifier;
    }
    ```

    ```js
    // the while loop
    let totalNum = 10;
    let i = 1; // Initializer

    while (i <= totalNum) {
        console.log(`Iteration Number = ${i}`);
        i++; // Modifier
    }
    ```

- ## Do-While Loop -
  - do-while loop is similar to while loop.
  - the difference is that the contition is checked after executing the code block.
  - do-while loop is also known as "exit control loop".
  - #### Syntax - 
    ```js
    Initializer;

    do {
        // Code Block
        Modifier;
    } while (Conditional Checker);
    ```

    ```js
    // the do-while loop
    let totalNum = 10;
    let i = 1; // Initializer

    do {
        console.log(`Iteration Number = ${i}`);
        i++;
    } while (i <= totalNum);
    ```


