//1. Strings
//2. Arrays
//3. Numbers

// Built-In Strings and Array Methods and Properties

// String Methods 
let word = "A journey of a thousand miles begins with a single step."

// length property: Returns the length of the string (number of characters).
console.log(word.length) // Output: 63

// toUpperCase() method: Converts all characters in the string to uppercase.
console.log(word.toUpperCase()) 

// toLowerCase() method: Converts all characters in the string to lowercase.
console.log(word.toLowerCase())

// includes() method: Checks if a string contains a specified substring and returns true or false.
console.log(word.includes("thousand")) // Output: true
console.log(word.includes("million")) // Output: false

// split() method: Splits a string into an array of substrings based on a specified separator.
const wordsArray = word.split(" ")
console.log(wordsArray) // Output: ["A", "journey", "of", "a", "thousand", "miles", "begins", "with", "a", "single", "step."]

//slice() method: Extracts a section of a string and returns it as a new string, without modifying the original string.
console.log(word.slice(2, 9)) // Output: "journey"

const fruit = "Chocolate"
console.log(fruit.slice(0, 5)) // Output: "Choco"
console.log(fruit.slice(5, 9))

const anotherOne = "Abracadabra".slice(2, 8)
console.log(anotherOne)

//trim() method: Removes whitespace from both ends of a string.
const nameWithSpaces = "   Double D   "
console.log(nameWithSpaces.trim()) // Output: "Double D"