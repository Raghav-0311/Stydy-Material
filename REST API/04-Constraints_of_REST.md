# Constraints of REST -

REST, as an architectural style, is guided by a set of constraints that define its principles and characteristics. These constraints ensure that systems designed using REST are scalable, maintainable, and adhere to a uniform interface.

## Six constraints of REST are -
1. **Client-Server** : REST enforces a separation between the client and the server. This separation allows each component to evolve independently, improving scalability and flexibility.
2. **Statelessness** : Each request from the client to the server must contain all the information necessary for the server to fulfill the request. The server doesn't store client state between requests. This constraint simplifies server design and enhances scalability.
3. **Cacheability** : Responses from the server can be marked as cacheable or non-cacheable. Caching improves performance by allowing clients and intermediary servers to store and reuse responses, reducing the need to repeatedly request the same data.
4. **Uniform Interface** : The uniform interface constraint defines the common set of interactions between clients and servers. It includes several sub-constraints:
   1. **Identification of Resources** : Resources are identified by unique URLs (Uniform Resource Identifiers).
   2. **Manipulation of Resources Through Representations** : Clients manipulate resources by sending representations of them to the server. The server then processes these representations to perform actions.
   3. **Self-Descriptive Messages** : Each message should contain enough information for the recipient to understand how to process it. This includes using standard media types and having metadata within the message.
   4. **Hypermedia as the Engine of Application State (HATEOAS)** : Responses should include links to related resources, allowing clients to discover and navigate the API's structure dynamically.
5. **Layered System** : REST allows for a hierarchical system architecture with multiple layers. Each layer has a specific responsibility, and a client isn't aware of the internal workings of the other layers. This separation improves scalability and allows for independent development of different components.
6. **Code on Demand (Optional)** : This constraint is optional in REST. It allows the server to extend the functionality of a client by transferring executable code (such as JavaScript) to the client. This enables dynamic behavior but is rarely used in practice due to security concerns.

> These constraints, when followed, lead to the creation of RESTful web services that are scalable, interoperable, and maintainable. Adhering to these constraints ensures that different components of a distributed system can evolve independently and that the system remains flexible in the face of changes. 