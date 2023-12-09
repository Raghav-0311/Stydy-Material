# Components 

- Components are the building blocks of a React application.
- They are self-contained, reusable pieces of code that encapsulate a part of the user interface and its related logic.
- In React, the UI is divided into small, independent components that can be composed together to create complex user interfaces.
- A component name in React must always starts with a Capital letter.
- In React components can be classified into two types -
  - **Class Components**
  - **Function Components**

## Class Components -
- Class components are JavaScript classes that extend the **' React.Component '** class provided by React.
- Class components manage their own state and lifecycle methods.
  ```js
  class Greeting extends React.Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <h1>Hello, {props.name}</h1>
        );
    }
  }
  ```
- Class components are popular in past for their inbuilt state management and lifecycle methods.
- But due to readibility issues class components are replaced with Function Components.

## Function Components -
-  Function Components are JavaScript functions that recieve props (properties) as input and return JSX as output.
-  They are also referred to as stateless components because they don't manage their own state.
-  But their are some toolkits & third-party modules to make them a statefull components. **{ Hooks }**
-  Function components are simple and straightforward, making them easy to read, test, and maintain.
  ```js
  const Greeeting = (props) => {
    return <h1>Hello, {props.name}</h1>;
  };
  ```
- Function Components have gained popularity over class components in recent years due to several advantages they offer.
  - Simplicity & Readability
  - Performance
  - Hooks
  - Reusability & Composition
  - Future Compatibility.
- There are two ways to define a function component -
  ```js
  // Using traditional function

  function Greeting () {
    return <h2>Hello</h2>;
  }
  ```
  ```js
  // Using ES6 arrow function

  function Greeting = () => {
    return <h2>Hello</h2>;
  }
  ```

## Nesting of Components -
- React allows us to nest any number of components.
- Say we have 2 - components -
  - **Heading** component
  - **Message** component
- And we also have an **App** component (**Our Global Component**) where we want to nest the other two components.
  ```js
  // Heading Component

  const Heading = () => {
    return <h1>This is a Heading</h1>;
  }
  ```
  ```js
  // Message Component

  const Message = () => {
    return <p>This is a Message</p>;
  }
  ```
  ```js
  // App Component (our global component)

  const App = () => {
    return (
        <>
            <Heading /> <!--Our Heading Component -->
            <Message /> <!--Our Message Component -->
        </>
    );
  }

  // In order to use these components in our Global component we also need to import them from their respective locations.
  ```
- In order to see your component structure or component tree -
  - Open **' React Developers Tool '** extension in chrome.
  - Go to components tab and analyse your component tree.