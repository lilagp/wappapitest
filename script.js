let cart = [];
let total = 0;

function addToCart(product, price) {
  cart.push({ product, price });
  total += price;
  renderCart();
}

function renderCart() {
  const cartElement = document.getElementById("cart");
  const totalElement = document.getElementById("total");
  cartElement.innerHTML = "";
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.product} - $${item.price}`;
    cartElement.appendChild(li);
  });
  totalElement.textContent = total.toFixed(2);
}

function sendToWhatsApp() {
  const cartSummary = cart
    .map((item) => `${item.product} - $${item.price}`)
    .join("\n");
  const totalPrice = total.toFixed(2);
  const message = `Shopping Cart:\n${cartSummary}\nTotal: $${totalPrice}`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://api.whatsapp.com/send?phone=+541134613528&text=${encodedMessage}`;
  window.open(whatsappURL, "_blank");
}
