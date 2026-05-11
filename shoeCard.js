const shoes = [
    {
        id: 1,
        name: "Nike Running Shoe",
        size: "EU38",
        color: "BLACK/WHITE",
        description: "Crossing hardwood comfort with off-court flair. '80s-inspired construction, bold details and nothing'-but-net style.",
        price: 120.00,
        image: "/shoe.png"
    },
    {
        id: 2,
        name: "Adidas Training Shoe",
        size: "EU39",
        color: "BLUE/WHITE",
        description: "High-performance training shoe with superior support and durability.",
        price: 150.00,
        image: "/shoe3.png"
    },
    {
        id: 3,
        name: "Nike Casual Shoe",
        size: "EU40",
        color: "RED/WHITE",
        description: "Stylish casual shoe with comfort and durability.",
        price: 100.00,
        image: "/shoe2.png"
    },
    {
        id: 4,
        name: "New Balance Classic Shoe",
        size: "EU39",
        color: "BLUE/WHITE",
        description: "Timeless classic design with modern comfort.",
        price: 120.00,
        image: "/shoe1.png"
    },

];
const displayShoe = (shoe) => `
    <div class="card">
        <div class="image">
            <img src="${shoe.image}" alt="${shoe.name}">
        </div>
        <div class="text">
            <h1>${shoe.name}</h1>
            <div>
                <span class="size">${shoe.size}</span>
                <span class="color">${shoe.color}</span>
            </div>
            <p>${shoe.description}</p>
            <div class="priceAndButton">
                <div>
                    <p>Price</p>
                    <p class="price">₦${shoe.price.toFixed(2)}</p>
                </div>
                <button class="btn">Add to cart</button>
            </div>
        </div>
    </div>
`

const renderShoes = () => {
    const container = document.getElementById('container')
    container.innerHTML = shoes.map(displayShoe).join('')
}

renderShoes()