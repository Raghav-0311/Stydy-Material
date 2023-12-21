# Basic Types in TypeScript 

In TypeScript, you can explicitly specify the types of variables using basic types.

- **number**: Represents both integer and floating-point numbers.
- **string**: Represents text or character data.
- **boolean**: Represents a binary value, either '``true``' or '``false``'.

    ```ts
    let age: number = 369;
    let name: string = "Raghav";
    let isDeveloper: boolean = true;
    ```

### Arrays:
- Arrays in TypeScript can be typed using the element type followed by '``[]``'.

    ```ts
    let numbers: number[] = [1, 2, 3, 4, 5];
    let names: string[] = ["Raghav", "Manjunath", "Aditya"];
    ```

- You can also use the generic ``Array`` type.

    ```ts
    let numbers: Array<number> = [1, 2, 3, 4, 5];
    let names: Array<string> = ["Raghav", "Manjunath", "Aditya"];
    ```

### Tuples:
- Tuples allow you to express an array where the type of a fixed number of elements is known.

    ```ts
    let person: [string, number] = ["Raghav", 369];
    ```

- In this example, the first element must be a ``string``, and the second element must be a ``number``. 

### Enum:
- Enums allow you to define a set of named constants.

    ```ts
    enum Color {
        Red,
        Green,
        Blue
    }

    let myColor: Color = Color.Green;
    ```

- Here, ``Color.Green`` is an enum member with a numeric value of ``1``.
- You can also customize enum values.

    ```ts
    enum Color {
        Red = "RED",
        Green = "GREEN",
        Blue = "BLUE"
    }
    ```

### Any:
- The ``any`` type is a way to opt out of type checking.
- Variables of type ``any`` can be assigned values of any type.

    ```ts
    let dynamicValue: any = 5;

    dynamicValue = "Hello";
    dynamicValue = true;
    ```

- While ``any`` provides flexibility, it sacrifices the benefits of static typing.

### Void:
- The ``void`` type is used when a function does not return a value.

    ```ts
    function logMessage(message: string): void {
        console.log(message);
    }
    ```

### Null:
- ``null`` is a value that represents the intentional absence of any object value.
- It is often used to indicate that a variable intentionally does not point to any object or that a function deliberately returns no meaningful value.
- ``null`` is a subtype of all other types. This means you can assign ``null`` to a variable of any type.

    ```ts
    let myVar: null = null;
    ```
- TypeScript has a compiler option called ``strictNullChecks`` that, when enabled, introduces stricter null and undefined checks. This helps catch more potential errors related to null and undefined.

    ```ts
    let name: string | null = "Raghav";

    // Function that may return null
    function findUser(id: number): string | null {
        // ... logic to find user
        if (userIsFound) {
            return "User Found";
        } else {
            return null;
        }
    }

    // Using the function
    let userResult: string | null = findUser(369);

    // Variables that may be undefined
    let possiblyUndefined: number | undefined;
    let definitelyUndefined: number = possiblyUndefined!; // Using the non-null assertion operator (!)
    ```

### Undefined:
- ``undefined`` is a value that represents an uninitialized or missing value. It is often the default value of variables that have not been assigned a value.
- When a variable is declared but not initialized, it is automatically assigned the value ``undefined``.
- ``undefined`` is a type and a value in JavaScript and TypeScript.

    ```ts
    let myVarUndefined: undefined = undefined;

    let uninitializedVar: number; // This is implicitly assigned undefined
    ```

> Both ``null`` and ``undefined`` are assignable to each other and to any other type due to TypeScript's type system design.

```ts
let myVar: null = undefined; // OK
let myVarUndef: undefined = null; // OK    
```