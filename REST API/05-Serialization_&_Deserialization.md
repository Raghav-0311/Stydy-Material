# Serialization and Deserialization -

Serialization and deserialization are processes used to convert data objects into a format that can be easily stored, transmitted, or reconstructed later.

- ## Serialization -
  - Serialization involves converting an object into a format that can be easily transmitted or stored.
  - In Node.js, the **JSON.stringify()** method is commonly used for serialization.
  
  ```js
  // Serialization

  const person = {
    name: "Raghav",
    age: 28
  };

  //console.log(person); // return an error
  // we need to serialize our person object

  const serializedPerson = JSON.stringify(person);
  console.log(serializedPerson);
  ```
  - The output would be:
  ```
  {"name":"Raghav","age":28}
  ```

- ## Deserialization -
  - Deserialization is the process of converting serialized data back into an object.
  - In Node.js, the **JSON.parse()** method is commonly used for converting the JSON string back to a JavaScript object.
  
  ```js
  // Deserialization

  const serializedPerson = '{"name":"Raghav","age":28}';
  const deserializedPerson = JSON.parse(serializedPerson);

  console.log(deserializedPerson.name); // Output: Raghav
  console.log(deserializedPerson.age); // Output: 28
  ```

> When communicating data, it should be in the form of JSON.

> When storing data in our local system, it should be in the form of an object.

- ## Node & Express Way -
  - If we are using traditional node.js approach to create a server and looking for communicating, and storing the data, than we need to serialize and deserialize the data.
  
  ```js
  // Traditional Node.js approach

  const http = require('http');

  const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write(JSON.stringify({ name: "Raghav" })); // Serialization
        console.log(JSON.parse('{ "name": "Raghav" }')); // Deserialization
        res.end();
    }
  });

  server.listen(5002);

  console.log('Server listening on port 5002...');
  ```

  - If we are using express.js approach to create a server and looking for communicating, and storing the data, than we don't need to serialize and deserialize the data.
  
  ```js
  // Express.js approach

  const express = require('express');

  const app = express();

  app.get('/', (req, res) => {
    res.send({ name: "Raghav" }); // Auto serialized-deserialized
  });

  app.listen(5001, console.log('Server listening on port 5001...'))
  ```

> Serialization and deserialization are fundamental concepts in programming, especially when dealing with data interchange, storage, and communication between systems. They allow you to convert complex data structures into a format that can be easily transported or stored, and then reconstruct the original data structure when needed.