// DOM Manipulation


// Getting Elements from HTML
//1. By Tag Name
// 2. By Class Name
// 3. By ID
// 4. By Query Selector and Query Selector All


//1. By Tag Name
const h1Text = document.getElementsByTagName('h1')
h1Text[0].textContent = "DOM Manipulation"

let arrayText = [1, 2, 3, 4, 5]
arrayText[1]

//2. By Class Name
let shoePrice = document.getElementsByClassName('price')
shoePrice[0].textContent = "₦1000"



//3. By ID
let container = document.getElementById('container')
// container.style.backgroundColor = "lightblue"
// container.style.border = "2px solid black"

// 4. By Query Selector and Query Selector All
let newPrice = document.querySelector('#price-id')
let image = document.querySelector('#image-id')
let some = document.querySelectorAll('.something')

some[0].textContent = "EU39"
some[1].textContent = "BLACK/RED"

// Creating Elements
let newElement = document.createElement('p')
newElement.textContent = "This is a new element created by JavaScript"
// document.body.appendChild(newElement)

// Class Work
let link = document.createElement('a')
link.textContent = "Click here to visit Google"
link.href = "https://www.google.com"
document.body.appendChild(link)

// Remove Element
link.remove()

//Set Attribute
image.setAttribute('alt', 'This is a shoe image')
console.log(image.getAttribute('alt'))

/*
1. textContent
2. innerText
3. innerHTML
4. value -> for input elements
*/ 