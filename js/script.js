console.log("Cześć, miłego dnia");

let button = document.querySelector(".js-button");
let body = document.querySelector(".js-body");
let theme = document.querySelector(".js-theme");

button.addEventListener("click", () => {
  body.classList.toggle("body--dark");

  theme.innerText = body.classList.contains("body--dark")
    ? (button.innerText = "Tryb jasny")
    : (button.innerText = "Tryb ciemny");
});
