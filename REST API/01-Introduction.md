# Introduction to RESTful APIs -

REST stands for **Representational State Transfer**, is an ``architectural style`` for designing network applications. REST APIs [API stands for **Application Programming Interface**] are a way of building web services that adhere to the principles of REST.<br />
REST works on Client-Server Model. <br />
REST APIs provide a standardized way for different software applications to communicate over the internet by using HTTP mehtods and following the principles of the REST architectural style. This leads to more scalable, maintainable, and loosely coupled systems.

![RESTful API](images/REST%20API.jpg)

## Key Concepts of REST APIs -
- **Resources** : Resources are the main objects or data entities that an API provides access to. They are identified by unique URLs. Eg., in social media app, users, posts, and comments could be considered resources.
- **HTTP Methods** : REST APIs use standard HTTP methods to perform different actions on resources. The most commonly used methods are:
  - GET - Retrieve data from the server.
  - POST - Create a new resource on the server.
  - PUT - Update or replace an existing resource.
  - DELETE - Remove a resource from the server.
  - PATCH - Partially update a resource.
- **Stateless** : REST APIs are stateless, meaning that each request from a client to the server must contain all the information needed to understand and process the request. The server doesn't store any client context between requests.
- **Uniform Interface** : The API's interface is consistent and uniform across different resources. This simplifies interactions for developers.
- **Representation** : Resources are represented in a specific format, such as JSON or XML. Clients and server can negotiate the representation format based on the ``Accept`` and ``Content-Type`` headers.
- **Hypermedia** : REST APIs can provide hyperlinks within responses, allowing client to navigate the API's resources dynamically.
- **Status Codes** : HTTP status codes are used to indicate the outcome of a request. For instance, a ``200 OK`` code indicates a successful response, while a ``400 Not Found`` code means the requested resource was not found.
- **Versioning** - As APIs evolve, versioning becomes important to maintain compatibility. It's common to include the version number in the URL, such as ``/v1/resource``.
- **Authentication and Authorization** : REST APIs use various methods for authentication (verifying the identity of the client) and authorization (determining what the client can access). Common authentication methods include API keys, Oath tokens, and basic authentication.
- **Caching** - REST APIs can utilize caching mechanisms to improve performance. Responses can be cached based on the headers sent by the server.
- **Best Practices** - Following best practices, such as using nouns for resource names, avoiding complex URLs, and using appropriate HTTP methods, helps in creating a well-designed and easily understandable API.