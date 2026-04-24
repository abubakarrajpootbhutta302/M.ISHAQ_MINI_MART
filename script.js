let cart = [];

let buttons = document.querySelectorAll(".card button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {

    let product = btn.parentElement.querySelector("h3").innerText;

    cart.push(product);

    let list = document.getElementById("cartList");
    list.innerHTML = "";

    cart.forEach(item => {
      let li = document.createElement("li");
      li.innerText = item;
      list.appendChild(li);
    });

  });
});
