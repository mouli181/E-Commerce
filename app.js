let cart = [];
const cartIcon = document.getElementById("cart-icon");
const cartModal = document.getElementById("cart-modal");
const closeModal = document.querySelector(".close-modal");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

// Function to update cart items count
function updateCart() {
  const cartCount = cart.length;
  cartIcon.setAttribute("data-items", cartCount);
}

// Function to show the cart modal
function showCart() {
  cartModal.style.display = "block";
  updateCartDisplay();
}

// Function to hide the cart modal
function hideCart() {
  cartModal.style.display = "none";
}

// Function to update cart items display
function updateCartDisplay() {
  cartItemsContainer.innerHTML = ""; // Clear existing items
  let total = 0;

  cart.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");
    itemDiv.innerHTML = `
      <p>${item.name} - $${item.price.toFixed(2)}</p>
      <span class="remove-item" data-index="${index}">&times;</span>
    `;
    cartItemsContainer.appendChild(itemDiv);
    total += item.price;
  });

  cartTotal.textContent = total.toFixed(2);

  // Attach event listeners to the remove icons
  document.querySelectorAll(".remove-item").forEach((button) => {
    button.addEventListener("click", (event) => {
      const itemIndex = parseInt(event.target.getAttribute("data-index"));
      removeFromCart(itemIndex);
    });
  });
}

// Function to handle adding items to the cart
function addToCart(item) {
  cart.push(item);
  updateCart();
}

// Function to remove an item from the cart
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
  updateCartDisplay();
}

// Attach event listener to the cart icon
cartIcon.addEventListener("click", showCart);

// Attach event listener to the close button in the cart modal
closeModal.addEventListener("click", hideCart);

// Attach event listener to close the cart if clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === cartModal) {
    hideCart();
  }
});

// Attach event listeners to the "Add to Cart" buttons
document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
  button.addEventListener("click", (event) => {
    const itemCard = event.target.closest(".item-card");
    const itemName = itemCard.querySelector(".item-name").textContent;
    const itemPrice = parseFloat(
      itemCard.querySelector(".item-price").textContent.replace("$", "")
    );
    addToCart({ name: itemName, price: itemPrice });
  });
});
