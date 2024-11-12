// Selecting DOM elements for various components of the shopping cart functionality
const body = document.querySelector ("body")
const shoppingCartButton = document.querySelector(".cartButton"); // Button to open the cart section
const landingPage = document.querySelector("#landingPage"); // Main landing page section
const checkoutSection = document.querySelector("aside"); // Checkout section that slides in/out
const closeButton = document.querySelector(".close"); // Button to close the cart section
const noOfCartItemsDisplay = document.querySelector("sup"); // Display for the number of cart items
const cardsCollection = document.querySelectorAll(".card"); // Collection of product cards
const addToCartButtonsCollection = document.querySelectorAll("button"); // All 'Add to Cart' buttons
const itemsArea = document.querySelector(".itemsArea"); // Area where cart items are listed
const subtotalDisplay = document.querySelector(".subtotalDisplay"); // Display for the subtotal amount
const checkoutButton = document.querySelector(".checkoutBtn"); // Button to initiate checkout

// Initializing cart values
let numberOfCartItems = 0;
let price = 0;
let cartCollection = []; // Array to hold items added to the cart


// Initial setup: update the cart display when DOM content is loaded
document.addEventListener("DOMContentLoaded", e => {
  getDataFromLocalStorage()
  updateNoOfCartItemsAndPrice();
  if (cartCollection!==[]) {
    
  cartCollection.forEach(cartCollectionItem=> {
  
  if (cartCollection.length) {
    const itemEl = document.createElement("div");
  const imageEl = document.createElement("img");
  const titleContainerEl = document.createElement("div");
  const titleEl = document.createElement("span");
  const priceEl = document.createElement("div");
  const quantityContainerEl = document.createElement("div");
  const minusItemEl = document.createElement("button");
  const plusItemEl = document.createElement("button");
  quantityInputEl = document.createElement("input");

  appendElements();
  addAttributesAndClasslists();
  addContents();
  incrementAndDecrementCartItem()
  
  // Function to append all elements in the correct order to the DOM
  function appendElements() {
    itemsArea.appendChild(itemEl);
    itemEl.appendChild(imageEl);
    itemEl.appendChild(titleContainerEl);
    titleContainerEl.appendChild(titleEl);
    itemEl.appendChild(priceEl);
    itemEl.appendChild(quantityContainerEl);
    quantityContainerEl.appendChild(minusItemEl);
    quantityContainerEl.appendChild(quantityInputEl);
    quantityContainerEl.appendChild(plusItemEl);
  }

  // Function to set attributes and add classes to the newly created elements
  function addAttributesAndClasslists() {
    itemEl.classList.add("item", "text-white", "flex", "justify-between", "items-center", "py-2", "px-2");
    itemEl.id = `${cartCollectionItem.title}cart`;
    

    imageEl.classList.add("h-12", "w-12");
    titleContainerEl.classList.add("w-[40%]");
    priceEl.classList.add("priceCart","w-20%");
    quantityContainerEl.classList.add("quantity","w-[20%]");

    minusItemEl.classList.add("bg-white", "rounded-[50%]", "text-black", "w-4", "h-4");
    plusItemEl.classList.add("bg-white", "rounded-[50%]", "text-black", "w-4", "h-4");
    quantityInputEl.classList.add("w-8", "bg-transparent", "text-center");
    quantityInputEl.type = "number";
    quantityInputEl.id = "quantityDisplay"
    quantityInputEl.value = 1
    minusItemEl.id ="minus"
    plusItemEl.id="plus"
    quantityInputEl.setAttribute("readonly","readonly")
    
  }

  // Function to set the content for each of the cart item elements
  function addContents() {
    imageEl.src = cartCollectionItem.imageSource;
    titleEl.textContent = cartCollectionItem.title;
    priceEl.textContent = "$ " + cartCollectionItem.price;
    minusItemEl.innerText = "—";
    plusItemEl.innerText = "+";
    quantityInputEl.value = cartCollectionItem.quantity;
    quantityInputEl.style.outline = "none"
}
  function incrementAndDecrementCartItem() {
    // Tab to edit
    plusItemEl.addEventListener("click",e=>{
      updateItemQuantity(cartCollectionItem,e)
    })
    minusItemEl.addEventListener("click",e=>{
      updateItemQuantity(cartCollectionItem,e)
      
    })
 //  quantityInputEl.addEventListener//("change",e=> {
 //    updateItemQuantity(cartCollection,e)
 //  })
  }

  }
})
}
});

