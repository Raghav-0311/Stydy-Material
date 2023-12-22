# A Comprehensive Guide to Building RESTful APIs using Node.JS

## Introduction 📌
In the dynamic landscape of web development, creating robust and efficient APIs is a key aspect of building modern applications. One technology stack that has gained immense popularity for developing APIs is Node.js, known for its lightweight and high-performance capabilities. In this blog, we embark on a journey to explore the step-by-step process of creating a RESTful API using Node.js.

Whether you're a seasoned developer looking to expand your skill set or a newcomer eager to understand the intricacies of API development, this guide aims to demystify the process, providing a hands-on approach to building a scalable and maintainable API with Node.js.

From setting up the initial project to deploying a fully functional API, we'll navigate through the essential steps, explore best practices, and highlight key considerations at each stage. By the end of this journey, you'll not only have a clear understanding of how Node.js and its popular framework, Express, come together to create APIs but also gain practical insights into database connectivity, error handling, and security implementations.

So, fasten your seatbelt as we delve into the world of Node.js, where the magic of RESTful API development unfolds, and the potential to empower your applications awaits. Let's embark on this adventure and transform your ideas into a well-architected and efficient API using the power of Node.js.

## API Setup 📌
- Create a new folder for your project, say "**API**".
- Open your api folder with any code editor, say "**VS Code**".
- Open a new terminal <kbd>control</kbd> + <kbd>`</kbd>.
- Initialize project ⬇
    ```
    npm init -y
    ```
- You must see a ``package.json`` file in your api folder.
- Open your ``package.json`` file and fill your project information. Also we are using ES6 so we need to add ``"type": "Module"`` in our package.json file. ⬇
    ```json
    {
        "name": "api", // name of your package, you can change if you want
        "version": "1.0.0", // current version of your project 
        "description": "", // add a description for your project
        "type": "module", // only if you are using ES6 modules
        "keywords": [], // add keywords related to your project
        "author": "Raghav Kashyap", // enter your name
        "license": "ISC" // project license
    }
    ```
- Create a new file in root of your project directory ``app.js``.
> ``app.js`` is your api launcher file. You can rename it to index.js or whatever you want.
- As we are developing our api so we need a dev dependency to continuously run our api development server. For that we are using ``nodemon`` ⬇
    ```
    npm i -D nodemon
    ```
- Add ``"main": "app.js"`` and ``"scripts": {}`` in your package.json to target your **API Launcher File**. ⬇
    ```json
    {
        "name": "api",
        "version": "1.0.0",
        "description": "...",
        "type": "module",
        "main": "app.js", // target api launcher
        "scripts": {
            "start": "node app.js", // for production
            "dev": "nodemon app.js", // for development
        },
        "keywords": [],
        "author": "Raghav Kashyap",
        "license": "ISC",
        "devDependencies": {
            "nodemon": "^3.0.2" // we installed it in our previous step
        }
    }
    ```
- You will also see a ``node_modules`` folder in your project, which basically holds all the code files for dependencies you are using in your project.
- Its important to version control your project. ⬇
    ```
    git init
    ```
- Add ``.gitignore`` file to avoid private files to be controlled by git. ⬇
    ```
    # Logs
    logs
    *.log
    npm-debug.log*
    yarn-debug.log*
    yarn-error.log*
    pnpm-debug.log*
    lerna-debug.log*

    node_modules
    dist
    dist-ssr
    *.local

    # Editor directories and files
    .vscode/*
    !.vscode/extensions.json
    .idea
    .DS_Store
    *.suo
    *.ntvs*
    *.njsproj
    *.sln
    *.sw?
    *.env
    ```
- **CONGRATULATIONS!** Your REST API project is all setup now ✅.

## Initialize API Server 📌
- For our API Server we are using ``Express`` ⬇
    ```
    npm i express
    ```
- Open your ``app.js`` file and add the following code steps. 👇🏻
    - Import ``express`` from express package in order to use it. ⬇
        ```js
        import express from "express";
        ```
    - Make an ``app`` instance of express. ⬇
        ```js
        const app = express();
        ```
    - Lets define a dynamic port for our server. ⬇
        ```js
        const PORT = process.env.PORT || 5000;
        ```
    - Now we have to define a test route, say "/". Also we want to display a custom message whenever someone visit ``http://localhost:5000``. ⬇
        ```js
        app.get('/', (req, res) => {
            return res.status(200).send('Hi, your API server is live...')
        });
        ```
    - Lets define a function to start our API server. ⬇
        ```js
        // Function Definition 
        const start = async () => {
            try {
                app.listen(PORT, () => {
                    console.log(`Server is live on ${PORT} ✅`);
                });
            } catch (error) {
                console.log(error);
            }
        }

        // Function Call
        start();
        ```
    - **(OPTIONAL)** Export app. ⬇
        ```js
        export default app;
        ```
- Final server code will look like ⬇
    ```js
    import express from "express";

    const app = express();

    const PORT = process.env.PORT || 5000;

    app.get('/', (req, res) => {
        return res.status(200).send('Hi, your API server is live...');
    });

    const start = async () => {
        try {
            app.listen(PORT, () => {
                console.log(`Server is live on ${PORT} ✅`);
            });
        } catch (error) {
            console.log(error);
        }
    }

    start();

    export default app;
    ```
- Run your development server ⬇
    ```
    npm run dev
    ```
    > Expecter terminal output -
        ```
        Server is live on 5001 ✅
        ```

    > Expected web output - visit - ``http://localhost:5000`` - **Hi, your API server is live...**

- **CONGRATULATIONS!** Your API Server is running now ✅.