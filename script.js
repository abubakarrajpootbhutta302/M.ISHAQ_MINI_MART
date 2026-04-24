let cart = [];

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.querySelectorAll(".card button");

  buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      
      let product = btn.parentElement.querySelector("h3").innerText;

      cart.push(product);

      alert(product + " added to cart 🛒");

      console.log("Cart:", cart);
    });
  });
});
