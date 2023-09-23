# JSX (JavaScript XML) OR (JavaScript Expression)

- JSX is an extension to JavaScript syntax used in React.js.
- JSX allows you to write HTML - like code within JavaScript code.
- JSX is a syntax extension, not a separate templating language, and it gets transformed into regular JavaScript code during the build process.
 
 ![JSX conversion during build process](images/02-JSX%20Conversion%20during%20build%20process.jpg)

- In JSX we use the camelCase naming convention.
- Some keywords are reserved in JavaScript so to use them in our JSX, we must use thier alternatives, eg.
  - class -------> className
  - for ---------> htmlFor , etc.
- Inside our JSX, we will have only one parent element.
- If we want to use more sibling elements, React will throw an error.
- To resolve this error we must wrap our JSX within a \<div>...\</div> or \<section>...\</section>.
- But by doing this we result in nesting of elements (which is not reccommended).
- The reccommended way is to use **React Fragments**.
- **Examples** -
  ```js
  return (
    <React.fragment>
        <div>
            <h2>Hello</h2>
        </div>
        <div>
            <p>Sample text</p>
        </div>
    </React.fragment>
  );
  ```
  
  > For this we need to import React from 'react'.

  ```js
  return (
    <>
        <div>
            <h2>Hello</h2>
        </div>
        <div>
            <p>Sample text</p>
        </div>
    </>
  );
  ```

  > For this we do not need to import anything.

- If you want to use JavaScript inside JSX, then use **{ }**.
- **Example** -
  ```js
  const name = 'Raghav';
  return (
    <>
        <p>Hello, {name}</p>
    </>
  );
  ```
- If you want to use CSS inside JSX, then use **{{ }}**.
- **Example** -
  ```js
  return (
    <div style = {{backgroundColor: 'blue'}}>
        <p>Hello, Raghav</p>
    </div>
  );
  ```

