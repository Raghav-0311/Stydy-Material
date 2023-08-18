# Short Circuit Evaluation in JavaScript

In JavaScript, Short Circuit Evaluation is a technique that allows you to use logical operators (such as - '&&' and '||') to perform conditional evaluations in a concise way.

![Short Circuit Evaluation](./images/Short%20Circuit%20Evaluation.jpg)

- ## Short-Circuit with Logical AND ('&&') -
  - When using '&&' operator, if the left hand side of the expression is falsy or evaluates to false, the entire expression is considered falsy without evaluating the right hand side.
  - If the left hand side is truthy, the expression proceeds to evaluate the right hand side.
  
  ```js
  // Short Circuit using && operator
  const result = false && someFunction(); // case - 1 (Short Circuit)
  const result = true && someFunction(); // case - 2
  ```
- ## Short-Circuit with Logical OR ('||') -
  - When using '||' operator, if the left hand side of the expression is truthy or evaluates to true, the entire expression is considered truthy without evaluating the right hand side.
  - If the left hand side is falsy, the expression proceeds to evaluate the right hand side.
  
  ```js
  // Short Circuit using || operator
  const result = true || someFunction(); // case - 1 (short circuit)
  const result = false || someFunction(); // case - 2
  ```

> Keep in mind that short-circuiting can be leveraged in combination with the fact that certain values are considered falsy, rest truthy.

> Falsy Values - false, 0, null, undefined, NaN, ' '.

> All other values are considered truthy.