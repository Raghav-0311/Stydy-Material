# Operators in JavaScript

- Operators in JavaScript are symbols that allow you to perform various operations on values.
- They are used to manipulate data, perform calculations, and make comparisons.
- Some of the most commonly used operators are :
  - **Arithmetic Operators** - These operators perform basic mathematical operations.
  ```js
  // Arithmetic Operators
  let a = 10;
  let b = 5;

  let sum = a + b; // Addition
  let difference = a - b; // Subtraction
  let product = a * b; // Multiplication
  let quotient = a / b; // Division
  let remainder = a % b; // Modulus (remainder of division)
  ```
  - **Assignment Operators** - These operators assign values to variables.
  ```js
  // Assignment Operators
  let x = 10; 
  x += 5; // Equivalent to : x = x + 5
  x -= 3; // Equivalent to : x = x - 3
  x *= 2; // Equivalent to : x = x * 2
  x /= 4; // Equivalent to : x = x / 4
  ```
  - **Comparison Operators** - These operators compare values and return a Boolean result.
  ```js
  // Comparison Operators
  let num1 = 10;
  let num2 = 5;

  let isEqual = num1 === num2; // Strict Equality [values + datatype]
  let isequal = num1 == num2; // Equality [values]
  let isNotEqual = num1 !== num2; // Strict inequality
  let isGreaterThan = num1 > num2; 
  let isLessThan = num1 < num2;
  let isGreaterOrEqual = num1 >= num2;
  let isLessOrEqual = num1 <= num2;
  ```
  - **Logical Operators** - These operators are used to combine or negate Boolean values. (also used while short circuit evaluations).
  ```js
  // Logical Operators
  let isTrue = true;
  let isFalse = false;

  let logicalAnd = isTrue && isFalse; // Logical AND [both must be true]
  let logicalOr = isTrue || isFalse; // Logical OR [One must be true]
  let logicalNot = !isTrue; // Logical NOT (invert the value)
  ```
  - **Unary Operators** - These operators work with a single operand.
  ```js
  // Unary Operators
  let num = 5;

  num++; // Increment by 1 [Post-Increment]
  ++num; // Increment by 1 [Pre-Increment]
  num--; // Decrement by 1 [Post-Decrement]
  --num; // Decrement by 1 [Pre-Decrement]
  ```
  - **Ternary Operator** - This is a shorthand for an if-else statement. 
    - Syntax - ``Expression ? ifExpressionTrue : ifExpressionFalse``
  ```js
  // Ternary Operator
  let age = 18;

  let isAdult = age >= 18 ? "Yes" : "No"; // Result = Yes
  ```
  - **Bitwise Operators** - These operators manipulate individual bit of binary representations of numbers. They are often used for low-level operations and can be quite powerful in specific situations. Some of the commonly used bitwise operators are:
  
  - **Bitwise AND ('&')** - Performs a bitwise AND operation between each pair of corresponding bits.
  
  |Bit 1 |Bit 2 |Operation |Result|
  |------|------|----------|------|
  |0     |0     |0 & 0     |0     |
  |0     |1     |0 & 1     |0     |
  |1     |0     |1 & 0     |0     |
  |1     |1     |1 & 1     |1     |

  ```js
  // Bitwise AND ('&') Operator
  let a = 5; // 0101
  let b = 3; // 0011

  let result = a & b; // result = 0001 (1 in decimal)
  ```

    - **Bitwise OR ('|')** - Performs a bitwise OR operation between each pair of corresponding bits.
  
  |Bit 1 |Bit 2 |Operation |Result|
  |------|------|----------|------|
  |0     |0     |0 | 0     |0     |
  |0     |1     |0 | 1     |1     |
  |1     |0     |1 | 0     |1     |
  |1     |1     |1 | 1     |1     |

  ```js
  // Bitwise OR ('|') Operator
  let a = 5; // 0101
  let b = 3; // 0011

  let result = a | b; // result = 0111 (7 in decimal)
  ```

  - **Bitwise XOR ('^')** - Performs a bitwise XOR operation between each pair of corresponding bits.
  
  |Bit 1 |Bit 2 |Operation |Result|
  |------|------|----------|------|
  |0     |0     |0 ^ 0     |0     |
  |0     |1     |0 ^ 1     |1     |
  |1     |0     |1 ^ 0     |1     |
  |1     |1     |1 ^ 1     |0     |

  ```js
  // Bitwise XOR ('^') Operator
  let a = 5; // 0101
  let b = 3; // 0011

  let result = a ^ b; // result = 0110 (6 in decimal)
  ```

  - **Bitwise NOT ('~')** - Inverts the bits of the operand, changing each '0' to '1' and each '1' to '0'.
  
  |Bit 1 |Operation |Result|
  |------|----------|------|
  |0     |~ 0       |-1    |
  |1     |~ 1       |-2    |

  > Note that the result of the Bitwise NOT operation is platform-dependent and depends on the binary representation used by the computer. In most cases, the result is calculated using two's complement representation.

  ```js
  // Bitwise NOT ('~') Operator
  let a = 5; // 0101

  let result = ~ a; // result = -6 (Due to two's complement representation)
  ```

  - **Left Shift ('<<')** - Shifts the bits of the left operand to the left by a specified number of positions.
  
  ```js
  // Left Shift ('<<') Operator
  let num = 5; // 0101

  let result = num << 2; // result = 010100 (20 in decimal)
  ```

  - **Right Shift ('>>')** - Shifts the bits of the left operand to the right by a specified numbeer of positions.
  
  ```js
  // Right Shift ('>>') Operator
  let num = 20; // 10100

  let result = num >> 2; // result = 0101 (5 in decimal)
  ```
  
