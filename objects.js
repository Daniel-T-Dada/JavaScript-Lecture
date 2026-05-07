/**
 * OBJECTS: An object is a collection of properties, where each property is a key-value pair.
 * Objects are used to store and organize data in a structured way.
 */

// Creating an Object
const person = {
    name: "Double D",
    color: "Blue",
    occupation: "Frontend Developer",
    age: 25,
    hobbies: ["Coding", "Chess", "Cooking"],
    isTeaching: true
}

// Accessing Object Properties
console.log(person.name) // Output: "Double D"
console.log(person["color"]) // Output: "Blue"

// Modifying Object Properties
person.age = 30
console.log(person.age) // Output: 30

person.occupation = "Full Stack Developer"
console.log(person.occupation) // Output: "Full Stack Developer"
console.log(person)

// Adding New Properties to an Object
person.country = "Nigeria"
console.log(person.country) // Output: "Nigeria"
console.log(person)

// Deleting Properties from an Object
delete person.isTeaching
console.log(person.isTeaching) // Output: undefined
console.log(person)

const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,

    startEngine: function() {
        console.log("The engine has started.")
    }
}

car.startEngine() // Output: "The engine has started."

// Class: A class is a blueprint for creating objects. It defines the properties and methods that the objects created from the class will have. Classes are a fundamental part of object-oriented programming and allow you to create multiple instances of an object with shared properties and behaviors.

// The Constructor Method: The constructor method is a special method in a class that is called when a new instance of the class is created. It is used to initialize the properties of the object.
class Animal {
    constructor(name, species) {
        this.name = name
        this.species = species
    }
    makeSound() {
        console.log(`${this.name} makes a sound.`)
    }   
}

class DomesticAnimal extends Animal { 
    constructor(owner, name, species) {
        super(name, species) // Call the parent class constructor
        this.owner = owner
}}

const dog = new Animal("Buddy", "Dog")
const cat = new Animal("Whiskers", "Cat")
console.log(dog) // Output: "Buddy"
console.log(cat) // Output: "Whiskers"
dog.makeSound() // Output: "Buddy makes a sound."

const pet = new DomesticAnimal("Alice", "Buddy", "Dog")

pet.makeSound() // Output: "Buddy makes a sound."