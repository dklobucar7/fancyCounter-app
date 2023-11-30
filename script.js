const counterEL = document.querySelector(".app__counter");
const btnPlus = document.querySelector(".plus__button");
const btnMinus = document.querySelector(".minus__button");
const nameEl = document.querySelector(".app__name");
const refreshEl = document.querySelector(".app__icon");
const btnPlusIconEl = document.querySelector(".plus__button__icon");
const btnMinusIconEl = document.querySelector(".minus__button__icon");

let count = 0;

btnPlus.addEventListener("click", function () {
  if (count < 5) {
    nameEl.innerHTML = "Fancy <br />Counter";
    count = count + 1;
    counterEL.textContent = count;

    // Clear the previous animation before applying a new one
    btnPlusIconEl.style.animation = "none";
    counterEL.style.animation = "none";

    // Trigger the animation
    void btnPlusIconEl.offsetWidth; // This line is used to force a reflow, enabling the animation to restart
    void counterEL.offsetWidth;
    btnPlusIconEl.style.animation = "make-bigger 0.5s";
    counterEL.style.animation = "make-bigger 0.5s";
  } else {
    nameEl.innerHTML =
      'LIMIT! BUY <br /><span class="u-bolder u-accent">PRO</span> FOR > 5';
  }
});

btnMinus.addEventListener("click", function () {
  if (count <= 0) {
    count = count;
  } else {
    nameEl.innerHTML = "Fancy <br />Counter";
    count = count - 1;
    counterEL.textContent = count;

    // Clear the previous animation before applying a new one
    btnMinusIconEl.style.animation = "none";
    counterEL.style.animation = "none";

    // Trigger the animation
    void btnMinusIconEl.offsetWidth; // This line is used to force a reflow, enabling the animation to restart
    void counterEL.offsetWidth;
    btnMinusIconEl.style.animation = "make-bigger 0.5s";
    counterEL.style.animation = "make-bigger 0.5s";
  }
});

refreshEl.addEventListener("click", function () {
  counterEL.textContent = "0";
  count = 0;
  nameEl.innerHTML = "Fancy <br />Counter";

  // Clear the previous animation before applying a new one
  refreshEl.style.animation = "none";

  // Trigger the animation
  void refreshEl.offsetWidth; // This line is used to force a reflow, enabling the animation to restart
  refreshEl.style.animation = "make-bigger 0.2s";
});
