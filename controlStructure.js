console.log("Control Structures in JavaScript");

/*
Control structures are used to control the flow of execution in a program. They allow you to make decisions, repeat code, and handle different scenarios. The main types of control structures in JavaScript are:
1. Sequence: The default mode of execution where statements are executed one after the other in the order they appear.
2. Selection (if-else, switch): Used to make decisions based on certain conditions.
3. Iteration: Loops (for, while, do-while): Used to repeat a block of code multiple times.
*/

// Conditions
//1. If Statement
let age = 12;
// if (age >= 18) {
//     console.log("You are an adult.")
// }

//2. If-Else Statement
let isCloudy = false;

// if (isCloudy) {
//     console.log("It's cloudy outside.");
// } else {
//     console.log("It's sunny outside.");
// }

//3. Else-If Statement
// let score = 50;

// if (score >= 90) {
//     console.log("Grade: A");
// } else if (score >= 80) {
//     console.log("Grade: B");
// } else if (score >= 70) {
//     console.log("Grade: C");
// } else if (score >= 60) {
//     console.log("Grade: D");
// } else {
//     console.log("Grade: F");
// }


// Class Work: Write a JavaScript program to determine if a number is an even or odd number.
//Solution
// let userInput = Number(prompt("Enter any number: "))
// console.log(typeof userInput)

// if (userInput % 2 === 0) {
//     console.log(`${userInput} is an even number`)
// } else {
//     console.log(`${userInput} is an odd number`)
// }

// 4. Switch Statement
let batteryStatus = 10

// switch (batteryStatus) {
//     case 100:
//         console.log("The battery is full")
//         break;
//     case 50:
//         console.log("Your battery is fine")
//         break;
//     case 20:
//         console.log("Your phone is running low, prepare to charge")
//         break
//     case 10:
//         console.log("Power saver switched on")
//         break
    
//     case 5:
//         console.log("Plug in your charger")
//         break
//     case 0:
//         console.log("Phone shutting down")
//         break
//     default:
//         console.log("charging")

// }

// const color = "blue" ? "The baby is a boy" : "The baby is a girl"

// console.log(color)
 
// let userAge = 12
// let country = "Nigeria"

// if (userAge >= 18 && country ) {
//     console.log("You are eligible to vote")
// } else {
//     console.log("You are not eligible to vote")
    
// }

// let login = true

// if (!login) {
//     console.log("You have to login with your correct email")
// } else {
//     console.log("Login successful")
// }

let email = prompt("Enter your email")
let password = prompt("Enter your password")

if (email.trim().length > 2 && email ) {
    console.log("You have logged in successfully")
} else {
    console.log("Email can't be left empty so enter your email to login")
}


// LOOPS
for (let i = 1; i < 5; i++){
    console.log("Result: ", i)
}
for (let i = 5; i < 0; i++){
    // console.log("Result: ", i)
}
