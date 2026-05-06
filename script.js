/*
DATA : These are raw facts and figures
There are two types of data which are 1. Primitive data types and Reference data types

PRIMITIVE data types are the most basic data types in JavaScript. They include:

1. String: Represents a sequence of characters. Example: "Hello, World!"

2. Number: Represents both integer and floating-point numbers. Example: 42, 3.14

3. Boolean: Represents a logical value, either true or false. Example: true, false

4. Undefined: Represents a variable that has been declared but not assigned a value. Example: let x; console.log(x); // undefined

5. Null: Represents the intentional absence of any object value. Example: let y = null; console.log(y); // null

6. Symbol: Represents a unique identifier. Example: const sym = Symbol('description');

7. BigInt: Represents integers with arbitrary precision. Example: const bigInt = 1234567890123456789012345678901234567890n;

*/

// Declaring a Variable
let myName = "Double D"

console.log(myName) // Output: Double D

let plateOfRice = "Rice"
console.log(plateOfRice) // Output: Rice

const price = 5000
console.log(price) // Output: 5000


// The difference between let and const is that let allows you to reassign a new value to the variable, while const does not allow reassignment after the initial assignment.

myName = "Mr. Bolaji"
console.log(myName) // Output: Mr. Bolaji

//price = 6000 // This will throw an error because price is declared as a constant
// console.log(price) 

const isOnline = true
console.log(isOnline)

//For strings we use
//. Double quotes -> " "
//. Single quotes -> ' '
//. Backticks -> ` ` (used for template literals)

// Concatenation of strings
let firstName = "Folarin"
let lastName = "Saliu"

let fullName = firstName + " " + lastName
console.log(fullName) // Output: Folarin Saliu

const sentence = "My name is " + myName + " I love to eat " + plateOfRice + ". I am also learning Frontend with " + fullName

console.log(sentence)

// ClassWork
const stack = "Frontend Developer"
const daysOfLecture = "Mondays and Wednesdays"
const myLocation = "Univelcity Academy"
const date = "April 29th, 2026"

// Class Work 2: Declare 10 variables of your choice. Then use it to form a sentence using concatenation

//Solution: Template Literals
const market = "Yaba market"
const shoes = "Sneakers"
const costOfShoes = 9000
const fare = 1000
const isCloudy = true

const output = `On ${date}, I went to ${market} to buy ${shoes} at the rate of $${costOfShoes}. I transported myself spending ${fare} and it is ${isCloudy} that the weather was cloudy`



console.log(output)

// DOs and DON'Ts of Declaring a Variable Name
/* 
1. A variable name must never be any of JavaScript keyword
let console = "something" ❌ ...because console is a keyword
const const = ❌ ...const is a keyword
const Function = ❌ ...Function is also a keyword

2. A variable name MUST NEVER have include any space.
 const my profile = ".."

3. In JavaScript, we use camelCase for our variable names
const myProfile = " "

4. We should always use descriptive variable names
let age = "Apple" ❌ ..this is wrong
let age = 12 ✔️ ..this is right

5. A varible name MUST NEVER begin with a number
let 2age = 23 ❌ ..this is wrong
let age = 23 ✔️ ..this is wrong

6. A variable cannot contain any symbol aside the underscore and the dollar symbol

7. All variable names are case sensitive
age != Age
*/