// Event listeners for showing/hiding the cart section
shoppingCartButton.addEventListener("click", checkoutSectionToggle); // Show cart
closeButton.addEventListener("click", checkoutSectionToggle); // Hide cart

// Assigning IDs to each product card based on the product title
cardsCollection.forEach(card => {
  card.id = card.querySelector("h2").textContent;
});

// Event listener for each 'Add to Cart' button
addToCartButtonsCollection.forEach(button => {
  button.addEventListener("click", e => {
    e.preventDefault(); // Prevent default form behavior if within a form
    addItemToCart(e); // Add item to the cart
  });

});

// Event listener for the checkout button
checkoutButton.addEventListener("click", checkout);

// Toggles visibility of the checkout section and landing page
function checkoutSectionToggle() {
  landingPage.classList.toggle("hidden");
  checkoutSection.classList.toggle("hidden");
  body.classList.toggle("onCheckoutPage")
}

// Updates the display for the number of items in cart and the subtotal amount
function updateNoOfCartItemsAndPrice() {
  storeInLocalStorage()
  
  
  noOfCartItemsDisplay.innerText = numberOfCartItems;
  
  
  subtotalDisplay.innerText =   `Subtotal (${numberOfCartItems} items): $${Math.abs(price).toFixed(2)}`;
  
}

// Adds an item to the cart

function addItemToCart(e) {
  // Creating an object for the item added to the cart
  
  const cartCollectionItem = {
    title: e.target.closest("div").querySelector(".title").textContent,
    price: Number(e.target.closest("div").querySelector(".price").id),
    imageSource: e.target.closest("div").querySelector("img").src,
    quantity: 1
  };

    
  


  // Updating cart item count and subtotal
  
  

  // Checking if the item already exists in the cart
  const exists = cartCollection.some(item => JSON.stringify(item.title) === JSON.stringify(cartCollectionItem.title));
console.log(exists)

  if (exists) {
    updateItemQuantity(cartCollectionItem,e)
    return; // If item exists, do not add again
  }
  
  
  numberOfCartItems++;
  price += cartCollectionItem.price;
  

  // Adding the new item to the cart collection
  cartCollection.push(cartCollectionItem);

  // Creating and appending DOM elements to display the new cart item
  const itemEl = document.createElement("div");
  const imageEl = document.createElement("img");
  const titleContainerEl = document.createElement("div");
  const titleEl = document.createElement("span");
  const priceEl = document.createElement("div");
  const quantityContainerEl = document.createElement("div");
  const minusItemEl = document.createElement("button");
  const plusItemEl = document.createElement("button");
  quantityInputEl = document.createElement("input");

  appendElements();
  addAttributesAndClasslists();
  addContents();
  incrementAndDecrementCartItem()
  updateNoOfCartItemsAndPrice();
  // Function to append all elements in the correct order to the DOM
  function appendElements() {
    itemsArea.appendChild(itemEl);
    itemEl.appendChild(imageEl);
    itemEl.appendChild(titleContainerEl);
    titleContainerEl.appendChild(titleEl);
    itemEl.appendChild(priceEl);
    itemEl.appendChild(quantityContainerEl);
    quantityContainerEl.appendChild(minusItemEl);
    quantityContainerEl.appendChild(quantityInputEl);
    quantityContainerEl.appendChild(plusItemEl);
  }

  // Function to set attributes and add classes to the newly created elements
  function addAttributesAndClasslists() {
    itemEl.classList.add("item", "text-white", "flex", "justify-between", "items-center", "py-2", "px-2");
    itemEl.id = `${cartCollectionItem.title}cart`;
    

    imageEl.classList.add("h-12", "w-12");
    titleContainerEl.classList.add("w-[40%]");
    priceEl.classList.add("priceCart","w-20%");
    quantityContainerEl.classList.add("quantity","w-[20%]");

    minusItemEl.classList.add("bg-white", "rounded-[50%]", "text-black", "w-4", "h-4");
    plusItemEl.classList.add("bg-white", "rounded-[50%]", "text-black", "w-4", "h-4");
    quantityInputEl.classList.add("w-8", "bg-transparent", "text-center");
    quantityInputEl.type = "number";
    quantityInputEl.id = "quantityDisplay"
    quantityInputEl.value = 1
    minusItemEl.id ="minus"
    plusItemEl.id="plus"
    quantityInputEl.setAttribute("readonly","readonly")
    
  }

  // Function to set the content for each of the cart item elements
  function addContents() {
    imageEl.src = cartCollectionItem.imageSource;
    titleEl.textContent = cartCollectionItem.title;
    priceEl.textContent = "$ " + cartCollectionItem.price;
    minusItemEl.innerText = "—";
    plusItemEl.innerText = "+";
    quantityInputEl.value = cartCollectionItem.quantity;
    quantityInputEl.style.outline = "none"
}
  function incrementAndDecrementCartItem() {
    // Tab to edit
    plusItemEl.addEventListener("click",e=>{
      updateItemQuantity(cartCollectionItem,e)
    })
    minusItemEl.addEventListener("click",e=>{
      updateItemQuantity(cartCollectionItem,e)
      
    })
 //  quantityInputEl.addEventListener//("change",e=> {
 //    updateItemQuantity(cartCollection,e)
 //  })
  }
}

