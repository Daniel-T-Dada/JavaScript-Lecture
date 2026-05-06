
/*
FUNCTIONS: A function is a reusable block of code that performs a specific task. 

It allows you to break down your code into smaller, manageable pieces, making it easier to read and maintain.

Functions can take input parameters, perform operations, and return output values.*/

// Function Declaration
function greet() {
    console.log("Good morning, Developers!")
}
greet() // Calling the function

// Function with Parameters: Parameters are placeholders for values that you can pass to a function when you call it. They allow you to make your functions more flexible and reusable.
function greetUser(name) {
    console.log(`Good afternoon, ${name}!`)
}
//arguments are the actual values that you pass to a function when you call it. They are assigned to the corresponding parameters(placeholders) in the function definition.
greetUser("Folarin")
greetUser("Mr. Bolaji")
greetUser("Arinze")
greetUser("Joseph")


function add(a, b) {
    return a + b
}
console.log(add(5, 3)) // Output: 8
console.log(add(15, 30))

function multiply(x, y) {
    return x * y
}

const product = multiply(4, 6)
console.log(product) // Output: 24

//Types Of Functions
// 1. Function Declaration: A function that is defined using the function keyword and can be called before it is defined in the code due to hoisting.
console.log(divide())

function divide() {
    return 10 / 2
}

// 2. Function Expression: A function that is defined as part of an expression and is not hoisted, meaning it cannot be called before it is defined.
const subtract = function (a, b) {
    return a - b
}
console.log(subtract(10, 4)) // Output: 6


// 3. Arrow Function: A shorter syntax for writing function expressions, introduced in ES6, which does not have its own this context and is often used for concise functions.

const square = (x) => x * x

const result = square(5)
console.log(result) // Output: 25

const cube = (y) => {
    return y * y * y
}

// Asynchronous Functions: Functions that allow you to perform tasks that may take some time to complete, such as fetching data from an API or reading a file, without blocking the execution of the rest of the code. 

// They can be defined using the async keyword and often use the await keyword to handle asynchronous operations.
async function fetchData() {
    try {
        const response = await fetch('https://dummyjson.com/comments/');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
fetchData()

const getUser = async () => {
    const data = await new Promise((resolve) => {
        // Simulate an API call
        setTimeout(() => {
            resolve(
                [
                    { id: 1, name: "Folarin" },
                    { id: 2, name: "Arinze" },
                    { id: 3, name: "Joseph" },
                    { id: 4, name: "Mr. Bolaji" }
                ]
            );
        }, 1000);
    });
    console.table(data);
}
// getUser()
// console.log("Fetching user data...")
// console.log("This will log before the user data is fetched due to asynchronous behavior.")