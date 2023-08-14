# How JavaScript Work ?

## JavaScript Engine - 
- The JavaScript Engine is simply a computer program that interprets JavaScript code.
- The JS Engine is responsible for executing the code.
- Every major browser has a JavaScript engine that executes code.
- Examples -
  - ``V8 engine`` - in Google Chrome & Node.js.
  - ``SpiderMonkey`` - in Mozilla Firefox.
  - ``JavaScriptCore`` - in Safari & all iOS browsers.
  - ``Chakra`` - in Internet Explorer.
  - etc...
- Any JavaScript engine typically contains a ``call stack`` and a ``heap``.
  - The call stack is where the code is executed.
  - The heap is an unstructured memory pool that stores all the objects needed for the application.
  
![JavaScript Engine](https://www.freecodecamp.org/news/content/images/2023/05/09BA18A6-3F7A-4DBE-AA43-C482725CA5E4.jpeg)
<br />

> Since the computer's processor only understands binary, 0's and 1's, the code has to be transated to 0's and 1's i.e. ``Machine Code``
<br />

- When a code snippet is passes into the engine, the code is initially ``Parsed``, (READ).
- The code is subsequently parsed to a data structure called the ``AST (Abstract Syntax Tree)``.
- The resulting tree is then used to create ``Machine Code``.
- Execution happens in the JavaScript engine call stack using the ``execution context``. This is the environment where JavaScript code is executed.

![JS Execution Process](https://www.freecodecamp.org/news/content/images/2023/05/FA4EDBD9-0348-4445-B795-8D1FEF904CBE.jpeg)

## The JavaScript Runtime -
- Think of the JavaScript runtime as the house that encompasses all the components needed to run JavaScript.
- This house comprises the ``JavaScript Engine``, ``Web APIs``, and the ``Callback Queue``.
  - #### Web APIs -
    - ``Web APIs`` are functionalities that are provided to the engine but are not part of the JavaScript language.
    - They are accessible to the engine through the browser and help access data or enhance browser functionality.
    - Examples - ``DOM (Document Object Model)`` and ``Fetch APIs``.
  - #### Callback Queue -
    - ``Callback Queue`` includes callback functions that are ready to be executed.
    - The callback queue ensures that callbacks are executed in the FIFO (First-In-First-Out) method and they get passed into the stack when it's empty.

![JS Engine, Web APIs, and Callback Queue](https://www.freecodecamp.org/news/content/images/2023/05/CDFBBA53-5533-478E-91CE-5904714E1043.jpeg)

- Examples of JavaScript Runtime Environments -
  - #### ``The Browser Runtime`` -
    - When JavaScript executes within a web browser it is operating within the browser's runtime environment.
    - The browser runtime environment provides access to the DOM which enables interaction with web page elements, handling events, and manipulating the page structure.
  - #### ``Node.js`` -
    - Node.js provides a server-side runtime environment for executing JavaScript outside the browser.
    - Because it executes JavaScript outside the browser, it does not have access to the Web APIs.
    - Instead, the Node.js runtime environment replaces it with something called C++ bindings and the Thread Pool.

> Ref - FreeCodeCamp article on How JavaScript Works.