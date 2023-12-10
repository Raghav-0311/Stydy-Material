# Introduction of TypeScript

TypeScript is a superset of JavaScript that adds static typing to the language. This means you can specify types for your variables, function parameters, and return values. TypeScript code is then transpiled into JavaScript, allowing it to run in any JavaScript environment.

![JavaScript VS TypeScript](images/JS%20vs%20TS.png)

**$JavaScript + Type Safty = TypeScript$**

# Key Features of TypeScript

- ### Static Typing: ``Type Annotations``
    TypeScript allows you to explicitly declare the types of variables, function parameters, and return values. This helps catch type-related errors during development.

    ```ts
    function greet(name: string): string {
        return `Hello, ${name}!`;
    }
    ```

- ### Interfaces: ``Structure-based Typing``
    TypeScript introduces interfaces for defining custom data types based on the structure of objects. This enhances code readability and maintainability.

    ```ts
    interface Person {
        firstName: string;
        lastName: string;
    }

    function greetPerson(person: Person): string {
        return `Hello, ${person.firstName} ${person.lastName}!`;
    }
    ```

- ### Classes and Inheritance: ``Object-Oriented Programming``
    TypeScript supports classes and inheritance, providing a more structured and object-oriented approach to JavaScript development.

    ```ts
    class Animal {
        constructor(public name: string) {}

        makeSound(): string {
            return "Some generic sound";
        }
    }

    class Dog extends Animal {
        makeSound(): string {
            return "Woof!";
        }
    }
    ```

- ### Generics: ``Reusable Code Components``
    TypeScript supports generics, allowing you to create functions and classes that work with a variety of types, providing flexibility and code reuse.

    ```ts
    function identity<T>(arg: T): T {
        return arg;
    }

    let result = identity<string>("hello");
    ```

- ### Union and Intersection Types: ``Flexibility with Types``
    TypeScript supports union types (a value of one of several possible types) and intersection types (a combination of multiple types).

    ```ts
    type StringOrNumber = string | number;
    type Point = { x: number} & {y: number};
    ```

- ### Enums: ``Enumeration Types``
    Enums allow you to define a set of named constant values, making code more readable and self-documenting.

    ```ts
    enum Color {
        Red,
        Green,
        Blue,
    }

    let myColor: Color = Color.Green;
    ```

- ### Type Inference: ``Less Verbosity``
    TypeScript has a powerful type inference system, reducing the need for explicit type annotations in many cases while still providing strong typing.

    ```ts
    let message = "Hello"; // TypeScript infers the type as string
    ```

- ### Modules and Namespaces: ``Code Organization``
    TypeScript supports modules for organizing code and avoiding global namespace pollution. It also provides namespaces for encapsulating logical components.

    ```ts
    // Module
    import { MyModule } from "./my-module";

    // Namespace
    namespace MyNamespace {
        // ...
    }
    ```

- ### Decorators: ``Metadata and Annotations``
    TypeScript supports decorators, which are a way to annotate and modify classes and properties. Commonly used in frameworks like Angular.

    ```ts
    @Component({
        selector: 'app-root',
        template: '<h1>Hello Angular!</h1>',
    })

    class AppComponent {}
    ```

- ### Declaration Files: ``Integration with JavaScript Libraries``
    TypeScript uses declaration files (``.d.ts``) to provide type information for JavaScript libraries, enabling seamless integration.

- ### Tooling Support: ``Rich Development Environment``
    TypeScript works well with modern development tools, providing features such as autocompletion, error checking, and refactoring support in editors like Visual Studio Code.
---
<br />


# Setting up a TypeScript development environment

> TypeScript is just another development tool, your project still runs on JavaScript.

- ### Install Node.js:
    TypeScript relies on Node.js, so you need to have Node.js installed. You can download it from https://nodejs.org/.

- ### Install TypeScript:
    Use npm (Node Package Manager) to install TypeScript globally on your machine.

    ```
    npm install -g typescript
    ```

    > If you are on mac 💻 just place ``sudo`` before the command and hit enter and it will ask for your passsword.

    Note that all your projects will be running on JavaScript not on TypeScript. That means TypeScript is nothing but a dev dependency for your project. So at that time you will use it as dev dependency as:

    ```
    npm install typescript --save-dev
    ```
    Also for component level approach we use ``.tsx`` extension and a ``tsconfig.json`` file.

- ### Check TypeScript Version:
    To ensure TypeScript is properly installed on your system, just check its version.

    ```
    tsc -v
    ```

- ### Create a TypeScript File:
    Create a file with a ``.ts`` extension, for example, ``app.ts``.

- ### Write TypeScript Code:
    Open ``app.ts`` and write a simple TypeScript code snippet. For example:

    ```ts
    // app.ts
    function greet(name: string): string {
        return `Hello, ${name}!`;
    }

    const greeting = greet("TypeScript");
    console.log(greeting);
    ```

- ### Compile TypeScript Code:
    Open a terminal, navigate to the directory containing ``app.ts``, and run the TypeScript compiler:

    ```
    tsc app.ts
    ```
    > NOTE: This will generate a JavaScript file ('``app.js``').

- ### Run JavaScript Code:
    Execute the JavaScript code using Node.js:

    ```
    node app.js
    ```
    > NOTE: You should see the output: '**Hello, TypeScript!**'
---
<br/>

# Practice TypeScript without installing it on your system

**TypeScript Playground** - https://www.typescriptlang.org/play