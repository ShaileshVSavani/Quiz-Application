const questions = [
  {
    id: 1,
    title: "HTML Quiz",
    description: "Test your HTML knowledge and structure skills!",
    questions: [
      {
        id: 1,
        question: "What does HTML stand for?",
        options: [
          "HyperText Markup Language",
          "HighText Machine Language",
          "HyperTool Markup Language",
        ],
        correct: "HyperText Markup Language",
      },
      {
        id: 2,
        question: "Which HTML tag is used to define an internal style sheet?",
        options: ["<style>", "<script>", "<link>"],
        correct: "<style>",
      },
      {
        id: 3,
        question: "Which tag is used to create a hyperlink in HTML?",
        options: ["<link>", "<a>", "<href>"],
        correct: "<a>",
      },
      {
        id: 4,
        question: "Which HTML tag is used to define an image?",
        options: ["<img>", "<image>", "<picture>"],
        correct: "<img>",
      },
      {
        id: 5,
        question: "What attribute is used to specify an image source in HTML?",
        options: ["src", "alt", "href"],
        correct: "src",
      },
      {
        id: 6,
        question: "Which tag is used for the largest heading in HTML?",
        options: ["<h1>", "<h6>", "<header>"],
        correct: "<h1>",
      },
      {
        id: 7,
        question: "What does the <meta> tag provide in HTML?",
        options: [
          "Metadata about the document",
          "A title for the page",
          "An image description",
        ],
        correct: "Metadata about the document",
      },
      {
        id: 8,
        question: "Which tag is used to create a table in HTML?",
        options: ["<table>", "<list>", "<rows>"],
        correct: "<table>",
      },
      {
        id: 9,
        question: "Which HTML tag is used to define a paragraph?",
        options: ["<p>", "<text>", "<para>"],
        correct: "<p>",
      },
      {
        id: 10,
        question: "Which attribute specifies the size of a font in HTML?",
        options: ["font-size", "size", "text-size"],
        correct: "size",
      },
      {
        id: 11,
        question: "How do you create a checkbox in HTML?",
        options: ['<input type="checkbox">', "<check>", '<input type="radio">'],
        correct: '<input type="checkbox">',
      },
      {
        id: 12,
        question: "Which tag is used for creating a dropdown list in HTML?",
        options: ["<select>", "<dropdown>", "<option>"],
        correct: "<select>",
      },
      {
        id: 13,
        question: "What does the <footer> tag define in HTML?",
        options: [
          "The bottom section of a webpage",
          "The top section of a webpage",
          "A navigation menu",
        ],
        correct: "The bottom section of a webpage",
      },
      {
        id: 14,
        question: "Which tag is used to define a form in HTML?",
        options: ["<form>", "<input>", "<button>"],
        correct: "<form>",
      },
      {
        id: 15,
        question: "How can you create an ordered list in HTML?",
        options: ["<ol>", "<ul>", "<list>"],
        correct: "<ol>",
      },
      {
        id: 16,
        question: "What is the purpose of the <iframe> tag?",
        options: [
          "To embed another document",
          "To create a link",
          "To add a footer",
        ],
        correct: "To embed another document",
      },
      {
        id: 17,
        question: "Which tag is used to create a comment in HTML?",
        options: ["<!-- -->", "<comment>", "<!-->"],
        correct: "<!-- -->",
      },
      {
        id: 18,
        question: "What is the purpose of the <nav> tag in HTML?",
        options: [
          "Defines a section for navigation links",
          "Defines a footer section",
          "Defines a main content area",
        ],
        correct: "Defines a section for navigation links",
      },
      {
        id: 19,
        question:
          "Which attribute in HTML allows you to open a link in a new tab?",
        options: ['target="_blank"', 'href="_blank"', 'link="_new"'],
        correct: 'target="_blank"',
      },
      {
        id: 20,
        question: "How do you add comments in HTML?",
        options: ["<!-- comment -->", "<comment>", "<-- comment -->"],
        correct: "<!-- comment -->",
      },
    ],
  },
  {
    id: 2,
    title: "CSS Quiz",
    description: "Evaluate your understanding of styling and layouts!",
    questions: [
      {
        id: 1,
        question:
          "Which property is used to change the background color in CSS?",
        options: ["color", "bg-color", "background-color"],
        correct: "background-color",
      },
      {
        id: 2,
        question: "What does CSS stand for?",
        options: [
          "Cascading Style Sheets",
          "Colorful Style Sheets",
          "Creative Style Sheets",
        ],
        correct: "Cascading Style Sheets",
      },
      {
        id: 3,
        question:
          "Which CSS property is used to set the space between lines of text?",
        options: ["letter-spacing", "line-height", "text-spacing"],
        correct: "line-height",
      },
      {
        id: 4,
        question:
          "What CSS property is used to control the font of an element?",
        options: ["font-family", "font-style", "text-font"],
        correct: "font-family",
      },
      {
        id: 5,
        question:
          "Which property is used to set the space between elements in CSS?",
        options: ["spacing", "margin", "padding"],
        correct: "margin",
      },
      {
        id: 6,
        question: "How do you make a font bold in CSS?",
        options: ["font-weight: bold;", "font-bold;", "bold: true;"],
        correct: "font-weight: bold;",
      },
      {
        id: 7,
        question: "Which CSS property controls the text color?",
        options: ["color", "text-color", "font-color"],
        correct: "color",
      },
      {
        id: 8,
        question:
          "Which value is used in CSS to make an element float to the right?",
        options: ["float: right;", "float: left;", "align: right;"],
        correct: "float: right;",
      },
      {
        id: 9,
        question: "What does the display: none; property do?",
        options: [
          "Hides an element",
          "Makes the element visible",
          "Centers the element",
        ],
        correct: "Hides an element",
      },
      {
        id: 10,
        question: "What is the default value of the display property in CSS?",
        options: ["block", "inline", "none"],
        correct: "block",
      },
      {
        id: 11,
        question: "Which CSS property is used to add shadow to an element?",
        options: ["box-shadow", "text-shadow", "shadow"],
        correct: "box-shadow",
      },
      {
        id: 12,
        question: "How do you center a block element horizontally in CSS?",
        options: ["margin: auto;", "text-align: center;", "center: true;"],
        correct: "margin: auto;",
      },
      {
        id: 13,
        question: "Which CSS property is used to specify the size of the text?",
        options: ["font-size", "text-size", "size"],
        correct: "font-size",
      },
      {
        id: 14,
        question: "How can you make text italic in CSS?",
        options: [
          "font-style: italic;",
          "text-style: italic;",
          "style: italic;",
        ],
        correct: "font-style: italic;",
      },
      {
        id: 15,
        question:
          "Which CSS property is used to change the font size of an element?",
        options: ["font-size", "font-style", "text-size"],
        correct: "font-size",
      },
      {
        id: 16,
        question: "Which property is used to change the width of a CSS box?",
        options: ["width", "box-width", "container-width"],
        correct: "width",
      },
      {
        id: 17,
        question:
          "Which property is used to set the height of an element in CSS?",
        options: ["height", "box-height", "element-height"],
        correct: "height",
      },
      {
        id: 18,
        question: "How do you add a background image in CSS?",
        options: [
          'background-image: url("image.jpg");',
          'background-url: "image.jpg";',
          'image-background: "image.jpg";',
        ],
        correct: 'background-image: url("image.jpg");',
      },
      {
        id: 19,
        question:
          "Which CSS property is used to make an element’s position relative to its normal position?",
        options: [
          "position: absolute;",
          "position: relative;",
          "position: fixed;",
        ],
        correct: "position: relative;",
      },
      {
        id: 20,
        question:
          "Which of these values is used for the border-radius property?",
        options: ["circle", "50%", "round"],
        correct: "50%",
      },
    ],
  },
  {
    id: 3,
    title: "JavaScript Basics Quiz",
    description: "How well do you know JavaScript fundamentals?",
    questions: [
      {
        id: 1,
        question:
          "Which of the following is a primitive data type in JavaScript?",
        options: ["Object", "Array", "String"],
        correct: "String",
      },
      {
        id: 2,
        question: "What is the correct syntax for a JavaScript function?",
        options: [
          "function myFunction()",
          "function:myFunction()",
          "function = myFunction()",
        ],
        correct: "function myFunction()",
      },
      {
        id: 3,
        question:
          "Which method is used to write text into the console in JavaScript?",
        options: ["console.write()", "console.log()", "print.console()"],
        correct: "console.log()",
      },
      {
        id: 4,
        question: "How can you declare a variable in JavaScript?",
        options: [
          "var myVariable;",
          "declare myVariable;",
          "variable myVariable;",
        ],
        correct: "var myVariable;",
      },
      {
        id: 5,
        question:
          "Which operator is used to assign a value to a variable in JavaScript?",
        options: ["=", ":", "=="],
        correct: "=",
      },
      {
        id: 6,
        question: 'What is the result of 2 + "2" in JavaScript?',
        options: ["4", "22", "Error"],
        correct: "22",
      },
      {
        id: 7,
        question: "Which statement is used to stop a loop in JavaScript?",
        options: ["exit", "stop", "break"],
        correct: "break",
      },
      {
        id: 8,
        question: 'What does the "===" operator do in JavaScript?',
        options: [
          "Checks for equality with type conversion",
          "Checks for equality without type conversion",
          "Checks for inequality",
        ],
        correct: "Checks for equality without type conversion",
      },
      {
        id: 9,
        question:
          "Which method is used to convert a string to lowercase in JavaScript?",
        options: ["toLowerCase()", "lowercase()", "stringToLower()"],
        correct: "toLowerCase()",
      },
      {
        id: 10,
        question:
          "Which keyword is used to create a constant variable in JavaScript?",
        options: ["var", "let", "const"],
        correct: "const",
      },
      {
        id: 11,
        question: "How do you check if a number is an integer in JavaScript?",
        options: ["Number.isInteger()", "isInt()", "int()"],
        correct: "Number.isInteger()",
      },
      {
        id: 12,
        question:
          "Which method can be used to remove the last element from an array in JavaScript?",
        options: ["pop()", "remove()", "shift()"],
        correct: "pop()",
      },
      {
        id: 13,
        question: "Which of the following is a JavaScript framework?",
        options: ["React", "Python", "CSS"],
        correct: "React",
      },
      {
        id: 14,
        question:
          "Which method is used to add an element to the end of an array in JavaScript?",
        options: ["push()", "add()", "insert()"],
        correct: "push()",
      },
      {
        id: 15,
        question: "What is the purpose of a JavaScript callback function?",
        options: [
          "It is a function that is executed after the current task completes",
          "It is used to break loops",
          "It is used to call functions",
        ],
        correct:
          "It is a function that is executed after the current task completes",
      },
      {
        id: 16,
        question: "Which of the following is NOT a valid JavaScript data type?",
        options: ["undefined", "string", "integer"],
        correct: "integer",
      },
      {
        id: 17,
        question: "Which built-in JavaScript object is used to handle dates?",
        options: ["Date", "DateTime", "Time"],
        correct: "Date",
      },
      {
        id: 18,
        question: "How do you define a JavaScript object?",
        options: ["var obj = {};", "object obj = {};", "obj = () {};"],
        correct: "var obj = {};",
      },
      {
        id: 19,
        question:
          'What will the following code return: console.log(typeof "hello");',
        options: ["string", "object", "undefined"],
        correct: "string",
      },
      {
        id: 20,
        question: "Which statement will not cause an error in JavaScript?",
        options: ["var x = ;", "var x;", "var x = 5"],
        correct: "var x = 5",
      },
    ],
  },
  {
    id: 4,
    title: "JavaScript Advanced Quiz",
    description: "Test your advanced JavaScript skills!",
    questions: [
      {
        id: 1,
        question:
          "What is the output of the following code: console.log(0.1 + 0.2 === 0.3)?",
        options: ["true", "false", "NaN"],
        correct: "false",
      },
      {
        id: 2,
        question: "What is a closure in JavaScript?",
        options: [
          "A function within a function",
          "A variable within a function",
          "A global variable",
        ],
        correct: "A function within a function",
      },
      {
        id: 3,
        question:
          "What will be logged by the following code: console.log([1, 2] == [1, 2])?",
        options: ["true", "false", "undefined"],
        correct: "false",
      },
      {
        id: 4,
        question: "What is the purpose of the bind() method in JavaScript?",
        options: [
          "It sets the value of this",
          "It creates a new function with a specified context",
          "It calls a function immediately",
        ],
        correct: "It creates a new function with a specified context",
      },
      {
        id: 5,
        question: "What is the difference between == and === in JavaScript?",
        options: [
          "No difference",
          "== compares values, === compares values and types",
          "=== compares values, == compares values and types",
        ],
        correct: "== compares values, === compares values and types",
      },
      {
        id: 6,
        question: "What is event delegation in JavaScript?",
        options: [
          "Attaching events to a parent element",
          "Using multiple event listeners for each element",
          "Listening for events on global objects",
        ],
        correct: "Attaching events to a parent element",
      },
      {
        id: 7,
        question: "What does the spread operator (...) do in JavaScript?",
        options: [
          "It combines two arrays",
          "It spreads the elements of an array",
          "It creates a new array",
        ],
        correct: "It spreads the elements of an array",
      },
      {
        id: 8,
        question:
          "Which of the following is a way to define a function in JavaScript?",
        options: [
          "function name() {}",
          "var name() {}",
          "let name = function() {}",
        ],
        correct: "function name() {}",
      },
      {
        id: 9,
        question:
          "What will be the output of the following code: console.log(typeof null)?",
        options: ["object", "null", "undefined"],
        correct: "object",
      },
      {
        id: 10,
        question:
          "What is the difference between “var” and “let” in JavaScript?",
        options: [
          "No difference",
          "let is block-scoped, var is function-scoped",
          "var is block-scoped, let is function-scoped",
        ],
        correct: "let is block-scoped, var is function-scoped",
      },
      {
        id: 11,
        question:
          "Which method is used to combine multiple arrays in JavaScript?",
        options: ["concat()", "merge()", "combine()"],
        correct: "concat()",
      },
      {
        id: 12,
        question: "What is a promise in JavaScript?",
        options: [
          "A function that returns an array",
          "An object representing the eventual completion or failure of an asynchronous operation",
          "An object for synchronous operations",
        ],
        correct:
          "An object representing the eventual completion or failure of an asynchronous operation",
      },
      {
        id: 13,
        question:
          "Which method is used to add a new key-value pair to an object in JavaScript?",
        options: ["add()", "push()", "Object.assign()"],
        correct: "Object.assign()",
      },
      {
        id: 14,
        question: "What does the setTimeout() method do in JavaScript?",
        options: [
          "Executes code after a specified delay",
          "Executes code immediately",
          "Executes code at a certain interval",
        ],
        correct: "Executes code after a specified delay",
      },
      {
        id: 15,
        question: "How do you check if a number is NaN in JavaScript?",
        options: ["isNaN()", "Number.isNaN()", "NaN.is()"],
        correct: "Number.isNaN()",
      },
      {
        id: 16,
        question: "What is destructuring in JavaScript?",
        options: [
          "Extracting values from objects or arrays into variables",
          "Combining arrays into one",
          "Changing the structure of an object",
        ],
        correct: "Extracting values from objects or arrays into variables",
      },
      {
        id: 17,
        question: "Which of the following are JavaScript frameworks?",
        options: ["React", "Vue.js", "jQuery"],
        correct: "React",
      },
      {
        id: 18,
        question: "What does the “this” keyword refer to in JavaScript?",
        options: [
          "The current function",
          "The global object",
          "The object to which the function is bound",
        ],
        correct: "The object to which the function is bound",
      },
      {
        id: 19,
        question: "What is the result of 1 + “1” in JavaScript?",
        options: ["1", "11", "Error"],
        correct: "11",
      },
      {
        id: 20,
        question: "What does the Object.freeze() method do in JavaScript?",
        options: [
          "Makes the object immutable",
          "Clones the object",
          "Deletes the object",
        ],
        correct: "Makes the object immutable",
      },
    ],
  },
  {
    id: 5,
    title: "React Quiz",
    description: "Evaluate your knowledge of React components and hooks!",
    questions: [
      {
        id: 1,
        question: "What is JSX in React?",
        options: [
          "JavaScript syntax extension",
          "JavaScript Object Syntax",
          "JavaScript Syntax Execution",
        ],
        correct: "JavaScript syntax extension",
      },
      {
        id: 2,
        question: "Which of the following is used to manage state in React?",
        options: ["useState", "useReducer", "both"],
        correct: "both",
      },
      {
        id: 3,
        question: "What does the useEffect hook do in React?",
        options: ["Fetches data", "Sets up side effects", "Returns a value"],
        correct: "Sets up side effects",
      },
      {
        id: 4,
        question:
          "Which method is used to render a React component to the DOM?",
        options: [
          "React.render()",
          "ReactDOM.render()",
          "React.createElement()",
        ],
        correct: "ReactDOM.render()",
      },
      {
        id: 5,
        question: "What is the purpose of the React Router?",
        options: [
          "To manage the routing in a React app",
          "To create components",
          "To handle states",
        ],
        correct: "To manage the routing in a React app",
      },
      {
        id: 6,
        question: "What is a functional component in React?",
        options: [
          "A function that returns JSX",
          "A class-based component",
          "A function that doesn’t render anything",
        ],
        correct: "A function that returns JSX",
      },
      {
        id: 7,
        question: "Which hook is used to perform cleanup in React?",
        options: ["useEffect", "useCleanup", "useState"],
        correct: "useEffect",
      },
      {
        id: 8,
        question: "What is the purpose of props in React?",
        options: [
          "To pass data between components",
          "To manage component state",
          "To define the structure of the component",
        ],
        correct: "To pass data between components",
      },
      {
        id: 9,
        question: "What is a key used for in a React list?",
        options: [
          "To identify elements uniquely",
          "To bind data to components",
          "To handle component state",
        ],
        correct: "To identify elements uniquely",
      },
      {
        id: 10,
        question:
          "How do you pass data from a child component to a parent in React?",
        options: ["Through props", "Through state", "Through context"],
        correct: "Through props",
      },
      {
        id: 11,
        question: "What does the useContext hook do in React?",
        options: [
          "Manages state globally",
          "Sets up context for components",
          "Fetches data",
        ],
        correct: "Manages state globally",
      },
      {
        id: 12,
        question: "What is the virtual DOM in React?",
        options: [
          "A lightweight representation of the actual DOM",
          "The real DOM",
          "A JavaScript object",
        ],
        correct: "A lightweight representation of the actual DOM",
      },
      {
        id: 13,
        question:
          "What is the purpose of the componentDidMount lifecycle method?",
        options: [
          "To run code after the component mounts",
          "To update component state",
          "To handle events",
        ],
        correct: "To run code after the component mounts",
      },
      {
        id: 14,
        question: "What does the useReducer hook do in React?",
        options: [
          "Manages complex state logic",
          "Updates component state",
          "Performs side effects",
        ],
        correct: "Manages complex state logic",
      },
      {
        id: 15,
        question:
          "What is the difference between controlled and uncontrolled components in React?",
        options: [
          "Controlled components are controlled by React, uncontrolled are not",
          "Controlled components use hooks, uncontrolled use states",
          "There is no difference",
        ],
        correct:
          "Controlled components are controlled by React, uncontrolled are not",
      },
      {
        id: 16,
        question: "What is the purpose of React.Fragment?",
        options: [
          "To wrap multiple elements without adding extra nodes",
          "To pass data between components",
          "To manage component lifecycle",
        ],
        correct: "To wrap multiple elements without adding extra nodes",
      },
      {
        id: 17,
        question: "What is the syntax for creating a component in React?",
        options: [
          "function Component() {}",
          "function() Component {}",
          "React.createComponent()",
        ],
        correct: "function Component() {}",
      },
      {
        id: 18,
        question: "Which method is used to update the state in React?",
        options: ["setState()", "updateState()", "useState()"],
        correct: "setState()",
      },
      {
        id: 19,
        question:
          "What is the purpose of the shouldComponentUpdate lifecycle method?",
        options: [
          "To determine if a component should re-render",
          "To handle state",
          "To initialize component state",
        ],
        correct: "To determine if a component should re-render",
      },
      {
        id: 20,
        question: "What is the purpose of the useRef hook in React?",
        options: [
          "To reference DOM elements",
          "To manage state",
          "To perform cleanup",
        ],
        correct: "To reference DOM elements",
      },
    ],
  },
  {
    id: 6,
    title: "Node.js Quiz",
    description:
      "Test your understanding of server-side JavaScript with Node.js!",
    questions: [
      {
        id: 1,
        question: "What is Node.js?",
        options: [
          "A JavaScript library",
          "A JavaScript runtime built on Chrome’s V8 JavaScript engine",
          "A JavaScript framework",
        ],
        correct: "A JavaScript runtime built on Chrome’s V8 JavaScript engine",
      },
      {
        id: 2,
        question:
          "Which module is used to create a basic web server in Node.js?",
        options: ["http", "express", "web"],
        correct: "http",
      },
      {
        id: 3,
        question: "What is npm in Node.js?",
        options: [
          "Node Package Manager",
          "New Programming Module",
          "Network Package Manager",
        ],
        correct: "Node Package Manager",
      },
      {
        id: 4,
        question: "Which function is used to read a file in Node.js?",
        options: ["readFile()", "fs.read()", "fs.readFile()"],
        correct: "fs.readFile()",
      },
      {
        id: 5,
        question: "What is Express.js in Node.js?",
        options: [
          "A framework for building web apps",
          "A template engine",
          "A package for handling files",
        ],
        correct: "A framework for building web apps",
      },
      {
        id: 6,
        question: "What is middleware in Node.js?",
        options: [
          "Functions that modify the request and response objects",
          "Functions that handle errors",
          "Functions that return data",
        ],
        correct: "Functions that modify the request and response objects",
      },
      {
        id: 7,
        question: "What is the purpose of the fs module in Node.js?",
        options: [
          "For handling file system operations",
          "For database management",
          "For networking",
        ],
        correct: "For handling file system operations",
      },
      {
        id: 8,
        question: "What command is used to install a package using npm?",
        options: [
          "npm install <package-name>",
          "npm add <package-name>",
          "npm fetch <package-name>",
        ],
        correct: "npm install <package-name>",
      },
      {
        id: 9,
        question:
          "Which of the following is an asynchronous operation in Node.js?",
        options: ["File reading", "Database query", "Both"],
        correct: "Both",
      },
      {
        id: 10,
        question: "What is the default port for Express.js?",
        options: ["3000", "8080", "5000"],
        correct: "3000",
      },
      {
        id: 11,
        question: "Which method is used to send a response in Node.js?",
        options: ["send()", "response()", "res.send()"],
        correct: "res.send()",
      },
      {
        id: 12,
        question: "What is the purpose of the require() function in Node.js?",
        options: [
          "To load modules",
          "To read files",
          "To execute JavaScript files",
        ],
        correct: "To load modules",
      },
      {
        id: 13,
        question: "Which module is used to handle routing in Express?",
        options: ["router", "express.Router()", "path"],
        correct: "express.Router()",
      },
      {
        id: 14,
        question: "What is the use of the process.env object in Node.js?",
        options: [
          "To manage environment variables",
          "To manage process states",
          "To manage event loops",
        ],
        correct: "To manage environment variables",
      },
      {
        id: 15,
        question: "What does the next() function do in Express.js middleware?",
        options: [
          "It passes control to the next middleware function",
          "It terminates the request",
          "It logs the request",
        ],
        correct: "It passes control to the next middleware function",
      },
      {
        id: 16,
        question:
          "What is the purpose of the app.listen() method in Express.js?",
        options: [
          "To listen for incoming requests",
          "To send a response",
          "To close the server",
        ],
        correct: "To listen for incoming requests",
      },
      {
        id: 17,
        question: "How can you handle errors in Node.js?",
        options: [
          "By using try-catch blocks",
          "By using the error handling middleware",
          "Both",
        ],
        correct: "Both",
      },
      {
        id: 18,
        question: "What is a callback function in Node.js?",
        options: [
          "A function that is passed into another function",
          "A function that is executed immediately",
          "A function that is used for data processing",
        ],
        correct: "A function that is passed into another function",
      },
      {
        id: 19,
        question: "What is the purpose of the buffer class in Node.js?",
        options: [
          "To handle binary data",
          "To manage HTTP requests",
          "To manage files",
        ],
        correct: "To handle binary data",
      },
      {
        id: 20,
        question: "What does the res.status() method do in Express.js?",
        options: [
          "Sets the HTTP status code for the response",
          "Sets the response body",
          "Sets the response headers",
        ],
        correct: "Sets the HTTP status code for the response",
      },
    ],
  },
  {
    id: 7,
    title: "SQL Quiz",
    description: "How well do you know SQL queries and databases?",
    questions: [
      {
        id: 1,
        question: "Which SQL command is used to retrieve data from a database?",
        options: ["SELECT", "GET", "FETCH"],
        correct: "SELECT",
      },
      {
        id: 2,
        question: "Which SQL statement is used to update data in a table?",
        options: ["UPDATE", "SET", "INSERT"],
        correct: "UPDATE",
      },
      {
        id: 3,
        question: "What does the WHERE clause do in an SQL query?",
        options: [
          "Filters records based on a condition",
          "Deletes records",
          "Sorts records",
        ],
        correct: "Filters records based on a condition",
      },
      {
        id: 4,
        question: "What is the default sorting order in SQL?",
        options: ["ASCENDING", "DESCENDING", "NONE"],
        correct: "ASCENDING",
      },
      {
        id: 5,
        question: "Which of the following is not a valid SQL data type?",
        options: ["VARCHAR", "TEXT", "STRING"],
        correct: "STRING",
      },
      {
        id: 6,
        question: "What does the SQL JOIN clause do?",
        options: [
          "Combines rows from two or more tables",
          "Returns data in sorted order",
          "Deletes records from multiple tables",
        ],
        correct: "Combines rows from two or more tables",
      },
      {
        id: 7,
        question: "What is the purpose of the GROUP BY clause in SQL?",
        options: [
          "Groups rows that have the same values in specified columns",
          "Filters rows based on conditions",
          "Joins multiple tables",
        ],
        correct: "Groups rows that have the same values in specified columns",
      },
      {
        id: 8,
        question:
          "Which SQL command is used to remove a table from a database?",
        options: ["DROP TABLE", "DELETE TABLE", "REMOVE TABLE"],
        correct: "DROP TABLE",
      },
      {
        id: 9,
        question: "What does the COUNT() function do in SQL?",
        options: [
          "Counts the number of rows",
          "Calculates the sum of values",
          "Returns the maximum value",
        ],
        correct: "Counts the number of rows",
      },
      {
        id: 10,
        question:
          "Which operator is used to search for a specified pattern in a column?",
        options: ["LIKE", "MATCH", "SEARCH"],
        correct: "LIKE",
      },
      {
        id: 11,
        question: "What is the purpose of the DISTINCT keyword in SQL?",
        options: [
          "Removes duplicates from the result set",
          "Sorts results in ascending order",
          "Joins two tables",
        ],
        correct: "Removes duplicates from the result set",
      },
      {
        id: 12,
        question: "What is the purpose of the LIMIT clause in SQL?",
        options: [
          "Restricts the number of records returned",
          "Joins multiple tables",
          "Deletes data from a table",
        ],
        correct: "Restricts the number of records returned",
      },
      {
        id: 13,
        question: "What is the difference between INNER JOIN and LEFT JOIN?",
        options: [
          "INNER JOIN returns matching rows, LEFT JOIN returns all rows from the left table",
          "INNER JOIN returns all rows, LEFT JOIN returns only matching rows",
          "No difference",
        ],
        correct:
          "INNER JOIN returns matching rows, LEFT JOIN returns all rows from the left table",
      },
      {
        id: 14,
        question: "What does the SQL keyword AS do?",
        options: [
          "Renames a column or table",
          "Filters results",
          "Joins two tables",
        ],
        correct: "Renames a column or table",
      },
      {
        id: 15,
        question:
          "Which SQL statement is used to delete a record from a table?",
        options: ["DELETE", "REMOVE", "DROP"],
        correct: "DELETE",
      },
      {
        id: 16,
        question:
          "What is the difference between the WHERE and HAVING clauses in SQL?",
        options: [
          "WHERE filters rows before grouping, HAVING filters rows after grouping",
          "WHERE filters rows after grouping, HAVING filters rows before grouping",
          "No difference",
        ],
        correct:
          "WHERE filters rows before grouping, HAVING filters rows after grouping",
      },
      {
        id: 17,
        question: "What does the SQL function CONCAT() do?",
        options: [
          "Combines two or more strings",
          "Calculates the average",
          "Counts the number of rows",
        ],
        correct: "Combines two or more strings",
      },
      {
        id: 18,
        question: "Which of the following is a valid SQL aggregate function?",
        options: ["SUM()", "MAX()", "COUNT()", "All of the above"],
        correct: "All of the above",
      },
      {
        id: 19,
        question: "What is the purpose of the SQL PRIMARY KEY constraint?",
        options: [
          "Ensures uniqueness of a column value",
          "Sets the data type for a column",
          "Restricts NULL values in a column",
        ],
        correct: "Ensures uniqueness of a column value",
      },
      {
        id: 20,
        question:
          "Which command is used to add a new record into a table in SQL?",
        options: ["INSERT INTO", "ADD INTO", "CREATE INTO"],
        correct: "INSERT INTO",
      },
    ],
  },
  {
    id: 8,
    title: "Git & GitHub Quiz",
    description: "Test your knowledge of version control and Git commands!",
    questions: [
      {
        id: 1,
        question: "What command is used to initialize a new Git repository?",
        options: ["git start", "git init", "git create"],
        correct: "git init",
      },
      {
        id: 2,
        question:
          "Which command is used to check the status of the files in a Git repository?",
        options: ["git status", "git check", "git file"],
        correct: "git status",
      },
      {
        id: 3,
        question: "What does the command git clone do?",
        options: [
          "Creates a new branch",
          "Downloads a repository from GitHub",
          "Commits changes",
        ],
        correct: "Downloads a repository from GitHub",
      },
      {
        id: 4,
        question: "What is the purpose of the git pull command?",
        options: [
          "Fetches changes from the remote repository and merges them",
          "Pushes changes to the remote repository",
          "Checks for file conflicts",
        ],
        correct: "Fetches changes from the remote repository and merges them",
      },
      {
        id: 5,
        question: "Which Git command is used to stage files for a commit?",
        options: ["git add", "git stage", "git commit"],
        correct: "git add",
      },
      {
        id: 6,
        question: "What is the purpose of the git commit command?",
        options: [
          "Commits changes to the local repository",
          "Pushes changes to the remote repository",
          "Creates a new branch",
        ],
        correct: "Commits changes to the local repository",
      },
      {
        id: 7,
        question: "What is the difference between git pull and git fetch?",
        options: [
          "git pull fetches and merges changes, git fetch only fetches",
          "git pull only fetches, git fetch merges changes",
          "No difference",
        ],
        correct: "git pull fetches and merges changes, git fetch only fetches",
      },
      {
        id: 8,
        question: "What does the git push command do?",
        options: [
          "Sends changes to a remote repository",
          "Fetches changes from a remote repository",
          "Commits changes to the local repository",
        ],
        correct: "Sends changes to a remote repository",
      },
      {
        id: 9,
        question: "What does the git branch command do?",
        options: [
          "Creates or lists branches",
          "Deletes a branch",
          "Merges branches",
        ],
        correct: "Creates or lists branches",
      },
      {
        id: 10,
        question: "What is the purpose of the git merge command?",
        options: [
          "Combines two branches",
          "Creates a new branch",
          "Commits changes",
        ],
        correct: "Combines two branches",
      },
      {
        id: 11,
        question: "What is the purpose of the .gitignore file?",
        options: [
          "Specifies which files to ignore in version control",
          "Creates new commits",
          "Lists all the branches",
        ],
        correct: "Specifies which files to ignore in version control",
      },
      {
        id: 12,
        question: "What is the purpose of GitHub?",
        options: [
          "To host remote Git repositories",
          "To create new branches",
          "To track file changes",
        ],
        correct: "To host remote Git repositories",
      },
      {
        id: 13,
        question: "Which command is used to create a new branch in Git?",
        options: [
          "git branch <branch-name>",
          "git create <branch-name>",
          "git new branch <branch-name>",
        ],
        correct: "git branch <branch-name>",
      },
      {
        id: 14,
        question: "What is a pull request in GitHub?",
        options: [
          "A request to merge changes from one branch to another",
          "A request to commit changes",
          "A request to delete a repository",
        ],
        correct: "A request to merge changes from one branch to another",
      },
      {
        id: 15,
        question: "What command is used to view the commit history in Git?",
        options: ["git log", "git history", "git commits"],
        correct: "git log",
      },
      {
        id: 16,
        question: "What does the git reset command do?",
        options: [
          "Resets the repository to a previous commit",
          "Commits changes",
          "Creates a new branch",
        ],
        correct: "Resets the repository to a previous commit",
      },
      {
        id: 17,
        question: "What is a fork in GitHub?",
        options: [
          "A copy of a repository",
          "A new branch in a repository",
          "A commit",
        ],
        correct: "A copy of a repository",
      },
      {
        id: 18,
        question: "What is the command to discard changes in Git?",
        options: ["git reset", "git discard", "git checkout -- <file>"],
        correct: "git checkout -- <file>",
      },
      {
        id: 19,
        question: "What is the purpose of the git diff command?",
        options: [
          "Shows changes between commits",
          "Shows the current status of files",
          "Creates new commits",
        ],
        correct: "Shows changes between commits",
      },
      {
        id: 20,
        question: "What does the git stash command do?",
        options: [
          "Temporarily stores changes",
          "Resets the repository",
          "Discards changes",
        ],
        correct: "Temporarily stores changes",
      },
    ],
  },
  {
    id: 9,
    title: "Web Performance Optimization Quiz",
    description: "How much do you know about optimizing web apps for speed?",
    questions: [
      {
        id: 1,
        question: "What is lazy loading in web performance?",
        options: [
          "Loading images or content only when needed",
          "Loading all content on page load",
          "Preloading all resources",
        ],
        correct: "Loading images or content only when needed",
      },
      {
        id: 2,
        question: "What is a common way to optimize JavaScript performance?",
        options: [
          "Minifying the code",
          "Using only external scripts",
          "Using inline scripts",
        ],
        correct: "Minifying the code",
      },
      {
        id: 3,
        question: "What is the purpose of HTTP caching?",
        options: [
          "To reduce server load and improve load times",
          "To store data permanently on the client side",
          "To make websites run offline",
        ],
        correct: "To reduce server load and improve load times",
      },
      {
        id: 4,
        question: "What is a CDN in terms of performance?",
        options: [
          "A Content Delivery Network that serves static assets from multiple locations",
          "A new type of browser",
          "A server-side caching tool",
        ],
        correct:
          "A Content Delivery Network that serves static assets from multiple locations",
      },
      {
        id: 5,
        question:
          "What is the main advantage of using asynchronous loading for JavaScript files?",
        options: [
          "It allows the page to load without waiting for JavaScript",
          "It improves server performance",
          "It prevents errors",
        ],
        correct: "It allows the page to load without waiting for JavaScript",
      },
      {
        id: 6,
        question: "What is the purpose of Gzip compression?",
        options: [
          "To reduce the size of data transferred over the network",
          "To increase the file size for faster download",
          "To compress images",
        ],
        correct: "To reduce the size of data transferred over the network",
      },
      {
        id: 7,
        question: "Which of the following reduces render-blocking resources?",
        options: [
          "Async and defer attributes for scripts",
          "Inline styles",
          "Caching",
        ],
        correct: "Async and defer attributes for scripts",
      },
      {
        id: 8,
        question: 'What does the term "Critical CSS" refer to?',
        options: [
          "CSS required for the initial page render",
          "CSS that is not needed for the page to load",
          "CSS files used only for animations",
        ],
        correct: "CSS required for the initial page render",
      },
      {
        id: 9,
        question: "What is the benefit of reducing HTTP requests?",
        options: [
          "Improved loading time by minimizing network requests",
          "More content being loaded",
          "Improved security",
        ],
        correct: "Improved loading time by minimizing network requests",
      },
      {
        id: 10,
        question: "What is the purpose of a performance budget?",
        options: [
          "To define limits for certain performance metrics",
          "To track the number of requests",
          "To store data about website visitors",
        ],
        correct: "To define limits for certain performance metrics",
      },
      {
        id: 11,
        question: "What is the use of image optimization?",
        options: [
          "Reducing image size without compromising quality",
          "Changing the image format",
          "Loading images with a higher resolution",
        ],
        correct: "Reducing image size without compromising quality",
      },
      {
        id: 12,
        question: "How can you improve font loading performance?",
        options: [
          "Use font-display: swap",
          "Use only one font family",
          "Preload all fonts",
        ],
        correct: "Use font-display: swap",
      },
      {
        id: 13,
        question: "What is server-side rendering (SSR)?",
        options: [
          "Rendering content on the server instead of the client",
          "Rendering only static content",
          "Loading content progressively",
        ],
        correct: "Rendering content on the server instead of the client",
      },
      {
        id: 14,
        question: "What is critical path in web performance?",
        options: [
          "The sequence of resources that must be loaded for the page to be rendered",
          "The resources used for page styling",
          "The server response time",
        ],
        correct:
          "The sequence of resources that must be loaded for the page to be rendered",
      },
      {
        id: 15,
        question:
          "What is the purpose of performance testing tools like Lighthouse?",
        options: [
          "To analyze and improve a website’s performance",
          "To test user interactions",
          "To create content",
        ],
        correct: "To analyze and improve a website’s performance",
      },
      {
        id: 16,
        question: 'What does "tree shaking" refer to?',
        options: [
          "Removing unused code from JavaScript files",
          "Preloading code to improve load times",
          "Organizing code in a tree structure",
        ],
        correct: "Removing unused code from JavaScript files",
      },
      {
        id: 17,
        question: "How can you optimize the loading time of CSS files?",
        options: [
          "Use inline critical CSS",
          "Use external CSS files only",
          "Avoid using media queries",
        ],
        correct: "Use inline critical CSS",
      },
      {
        id: 18,
        question:
          'What does the term "preloading" refer to in web optimization?',
        options: [
          "Fetching resources before they are required",
          "Compressing files before sending them",
          "Loading images on page scroll",
        ],
        correct: "Fetching resources before they are required",
      },
      {
        id: 19,
        question: "What does the browser cache do?",
        options: [
          "Stores resources for reuse to improve load time",
          "Deletes all content",
          "Reduces the number of HTTP requests",
        ],
        correct: "Stores resources for reuse to improve load time",
      },
      {
        id: 20,
        question:
          "What is the impact of using large images on web performance?",
        options: [
          "Slows down page loading time",
          "Improves page load time",
          "Has no effect",
        ],
        correct: "Slows down page loading time",
      },
    ],
  },
  {
    id: 10,
    title: "Web Accessibility Quiz",
    description:
      "Evaluate your understanding of web accessibility best practices!",
    questions: [
      {
        id: 1,
        question: "What does WCAG stand for?",
        options: [
          "Web Content Accessibility Guidelines",
          "Web Compliance and Accessibility Guidelines",
          "Web Communication and Accessibility Guidelines",
        ],
        correct: "Web Content Accessibility Guidelines",
      },
      {
        id: 2,
        question: "Which of the following is a principle of WCAG?",
        options: ["Perceivable", "Touchable", "Clickability"],
        correct: "Perceivable",
      },
      {
        id: 3,
        question: "What is alt text used for in web accessibility?",
        options: [
          "Describes images for users with visual impairments",
          "Improves SEO",
          "Formats images",
        ],
        correct: "Describes images for users with visual impairments",
      },
      {
        id: 4,
        question:
          "Which HTML element is used to provide a description for an image?",
        options: ["alt", "desc", "title"],
        correct: "alt",
      },
      {
        id: 5,
        question: "What does ARIA stand for?",
        options: [
          "Accessible Rich Internet Applications",
          "Accessible Resources for Internet Applications",
          "Accessibility Rating for Internet Applications",
        ],
        correct: "Accessible Rich Internet Applications",
      },
      {
        id: 6,
        question: "What is the purpose of using semantic HTML elements?",
        options: [
          "To improve accessibility for assistive technologies",
          "To enhance page aesthetics",
          "To reduce page loading time",
        ],
        correct: "To improve accessibility for assistive technologies",
      },
      {
        id: 7,
        question: "What is the purpose of the role attribute in ARIA?",
        options: [
          "Defines the purpose of an element",
          "Provides a description for images",
          "Changes the layout of the page",
        ],
        correct: "Defines the purpose of an element",
      },
      {
        id: 8,
        question:
          "Which of the following is an example of a semantic HTML element?",
        options: ["<header>", "<div>", "<span>"],
        correct: "<header>",
      },
      {
        id: 9,
        question: "What is keyboard navigation in web accessibility?",
        options: [
          "Allowing users to navigate the website using only the keyboard",
          "Allowing users to navigate using a mouse",
          "Optimizing the website for mobile devices",
        ],
        correct:
          "Allowing users to navigate the website using only the keyboard",
      },
      {
        id: 10,
        question: "What is a screen reader?",
        options: [
          "Software that reads the text on the screen aloud for visually impaired users",
          "A tool for improving page load speed",
          "A tool for organizing HTML elements",
        ],
        correct:
          "Software that reads the text on the screen aloud for visually impaired users",
      },
      {
        id: 11,
        question: "What is color contrast in terms of web accessibility?",
        options: [
          "The difference in color between text and its background",
          "The brightness of the background",
          "The intensity of the text color",
        ],
        correct: "The difference in color between text and its background",
      },
      {
        id: 12,
        question: "Why is it important to provide captions for video content?",
        options: [
          "To make content accessible for users with hearing impairments",
          "To improve video engagement",
          "To make the video easier to load",
        ],
        correct:
          "To make content accessible for users with hearing impairments",
      },
      {
        id: 13,
        question:
          "Which of the following best practices improves web accessibility for users with cognitive disabilities?",
        options: [
          "Clear and simple language",
          "High-quality images",
          "Animated transitions",
        ],
        correct: "Clear and simple language",
      },
      {
        id: 14,
        question:
          "What does the term “focus state” refer to in web accessibility?",
        options: [
          "Indicates which element is currently selected or active",
          "Indicates the background color of the webpage",
          "Indicates the font size of text",
        ],
        correct: "Indicates which element is currently selected or active",
      },
      {
        id: 15,
        question: "What is the purpose of the tabindex attribute?",
        options: [
          "Defines the order in which elements are focused when using the keyboard",
          "Provides a description for images",
          "Sets the background color of elements",
        ],
        correct:
          "Defines the order in which elements are focused when using the keyboard",
      },
      {
        id: 16,
        question: "What is a contrast ratio?",
        options: [
          "The difference in lightness between two colors",
          "The contrast between images",
          "The brightness of a webpage",
        ],
        correct: "The difference in lightness between two colors",
      },
      {
        id: 17,
        question: "Which of the following is true about accessible forms?",
        options: [
          "They should have proper labeling for inputs",
          "They should not have error messages",
          "They should avoid using checkboxes",
        ],
        correct: "They should have proper labeling for inputs",
      },
      {
        id: 18,
        question: "What is the purpose of using skip navigation links?",
        options: [
          "To allow users to skip repetitive content",
          "To speed up page loading",
          "To provide quick links to social media",
        ],
        correct: "To allow users to skip repetitive content",
      },
      {
        id: 19,
        question:
          "What does a logical heading structure improve in web accessibility?",
        options: [
          "It makes the page easier to navigate using screen readers",
          "It improves page aesthetics",
          "It increases the page load speed",
        ],
        correct: "It makes the page easier to navigate using screen readers",
      },
      {
        id: 20,
        question: "Why is it important to test web accessibility?",
        options: [
          "To ensure the website is usable for all users, including those with disabilities",
          "To improve search engine ranking",
          "To reduce page load time",
        ],
        correct:
          "To ensure the website is usable for all users, including those with disabilities",
      },
    ],
  },
  {
    id: 11,
    title: "Web Security Quiz",
    description:
      "How well do you understand security best practices for web development?",
    questions: [
      {
        id: 1,
        question: "What does SSL/TLS encryption do?",
        options: [
          "Secures data transmitted over the internet",
          "Improves website speed",
          "Compresses images",
        ],
        correct: "Secures data transmitted over the internet",
      },
      {
        id: 2,
        question: "Which HTTP method is used to retrieve data from a server?",
        options: ["GET", "POST", "PUT"],
        correct: "GET",
      },
      {
        id: 3,
        question: "What is Cross-Site Scripting (XSS)?",
        options: [
          "A vulnerability where attackers inject malicious scripts into webpages",
          "A vulnerability that allows unauthorized access to the database",
          "A method for securing passwords",
        ],
        correct:
          "A vulnerability where attackers inject malicious scripts into webpages",
      },
      {
        id: 4,
        question: "What is Cross-Site Request Forgery (CSRF)?",
        options: [
          "A type of attack where malicious requests are sent on behalf of a user without their consent",
          "A method to secure cookies",
          "A way to encrypt data",
        ],
        correct:
          "A type of attack where malicious requests are sent on behalf of a user without their consent",
      },
      {
        id: 5,
        question: "What is SQL Injection?",
        options: [
          "A technique where attackers insert malicious SQL code into a query to access sensitive data",
          "A method to optimize database performance",
          "A way to store data securely",
        ],
        correct:
          "A technique where attackers insert malicious SQL code into a query to access sensitive data",
      },
      {
        id: 6,
        question: "What is the purpose of using HTTPS?",
        options: [
          "To encrypt the communication between the client and server",
          "To compress website content",
          "To enable cookies on the website",
        ],
        correct: "To encrypt the communication between the client and server",
      },
      {
        id: 7,
        question: "What is password hashing?",
        options: [
          "The process of transforming a password into a fixed-length string to protect it",
          "A way to store passwords in plain text",
          "A method to generate passwords",
        ],
        correct:
          "The process of transforming a password into a fixed-length string to protect it",
      },
      {
        id: 8,
        question: "What is the principle of least privilege?",
        options: [
          "Users should only have the minimum access required to perform their tasks",
          "Users should have access to all system features",
          "Users should have access to private data",
        ],
        correct:
          "Users should only have the minimum access required to perform their tasks",
      },
      {
        id: 9,
        question: "What does two-factor authentication (2FA) provide?",
        options: [
          "An additional layer of security by requiring a second form of verification",
          "Faster access to user accounts",
          "Better password management",
        ],
        correct:
          "An additional layer of security by requiring a second form of verification",
      },
      {
        id: 10,
        question: "What is the main purpose of Content Security Policy (CSP)?",
        options: [
          "To prevent attacks such as XSS by defining allowed sources for content",
          "To improve page load speed",
          "To compress images",
        ],
        correct:
          "To prevent attacks such as XSS by defining allowed sources for content",
      },
      {
        id: 11,
        question:
          "What is the difference between a session cookie and a persistent cookie?",
        options: [
          "A session cookie expires when the browser is closed, while a persistent cookie is stored for a defined time",
          "Session cookies are secure, while persistent cookies are not",
          "Persistent cookies are stored only for 24 hours",
        ],
        correct:
          "A session cookie expires when the browser is closed, while a persistent cookie is stored for a defined time",
      },
      {
        id: 12,
        question: "What is an example of a secure coding practice?",
        options: [
          "Validating user inputs to prevent injection attacks",
          "Allowing all types of user inputs",
          "Storing passwords in plain text",
        ],
        correct: "Validating user inputs to prevent injection attacks",
      },
      {
        id: 13,
        question: "What does a firewall do?",
        options: [
          "Monitors and controls incoming and outgoing network traffic based on security rules",
          "Improves website performance",
          "Encrypts user data",
        ],
        correct:
          "Monitors and controls incoming and outgoing network traffic based on security rules",
      },
      {
        id: 14,
        question: "What is the use of OAuth in web security?",
        options: [
          "To authorize third-party applications to access user data securely",
          "To encrypt user passwords",
          "To generate user tokens",
        ],
        correct:
          "To authorize third-party applications to access user data securely",
      },
      {
        id: 15,
        question: "What is the purpose of rate limiting in web security?",
        options: [
          "To prevent abuse of APIs by limiting the number of requests a user can make",
          "To speed up website performance",
          "To cache user data",
        ],
        correct:
          "To prevent abuse of APIs by limiting the number of requests a user can make",
      },
      {
        id: 16,
        question: "What does a security header like X-Content-Type-Options do?",
        options: [
          "Prevents browsers from interpreting files as something else",
          "Encrypts all traffic",
          "Enables HTTPS on the website",
        ],
        correct: "Prevents browsers from interpreting files as something else",
      },
      {
        id: 17,
        question: "What is the purpose of regular security patches?",
        options: [
          "To fix vulnerabilities and protect the system from attacks",
          "To improve user experience",
          "To update the website’s design",
        ],
        correct: "To fix vulnerabilities and protect the system from attacks",
      },
      {
        id: 18,
        question: "What is the use of HTTPS Strict Transport Security (HSTS)?",
        options: [
          "To enforce the use of HTTPS and prevent downgrade attacks",
          "To improve website load times",
          "To cache static content",
        ],
        correct: "To enforce the use of HTTPS and prevent downgrade attacks",
      },
      {
        id: 19,
        question: "What is an example of a brute-force attack?",
        options: [
          "Attempting multiple passwords until the correct one is found",
          "Sending large volumes of data to the server",
          "Injecting malicious code into the database",
        ],
        correct: "Attempting multiple passwords until the correct one is found",
      },
      {
        id: 20,
        question: "What does the term “phishing” refer to?",
        options: [
          "A social engineering attack that tricks users into revealing sensitive information",
          "A type of malware",
          "A method to improve website performance",
        ],
        correct:
          "A social engineering attack that tricks users into revealing sensitive information",
      },
    ],
  },
  {
    id: 12,
    title: "Responsive Design Quiz",
    description:
      "Test your knowledge on designing responsive websites for all screen sizes!",
    questions: [
      {
        id: 1,
        question: 'What does "responsive design" mean?',
        options: [
          "Design that adapts to different screen sizes and devices",
          "Design that only works on desktop",
          "Design that focuses only on mobile screens",
        ],
        correct: "Design that adapts to different screen sizes and devices",
      },
      {
        id: 2,
        question:
          "Which CSS media query is commonly used to target mobile devices?",
        options: [
          "@media screen and (max-width: 600px)",
          "@media screen and (min-width: 1024px)",
          "@media screen and (max-height: 800px)",
        ],
        correct: "@media screen and (max-width: 600px)",
      },
      {
        id: 3,
        question:
          "What is the purpose of the viewport meta tag in responsive web design?",
        options: [
          "It defines how the page should be scaled on different devices",
          "It controls the background color of the page",
          "It sets the font size of the page",
        ],
        correct:
          "It defines how the page should be scaled on different devices",
      },
      {
        id: 4,
        question:
          "Which of the following is a flexible layout technique in CSS?",
        options: ["Flexbox", "Positioning", "Table layout"],
        correct: "Flexbox",
      },
      {
        id: 5,
        question:
          'What is the "mobile-first" approach in responsive web design?',
        options: [
          "Designing for mobile devices before scaling up to larger screens",
          "Designing for desktop and then scaling down to mobile",
          "Designing for tablets first",
        ],
        correct:
          "Designing for mobile devices before scaling up to larger screens",
      },
      {
        id: 6,
        question:
          "Which of the following CSS properties helps create a responsive layout?",
        options: ["width: 100%", "font-size: 12px", "background-color: red"],
        correct: "width: 100%",
      },
      {
        id: 7,
        question:
          "What is the advantage of using CSS Grid in responsive design?",
        options: [
          "It provides a two-dimensional grid layout system",
          "It is used for image optimization",
          "It is only used for mobile layouts",
        ],
        correct: "It provides a two-dimensional grid layout system",
      },
      {
        id: 8,
        question:
          "How do you ensure that images scale properly on all screen sizes?",
        options: [
          "Use the max-width property set to 100%",
          "Set the image width to 500px",
          "Use a fixed height",
        ],
        correct: "Use the max-width property set to 100%",
      },
      {
        id: 9,
        question: 'What is the purpose of the "flex-wrap" property in Flexbox?',
        options: [
          "Allows items to wrap onto multiple lines",
          "Controls the direction of items",
          "Aligns items at the center",
        ],
        correct: "Allows items to wrap onto multiple lines",
      },
      {
        id: 10,
        question:
          'Which of the following best describes the "breakpoint" in responsive design?',
        options: [
          "A specific screen width where the layout needs to adjust",
          "The time taken to load the page",
          "The background color of the page",
        ],
        correct: "A specific screen width where the layout needs to adjust",
      },
      {
        id: 11,
        question:
          "What is the purpose of using percentages in width and height for responsive design?",
        options: [
          "To make elements scale based on the parent container",
          "To set fixed sizes for elements",
          "To improve page loading speed",
        ],
        correct: "To make elements scale based on the parent container",
      },
      {
        id: 12,
        question:
          "Which of the following is a tool commonly used for testing responsive designs?",
        options: ["Chrome Developer Tools", "Text editor", "Photo editor"],
        correct: "Chrome Developer Tools",
      },
      {
        id: 13,
        question:
          "What is a common issue with fixed-width layouts on mobile devices?",
        options: [
          "Content can overflow or become too small to read",
          "The page will load slower",
          "Images will not appear",
        ],
        correct: "Content can overflow or become too small to read",
      },
      {
        id: 14,
        question: 'What does the term "adaptive design" refer to?',
        options: [
          "Designing layouts based on specific device sizes",
          "Designing layouts for a single screen size",
          "Designing without considering devices",
        ],
        correct: "Designing layouts based on specific device sizes",
      },
      {
        id: 15,
        question:
          "What is the main difference between responsive and adaptive design?",
        options: [
          "Responsive adjusts based on screen size, while adaptive uses predefined layouts for different sizes",
          "Responsive only works on mobile, adaptive only works on desktop",
          "There is no difference",
        ],
        correct:
          "Responsive adjusts based on screen size, while adaptive uses predefined layouts for different sizes",
      },
      {
        id: 16,
        question:
          "Which CSS property allows you to center a block element horizontally within its parent?",
        options: ["margin: 0 auto", "text-align: center", "padding: 0"],
        correct: "margin: 0 auto",
      },
      {
        id: 17,
        question:
          'What is the purpose of using relative units like "em" or "rem" in responsive design?',
        options: [
          "To make font sizes and layout elements scale with the parent container or root element",
          "To set fixed pixel sizes for elements",
          "To increase the speed of page rendering",
        ],
        correct:
          "To make font sizes and layout elements scale with the parent container or root element",
      },
      {
        id: 18,
        question:
          'How can you implement a "hamburger" menu for mobile navigation?',
        options: [
          "By using JavaScript and CSS to toggle a hidden menu",
          "By using a large sidebar",
          "By displaying all menu items without hiding them",
        ],
        correct: "By using JavaScript and CSS to toggle a hidden menu",
      },
      {
        id: 19,
        question:
          "Which of the following helps ensure that text remains legible on all screen sizes?",
        options: [
          "Using relative font sizes (em, rem)",
          "Using fixed font sizes (px)",
          "Avoiding text altogether",
        ],
        correct: "Using relative font sizes (em, rem)",
      },
      {
        id: 20,
        question: "What is the primary goal of responsive design?",
        options: [
          "To ensure that websites provide a consistent user experience across all devices",
          "To make websites only work on mobile",
          "To improve SEO ranking",
        ],
        correct:
          "To ensure that websites provide a consistent user experience across all devices",
      },
    ],
  },
  {
    id: 13,
    title: "Frontend Frameworks Quiz",
    description:
      "How familiar are you with frontend frameworks like Angular, Vue, and Svelte?",
    questions: [
      {
        id: 1,
        question: "Which of the following is a feature of Angular?",
        options: [
          "Two-way data binding",
          "Virtual DOM",
          "Component-based architecture",
        ],
        correct: "Two-way data binding",
      },
      {
        id: 2,
        question: "Which of the following is true about Vue.js?",
        options: [
          "It is a progressive JavaScript framework",
          "It is a full-stack framework",
          "It uses jQuery for DOM manipulation",
        ],
        correct: "It is a progressive JavaScript framework",
      },
      {
        id: 3,
        question:
          'Which of these frontend frameworks is known for its "reactive" data model?',
        options: ["Vue.js", "React.js", "Angular"],
        correct: "Vue.js",
      },
      {
        id: 4,
        question:
          "What is the key feature of Svelte compared to other frontend frameworks?",
        options: [
          "It compiles components into highly optimized vanilla JavaScript at build time",
          "It uses a virtual DOM",
          "It is based on TypeScript",
        ],
        correct:
          "It compiles components into highly optimized vanilla JavaScript at build time",
      },
      {
        id: 5,
        question: "Which framework uses JSX as its templating language?",
        options: ["React.js", "Vue.js", "Angular"],
        correct: "React.js",
      },
      {
        id: 6,
        question: "What is a common use case for using Angular?",
        options: [
          "Building large-scale enterprise applications",
          "Building small interactive components",
          "Building static websites",
        ],
        correct: "Building large-scale enterprise applications",
      },
      {
        id: 7,
        question:
          "What is a key advantage of using React for frontend development?",
        options: [
          "Its large ecosystem and community support",
          "It does not require any build tools",
          "It comes with built-in state management",
        ],
        correct: "Its large ecosystem and community support",
      },
      {
        id: 8,
        question:
          "Which of the following tools is commonly used with Angular for testing?",
        options: ["Jasmine", "Mocha", "Chai"],
        correct: "Jasmine",
      },
      {
        id: 9,
        question: "What is Vuex used for in Vue.js?",
        options: [
          "State management",
          "Routing",
          "Component lifecycle management",
        ],
        correct: "State management",
      },
      {
        id: 10,
        question: 'What is the purpose of the "ngModel" directive in Angular?',
        options: [
          "To bind an input field to a model",
          "To render the UI components",
          "To add routing to the app",
        ],
        correct: "To bind an input field to a model",
      },
      {
        id: 11,
        question:
          'Which of the following best describes a "component" in React?',
        options: [
          "A reusable, self-contained unit of code that manages its own state and UI",
          "A global object that handles all routing",
          "A set of styles for the page",
        ],
        correct:
          "A reusable, self-contained unit of code that manages its own state and UI",
      },
      {
        id: 12,
        question:
          'Which frontend framework uses "directives" as part of its core functionality?',
        options: ["Angular", "Vue.js", "React.js"],
        correct: "Angular",
      },
      {
        id: 13,
        question:
          "Which framework is known for its simplicity and ease of integration with existing projects?",
        options: ["Vue.js", "Angular", "Svelte"],
        correct: "Vue.js",
      },
      {
        id: 14,
        question: "Which of the following is NOT a feature of Svelte?",
        options: [
          "Virtual DOM",
          "Compile-time optimization",
          "Reactive programming",
        ],
        correct: "Virtual DOM",
      },
      {
        id: 15,
        question: "What is a key feature of React?",
        options: [
          "Component-based architecture",
          "Built-in routing",
          "Supports two-way data binding",
        ],
        correct: "Component-based architecture",
      },
      {
        id: 16,
        question: "Which frontend framework was created by Google?",
        options: ["Angular", "React.js", "Vue.js"],
        correct: "Angular",
      },
      {
        id: 17,
        question: 'What does the "v-bind" directive do in Vue.js?',
        options: [
          "It binds an attribute to an expression",
          "It handles routing",
          "It allows for state management",
        ],
        correct: "It binds an attribute to an expression",
      },
      {
        id: 18,
        question:
          "Which of the following is used in React to manage side effects like data fetching?",
        options: ["useEffect", "useState", "useReducer"],
        correct: "useEffect",
      },
      {
        id: 19,
        question: "In Angular, what is the purpose of services?",
        options: [
          "To provide reusable logic and data across components",
          "To manage user input",
          "To handle page routing",
        ],
        correct: "To provide reusable logic and data across components",
      },
      {
        id: 20,
        question:
          "Which frontend framework is most commonly used with TypeScript?",
        options: ["Angular", "Vue.js", "React.js"],
        correct: "Angular",
      },
    ],
  },
];

export default questions;
