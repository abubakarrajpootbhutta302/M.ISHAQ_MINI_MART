document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.querySelectorAll("button");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Item added to cart 🛒");
    });
  });
});
