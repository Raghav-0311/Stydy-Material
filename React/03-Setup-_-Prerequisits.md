# React Pre-requisits & Setup

## Pre-requisits for React -
Before diving into React development, it is beneficial to have a good understanding of the following -
- **HTML**
- **CSS**
- **JavaScript**
- **ES6 (ECMAScript 6)**
- **Node.js & npm**
- **CLI (Command Line Interface)**
- **Web Development Basics**

## React Set-up Requirements -
- **Web Browser** ( ``Google Chrome`` - Recommended )
- **CLI / Code Editor** ( ``VScode`` - Recommended )
- **Node.js & npm** ( ``LTS [Long Term Support] Version`` - Recommended )
  ```
  node --version 
  npm --version
  ```
- **Chrome Extension for React** ( ``React Dev Tools`` - Recommended )

## VS Code (Code Easy) Extensions -
- **Auto Rename Tag** - by ``Jun Han``
- **Code Spell Checker** - by ``Street Side Software``
- **DotENV** - by ``Mikestead``
- **JavaScript (ES6) code snippets** - by ``Charalampas Karypidis``
- **ES7 React / Redux / GraphQL / React-Native snippets** - by ``Rodrigovallades``
- **Highlight Matching Tag** - by ``Vincaslt``
- **Indent - Rainbow** - by ``Orderwat``
- **Live Server (Five Server)** - by ``Yannick`` OR ``Ritwick Dey``
- **Markdown Preview Enhanced** - by ``Yiyi Wang``
- **Prettier - Code Formatter** - by ``Prettier``
- **Quokka.js** - by ``Wallaby.js``
- **VScode-icons** - by ``VS Code Icons Team``
- **VScode-styled-components** - by ``Styled Components``

## React App Setup Toolings -
- **Create React App** ( ``Default`` )
  ```
  npx create-react-app app-name
  ```
- **Vite** ( ``New & Advanced`` )
  ```
  npm create vite@latest app-name
  ```
  > **npm (Node Package Manager)** :- To install a package globally.

  > **npx (Node Package Execute)** :- To install a package locally.

<br />

**React Documentation** - https://react.dev/learn

## React Project Setup -
- It will create a folder of **app-name** - where it will setup your React Project.
  ```
  npx create-react-app app-name
  ```
  - If you are working with any outdated version of React / npm / node, you probablly get an error while creating a react app. To fix this error use **@latest**.
  ```
  npx create-react-app@latest app-name
  ```
  - If you already created your project folder & want to setup your project inside it, use **. (dot)** instead of **app-name**.
  ```
  npx create-react-app .
  ```
- Change your current working directory to your **app-name folder**.
  ```
  cd app-name
  ```
- To run or execute your React Project.
  ```
  npm start
  ```

## React Project - Folder Structure -
- **node_modules** - contains all the packages which are used in your project.
- **public** - contains all the static assets or public files of your project.
  - **favicon.ico** ( ``Default`` )
  - **index.html** ( ``Default`` ) [**<------- Target**]
  - **logo192.png** ( ``Default`` )
  - **logo512.png** ( ``Default`` )
  - **manifest.json** ( ``Default`` )
  - **robots.txt** ( ``Default`` )
- **src** - contains all the source files of the project. This directory is also considered as **Brain of your project**.
  - **App.css** ( ``Default`` )
  - **App.js** ( ``Default`` ) [**<------- Global Component**]
  - **App.test.js** ( ``Default`` )
  - **index.js** ( ``Default`` ) [**<------- Entry Point for Target**]
  - **index.css** ( ``Default`` )
  - **logo.svg** ( ``Default`` )
  - **reportWebVitals.js** ( ``Default`` )
  - **setup.test.js** ( ``Default`` )
- **.gitignore** - contain names of all the files and folders which you do not wish to version control or push to github.
- **package-lock.json** - contains information about specific sub-packages of packages used in your project.
- **package.json** - contains information about project and packages or dependencies used in your project.
- **README.md** - This file will be your projects documentation markdown file.

## Remove React Project Boilerplate Code -
- Remove **src folder**.
- Create **src folder**.
  - Create **index.js** (This file will act as an entry point to target **\<div id: "root">\</div>** in index.html)
- Write your first component
  ```js
  function Greeting () {
    return <h2> Hello </h2>;
  }
  ```
  **OR**
  ```js
  function Greeting = () => {
    return <h2> Hello </h2>;
  }
  ```
  > Don't use class components as they were outdated.
  
  > Component name must starts with capital letter.

  > Every component must return JSX.

- We have written our first component & as we are wtiting the whole component code inside our index.js, we do not need to export our component.
- Now in order to display our component in browser we need to inject our component inside the **\<div id: "root">\</div>** in our index.html file present in public folder.
  ```js
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Greeting />);
  ```
- Now as we are using react components and ReactDOM, we need to import them to use their functionalities.
  ```js
  import React from 'react';
  import ReactDOM from 'react-dom/client';
  ```
  > NOTE : All the import statements must be included outside of function or component body and must be on the top.
- Our final code for index.js will look like -
  ```js
  import React from 'react';
  import ReactDOM from 'react-dom/client';

  function Greeting = () => {
    return <h2> Hello </h2>;
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(<Greeting />);
  ``` 