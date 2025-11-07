const products = [
  {
    id: 1,
    name: "Luxury Waterproof Luminous Watch",
    price: 50,
    img: "watch.jpg",
  },
  { id: 2, name: "Brand & Sealed Valentino", price: 40, img: "bspray.jpg" },
  {
    id: 3,
    name: "Christian Dior - Bijoux de Mode",
    price: 35,
    img: "chains.jpg",
  },
  { id: 4, name: "Designer Large Crossbody Bag", price: 46, img: "dbag.jpg" },
  {
    id: 5,
    name: "4-piece Bridal Wedding Jewelry Set",
    price: 86,
    img: "4-piece.jpg",
  },
  {
    id: 6,
    name: "Homde Large Jewelry Box Organizer Case",
    price: 55,
    img: "jbox.jpg",
  },
  {
    id: 7,
    name: "Creative European Style Resin Jewelry",
    price: 72,
    img: "ceschain.jpg",
  },
  {
    id: 8,
    name: "Luxury Green Crocodile Embossed Handbag",
    price: 38,
    img: "gbag.jpg",
  },
  {
    id: 9,
    name: "Retro Rectangle Sunglasses",
    price: 30,
    img: "rrglasses.jpg",
  },
  { id: 10, name: "Louis Vuitton Multi Pochette", price: 65, img: "mbag.jpg" },
  {
    id: 11,
    name: "14k Yellow Gold Plated Hoop Earring",
    price: 120,
    img: "goldears.jpg",
  },
  {
    id: 12,
    name: "High Waist Cotton Funny Socks",
    price: 32,
    img: "socks.jpg",
  },
  {
    id: 13,
    name: "Colourblock Large Capacity Backpack Set",
    price: 69,
    img: "greybags.jpg",
  },
  { id: 14, name: "Versace Eros Flame", price: 93, img: "rspray.jpg" },
  { id: 15, name: "UpCycled Fashion Attire", price: 74, img: "jnative.jpg" },
  { id: 16, name: "Leather Bee Gucci Shoes", price: 67, img: "guccis.jpg" },
  { id: 17, name: "Mulberry Leather Tote Handbag", price: 44, img: "rbag.jpg" },
  { id: 18, name: "Dubai Couture", price: 78, img: "gnative.jpg" },
  { id: 19, name: "Menstylica-Wien 1885", price: 59, img: "lshoes.jpg" },
  { id: 20, name: "Retro Vintage Cosplay Coat", price: 111, img: "coat.jpg" },
];

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");

let cart = [];

// Display products
function displayProducts() {
  products.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

displayProducts();

// Add to cart
function addToCart(id) {
  const item = products.find((p) => p.id === id);
  cart.push(item);
  updateCart();
}

// Update cart display
function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - $${item.price}
      <button onclick="removeFromCart(${index})">❌</button>
    `;
    cartItems.appendChild(li);
  });

  cartTotal.textContent = `Total: $${total}`;
  cartCount.textContent = cart.length;
}

// Remove item
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

// Slider
const slides = Array.from(document.querySelectorAll(".slide"));
let slideIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

//Auto slide
setInterval(nextSlide, 2000);

// Checkout
document.getElementById("checkout-btn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Thank you for your purchase!");
    cart = [];
    updateCart();
  }
});
