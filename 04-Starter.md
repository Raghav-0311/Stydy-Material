# Basic concepts for JavaScript

- ``White Space`` - JavaScript does not consider white space meaningful.
- ``Case Sensitive`` - JavaScript is Case Sensitive. A variable name **raghav** is different from **Raghav**.
- ``Literals`` - Literals are nothing but values. It can of the type of a number, a string, a boolean, object, or array.
  ```js 
  5
  'Raghav'
  true
  false
  ['a', 'b', 'c', 'd']
  {name: 'Raghav', course: 'Full-Stack-Development'} 
  ```
- ``Identifiers`` - An identifier is a sequence of characters that can be used to identify a variable, a function, or an object. It can start with a letter, the dollar sign "$", or an underscore "_", and it can contain digits. The dollar sign is commonly used to reference DOM elements. JavaScript Keywords (reserved words) cannot be used as identifiers.
- ``Comments`` - comments are non compilable code used just for the reference. In JavaScript there are two ways to write comments - 
  - <b>Single Line Comments</b> - single line comments are used to comment a perticular line or code statement. To write a single line comment we can use double slash.
  ```js
  // This is a single line comment
  ```
  - <b>Multi Line Comments</b> - multi line comments are used to comment a block of code which we don't want to execute during compilation. To write a multi line comment we use slash star.
  ```js
  /*
  This is a multi line comment
  everything inside this block is considered as a comment
  this code is just for the reference and it will not compile
  */
  ```
- ``Semicolons`` - semicolons are used to terminate a statement, but every statement in a JavaScript program is optionally terminated using semicolons. It is optionally, because the JavaScript interpreter is smart enough to introduce semicolons for you.
```js
let a = 10; // this will work
let b = 20  // this will also work
// No strict rule to add ; to terminate a statement in JS
```
- ``Values`` - values are nothing but literals. We can assign values to variables or properties so that we can access that value later.
- ``Variables`` - A variable is a value assigned to an identifier. In simple words a variable is a container that is used to hold some value in it so that we can access it later in our code. Some rules to declare a varialbe in JavaScript are :
  - Variable name must start with a letter (a-z, A-Z) or an underscore (_), followed by letters, digits, or underscores.
  - Variable names are case-sensitive, so 'myVar' and 'myvar' would be treated as different variables.
  - Avoid using reserved keywords as variable names.
  - Use descriptive names to make your code more readable.
  - Variable name can't start with a digit.
  - A variable must be declared before you can use it.
  - **var** has global or function scope, while **let** and **const** have block scope (limited to the block in which they are defined).
  - **let** allows reassignment, while **const** represents a constant that can't be reassigned once initialized.
  - Variables declared using **var** are hoisted (moved to the top of their scope during compilation), which can lead to enexpected behavior. so it is recommended to use **let** and **const** over **var** for better scoping and to avoid potential issues.
  ```js
  var globalVar = 333; // global scope + can be hoisted and cause some potential issues - avoid using this !!!
  let localVar = 1; // varies scope based on declaration + allow to reassign the localVar variable. - if at some point you want to change the value of this variable you can do it by assigning it as let
  const constantVar = 3.14; // varies scope based on declaration + reference cannot be changed & you cannot reassign a new value to it. RECOMMENDED always use const unless you need a variable which you need to reassign with a new value.
  ```
  - **const** variables must be initialized at the declaration time.
  - **let** variable can be initialized later.
  - you can declare multiple variables at once in the same statement.
  ```js
  const a = 1, b = 2, c = 3;
  let d = 4, e = 5, f = 6;
  ```
  - you cannot redeclare the same variable. || "duplicate declaration error".
  > **const** does not mean "constant" in the way some other languages like C mean. In particular, it does not mean the value cannot change - it means it cannot be reassigned. If the variable points to an object or an array the content of the object or the array can freely change.

  > Until 2015, **var** was the only way we could declare variable in JavaScript. Today, a modern codebase will most likely just use **const** and **let**.