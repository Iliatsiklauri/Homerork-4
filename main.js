const button = document.querySelector("input");
const basicPrice = document.querySelector(".basic-price");
const professionalPrice = document.querySelector(".professional-price");
const masterPrice = document.querySelector(".master-price");
const basic = document.querySelector(".basic");
button.addEventListener("click", () => {
  if (basicPrice.innerHTML === "$19.99") {
    basicPrice.innerHTML = "$" + (basicPrice.innerHTML.slice(1) * 10 + 0.09).toFixed(2);
    professionalPrice.innerHTML =
      "$" + (professionalPrice.innerHTML.slice(1) * 10 + 0.09).toFixed(2);
    masterPrice.innerHTML = "$" + (masterPrice.innerHTML.slice(1) * 10 + 0.09).toFixed(2);
  } else {
    basicPrice.innerHTML = "$19.99";
    professionalPrice.innerHTML = "$24.99";
    masterPrice.innerHTML = "$39.99";
  }
});
