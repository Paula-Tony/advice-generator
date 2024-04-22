let quote = document.querySelector(".advice-card__quote");
let quoteID = document.querySelector(".advice-card__heading span");
let btn = document.querySelector(".advice-card__btn");

function getAdviceFromApi() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      quoteID.textContent = data.slip.id;
      quote.textContent = data.slip.advice;
    });
}

btn.addEventListener("click", getAdviceFromApi);