// Handles checkout actions, resets the cart and updates display
function checkout() {
  alert("Checkout Successful!");
  price = 0;
  numberOfCartItems = 0;
  itemsArea.innerHTML=""
  cartCollection = []
  updateNoOfCartItemsAndPrice();
}

function updateItemQuantity(cartCollectionItem,e) {
  // Tab to edit
  
  const itemEl = document.getElementById(`${cartCollectionItem.title}cart`)
    let repeatingItem = cartCollection.find(item=> JSON.stringify(item.title) === JSON.stringify(cartCollectionItem.title))
    
    
    if (e.target.id ==="minus" && repeatingItem.quantity<=1) {
      repeatingItem.quantity=0
      const repeatingItemIndex = cartCollection.indexOf(repeatingItem)
      
      
  numberOfCartItems--
  price-= cartCollectionItem.price
  

  cartCollection.splice(repeatingItemIndex,1)
      
      itemsArea.removeChild(itemEl)
        
  cartCollectionItem = {}
  updateNoOfCartItemsAndPrice();
      return
    }
    
    if (e.target.id === "minus") {
    repeatingItem.quantity--
    itemEl.querySelector("input").value = repeatingItem.quantity
    numberOfCartItems--
    price-= repeatingItem.price
    
    updateNoOfCartItemsAndPrice();
    return
  }

    repeatingItem.quantity++
    price+= repeatingItem.price
    itemEl.querySelector("input").value = repeatingItem.quantity
    numberOfCartItems++
    updateNoOfCartItemsAndPrice()
}

function storeInLocalStorage(param) {
  // Tab to edit
  localStorage.setItem("cartData",JSON.stringify(cartCollection))
  localStorage.setItem("price",price.toString())
  localStorage.setItem("numberOfCartItems",numberOfCartItems.toString())
}


function getDataFromLocalStorage() {
  // Tab to edit
  cartCollection = JSON.parse(localStorage.getItem("cartData")) || []
  price = Number(localStorage.getItem("price"))
  numberOfCartItems = Number(localStorage.getItem("numberOfCartItems"))
}