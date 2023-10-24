{
  const onChangeBackgroundClick = () => {
    let body = document.documentElement;
    let theme = document.querySelector(".js-theme");
    body.classList.toggle("body--dark");
    theme.innerText = body.classList.contains("body--dark")
      ? "jasny"
      : "ciemny";
  };
  const init = () => {
    const button = document.querySelector(".js-button");
    button.addEventListener("click", onChangeBackgroundClick);
  };

  init();
}
