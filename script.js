let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
  openCart();
}

function updateCart() {
  document.getElementById("cartCount").textContent = cart.length;

  const items = document.getElementById("cartItems");
  items.innerHTML = "";

  let total = 0;

  cart.forEach((product, index) => {
    total += product.price;

    items.innerHTML += `
      <div class="cart-item">
        <strong>${product.name}</strong>
        <br>
        ${product.price} دج
        <br><br>
        <button onclick="removeItem(${index})">حذف</button>
      </div>
    `;
  });

  document.getElementById("total").textContent = total;
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

function openCart() {
  document.getElementById("cart").classList.add("open");
}

function closeCart() {
  document.getElementById("cart").classList.remove("open");
}

document.getElementById("cartBtn").addEventListener("click", openCart);
