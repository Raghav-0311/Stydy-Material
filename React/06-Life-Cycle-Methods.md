# Component Life-Cycle-Methods

**Ref Link** - https://programmingwithmosh.com/javascript/react-lifecycle-methods/

React class components have several lifecycle methods that allow you to hook into various phases of a component's existence. However, with the introduction of React Hooks, many of these lifecycle methods are no longer used in functional components.

## What are React lifecycle methods?
You can think of React lifecycle methods as the series of events that happen from the birth of a React component to its death. Every component in React goes through a lifecycle of events. I like to think of them as going through a cycle of birth, growth, and death.
- **Mounting** – Birth of your component
- **Update** – Growth of your component
- **Unmount** – Death of your component


![Component Life Cycle Methods](https://i0.wp.com/programmingwithmosh.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-31-at-1.44.28-PM.png?ssl=1)

## Common React Lifecycle Methods
- **constructor (props)** :
  - The constructor is called when an instance of a class component is created.
  - It's used for initializing state and binding event handlers.
  - Example :
  ```js
  class MyComponent extends React.Component {
    constructor (props) {
        super(props);
        this.state = { count: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // Handle Click Event
    }
  }
  ```
- **render ()** :
  - The render() is the most used lifecycle method.
  - It is a pure function.
  - You cannot set state in render().
  - Example :
  ```js
  class Hello extends Component{
   render(){
      return <div>Hello {this.props.name}</div>
   }
  }
  ```
- **componentDidMount ()** :
  - This method is called after the component is inserted into the DOM.
  - It's often used for making API calls, setting up subscriptions, or initializing third-party libraries.
  - Example :
  ```js
  class MyComponent extends React.Component {
    componentDidMount () {
        // Make an API call
        fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(data => {
                this.setState({ data });
            });
    }
  }
  ```
- **componentDidUpdate (prevProps, prevState)** :
  - This method is called after the component's state or props change.
  - It's used for performing side effects when the component updates.
  - Be careful to avoid infinite loops by checking if the props or state actually changed.
  - Example :
  ```js
  class MyComponent extends React.Component {
    componentDidUpdate (prevProps, prevState) {
        if (this.props.id !== prevProps.id) {
            // Fetch new data when the 'id' prop changes
            this.fetchData(this.props.id);
        }
    }
  }
  ```
- **componentWillUnmount ()** :
  - This method is called just before a component is removed from the DOM.
  - It's used for cleaning up resources, such as canceling network requests or removing event listeners.
  - Examples :
  ```js
  class MyComponent extends React.Component {
    componentDidMount () {
        this.timerId = setInterval(() => {
            // Do something periodically
        }, 1000);
    }

    componentWillUnmount () {
        clearInterval(this.timerId); // clean up the timer
    }
  }
  ```
- **shouldComponentUpdate (nextProps, nextState)** :
  - This method is called before rendering when new props or state are received.
  - It allows you to control if the component should re-render.
  - You can optimize performance by returning **false** if a re-render is unnecessary.
  - Example :
  ```js
  class MyComponent extends React.Component {
    shouldComponentUpdate (nextProps, nextState) {
        return nextProps.value !== this.props.value;
    }
  }
  ```
- **static getDerivedStateFromProps (props, state)** :
  - This static method is called whenever new props are received.
  - It's used to update the state based on the props, but it's a less common alternative to **componentWillReceiveProps**.
  - Example :
  ```js
  class MyComponent extends React.Component {
    static getDerivedStateFromProps (props, state) {
        if (props.value !== state.value) {
            return { value: props.value };
        }
        return null;
    }
  }
  ```
- **componentDidCatch (error, info)** :
  - This method is used for error handling within a component's tree.
  - It's called when an error is thrown during rendering, in a lifecycle method, or in a child component's constructor.
  - It allows you to gracefully handle errors and display fallback UI.
  - Example :
  ```js
  class ErrorBoundary extends React.Component {
    state = { hasError: false };

    componentDidCatch (error, info) {
        this.setState ({ hasError: true });
        // Log the error
        console.error(error);
    }

    render () {
        if (this.state.hasError) {
            return <div>Something went wrong.</div>;
        }
        return this.props.children;
    }
  }
  ```

> These are some of the main lifecycle methods in React class components. Note that the introduction of React Hooks has shifted the paradigm in React development, and functional components are now the preferred way to write React code. Many lifecycle-related patterns are handled differently or are no longer needed in functional components.
