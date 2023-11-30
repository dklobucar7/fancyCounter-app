const counterEL = document.querySelector(".app__counter");
const btnPlus = document.querySelector(".plus__button");
const btnMinus = document.querySelector(".minus__button");
const nameEl = document.querySelector(".app__name");
const refreshEl = document.querySelector(".app__icon");

let count = 1;

btnPlus.addEventListener("click", function () {
  if (count < 5) {
    count = count + 1;
    counterEL.textContent = count;
  } else {
    nameEl.innerHTML =
      'LIMIT! BUY <br /><span class="u-bolder u-accent">PRO</span> FOR > 5';
  }
});

btnMinus.addEventListener("click", function () {
  if (count <= 0) {
    count = count;
  } else {
    count = count - 1;
    counterEL.textContent = count;
  }
});

refreshEl.addEventListener("click", function () {
  counterEL.textContent = "1";
  count = 1;
  nameEl.innerHTML = "Fancy <br />Counter";
});
