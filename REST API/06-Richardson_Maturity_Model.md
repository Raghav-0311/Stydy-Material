# Richardson Maturity Model 

The Richardson Maturity Model, often reffered to as the Richardson REST Maturity Model, is a framework developed by **Leonard Richardson** to assess the maturity level of an API's adherence to REST principles. It provide a way to categorize and evaluate how closely an API aligns with the REST architecture style. This model is divided into 4-levels, ranging from Level 0 to Level 3.

![Richardson REST Maturity Model](images/Richardson%20Maturity%20Model.jpg)

- ### Level 0 - The Swamp of POX (Plain Old XML) :
  - At this level, the API uses a single URL for all operations.
  - It typically employs the HTTP POST method and sends data using XML in the request body.
  - The API doesn't take advantage of HTTP methods or status codes.
- ### Level 1 - Resources :
  - APIs at this level introduce separate URLs for different resources.
  - Each URL represents a resource, and different HTTP methods are used for different actions on that resource.
  - However, the use of HTTP methods is limited to basic CRUD operations (Create, Read, Update, Delete).
- ### Level 2 - HTTP Verbs :
  - APIs at this level follow the proper use of HTTP methods for CRUD operations.
  - They utilize methods like GET, POST, PUT, and DELETE in accordance with their intended purposes.
  - Hypermedia controls (links) are still not fully utilized.
- ### Level 3 - Hypermedia Controls :
  - APIs at this level fully embrace the concept of hypermedia.
  - They include hypermedia controls (links) within responses to guide client on how to interact with the API.
  - Clients use the links provided in responses to navigate the API's resources dynamically.

> The Richardson Maturity Model serves as a guide to encourage the adoption of RESTful principles, such as resource identification, proper use of HTTP methods, and hypermedia-driven interaction. Advancing through the levels signifies an API's growing alignment with the principles of the REST architectural style.